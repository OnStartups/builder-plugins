---
name: weekly-pipeline-digest
description: Generates a weekly pipeline digest from HubSpot deals — what moved, what stalled, and the top deals to push this week — formatted for email or a Monday standup. Use when the user asks for a "pipeline digest", "Monday pipeline brief", "what changed in pipeline this week", or sets up a recurring weekly pipeline summary.
license: MIT
compatibility: Requires a connected HubSpot account. Read-only.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Operator Owen, Strategic Steve
  rave: R4 A4 V4 E4
  category: hubspot
---

# Weekly Pipeline Digest

## What it does

A read-only Monday-morning digest of the open pipeline: totals, movement, stalls, and a short "push list" — so the user is caught up before the team standup.

## When to use

- A scheduled weekly run, or on request: "give me the pipeline digest", "what moved in pipeline this week".

## Inputs

None required. Optionally a pipeline name, owner, or segment to scope it.

## Workflow

1. **Snapshot now.** Search open deals; capture totals (count, value), per-stage counts/value, and each deal's stage + days-in-stage.
2. **Compare to last week.** Retrieve the prior weekly snapshot if one exists; compute deltas (pipeline value, new deals, deals advanced, deals slipped). On the first run, state there's no prior baseline and skip deltas.
3. **Flag stalls.** Mark deals stuck 14+ days in stage with an SLA cue.
4. **Build the push list.** Pick the top 3 deals to act on this week (closest to close, highest value, or most at-risk) with a one-line reason each.
5. **Write the digest** using the template. Keep it skimmable.
6. **Persist the snapshot** for next week's comparison (store the compact totals + per-stage map only).

## Output

```
## Pipeline digest — week of [date]
**Open pipeline:** $[X] across [N] deals  ([+/- vs last week])
**New this week:** [N] · **Advanced:** [N] · **Slipped:** [N]

### Stalled (14+ days in stage)
- [Deal] — [stage], [days] days idle

### Top 3 to push this week
1. [Deal] — [why]
2. …
3. …
```

## Notes

- Read-only by design: it reports, it doesn't change deals.
- Reliable across the 80% case because it works on aggregate + stage data, not fragile per-field parsing.
