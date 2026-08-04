---
name: agentai
description: Call the agent.ai public Actions API through the agentai MCP tools — web scraping, search, LinkedIn/Twitter/Instagram/Bluesky data, company and person enrichment, LLM/image/audio generation, agent discovery and invocation, plus 170+ catalog actions via invoke_action. Use when the user wants agent.ai data or actions, mentions agent.ai, or needs enrichment/social/scraping capabilities this environment lacks natively.
license: MIT
metadata:
  author: Builder.org
  version: 1.0.0
---

# agent.ai Actions

## What this plugin provides

An MCP server exposing the agent.ai public Actions API (`POST https://api-lr.agent.ai/v1/action/<name>`, Bearer auth):

- **51 typed tools** for the general-purpose endpoints — `grab_web_text`, `get_search_results`, `get_google_news`, `get_linkedin_profile`, `get_company_object`, `enrich_person`, `invoke_llm`, `generate_image`, `invoke_agent`, `rest_call`, `describe_agent`, `search` (agent discovery), and the rest of the data-retrieval / social / business-data / outputs / workflow set.
- **`list_actions`** `{category?}` — browse the full 185-action catalog (29 categories); marks Builder-UI-only actions.
- **`describe_action`** `{action_type}` — label, category, inputs, endpoint, and full input JSON schema.
- **`invoke_action`** `{action_type, inputs, output_variable_name?}` — call ANY public action, including the agent-pack pipelines (Company Research v2, Meeting Prep, Prospect Research, Content Marketing Team, HubSpot v2, ...) that don't have a dedicated typed tool.

## Setup

Requires `AGENTAI_API_KEY` in the environment before Claude Code starts. Get a key at [agent.ai/user/settings#credits](https://agent.ai/user/settings#credits). Calls consume agent.ai credits.

## Workflow

1. **Prefer the typed tool** when one exists — schemas are exact (enums, required fields).
2. For anything else: `list_actions` (optionally by category) → `describe_action` to get the input schema → `invoke_action`.
3. `output_variable_name` is optional everywhere; the server defaults it when the API requires one.
4. Agent-pack pipelines: use the `run_full_*` / `*_run_optimized_pipeline` orchestrated action for one-shot results; use granular step actions only when branching or caching intermediate stages.
5. To run a published agent: `search` to find it, `describe_agent` for its inputs/outputs, then `invoke_agent` with `{id, input}`.

## Notes

- Actions marked Builder-UI only (input capture, control flow, Google Doc/Sheet outputs, Generative UI) cannot be called via the API; `invoke_action` rejects them with an explanation.
- Full catalog reference: `references/actions-by-category.md` in this plugin.
- Errors surface as tool errors with the API's message; a 4xx usually means a missing/invalid input or insufficient credits.
