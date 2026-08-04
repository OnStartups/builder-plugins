---
name: account-brief
description: Builds a one-screen account briefing for a company by combining HubSpot firmographics, deal and engagement history, key contacts, and recent web research into a recommended angle. Use when the user asks for an "account brief", "brief me on this company", "what's the story on Acme", or prep for a QBR or ABM outreach.
license: MIT
compatibility: Requires a connected HubSpot account and web search. Read-only.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Strategic Steve, Marketing Meg
  rave: R4 A4 V4 E3
  category: hubspot
---

# Account Brief

## What it does

A single-screen briefing on a company — who they are, where the relationship stands, what's new, and the recommended angle — usable before outreach, an ABM push, or a QBR.

## When to use

- "Brief me on [company]", "account brief for Acme", "prep me for the QBR with [company]".

## Inputs

A company name or domain. Everything else is inferred from HubSpot + web.

## Workflow

1. **Resolve the company** in HubSpot; pull firmographics (size, industry, region) and enrich gaps from the web/Breeze.
2. **Map the relationship.** Key contacts and roles, open + past deals with stages/outcomes, recent engagement summary, and current owner.
3. **Pull what's new.** Web research for news, funding, leadership/org changes, and product or market moves in the last ~90 days.
4. **Recommend an angle.** Based on the relationship + signals, propose the single best reason to engage now.
5. **Output** the brief; keep it to one screen.

## Output

```
## [Company] — account brief
**Profile:** [industry · size · region]
**Relationship:** [owner] · [open deal(s) + stage, or "no open deal"] · last touch [date]

### Key contacts
- [Name, title] — [engagement note]

### What's new
- [Signal with date]

### Recommended angle
[1-2 sentences: why engage now, and how]

### Open questions / risks
[anything to verify or watch]
```

## Notes

- For obscure companies with thin data, prioritize web research and flag low confidence rather than inventing detail.
- Read-only — produces the brief, makes no CRM changes.
