# builder-skills

The 21 Builder.org GTM platform skills, packaged as a Claude Code plugin.

`platform-skills/` at the repo root is the source of truth. The copies under
`skills/` here are generated — do not edit them directly.

## Sync

Re-copy `platform-skills/` into this plugin after any skill change:

```bash
bun run scripts/sync-plugin-skills.ts
```

Run from the repo root. The script removes stale skill directories and mirrors
every `platform-skills/<slug>/` that contains a `SKILL.md`.

## Install

```
/plugin marketplace add OnStartups/agent_ai
/plugin install builder-skills@builder-org
```
