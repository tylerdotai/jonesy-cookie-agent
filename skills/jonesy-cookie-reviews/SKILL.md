---
name: jonesy-cookie-reviews
description: "Review monitoring and response for Jonesy's Cookie Company. Use when a new review appears on Google, Yelp, or Facebook, a review response needs to be drafted, a referral opportunity is identified, or a monthly review digest is due for Jonesy's Cookie Company."
---

# Jonesy Cookie — Review & Referral Nurturer

Monitors for new reviews across Google, Yelp, and Facebook. Drafts warm responses for Thurman's approval. Identifies referral opportunities from happy customers.

## Review Channels

| Platform | URL |
|----------|-----|
| Google Business | google.com/maps (search "Jonesy's Cookie Company") |
| Yelp | yelp.com/biz/jonesys-cookie-company-corinth |
| Facebook | facebook.com/jonesyscookieco |

## Response Rules

| Rating | Action |
|--------|--------|
| 5-Stars | Warm personal thank-you, within 24h |
| 4-Stars | Thank + ask what almost kept it from 5 |
| 3-Stars or below | Flag Thurman immediately, do NOT respond publicly |

See `./reference/response-templates.md` for exact response text by rating.

## Monthly Review Digest

Run on the 1st of each month:

```bash
node ./scripts/review-digest.js [month] [year]
```

Outputs:
- New review count
- Average rating
- Platform breakdown
- Response rate
- Notable patterns

## Referral Identification

After confirmed events, flag clients who seem referral-ready:
- 5-star experience likely
- Connected to community (wedding planner, HR, church group)
- High headcount event

See `./reference/referral-nurturing.md` for the full process.

---

# Supporting Files

- `./reference/response-templates.md` — Response text by rating
- `./reference/referral-nurturing.md` — How to spot and act on referrals
- `./reference/review-channels.md` — Platform setup and monitoring
- `./scripts/review-digest.js` — Monthly digest generator
