---
name: deal-stage-nudges
description: Finds HubSpot deals that have sat too long in their current stage and generates a specific nudge with a recommended next action for each. Use when the user asks "which deals are stuck", "what's aging in pipeline", "nudge me on stalled stages", or runs a recurring deal-hygiene check.
license: MIT
compatibility: Requires a connected HubSpot account. Read-only — drafts nudges, no writes.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Operator Owen
  rave: R3 A4 V4 E4
  category: hubspot
---

# Deal Stage Nudges

## What it does

Spots deals lingering past a healthy time-in-stage and hands the rep a concrete next action for each — keeping the pipeline moving without a manual review.

## When to use

- Recurring (daily/weekly), or on request: "which deals are stuck", "what's aging in stage".

## Inputs

None required. Optional: per-stage day thresholds, owner, pipeline.

## Workflow

1. **Pull open deals** with current stage and days-in-stage.
2. **Apply thresholds.** Default cues: early stages 7-10 days, mid 14, late 21. Flag anything over its stage's threshold.
3. **Read why it's stuck.** Glance at recent engagements to infer the blocker (no reply, awaiting proposal, gone quiet, multi-thread gap).
4. **Recommend the next action** per deal — the single best move, with a one-line rationale.
5. **Output** a ranked nudge list (most overdue / highest value first).

## Output

```
## Stage nudges
1. **[Deal] — $[amount]** · [stage], [days] days idle
   Likely blocker: [inference]
   → Next: [recommended action]
2. …
```

## Notes

- Rules-based detection keeps this reliable across the 80% case; the LLM only reasons about the _why_ and the _next move_.
- Read-only: it nudges, it doesn't move deals.
