---
name: customer-follow-up-tracker
description: Surfaces the contacts and customers who need a follow-up today by scanning HubSpot for overdue tasks, gone-quiet relationships, and post-meeting threads with no next step. Use when the user asks "who needs follow-up today", "what am I forgetting to follow up on", "show me dropped balls", or runs a daily follow-up check.
license: MIT
compatibility: Requires a connected HubSpot account. Read-only.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Operator Owen
  rave: R4 A4 V4 E3
  category: hubspot
---

# Customer Follow-Up Tracker

## What it does

A daily, prioritized list of who needs a touch today — so nothing slips. Read-only; it tells the user what to do, it doesn't message anyone.

## When to use

- Daily, or on request: "who needs follow-up today", "did I drop any balls this week".

## Inputs

None required. Optionally scope to an owner, list, or segment.

## Workflow

1. **Gather candidates** from three sources:
   - Overdue or due-today tasks assigned to the user.
   - Open deals or active contacts with no engagement in N days (default 7 for deals, 14 for contacts).
   - Recent meetings/calls with no follow-up logged afterward.
2. **De-duplicate** by contact/company so each person appears once with the strongest reason.
3. **Prioritize** by urgency: open deal value + stage, days since last touch, and explicit task due dates.
4. **Suggest the next touch** for each — a one-line "what to do" (reply, schedule, send X), not a full draft.
5. **Output** the ranked list. Cap at ~10 so it stays actionable.

## Output

```
## Follow-ups for [date]
1. **[Name, Company]** — [reason, e.g. "no reply in 9 days; deal in Proposal"]
   → Suggested: [next touch]
2. …
```

## Notes

- "Drives the next action" is the point — every row ends in a concrete suggestion.
- If nothing needs follow-up, say so. A clean day is a valid, trustworthy result.
