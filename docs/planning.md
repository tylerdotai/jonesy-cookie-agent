# Jonesy's Cookie Agent — Planning

## Context

Thurman Jones runs Jonesy's Cookie Company — a mobile event bakery in Corinth, TX serving the DFW area. He does weddings, corporate events, celebrations, and "Celebration Cookie Cakes." He needs backend leverage.

**He specifically asked for:** Social Media Manager
**Tyler proposed:** Full OpenClaw agent setup for Jonesy's

---

## Vision

One agent subscription that replaces or augments:
- Social media contractor ($500-1500/mo)
- Part-time office manager / order coordinator ($1500-2500/mo)
- Event coordinator ($1000-2000/mo)
- Review management tool ($50-200/mo)
- Flavor/email marketing ($300-800/mo)

All of that — in one OpenClaw agent stack.

---

## The 5 Roles

### 1. Social Media Manager 🍪
**Input:** Business info, brand voice, menu, upcoming events
**Output:** 5-7 social posts/week (Instagram, Facebook, TikTok) with images + captions

**Capabilities:**
- Image generation (cookie photos, flavor reveals, event setups)
- Caption writing in Jonesy's warm/community voice
- Hashtag strategy + timing optimization
- Engagement response (replying to comments/messages)
- Monthly performance summary

### 2. Order & Inquiry Manager 📦
**Input:** Incoming inquiries via text/email/web contact form
**Output:** Qualified lead, custom quote, deposit request, confirmation

**Capabilities:**
- Text/email parsing — identifies event type, date, headcount, flavor preferences
- Quote generation using Jonesy's pricing logic
- Deposit invoicing (via Bakesy or manual)
- Auto-follow-up reminders for stale inquiries
- Converts casual browsers into confirmed bookings

### 3. Event & Logistics Coordinator 📅
**Input:** Confirmed bookings, event calendar
**Output:** Day-of logistics brief, setup checklist, client reminders

**Capabilities:**
- Maintains event calendar (date, time, location, headcount, flavor order)
- Sends 48h reminder to Jonesy's team with prep checklist
- Sends day-of logistics to client (parking, setup time, contact on-site)
- Tracks "dozen count" per event for inventory planning
- Post-event follow-up message to client

### 4. Review & Referral Nurturer ⭐
**Input:** Google/Yelp/Facebook review alerts, customer feedback
**Output:** Review responses in Jonesy's voice, referral prompts

**Capabilities:**
- Monitors Google Business, Yelp, Facebook for new reviews
- Drafts warm personalized responses for each review (approved by Thurman)
- Flags 5-star reviews → prompts Thurman to ask for a referral
- Flags 3-star-or-below → alerts Thurman immediately for personal recovery
- Sends post-event "we appreciate you" message to clients

### 5. Flavor Launch Strategist 🧈
**Input:** Sales data, seasonality, trends, menu performance
**Output:** New flavor proposals, launch copy, promo images

**Capabilities:**
- Seasonal calendar (Valentine's, Easter, Halloween, Christmas, etc.)
- Flavor performance analysis (which tiers sell best)
- New flavor concepts with descriptions and taglines
- Launch announcement copy for each channel
- Promo image generation
- Limited-run campaign planning (scarcity + urgency)

---

## OpenClaw Skill Structure

```
jonesy-cookie-agent/
├── SOUL.md              — Jonesy's brand voice & persona
├── AGENTS.md            — Agent roles, behaviors, escalation rules
├── prompts/
│   ├── social-media.md  — SM Manager prompt
│   ├── orders.md        — Order Manager prompt
│   ├── events.md        — Events prompt
│   ├── reviews.md       — Reviews prompt
│   └── flavors.md       — Flavor Strategist prompt
├── skills/
│   ├── bakesy/          — Bakesy integration skill
│   ├── review-monitor/  — Review monitoring skill
│   └── image-gen/       — Cookie image generation skill
└── docs/
    ├── planning.md      — This file
    └── status.md       — Tracking sheet
```

---

## Open Questions to Resolve With Thurman

1. **Which platform does he want the agent on?** Discord, text, WhatsApp?
2. **Who approves what?** Does everything go to him for approval, or does the agent have authority to post/draft/respond?
3. **Bakesy integration** — can the agent read Bakesy order data? Or does it just operate on forwarding him messages?
4. **Flavors** — does he have a current menu we can train on?
5. **Image style** — does he have photos of his cookies, or does the agent generate from scratch?
6. **Review alerts** — does he currently get notified when new reviews come in?

---

## Pricing to Propose

| Plan | Roles | Suggested price |
|------|-------|----------------|
| **Starter** | Social Media Manager | $299/mo |
| **Growth** | Social + Order Manager | $499/mo |
| **Full Stack** | All 5 roles | $799/mo |

First 30 days free as part of ClawPlex sponsor deal.

---

## Next Steps

- [ ] Review this doc with Tyler
- [ ] Confirm open questions with Thurman
- [ ] Create SOUL.md (Jonesy's brand voice)
- [ ] Build agent prompts per role
- [ ] Test in dev environment
- [ ] Deploy to production
- [ ] Document case study for ClawPlex
