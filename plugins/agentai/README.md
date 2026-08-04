# agentai

agent.ai public Actions API as a Claude Code MCP plugin.

## Layout

- `server/` — stdio MCP server (Bun + `@modelcontextprotocol/sdk` + zod). Standalone: `bun install && bun start` works from this directory; Bun auto-install covers it when launched from the plugin cache.
- `data/action-catalog.json` — bundled copy of the 185-entry action catalog (source: `packages/agent/src/legacy/action-catalog.json`).
- `data/public-functions.json` — the 177 public API function schemas, fetched from `GET https://api-lr.agent.ai/api/v2/mcp/functions` (the same source the official `@agentai/mcp-server` uses). Refresh:

  ```bash
  curl -s -H "Authorization: Bearer $AGENTAI_API_KEY" https://api-lr.agent.ai/api/v2/mcp/functions \
    | bun -e 'const d=await new Response(Bun.stdin.stream()).json();d.sort((a,b)=>a.name.localeCompare(b.name));await Bun.write("data/public-functions.json",JSON.stringify(d,null,2)+"\n")'
  ```

- `references/actions-by-category.md` — generated: `bun run scripts/generate-references.ts`.
- `skills/agentai/SKILL.md` — usage guidance.

## Auth

`AGENTAI_API_KEY` must be set in the environment before Claude Code starts. Keys: [agent.ai/user/settings#credits](https://agent.ai/user/settings#credits). Optional `AGENTAI_API_BASE` overrides `https://api-lr.agent.ai`.

## Tool surface

51 typed tools (one per general-purpose public endpoint) + `invoke_action` / `list_actions` / `describe_action` for the remaining catalog (agent packs, HubSpot v2, etc.). Endpoint naming rule for `invoke_action`: catalog type with `/actions/` dropped and `/` joined by `_` (`company_research_v2/actions/start_research` → `company_research_v2_start_research`); dots preserved (`hubspot.v2.search_objects`).
