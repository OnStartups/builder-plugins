---
name: follow-up-email-sequence-writer
description: Drafts a personalized multi-touch follow-up email sequence for a contact or deal, grounded in the prior HubSpot engagements so each touch builds on the last. Use when the user asks to "write a follow-up sequence", "draft follow-up emails for this deal", "nurture this contact", or "what should I send next".
license: MIT
compatibility: Requires a connected HubSpot account. Drafts only — does not send.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Strategic Steve, Marketing Meg
  rave: R4 A4 V4 E3
  category: hubspot
---

# Follow-Up Email Sequence Writer

## What it does

Generates a ready-to-paste 3-5 touch follow-up sequence tailored to where the relationship actually stands — not generic templates.

## When to use

- "Write a follow-up sequence for [contact/deal]", "draft my next 3 emails", "what do I send next".

## Inputs (one is enough)

A contact email or a deal/company name. Optionally: the goal (book a meeting, revive, close), tone, and number of touches.

## Workflow

1. **Pull context.** Look up the contact + company and read recent engagements: last message, what was discussed, any objection or open question, deal stage.
2. **Set the arc.** Choose a cadence and a job for each touch (e.g., value-add → social proof → soft ask → breakup). Default to 4 touches over ~2 weeks.
3. **Write each email.** Short, specific, one ask. Reference the real last interaction in touch 1. Vary the angle across touches; avoid repeating the same CTA verbatim.
4. **Add subject lines** (1-2 options each) and suggested send-day spacing.
5. **Output** the sequence, paste-ready.

## Output

```
### Touch 1 — Day 0 — [purpose]
**Subject:** [option A] / [option B]
[body]

### Touch 2 — Day 4 — [purpose]
…
```

## Notes

- If there's no prior engagement, write a first-touch sequence and say it's cold.
- Keep each email under ~120 words — these get read on phones.
- Drafts only; the user sends from their tool of choice.
