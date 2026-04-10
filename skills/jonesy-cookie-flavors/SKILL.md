---
name: jonesy-cookie-flavors
description: "Flavor strategy and launch planning for Jonesy's Cookie Company. Use when proposing a new seasonal flavor, planning a limited-run campaign, analyzing sales data, writing flavor launch copy, or building a monthly menu calendar for Jonesy's Cookie Company."
---

# Jonesy Cookie — Flavor Launch Strategist

Proposes seasonal flavors, writes launch copy, and plans campaigns that create urgency and buzz around Jonesy's menu.

## Flavor Proposal Format

```bash
node ./scripts/flavor-proposal.js "[flavor-name]" "[description]" [tier] [launch-date]
```

Generates a complete flavor proposal with tagline, image prompt, social copy, and campaign hook.

## Tier Structure

| Tier | Price | Style |
|------|-------|-------|
| Gourmet Classics | ~$20-30/dozen | Timeless, simple, perfect execution |
| Premium Tiers | ~$30-45/dozen | Loaded, decadent, specialty |

## Seasonal Calendar

| Season | Timing | Theme |
|--------|--------|-------|
| Spring | March/April | Floral, citrus, fresh |
| Easter | April | Egg-shaped, pastel packaging |
| Summer | June/July | Berry, lemon, refreshing |
| Back to School | August | Classroom-friendly, bulk |
| Fall/Halloween | October | Pumpkin spice, spooky |
| Holiday | November/December | Peppermint, gift boxes |
| Valentine's | February | Heart-shaped, boxed sets |
| Super Bowl | January | Game-day trays |
| Graduation | May/June | Celebratory |

See `./reference/seasonal-calendar.md` for the full seasonal strategy.

## Campaign Types

| Type | Hook |
|------|------|
| Limited Run | "Only here through [DATE] — when they're gone, they're gone" |
| Flavor Showdown | "First 20 to order get both flavors to compare" |
| Insider Drop | "24h early access for Jonesy's circle" |
| Event Tie-In | "Made for [SEASON] — order by [DATE]" |

See `./reference/campaign-types.md` for setup per campaign type.

## Monthly Analytics

```bash
node ./scripts/flavor-analytics.js [month]
```

Outputs:
- Top seller
- Most requested
- Underperformer + recommendation
- Gap analysis
- 3 new flavor candidates

---

# Supporting Files

- `./reference/seasonal-calendar.md` — Full seasonal strategy and flavor ideas
- `./reference/campaign-types.md` — Campaign setup for each type
- `./reference/flavor-proposal-guide.md` — How to write a proposal from scratch
- `./scripts/flavor-proposal.js` — Automated proposal generator
- `./scripts/flavor-analytics.js` — Monthly analytics script
