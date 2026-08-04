# Builder.org Plugins for Claude Code

GTM platform skills and the agent.ai Actions API, installable into [Claude Code](https://claude.com/claude-code) in under a minute.

## Install

```
/plugin marketplace add OnStartups/builder-plugins
/plugin install builder-skills@builder-org
/plugin install agentai@builder-org
```

## What's inside

### builder-skills — Builder.org GTM Skills

21 go-to-market skills: account briefs, prospect research and intelligence deep-dives, cold email and follow-up sequence writing, discovery call prep, meeting prep and follow-up, pipeline digests, deal-stage nudges, stalled-deal revival, win/loss recaps, NPS response handling, and more. Invoke any of them with `/` (e.g. `/account-brief`).

### agentai — agent.ai Actions

The [agent.ai](https://agent.ai) public API as native Claude tools: 51 typed endpoints (web scraping and text extraction, search, company/social/financial data, LLM and image generation, agent discovery and invocation) plus `list_actions` / `describe_action` / `invoke_action` over the full 185-action catalog.

Requires an agent.ai API key in your environment before launching Claude Code:

```bash
export AGENTAI_API_KEY="your-key"
```

Get a key from your [agent.ai](https://agent.ai) account settings.

## Updating

```
/plugin marketplace update builder-org
```

---

This repository is a generated mirror — the source of truth lives in a private monorepo and syncs here automatically. Issues are welcome; pull requests against the generated tree will be overwritten by the next sync.
