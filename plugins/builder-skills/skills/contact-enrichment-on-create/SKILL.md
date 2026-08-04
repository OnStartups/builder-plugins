---
name: contact-enrichment-on-create
description: Enriches a newly created HubSpot contact with role, seniority, company context, and social/professional background, returned as a display card for the rep to review. Use when a new contact is created, or the user asks to "enrich this contact", "who is this lead", "fill in the gaps on this person".
license: MIT
compatibility: Requires a connected HubSpot account and web/Breeze enrichment. Read-first — proposes, does not write.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Operator Owen
  rave: R4 A3 V4 E4
  category: hubspot
---

# Contact Enrichment on Create

## What it does

When a contact lands in HubSpot, it fills in who they are — role, seniority, company, and relevant background — so the rep knows the lead before replying. Displays the result; never writes silently.

## When to use

- Triggered on contact-create, or on request: "enrich this contact", "who just came in".

## Inputs

A contact email or record ID.

## Workflow

1. **Read what's there.** Pull the existing contact + associated company from HubSpot.
2. **Enrich the person.** Resolve title, seniority, and likely role via Breeze/web; find a LinkedIn/professional profile and a recent activity signal if available.
3. **Enrich the company.** Size, industry, region, and one recent news item.
4. **Assess fit.** A quick ICP read (fit / partial / unclear) with the reason.
5. **Return a display card.** Present enriched fields plus a "Save to HubSpot" suggestion the user can confirm — do not write automatically.

## Output

```
## [Name] — enrichment
**Role:** [title, seniority]  ·  **Fit:** [fit/partial/unclear — reason]
**Company:** [name · industry · size · region]
**Signal:** [recent activity or company news]
**Profile:** [link if found]

_Suggested HubSpot updates (confirm to apply):_ [field: value, …]
```

## Notes

- Read-first: enrichment is shown for review; writing back is an explicit, confirmed step.
- If a field can't be verified, leave it blank and mark it — never guess seniority or title.
