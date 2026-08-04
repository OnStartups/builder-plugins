---
name: prospect-research
description: Turns a single LinkedIn URL into a complete pre-meeting prospect profile by mining the prospect's whole public footprint — LinkedIn profile and posts, podcasts, articles, talks, press, YouTube, X — then synthesizing verbatim quotes, recurring themes, a company profile, and a 4-quadrant "Reasons to Layer" outreach ammunition stack. Use when the user says "research this prospect", "build me a pre-meeting profile", "what's the ammo on [name]", "dig up everything on this LinkedIn", or pastes a LinkedIn URL before a meeting.
license: MIT
metadata:
  author: Chris Merrill
  version: 1.0.0
  persona: Strategic Steve
  rave: R4 A4 V3 E3
  category: sales
  source: agentai-action
---

# Prospect Research

## What it does

Takes one LinkedIn profile URL and returns a deep, sourced pre-meeting dossier on the person and their company. It goes wider than a quick brief: it reads the prospect's own words across their full public footprint, pulls verbatim quotes you can reference by name, and packages everything into a "Reasons to Layer" ammunition stack a rep can open a meeting with.

## When to use

- "Research this prospect before my call", "build a pre-meeting profile", "what's the angle / the ammo on [name]", or a pasted LinkedIn URL.
- Best for a named meeting with a specific person — not for bulk list scoring.

## Inputs

- **Required:** the prospect's LinkedIn profile URL (e.g. `https://www.linkedin.com/in/christopherwmerrill/`).
- **Derived automatically:** person name and company name (parsed from the profile).

## Workflow

1. **Fetch LinkedIn.** Pull the profile and the last ~50 posts. Parse name, current title, career history; rank the sharpest posts.
2. **Map the public footprint.** Web-research the person and company across podcasts, articles, Substack, Medium, talks, press, YouTube, and X, plus recent company news. Filter and de-duplicate the results.
3. **Extract quotes (verbatim).** Capture exact, attributable statements grouped by artifact (source type, title, publication, date, URL). Never paraphrase; drop anything not clearly attributable.
4. **Synthesize themes + personal signals.** Recurring stances, opinions, and human details worth knowing.
5. **Profile the company.** Size, stage, recent news, positioning, customer type.
6. **Write the About blurb.** 2–3 plain-English sentences: current role and scope, career arc, what makes them distinctive.
7. **Build "Reasons to Layer."** A 4-quadrant ammunition stack, each bullet a one-line sourced fact:
   - **Person** — career trajectory, education, tenure, past companies, location.
   - **Business** — current scope, seniority, what they own, focus areas.
   - **Social (what they said)** — sharp opinions and short quote highlights.
   - **Company** — size, stage, recent news, positioning.
8. **Assemble the Pre-Meeting Profile** and present it.

## Output

```
## [Name] — pre-meeting profile
**About:** [2–3 sentence bio]
**Company:** [name · size · stage · recent signal]

### Reasons to Layer
- Person:   • [one-line fact] (source, url)
- Business: • [one-line fact] (source, url)
- Social:   • "[≤15-word quote]" (source, url)
- Company:  • [one-line fact] (source, url)

### Notable quotes
- "[verbatim quote]" — [publication, date, url]

### Themes & personal signals
- [recurring stance / human detail]
```

## Notes

- **Verbatim means verbatim.** Only include quotes with unambiguous attribution; prefer omission over a guess. Never invent a fact, quote, or personal detail.
- **Always cite the source** and include the direct URL when the data provides one.
- Tool references (LinkedIn fetch, web scraping, search) are connector-agnostic — map them to whatever your environment exposes. Read-only; it produces a report, it does not write anywhere.
- Thin public footprint → lean on profile + company-level signals and flag lower confidence.
