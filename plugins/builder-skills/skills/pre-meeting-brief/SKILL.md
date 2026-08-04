---
name: pre-meeting-brief
description: Produces a one-page briefing before a sales or customer meeting by pulling the contact and company from HubSpot, recent engagements, and fresh web research. Use when the user says "prep me for my meeting", "brief me before my call with", "what should I know before my 2pm", or names an upcoming meeting, attendee, or company.
license: MIT
compatibility: Requires a connected HubSpot account and web search. Read-only.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Strategic Steve, Operator Owen
  rave: R4 A4 V4 E4
  category: hubspot
---

# Pre-Meeting Brief

## What it does

Turns a meeting (or a named attendee/company) into a two-minute briefing the user can read just before they walk in. No setup, no writes.

## When to use

- A calendar event is about to start, or the user references an upcoming meeting.
- Phrases: "prep me for my call with Acme", "brief me before my 2pm", "what do I need to know before this meeting".

## Inputs (keep it to one)

The meeting/calendar event, OR a contact email, OR a company name/domain. Infer the rest from HubSpot.

## Workflow

1. **Resolve the attendees.** Look up the contact(s) and their company in HubSpot. If only a company is given, pull the primary/most-engaged contacts.
2. **Read the relationship.** Get recent engagements (emails, calls, notes, meetings) and any open deals + current stage. Note the last touch and who owns it.
3. **Add outside context.** Run web research for recent company news, funding, leadership changes, and the contact's role/background. Prefer the last 90 days.
4. **Synthesize.** Write the brief using the template below. Lead with _why this meeting matters now_.
5. **Suggest a goal.** Propose one clear objective and 2-3 talking points tailored to the relationship and the news.

## Output

```
## [Company] — meeting brief
**Who:** [Name, title] · **Owner:** [rep] · **Last touch:** [date, channel]
**Deal:** [name, stage, amount] (or "no open deal")

### Why now
[1-2 sentences: the trigger or context that makes this timely]

### What's new
- [Recent news / signal with date]
- [Relevant engagement or change]

### Suggested goal for this meeting
[One sentence]

### Talking points
1. …
2. …
3. …

### Watch-outs
[Open questions, risks, or anything unresolved from the last touch]
```

## Notes

- If web research returns nothing recent, say so plainly rather than padding — a short honest brief beats a padded one.
- Handles the messy case (sparse HubSpot record) by leaning on web research, and the clean case (rich history) by leading with the relationship.
