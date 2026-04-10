# Jonesy's Cookie Agent — Planning

**Status:** Skills complete, ready for deployment
**Last updated:** 2026-04-10

## Context

Thurman Jones runs Jonesy's Cookie Company — a mobile event bakery in Corinth, TX serving the DFW area. He does weddings, corporate events, celebrations, and "Celebration Cookie Cakes." He needs backend leverage.

**He specifically asked for:** Social Media Manager
**Tyler proposed:** Full OpenClaw agent setup for Jonesy's

**Built free as a ClawPlex sponsor benefit.**

---

## What Was Built

5 OpenClaw skills following industry-standard skill-builder + skill-design-guide patterns:

```
jonesy-cookie-agent/
├── FOR_THURMAN.md              ← Plain language intro for Thurman
├── SOUL.md                     ← Jonesy's brand voice & persona
├── README.md                  ← Project landing page
├── prompts/                    ← Full detailed prompts per role
│   ├── social-media.md
│   ├── orders.md
│   ├── events.md
│   ├── reviews.md
│   └── flavors.md
├── skills/                    ← OpenClaw agent skills (installed)
│   ├── jonesy-cookie-social/  ← Social Media Manager
│   ├── jonesy-cookie-orders/  ← Order & Inquiry Manager
│   ├── jonesy-cookie-events/  ← Event & Logistics Coordinator
│   ├── jonesy-cookie-reviews/ ← Review & Referral Nurturer
│   └── jonesy-cookie-flavors/ ← Flavor Launch Strategist
├── research/
│   ├── competitors/          ← 5-competitor analysis (local + domestic + global)
│   │   ├── summary.md
│   │   ├── cookie-society.md
│   │   ├── crumbl-cookies.md
│   │   ├── tiffs-treats.md
│   │   ├── great-american-cookies.md
│   │   └── insomnia-cookies.md
│   ├── first-week-posts.md   ← 7 pre-generated posts ready to post today
│   └── images/              ← 4 AI-generated cookie images
└── docs/
    └── planning.md          ← This file
```

---

## The 5 Roles

### 1. Social Media Manager 🍪
- Generates 5-7 posts/week for Instagram and Facebook
- Creates cookie images via MiniMax
- Writes captions in Jonesy's warm community voice
- Outputs scheduling drafts for Thurman's approval
- Reference: `./skills/jonesy-cookie-social/`

### 2. Order & Inquiry Manager 📦
- Handles incoming inquiries via text/email/form
- Qualifies leads before sending quotes
- Generates formatted quotes with deposit request
- Auto-responds, follows up, tracks stale inquiries
- Reference: `./skills/jonesy-cookie-orders/`

### 3. Event & Logistics Coordinator 📅
- Complete event lifecycle management
- 48h prep checklist for Thurman
- Client day-of logistics brief
- Post-event thank-you + review request
- Special flags escalation (large events, dietary concerns, etc.)
- Reference: `./skills/jonesy-cookie-events/`

### 4. Review & Referral Nurturer ⭐
- Monitors Google, Yelp, Facebook for new reviews
- Drafts warm responses in Jonesy's voice
- Escalates 3-star-or-below to Thurman immediately
- Identifies referral opportunities from confirmed events
- Monthly review digest
- Reference: `./skills/jonesy-cookie-reviews/`

### 5. Flavor Launch Strategist 🧈
- Seasonal calendar strategy (12-month rolling)
- Flavor proposal framework
- Launch copy generation
- Campaign types: Limited Run, Flavor Showdown, Insider Drop, Event Tie-In
- Monthly flavor analytics
- Reference: `./skills/jonesy-cookie-flavors/`

---

## Skill Architecture

Each skill follows the skill-builder pattern:

```
skill-name/
├── SKILL.md             ← frontmatter + lean workflow summary
├── scripts/             ← executable Node.js (ESM, input validation)
│   └── *.js
└── reference/           ← detailed guides (loaded when needed)
    └── *.md
```

All 5 skills pass `quick_validate.py` ✅

---

## Free Stack

| Layer | Tool | Cost |
|-------|------|------|
| Agent framework | OpenClaw | $0 |
| LLM | Provider API key (Thurman's choice) | Provider pricing |
| Image gen | MiniMax / provider of choice | Provider pricing |
| Email | Resend (100/day free) | $0 |
| Social scheduling | Buffer free tier | $0 |
| Database | SQLite + Supabase free | $0 |
| SMS | Twilio pay-as-you-go | ~$0.007/text |

**Total cost to start: $0** — just time investment.

---

## Social Platform Costs

| Platform | Free? | Paid tier |
|----------|-------|-----------|
| Instagram | ✅ via Meta Business Suite | Later/Publer for scheduling |
| Facebook | ✅ via Meta Business Suite | Same |
| Google Business | ✅ everything | None needed |
| TikTok | ✅ manual posting | Scheduling API is paid |
| Yelp | ✅ respond only | No posting API |
| Twitter/X API | ❌ $200+/mo | Not worth it |

**Upgrade path:** $6/mo Buffer Pro when ready to scale.

---

## Competitive Landscape

| Competitor | Type | Threat |
|-----------|------|--------|
| **Cookie Society** | Local DFW chain | 🔴 Highest |
| **Crumbl Cookies** | National franchise | 🟡 Medium |
| **Tiff's Treats** | Regional (DFW-born) | 🟡 Medium |
| **Great American** | National franchise | 🟢 Low |
| **Insomnia Cookies** | National chain | 🟢 Low |

Full analysis in `./research/competitors/`

---

## Open Questions for Thurman

1. **Channel:** Where does he want the agent? (Discord, text, WhatsApp)
2. **Approval workflow:** Everything goes to him for approval, or some things autonomous?
3. **Bakesy API:** Does he have API credentials to connect orders?
4. **Current flavors:** Can he share the active menu?
5. **Real cookie photos:** Does he have photos to use, or AI-generated only for now?
6. **Review alerts:** Is he currently notified when new reviews come in?

---

## Next Steps

- [x] Build SOUL.md with Jonesy's brand voice ✅
- [x] Create 5 agent prompts ✅
- [x] Build skills following industry standard ✅
- [x] Add competitor research ✅
- [x] Generate first week of social posts ✅
- [x] Generate initial cookie images ✅
- [ ] Confirm open questions with Thurman
- [ ] Set up MiniMax API account for Thurman
- [ ] Configure Resend for transactional email
- [ ] Configure Buffer free tier for social scheduling
- [ ] Connect to Thurman's social accounts
- [ ] Test full workflow (inquiry → quote → event → review)
- [ ] Deploy to production
- [ ] Document case study for ClawPlex community
