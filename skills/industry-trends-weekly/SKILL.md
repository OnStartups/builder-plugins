---
name: industry-trends-weekly
description: Produces a weekly, ranked digest of news and trends for a set of tracked accounts or an industry, with a talking point the user can drop into a conversation. Use when the user asks for an "industry trends digest", "what's happening in my accounts this week", "weekly news brief for [industry]", or sets up a recurring trends email.
license: MIT
compatibility: Requires web search; connected HubSpot account optional to pull the account list. Read-only.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Strategic Steve, Marketing Meg
  rave: R4 A2 V4 E4
  category: hubspot
---

# Industry Trends Weekly

## What it does

A short weekly digest of what's moving in the user's industry or named accounts — each item paired with a "so you can say" talking point — to keep conversations current without the manual scanning.

## When to use

- Scheduled weekly, or on request: "what's new in my accounts", "trends digest for [industry]".

## Inputs

An industry/topic, or a tracked-account list (pull from HubSpot if available). Optional: number of items (default 5).

## Workflow

1. **Set the watchlist:** the named accounts or the industry/topic.
2. **Gather** recent, credible news/trends from the last 7 days (funding, launches, leadership, regulation, market moves).
3. **Rank** by relevance and recency; drop low-signal noise.
4. **Summarize** each in 1-2 lines with a source link and a usable talking point.
5. **Output** the ranked digest, email-ready.

## Output

```
## Trends — week of [date]
1. **[Headline]** — [1-2 line summary] ([source])
   Talking point: "[how to use it in a conversation]"
2. …
```

## Notes

- This is informational, so it earns its keep on _relevance_ — be ruthless about cutting filler.
- If a week is quiet, return fewer high-quality items rather than padding to a count.
