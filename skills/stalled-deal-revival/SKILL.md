---
name: stalled-deal-revival
description: Finds open HubSpot deals that have gone idle, diagnoses the likely stall reason from engagement history, and drafts a tailored next move to revive each one. Use when the user asks to "revive stalled deals", "which deals went quiet", "what's gone cold", "re-engage my dead deals".
license: MIT
compatibility: Requires a connected HubSpot account. Read-only — drafts outreach, no writes.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Strategic Steve, Operator Owen
  rave: R4 A4 V3 E3
  category: hubspot
---

# Stalled Deal Revival

## What it does

Catches deals that have quietly gone idle, works out _why_ from the history, and hands the rep a specific revival move per deal — protecting revenue that would otherwise slip.

## When to use

- Recurring or on request: "revive stalled deals", "what went cold this month".

## Inputs

None required. Optional: idle-day threshold (default 10), owner, pipeline, minimum deal value.

## Workflow

1. **Find idle deals** — open deals with no engagement in 10+ days. Sort by value × stage proximity to close.
2. **Diagnose the stall** from the last few engagements: no reply, lost champion, pricing stall, went dark after demo, internal delay.
3. **Pick the revival play** matched to the diagnosis (new value angle, multi-thread to a second contact, breakup email, share proof).
4. **Draft the outreach** for each — short and specific to why it stalled.
5. **Output** a ranked revival list with diagnosis + draft.

## Output

```
## Stalled deal revival
1. **[Deal] — $[amount]** · [stage], idle [days] days
   Diagnosis: [reason]
   Play: [revival move]
   Draft:
   **Subject:** …
   [body]
2. …
```

## Notes

- Diagnosis is an inference — phrase it as a best guess and let the rep confirm.
- Read-only; the rep sends and updates.
