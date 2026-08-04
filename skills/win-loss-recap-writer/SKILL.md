---
name: win-loss-recap-writer
description: Writes a crisp win/loss recap when a deal closes by pulling its history, stage path, and close reason into a short lessons-learned the team can act on. Use when a deal is marked closed-won or closed-lost, or the user asks to "write a win/loss recap", "what happened with this deal", "lessons from this close".
license: MIT
compatibility: Requires a connected HubSpot account. Read-only.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Strategic Steve
  rave: R4 A3 V3 E3
  category: hubspot
---

# Win/Loss Recap Writer

## What it does

When a deal closes, it produces a short, honest recap — what happened, why, and the one or two lessons worth carrying forward — so wins get repeated and losses get learned from.

## When to use

- Triggered on close (won or lost), or on request: "write the win/loss recap for [deal]".

## Inputs

A closed deal (won or lost). Optional: the rep's quick take.

## Workflow

1. **Pull the deal history:** stage path with timing, deal size, competitors if noted, and the recorded close reason.
2. **Reconstruct the arc** from engagements: the turning points, what moved it, where it stalled.
3. **Name the driver:** the primary reason it was won or lost, with supporting evidence (not a guess dressed as fact).
4. **Extract 1-2 lessons** that generalize to similar deals.
5. **Output** the recap, short enough to actually be read.

## Output

```
## [Deal] — [WON/LOST] recap
**Size:** $[amount] · **Cycle:** [days] · **Competitor:** [if any]
### What happened
[2-4 sentences on the arc]
### Why [won/lost]
[primary driver + evidence]
### Lessons
1. …
2. …
```

## Notes

- If the close reason field is empty, infer from engagements and label it an inference.
- Read-only; great fed into a weekly win/loss trend review.
