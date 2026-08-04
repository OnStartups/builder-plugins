---
name: cold-email-writer
description: Writes a concise, personalized cold outreach email with subject-line options from a prospect and an offer, using light research for a relevant opener. Use when the user asks to "write a cold email", "draft outreach to this prospect", "cold email for [company]", "first-touch email".
license: MIT
compatibility: Web search optional for personalization; connected HubSpot account optional. Drafts only.
metadata:
  author: Builder.org
  version: 1.0.0
  persona: Marketing Meg, Strategic Steve
  rave: R4 A3 V4 E3
  category: hubspot
---

# Cold Email Writer

## What it does

Produces a short, specific cold email that earns a reply — personalized opener, one clear value point, one ask — plus subject-line options to test.

## When to use

- "Write a cold email to [prospect]", "draft first-touch outreach", "cold email for this list".

## Inputs

Prospect (name/role/company) and the offer or reason for reaching out. Optional: tone, desired CTA, sender details.

## Workflow

1. **Find a hook.** One relevant, specific detail about the prospect or company (role, recent news, a likely pain) from HubSpot context or quick web research.
2. **Frame the value** in one sentence tied to that hook — their outcome, not your features.
3. **Write the email:** under ~90 words, conversational, one ask, easy yes.
4. **Add 2-3 subject lines** of different styles (curiosity, direct, value).
5. **Output** the email + subjects, paste-ready.

## Output

```
**Subject options:** [A] / [B] / [C]

[Opener with the specific hook]
[One value sentence]
[One clear, low-friction ask]
[Sign-off]
```

## Notes

- No verifiable hook? Use a credible role-based pain and keep the personalization honest — never fabricate a "saw your post" claim.
- One email, one ask. Sequences belong in `follow-up-email-sequence-writer`.
