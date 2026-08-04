---
name: meeting-follow-up-coach
description: Turns a call or meeting transcript into a summary, action items, suggested CRM updates, and a ready-to-send follow-up email. Use when the user shares a transcript or notes, or asks to "summarize this call", "write my follow-up", "what are the next steps from this meeting", "log this call".
license: MIT
compatibility: Requires meeting notes or a transcript; connected HubSpot account optional. Drafts and proposes CRM updates — does not write silently.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Operator Owen, Strategic Steve
  rave: R4 A4 V3 E4
  category: hubspot
---

# Meeting Follow-Up Coach

## What it does

After a call, it does the busywork: a tight summary, the action items, the CRM updates worth making, and a follow-up email — so nothing is lost and the next step is clear.

## When to use

- Right after a meeting, when a transcript or notes are available: "summarize this call and write the follow-up".

## Inputs

A transcript or meeting notes. Optionally the related contact/deal for context.

## Workflow

1. **Summarize** the meeting in 4-6 bullets: what was discussed, decisions, and sentiment.
2. **Extract action items** with owners and (if stated) due dates. Separate "ours" from "theirs".
3. **Capture deal-relevant signals:** stated needs, objections, budget/timeline cues, next-step agreed.
4. **Propose CRM updates** — a note/engagement to log, stage change if warranted, follow-up task — for confirmation, not auto-write.
5. **Draft the follow-up email** that restates value, confirms next steps, and makes one clear ask.

## Output

```
## [Meeting] — follow-up
### Summary
- …
### Action items
- [Owner] [action] — [due]
### Signals for the deal
- [need / objection / next step]
### Suggested CRM updates (confirm)
- Log note · [stage change?] · Task: [next step]
### Follow-up email
**Subject:** …
[body]
```

## Notes

- The Validated risk is transcript quality. With a messy/partial transcript, summarize what's supported and flag gaps — don't fabricate decisions or commitments.
- CRM writes are proposed and confirmed, never automatic.
