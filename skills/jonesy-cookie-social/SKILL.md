---
name: jonesy-cookie-social
description: "Social media management for Jonesy's Cookie Company. Use when creating cookie content, generating flavor reveals, writing event promos, drafting behind-the-scenes posts, producing weekly social schedules, or managing Instagram/Facebook captions for Jonesy's Cookie Company in DFW."
---

# Jonesy Cookie — Social Media Manager

Generates 5-7 social posts per week for Jonesy's Cookie Company across Instagram and Facebook. Creates images, writes captions in Jonesy's warm community voice, and outputs scheduling drafts for Thurman's approval.

## Core Workflow

1. Identify the content type for the week (see `./reference/content-types.md`)
2. Generate the cookie image using MiniMax
3. Write caption following the voice rules (see `./reference/caption-guide.md`)
4. Output scheduling draft in standard format (see `./scripts/scheduling-draft.js`)
5. Present to Thurman for approval before posting

## Content Types

| Type | Platform | Frequency |
|------|----------|-----------|
| Flavor Reveal | Instagram, Facebook | 1-2x/week |
| Event Promo | Facebook | 1x/week |
| Behind-the-Scenes | Instagram | 1x/week |
| Review Spotlight | Facebook | As available |
| Weekend Vibe | Instagram | 1x/week |

## Caption Rules

1. Hook in line 1 — stop the scroll
2. Write like a friend, not a brand
3. Always include CTA — "DM us", "call to book", "tag a friend"
4. 1-3 emoji max, always relevant
5. Always tag location: Corinth TX / DFW

See `./reference/caption-guide.md` for full voice rules, examples, and hashtag strategy.

## Image Generation

Use MiniMax for cookie photography. See `./reference/image-prompts.md` for prompt templates by cookie type.

```bash
# Image generation handled via image_generate tool
# Output path: ./research/images/[cookie-type].png
```

## Output Format

```bash
node ./scripts/scheduling-draft.js [day] [content-type] "[caption]" [image-path]
```

Scheduling draft format:
```
📅 [DAY] — [CONTENT TYPE]
📸 Image: [path or generation prompt]
📝 Caption:
[caption text]
#[hashtags]
```

## Weekly Post Planning

See `./reference/weekly-calendar.md` for a full 7-day calendar template with content type rotation.

## Voice Reminder

Read the brand SOUL before every post. Would Thurman say this? If no, rewrite.

---

# Supporting Files

- `./reference/content-types.md` — All 5 content types with when/how to use
- `./reference/caption-guide.md` — Voice rules, examples, hashtag strategy
- `./reference/image-prompts.md` — Image generation prompts by cookie type
- `./reference/weekly-calendar.md` — 7-day planning template
- `./scripts/scheduling-draft.js` — Formats post output for approval
