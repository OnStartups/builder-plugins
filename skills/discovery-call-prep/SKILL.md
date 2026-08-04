---
name: discovery-call-prep
description: Prepares for a discovery call with research and a tailored question set, then after the call summarizes it and proposes the deal update. Use when the user asks to "prep for my discovery call", "give me discovery questions for [company]", or afterward "summarize my discovery call and update the deal".
license: MIT
compatibility: Requires a connected HubSpot account and web search; a transcript for the post-call mode. Drafts and proposes updates — no auto-writes.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Strategic Steve
  rave: R4 A3 V3 E3
  category: hubspot
---

# Discovery Call Prep & Post-Call Summary

## What it does

Two modes around a discovery call: **before**, it researches the prospect and builds a sharp question set; **after**, it summarizes the call and proposes the deal update. One skill, the whole call covered.

## When to use

- Before: "prep for my discovery call with [company]", "discovery questions for this prospect".
- After: "summarize my discovery call", "update the deal from this call".

## Workflow — Prep mode

1. **Research** the contact + company from HubSpot and the web: role, firmographics, likely pains, recent signals.
2. **Form a hypothesis** about their priorities and where the fit might be.
3. **Build the question set** — qualifying + pain-discovery + decision-process questions, grouped, prioritized, tailored to the hypothesis.
4. **Output** a one-page prep: context, hypothesis, questions, and a target next step.

## Workflow — Post-call mode

1. **Summarize** the call: needs, pains, budget/timeline/authority signals, objections.
2. **Score qualification** (e.g., BANT/MEDDIC) with what's known vs. still open.
3. **Propose the deal update:** stage, next step, follow-up task — for confirmation.
4. **Output** the summary + proposed updates + a follow-up email draft.

## Output (prep)

```
## Discovery prep — [Company]
Context: … · Hypothesis: …
Questions: [grouped, prioritized]
Target next step: …
```

## Notes

- Post-call quality depends on the transcript; with thin notes, summarize what's supported and list open qualification gaps.
- Read-first: deal updates are proposed, not auto-applied.
