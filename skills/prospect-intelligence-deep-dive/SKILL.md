---
name: prospect-intelligence-deep-dive
description: Builds a deep profile on a prospect — background, role and priorities, company context, buying signals — and a recommended outreach angle. Use when the user asks to "do a deep dive on this prospect", "research this person before I reach out", "full profile on [name]", "what's the angle for this prospect".
license: MIT
compatibility: Requires web search; connected HubSpot account optional for relationship context. Read-only.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Strategic Steve, Marketing Meg
  rave: R4 A3 V3 E3
  category: hubspot
---

# Prospect Intelligence Deep-Dive

## What it does

A deeper-than-a-brief profile on a single prospect — who they are, what they likely care about, what's happening at their company, and the sharpest way to open — for outreach that earns a reply.

## When to use

- "Deep dive on [prospect]", "research this person before I reach out", "what's the angle here".

## Inputs

A prospect (name + company, or email/LinkedIn). Optional: the offer you're bringing.

## Workflow

1. **Profile the person:** role, seniority, tenure, likely priorities and KPIs, public activity (posts, talks) if available.
2. **Profile the company:** size, industry, recent news, funding, hiring, tech signals.
3. **Pull relationship context** from HubSpot if any (prior touches, related contacts).
4. **Detect buying signals:** triggers that make outreach timely (new role, funding, expansion, pain in the news).
5. **Recommend the angle:** the single best opener tied to a real signal, plus 2-3 talking points.
6. **Output** the dossier.

## Output

```
## [Name] — prospect intelligence
**Role:** [title, seniority, tenure] · **Priorities:** [inferred KPIs]
**Company:** [size · industry · recent signal]
**Buying signals:** [timely triggers]
**Recommended angle:** [opener tied to a signal]
**Talking points:** 1) … 2) … 3) …
```

## Notes

- Distinguish verified facts from inferences; never invent a quote or a personal detail.
- For thin public footprints, lean on company-level signals and say confidence is lower.
