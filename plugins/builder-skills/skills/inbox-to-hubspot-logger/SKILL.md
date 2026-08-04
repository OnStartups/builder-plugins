---
name: inbox-to-hubspot-logger
description: Matches an email thread to the right HubSpot contact and deal, then produces a structured engagement log entry for the user to confirm — ending manual call/email logging. Use when the user shares an email thread or asks to "log this to HubSpot", "match this email to the right deal", "capture this thread in the CRM".
license: MIT
compatibility: Requires a connected HubSpot account and the email thread. Read-first — proposes the log entry, does not write silently.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Operator Owen
  rave: R3 A4 V2 E4
  category: hubspot
---

# Inbox to HubSpot Logger

## What it does

Takes an email thread, figures out which contact and deal it belongs to, and writes a clean engagement log entry — so the CRM stays current without manual data entry.

## When to use

- "Log this email to HubSpot", "match this thread to the right record", "capture this in the CRM".

## Inputs

The email thread (sender, recipients, subject, body). Optional: a hint about the deal/company.

## Workflow

1. **Identify participants** from the thread (addresses, signatures, domains).
2. **Match to HubSpot:** find the contact by email; find the associated company and the most likely open deal (by recency/activity). If ambiguous, present the top candidates rather than guessing.
3. **Summarize the thread** into a log-worthy note: what was discussed, decisions, and any next step.
4. **Detect a next step / task** if the thread implies one.
5. **Propose the log entry** (record, engagement type, summary, task) for the user to confirm before writing.

## Output

```
## Proposed HubSpot log
**Match:** [Contact] · [Company] · [Deal — confidence: high/med/low]
**Engagement:** Email — [date]
**Summary:** […]
**Suggested task:** [next step + date] (optional)

_Confirm to log, or pick a different record:_ [alternatives if ambiguous]
```

## Notes

- The Validated risk is matching accuracy. When confidence is low or multiple records fit, surface the alternatives and ask — don't auto-log to the wrong deal.
- Read-first: the entry is written only after the user confirms.
