---
name: lifecycle-stage-stagnation-scanner
description: Finds contacts stuck in a lifecycle stage past its SLA, clusters them by likely stall reason, and drafts an unblock play per cluster. Use when the user asks to "find stuck contacts", "who's stalled in lifecycle", "scan for lifecycle stagnation", "which leads are aging past SLA".
license: MIT
compatibility: Requires a connected HubSpot account. Read-only — drafts plays, no writes.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Marketing Meg, Operator Owen
  rave: R3 A4 V3 E3
  category: hubspot
---

# Lifecycle Stage Stagnation Scanner

## What it does

Catches contacts that have aged past the SLA for their lifecycle stage, groups them by why they're stuck, and gives marketing/ops a per-cluster unblock play — keeping the funnel flowing.

## When to use

- Recurring (weekly), or on request: "find stuck contacts", "lifecycle stagnation scan".

## Inputs

None required. Optional: per-stage SLA thresholds (defaults: MQL over 14d, SQL over 7d, Opportunity over 30d), owner, segment.

## Workflow

1. **Scan by stage** for contacts exceeding their stage SLA; capture time-in-stage.
2. **Cluster by stall reason** using engagement patterns: never-contacted, no-reply, low-engagement, awaiting-routing, owner-inactive.
3. **Quantify** each cluster (count, oldest, total value if deals attached).
4. **Draft an unblock play** per cluster — the specific action that moves that group (route, re-engage sequence, re-score, reassign).
5. **Output** the clustered report with plays, biggest cluster first.

## Output

```
## Lifecycle stagnation — [date]
**Stuck contacts:** [N] across [stages]

### Cluster: [reason] — [N] contacts (oldest [days]d)
Unblock play: [action]
Sample: [a few names/companies]

### Cluster: …
```

## Notes

- Clustering turns a scary list into a few fixable buckets — that's what makes it actionable.
- Read-only: it recommends the plays; a human runs them.
