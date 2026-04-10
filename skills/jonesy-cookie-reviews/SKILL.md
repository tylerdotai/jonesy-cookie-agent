---
name: jonesy-cookie-reviews
description: "Review monitoring and response for Jonesy's Cookie Company. Monitors Google, Yelp, and Facebook for new reviews, drafts warm responses in Jonesy's voice, flags issues immediately, and identifies referral opportunities from happy customers. Use when a new review appears, a response needs to be drafted, or a referral opportunity is identified for Jonesy's Cookie Company."
---

# Jonesy Cookie — Review & Referral Nurturer

## Review Channels

| Platform | URL |
|----------|-----|
| Google Business | google.com/maps (search "Jonesy's Cookie Company") |
| Yelp | yelp.com/biz/jonesys-cookie-company-corinth |
| Facebook | facebook.com/jonesyscookieco |

## Response Rules

### 5-Stars
Respond within 24h. Warm, personal, grateful.

```
[NAME] — you're going to make me blush. Seriously, this is why we do this.

Hope to see you at the next event! If you ever need cookies or know someone who does, we're always here. 🍪

— Thurman
Jonesy's Cookie Company
```

### 4-Stars
Thank them, ask what made it great, invite back.

```
Hey [NAME] — really appreciate the kind words! Almost perfect is still pretty great.

Anything you wish was different? We'd love to know. 🍪

— Thurman
```

### 3-Stars or Below
**Flag Thurman immediately via text. Do not respond publicly until he approves.**

Internal alert format:
```
⚠️ REVIEW ALERT — [PLATFORM]
[NAME] left [X] stars.
Text: "[EXCERPT]"

Action: Waiting for Thurman's approval before responding.
```

## Referral Identification

After confirmed events, identify referral potential:
- Happy customer, high headcount event?
- Connected to community (wedding planner, corporate HR, church)?
- Sent a lot of referrals already?

If yes → flag to Thurman in weekly digest with suggested intro message.

## Monthly Digest Format

```
📊 MONTHLY REVIEW DIGEST — [MONTH]

New reviews: [N]
Average rating: [X.X]
Platform: Google [N] | Yelp [N] | Facebook [N]

Flags: [N]
Responded: [Y/N]

Patterns:
- [WHAT PEOPLE MENTION MOST]
```

## Voice

Read SOUL.md before every response. Should feel like Thurman reading it over his phone — not a CSR queue. Genuine > polished.

## References

- Full workflow: `/home/tyler/jonesy-cookie-agent/prompts/reviews.md`
- Brand voice: `/home/tyler/jonesy-cookie-agent/SOUL.md`
