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

## Pricing — Sponsor Benefit

This agent is being built **free of charge** as part of the ClawPlex sponsor relationship with Jonesy's Cookie Company. It's a proof-of-concept — showing what OpenClaw can do for a real local business.

---

## Open Source & Free Stack

Every layer of this agent stacks on free or open-source tooling. Here's the full breakdown:

### 🤖 AI & Agent Runtime
| Layer | Tool | Why | Cost |
|-------|------|-----|------|
| **Agent framework** | OpenClaw | Core agent runtime | $0 |
| **LLM** | Provider API key (Thurman's choice) | Cloud LLM for responses | Cost depends on provider |
| **Image generation** | MiniMax / provider of choice | Cookie promo images | Cost depends on provider |

### 📅 Event & Calendar
| Layer | Tool | Why | Cost |
|-------|------|-----|------|
| **Event calendar** | Cal.com | Open-source, self-hosted or free hosted tier | $0 |
| **Calendar sync** | Google Calendar API | Connect events to Jonesy's personal calendar | $0 |
| **Scheduling** | ICS files / cron jobs | Auto-generate event reminders | $0 |

### 📧 Email & Notifications
| Layer | Tool | Why | Cost |
|-------|------|-----|------|
| **Transactional email** | Resend | Free: 100 emails/day, 3k/month — enough for confirmations & reminders | $0 |
| **Marketing email** | Resend / Mailgun | Free tier on Mailgun: 5k/mo | $0 |
| **Email parsing** | Gmail API | Auto-forward client inquiries to agent | $0 |

### 📱 Social Media (Scheduling & Posting)
| Layer | Tool | Why | Cost |
|-------|------|-----|------|
| **Scheduling dashboard** | Buffer | Free plan: 3 channels, 10 scheduled posts/channel/mo | $0 |
| **Scheduling alt** | Publer | Free plan: 3 social profiles, 30 posts | $0 |
| **Native Instagram** | Meta Business Suite | Free posting, insights, stories | $0 |
| **Native Facebook** | Meta Business Suite | Free posting, page management | $0 |
| **Google Business** | Google Business Profile | Free — post updates, respond to reviews | $0 |
| **Review monitoring** | Google Alerts + API | Brand mention tracking | $0 |

### 🍪 Image Generation (Cookie Photos)
| Layer | Tool | Why | Cost |
|-------|------|-----|------|
| **Primary** | MiniMax / provider API | Cookie promo images generated on demand | Provider pricing |
| **Backup** | Provider alt (DALL-E, etc.) | Fallback image gen | Provider pricing |
| **Stock imagery** | Pexels / Unsplash | Free photos for overlay work | $0 |

### 💬 Communication (Client Inquiries)
| Layer | Tool | Why | Cost |
|-------|------|-----|------|
| **Text/SMS** | Twilio | $0.0069/text — only pay for actual messages | Pay-as-you-go |
| **WhatsApp** | WhatsApp Business (meta) | Free app, API requires business verification | $0 |
| **Contact form** | Webhook → OpenClaw | Any website form routes to agent | $0 |
| **Voice** | ElevenLabs (if needed) | TTS for audio messages | Paid only |

### 🗄️ Database
| Layer | Tool | Why | Cost |
|-------|------|-----|------|
| **Primary** | SQLite | Local file, zero config, perfect for small biz | $0 |
| **Cloud backup** | Supabase | Free tier: 500MB, enough for events + orders | $0 |
| **Object storage** | Cloudflare R2 | Free 10GB/mo for cookie images | $0 |

---

## Social Platform Costs

### Free Platforms (No paid needed)
| Platform | What's free | Limitations |
|----------|-------------|-------------|
| **Instagram** | Post, Stories, Reels, insights, DMs | No scheduled posts without third-party (use Buffer) |
| **Facebook** | Page posts, Messenger, events | Same as Instagram |
| **Google Business** | Posts, reviews, business info | Only for local search visibility |
| **TikTok** | Posting, basic analytics | No business API for scheduling — must post manually |
| **Nextdoor** | Posts, neighborhood reach | No scheduling API |
| **Yelp** | Business page, responding to reviews | No posting API — manual only |

### Paid Platforms
| Platform | Cost | Why you'd pay |
|----------|------|---------------|
| **Twitter/X API** | $200+/mo | Required for any bot posting or DMs — overkill for this |
| **LinkedIn API** | ~$30/mo | Only worth it if B2B corporate catering is a focus |
| **Later (pro)** | $18/mo | Unlimited scheduling, more channels, analytics |
| **Publer Pro** | $12/mo | Unlimited posts, bulk scheduling |
| **Buffer Pro** | $6/seat/mo | 3 seats, unlimited scheduling, analytics |

### Recommendation for Jonesy's

**Start free, upgrade only if it makes sense:**
1. Begin with Meta Business Suite (Instagram + Facebook) via Buffer free tier
2. Use Google Business for free review management + local SEO
3. Run image gen locally via FLUX
4. Resend for all order confirmations and reminders
5. Twilio pay-as-you-go for SMS only when needed
6. Upgrade Buffer to Pro ($6/mo) once Jonesy's sees value and wants to scale posting

**Total optional cost to start:** $0 — just time investment from the agent setup.
**Minimal upgrade path:** $6/mo Buffer Pro when ready to scale.

---

## Next Steps

- [ ] Review this doc with Tyler
- [ ] Confirm open questions with Thurman (voice, channel, flavors, images, approval workflow)
- [ ] Create SOUL.md (Jonesy's brand voice)
- [ ] Build agent prompts per role
- [ ] Set up Resend account for transactional email
- [ ] Configure Buffer free tier for social scheduling
- [ ] Test in dev environment
- [ ] Deploy to production
- [ ] Document case study for ClawPlex
