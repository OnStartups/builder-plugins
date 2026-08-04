---
name: lead-triage-form-fill
description: Triages a new inbound lead (form submission) by enriching it, scoring it against the ICP, recommending an owner/route, and drafting a first-touch reply. Use when a form is submitted or the user asks to "triage this lead", "score and route this inbound", "is this lead worth working", "draft a reply to this inbound".
license: MIT
compatibility: Requires a connected HubSpot account and web/Breeze enrichment. Read-first — proposes routing and a draft, no auto-writes.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Marketing Meg, Operator Owen
  rave: R4 A4 V3 E4
  category: hubspot
---

# Lead Triage (Form-Fill)

## What it does

Takes a fresh inbound lead and does the first-five-minutes work: enrich, score, route, and draft the first reply — so good leads get worked fast and weak ones don't eat time.

## When to use

- Triggered on form submission, or on request: "triage this lead", "should we work this inbound".

## Inputs

A contact email or the form submission. Optionally the ICP definition and routing rules.

## Workflow

1. **Enrich** the contact + company (role, seniority, size, industry, region) via Breeze/web.
2. **Score against ICP.** 0-100 with the top 2-3 reasons. State the ICP assumptions used.
3. **Recommend a route.** Owner/team by territory, segment, or round-robin rules; or "nurture, not sales-ready" with why.
4. **Draft first-touch.** A short, specific reply referencing what they asked for on the form.
5. **Output** the triage card with the score, route, and draft — for the user to confirm before anything is written or sent.

## Output

```
## Lead triage — [Name, Company]
**ICP score:** [N]/100 — [reasons]
**Recommended route:** [owner/team] ([why])
**Draft first-touch:**
[subject + body]

_Confirm to log enrichment / assign owner._
```

## Notes

- Messy-input aware: missing form fields are handled by enrichment; if fit is unclear, route to nurture rather than forcing a score.
- Read-first: routing and writes are proposed, not auto-applied.
