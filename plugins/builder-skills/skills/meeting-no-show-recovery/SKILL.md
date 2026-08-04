---
name: meeting-no-show-recovery
description: Finds meetings that happened with no follow-up logged (likely no-shows or dropped threads) and drafts a recovery email with a reschedule offer plus a follow-up task. Use when the user asks to "recover no-shows", "who ghosted my meetings", "draft reschedule emails", "clean up missed meetings".
license: MIT
compatibility: Requires a connected HubSpot account (and calendar where available). Read-only — drafts recovery, no writes.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Strategic Steve, Operator Owen
  rave: R4 A4 V3 E3
  category: hubspot
---

# Meeting No-Show Recovery

## What it does

Catches meetings that came and went with no follow-up — the quiet no-shows — and drafts a graceful recovery so they get rebooked instead of forgotten.

## When to use

- Recurring or on request: "recover my no-shows", "who didn't show and wasn't followed up".

## Inputs

None required. Optional: lookback window (default meetings 24h-14d old).

## Workflow

1. **Find candidates:** meetings older than 24h with no call log, note, or follow-up engagement recorded after them.
2. **Confirm the gap** isn't already handled (skip if a later touch exists).
3. **Draft a recovery email** per contact — warm, no guilt, with a one-click reschedule offer and a brief reason to re-engage.
4. **Suggest a follow-up task** (date + reminder) for each.
5. **Output** the recovery list with drafts.

## Output

```
## No-show recovery
1. **[Name, Company]** — meeting [date], no follow-up logged
   Draft:
   **Subject:** [e.g. "Sorry we missed each other"]
   [body with reschedule offer]
   Suggested task: [follow up on date]
2. …
```

## Notes

- Tone matters: assume a busy calendar, not a snub. Keep it light and easy to say yes to.
- Read-only; the rep sends and sets the task.
