import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { CORE_TOOLS } from "./core-tools";
import { toZodShape } from "./schema";
import type { ActionCatalog, PublicFunction } from "./types";
import catalogJson from "../data/action-catalog.json";
import publicFunctionsJson from "../data/public-functions.json";

const catalog = catalogJson as unknown as ActionCatalog;
const publicFunctions = publicFunctionsJson as unknown as PublicFunction[];

const functionsByName = new Map(publicFunctions.map((fn) => [fn.name, fn]));
const apiBase = process.env.AGENTAI_API_BASE ?? "https://api-lr.agent.ai";

function endpointFor(actionType: string): string {
  if (!actionType.includes("/")) return actionType;
  return actionType.replace("/actions/", "/").replaceAll("/", "_");
}

function requireApiKey(): string {
  const key = process.env.AGENTAI_API_KEY;
  if (!key) {
    throw new Error(
      "AGENTAI_API_KEY is not set. Get a key at https://agent.ai/user/settings#credits and export AGENTAI_API_KEY before starting Claude Code.",
    );
  }
  return key;
}

interface ActionResponse {
  response?: unknown;
  output_var?: string;
  status?: number;
  error?: string | null;
  metadata?: unknown;
}

async function callAction(endpoint: string, body: Record<string, unknown>) {
  const key = requireApiKey();
  const clean: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(body)) {
    if (v !== undefined) clean[k] = v;
  }
  const fn = functionsByName.get(endpoint);
  if (
    fn?.parameters?.required?.includes("output_variable_name") &&
    clean["output_variable_name"] === undefined
  ) {
    clean["output_variable_name"] = "response";
  }
  const res = await fetch(`${apiBase}/v1/action/${endpoint}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(clean),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`agent.ai action "${endpoint}" failed (${res.status}): ${text}`);
  }
  const data = (await res.json()) as ActionResponse;
  if (data.error) {
    throw new Error(`agent.ai action "${endpoint}": ${data.error}`);
  }
  const payload = data.response !== undefined ? data.response : data;
  return typeof payload === "string" ? payload : JSON.stringify(payload, null, 2);
}

function textResult(text: string) {
  return { content: [{ type: "text" as const, text }] };
}

function errorResult(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  return { content: [{ type: "text" as const, text: message }], isError: true };
}

const server = new McpServer({ name: "agentai", version: "1.0.0" });

for (const name of CORE_TOOLS) {
  const fn = functionsByName.get(name);
  if (!fn) continue;
  server.tool(
    name,
    fn.description ?? `agent.ai action ${name} (POST ${apiBase}/v1/action/${name})`,
    toZodShape(fn),
    async (args) => {
      try {
        return textResult(await callAction(name, args as Record<string, unknown>));
      } catch (error) {
        return errorResult(error);
      }
    },
  );
}

const categories = [...new Set(Object.values(catalog).map((entry) => entry.category))].sort();

server.tool(
  "list_actions",
  `List the agent.ai action catalog (${Object.keys(catalog).length} actions across ${categories.length} categories). Optionally filter by category. Marks which actions are callable via the public API vs Builder-UI only.`,
  {
    category: z
      .string()
      .optional()
      .describe(`One of: ${categories.join(", ")}`),
  },
  async ({ category }) => {
    const rows = Object.entries(catalog)
      .filter(([, entry]) => !category || entry.category.toLowerCase() === category.toLowerCase())
      .map(([type, entry]) => {
        const endpoint = endpointFor(type);
        const api = functionsByName.has(endpoint)
          ? `POST /v1/action/${endpoint}`
          : "Builder-UI only";
        return `${type} — ${entry.label} [${entry.category}] (${api})`;
      })
      .sort();
    if (rows.length === 0) {
      return errorResult(
        `No actions match category "${category}". Categories: ${categories.join(", ")}`,
      );
    }
    return textResult(rows.join("\n"));
  },
);

server.tool(
  "describe_action",
  "Describe one agent.ai action: label, category, inputs, API endpoint, and the full input JSON schema when the action is exposed on the public API.",
  {
    action_type: z
      .string()
      .describe("Catalog action type or API endpoint name, e.g. grab_web_text"),
  },
  async ({ action_type }) => {
    const entry = catalog[action_type];
    const endpoint = endpointFor(action_type);
    const fn = functionsByName.get(endpoint) ?? functionsByName.get(action_type);
    if (!entry && !fn) {
      return errorResult(
        `Unknown action "${action_type}". Use list_actions to browse the catalog.`,
      );
    }
    const description = {
      action_type,
      label: entry?.label,
      category: entry?.category,
      catalog_inputs: entry?.inputs,
      api: fn ? `POST ${apiBase}/v1/action/${fn.name}` : "Builder-UI only",
      input_schema: fn?.parameters,
    };
    return textResult(JSON.stringify(description, null, 2));
  },
);

server.tool(
  "invoke_action",
  "Invoke any public agent.ai action by its catalog type or endpoint name. Validates inputs against the bundled catalog/schema, then POSTs to /v1/action/{action_type}. Use list_actions and describe_action first to discover inputs.",
  {
    action_type: z.string().describe("Catalog action type or API endpoint name"),
    inputs: z
      .record(z.string(), z.unknown())
      .default({})
      .describe("Action inputs keyed by field name (see describe_action)"),
    output_variable_name: z.string().optional(),
  },
  async ({ action_type, inputs, output_variable_name }) => {
    const endpoint = endpointFor(action_type);
    const fn = functionsByName.get(endpoint) ?? functionsByName.get(action_type);
    const entry = catalog[action_type];
    if (!fn && !entry) {
      return errorResult(
        `Unknown action "${action_type}". Use list_actions to browse the catalog.`,
      );
    }
    if (!fn) {
      return errorResult(
        `"${action_type}" (${entry?.label ?? action_type}) is Builder-UI only and has no public API endpoint.`,
      );
    }
    const properties = fn.parameters?.properties ?? {};
    const known = new Set(Object.keys(properties));
    const unknown = Object.keys(inputs).filter((key) => known.size > 0 && !known.has(key));
    if (unknown.length > 0) {
      return errorResult(
        `Unknown input(s) for "${fn.name}": ${unknown.join(", ")}. Valid inputs: ${[...known].join(", ")}`,
      );
    }
    const missing = (fn.parameters?.required ?? []).filter(
      (key) => key !== "output_variable_name" && inputs[key] === undefined,
    );
    if (missing.length > 0) {
      return errorResult(`Missing required input(s) for "${fn.name}": ${missing.join(", ")}`);
    }
    try {
      const body: Record<string, unknown> = { ...inputs };
      if (output_variable_name !== undefined) body["output_variable_name"] = output_variable_name;
      return textResult(await callAction(fn.name, body));
    } catch (error) {
      return errorResult(error);
    }
  },
);

const transport = new StdioServerTransport();
await server.connect(transport);
console.error(
  `agentai MCP server ready (${CORE_TOOLS.length} typed tools + catalog tools) on stdio`,
);
