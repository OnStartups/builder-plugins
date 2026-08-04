import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { ActionCatalog, PublicFunction } from "../server/types";

const pluginRoot = join(import.meta.dir, "..");
const catalog = JSON.parse(
  readFileSync(join(pluginRoot, "data", "action-catalog.json"), "utf8"),
) as ActionCatalog;
const publicFunctions = JSON.parse(
  readFileSync(join(pluginRoot, "data", "public-functions.json"), "utf8"),
) as PublicFunction[];

const functionNames = new Set(publicFunctions.map((fn) => fn.name));

function endpointFor(actionType: string): string {
  if (!actionType.includes("/")) return actionType;
  return actionType.replace("/actions/", "/").replaceAll("/", "_");
}

const byCategory = new Map<string, [string, ActionCatalog[string]][]>();
for (const [type, entry] of Object.entries(catalog)) {
  const list = byCategory.get(entry.category) ?? [];
  list.push([type, entry]);
  byCategory.set(entry.category, list);
}

const lines: string[] = [
  "# agent.ai actions by category",
  "",
  `Generated from the bundled action catalog (${Object.keys(catalog).length} actions, ${byCategory.size} categories).`,
  "Regenerate with `bun run scripts/generate-references.ts` from the plugin root.",
  "",
  "API endpoint = `POST https://api-lr.agent.ai/v1/action/<endpoint>` with `Authorization: Bearer $AGENTAI_API_KEY`.",
  "Actions marked _Builder-UI only_ have no public endpoint and cannot be invoked via this plugin.",
  "",
];

for (const category of [...byCategory.keys()].sort()) {
  const entries = byCategory.get(category) ?? [];
  lines.push(`## ${category}`, "");
  lines.push("| Action | Type | Endpoint | Inputs |");
  lines.push("| --- | --- | --- | --- |");
  for (const [type, entry] of entries.sort((a, b) => a[1].label.localeCompare(b[1].label))) {
    const endpoint = endpointFor(type);
    const api = functionNames.has(endpoint) ? `\`/v1/action/${endpoint}\`` : "_Builder-UI only_";
    lines.push(
      `| ${entry.label} | \`${type}\` | ${api} | ${entry.inputs.map((i) => `\`${i}\``).join(", ")} |`,
    );
  }
  lines.push("");
}

writeFileSync(join(pluginRoot, "references", "actions-by-category.md"), lines.join("\n"));
console.log(`Wrote actions-by-category.md (${byCategory.size} categories)`);
