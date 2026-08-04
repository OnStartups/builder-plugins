---
name: nps-response-handler
description: Handles an incoming NPS response by branching on the score — promoter, passive, or detractor — and drafting the right reply plus the next step (advocacy ask, check-in, or save play). Use when an NPS response arrives or the user asks to "handle this NPS", "respond to this survey score", "what do I do with this detractor/promoter".
license: MIT
compatibility: Requires the NPS score/comment; connected HubSpot account optional for history. Drafts and proposes next steps — no auto-writes.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Operator Owen
  rave: R3 A4 V3 E4
  category: hubspot
---

# NPS Response Handler

## What it does

Closes the loop on NPS the moment a response lands — the right tone for the score, a drafted reply, and a concrete next step — so feedback turns into advocacy or a save instead of sitting in a dashboard.

## When to use

- Triggered on an NPS response, or on request: "handle this NPS response", "respond to this detractor".

## Inputs

The NPS score (0-10) and comment, plus the contact. Optional: account/ticket history.

## Workflow

1. **Classify** the score: Promoter (9-10), Passive (7-8), Detractor (0-6).
2. **Pull light context** if available: tenure, recent tickets, renewal date, sentiment.
3. **Branch the play:**
   - **Promoter** → thank + advocacy ask (review/referral/case study) matched to their story.
   - **Passive** → thank + one specific question to learn what would make it a 9-10.
   - **Detractor** → empathetic reply, acknowledge the issue, propose a concrete fix/owner; flag for a save play if renewal is near.
4. **Draft the reply** and name the next step + owner.
5. **Output** the classification, draft, and next step for confirmation.

## Output

```
## NPS response — [Name] ([score], [class])
**Comment:** "[…]"
**Context:** [tenure · renewal · recent tickets]
**Draft reply:**
[body]
**Next step:** [action + owner]
```

## Notes

- Detractors are time-sensitive — surface renewal proximity prominently.
- Read-first: replies and tasks are proposed for a human to send/assign.
