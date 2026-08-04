# Installing Builder.org Plugins

Two ways in, depending on what you use. Every command below was tested against this repo before being written down.

## Which path is for you?

| You use | Path | You get |
|---|---|---|
| Claude Code | **Plugin marketplace** (below) | All 21 GTM skills + the agent.ai MCP server (51 typed tools + the 185-action catalog) |
| Cursor, Codex, or any agent that reads `SKILL.md` | **skills.sh CLI** (below) | The skills — the MCP server is Claude-plugin-only |

---

## Path 1 — Claude Code plugin marketplace

Inside any Claude Code session (or prefix each with `claude plugin` / `claude plugin marketplace` from your shell):

```
/plugin marketplace add OnStartups/builder-plugins
/plugin install builder-skills@builder-org
/plugin install agentai@builder-org
```

**For the `agentai` plugin, add your API key** to your shell profile (`~/.zshrc` or similar) and restart Claude Code:

```bash
export AGENTAI_API_KEY="your-key"
```

Get a key from your [agent.ai](https://agent.ai) account settings.

### Verify it worked

- Type `/` — the GTM skills (e.g. `/account-brief`, `/discovery-call-prep`) appear in the list.
- Ask Claude to *"grab the text of example.com with agent.ai"* — the `grab_web_text` tool should fire.

### Update / remove

```
/plugin marketplace update builder-org
/plugin uninstall builder-skills@builder-org
```

---

## Path 2 — skills.sh (any agent)

Install every skill into the current project:

```bash
npx skills add OnStartups/builder-plugins --skill '*'
```

Or browse and pick:

```bash
npx skills add OnStartups/builder-plugins --list
npx skills add OnStartups/builder-plugins --skill account-brief
```

Useful flags: `-a claude-code -a cursor` targets specific agents, `-g` installs globally instead of into the current project, `-y` skips prompts.

### Verify it worked

Skills land in your agent's skills directory (e.g. `./.claude/skills/<name>/` for Claude Code). Open one — each is a plain `SKILL.md` you can read before use.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| Marketplace add fails | Older Claude Code versions may not support GitHub shorthand — use the full URL: `/plugin marketplace add https://github.com/OnStartups/builder-plugins` |
| agent.ai tools missing or erroring | `AGENTAI_API_KEY` isn't set in the environment Claude Code launched from. Set it, restart the session. |
| A skill looks stale | `/plugin marketplace update builder-org` (marketplace) or re-run `npx skills add` (skills.sh) — installs are copies, not links. |
| You had a pre-release `builder-org-*` plugin installed | Those names are retired. `claude plugin uninstall <name>@builder-org`, then install `builder-skills` / `agentai` per Path 1. |

## Other platforms

### Cursor / Codex / any SKILL.md agent

Skills install via Path 2 above — target the agent explicitly:

```bash
npx skills add OnStartups/builder-plugins --skill '*' -a cursor
```

(Verified: skills land in `.agents/skills/`, the cross-agent location Cursor reads.)

For the agent.ai tools in Cursor, add the **official agent.ai remote MCP server** to `.cursor/mcp.json` — it OAuths on connect:

```json
{ "mcpServers": { "agentai": { "url": "https://mcp.agent.ai/mcp" } } }
```

Prefer running locally? The plugin's server is one self-contained Node file — download [`plugins/agentai/server/dist/index.js`](./plugins/agentai/server/dist/index.js) and use `"command": "node", "args": ["/path/to/index.js"], "env": {"AGENTAI_API_KEY": "…"}` instead.

### ChatGPT

ChatGPT can't run local servers or read SKILL.md, but it supports remote MCP connectors: **Settings → Connectors → Add → `https://mcp.agent.ai/mcp`** and sign in when prompted. That's agent.ai's official hosted server — same actions, OAuth instead of an API key. The GTM skills themselves have no ChatGPT equivalent; paste a skill's `SKILL.md` into a Custom GPT's instructions if you need one there.

---

Tested 2026-08-04: marketplace add + both plugin installs from this repo (Claude Code CLI), `npx skills add` single-skill and `--skill '*'` (22/22), update + uninstall round-trip.
