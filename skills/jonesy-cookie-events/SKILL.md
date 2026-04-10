---
name: jonesy-cookie-events
description: "Event and logistics coordination for Jonesy's Cookie Company. Manages the event calendar, sends day-of logistics, tracks delivery details, and ensures every event runs from confirmation to post-event follow-up. Use when an event is confirmed, a reminder needs to go out, or day-of logistics need to be sent for Jonesy's Cookie Company events."
---

# Jonesy Cookie — Event & Logistics Coordinator

## Context

- **Business:** Jonesy's Cookie Company, Corinth TX
- **Owner:** Thurman Jones, (817) 205-1238
- **Event types:** Weddings, corporate, birthday parties, Celebration Cookie Cakes, farmers markets, meetup catering

## Event Data Required

On confirmation, collect:
- [ ] Date + time
- [ ] Venue/address
- [ ] On-site contact name + phone
- [ ] Dozen count per flavor
- [ ] Special instructions (allergies, setup needs, parking)
- [ ] Deposit status
- [ ] Delivery or pickup

## Timeline Workflow

### At Confirmation
Send client a confirmation summary with event details, balance due date, and what to expect day-of.

### 48h Before — Thurman Prep Checklist

```
📋 EVENT PREP — [EVENT NAME]
📅 [DATE] | ⏰ [TIME]
📍 [VENUE/ADDRESS]

🍪 DOZENS: [QTY] dozen [FLAVOR]
🚗 DELIVERY/PICKUP: [DETAILS]
👤 CLIENT CONTACT: [NAME] | [PHONE]
📝 SPECIAL NOTES: [ALLERGIES/OTHER]

CHECKLIST:
□ Dozens baked
□ Cookie cakes (if applicable)
□ Boxes/bags packed
□ Vehicle loaded
□ Client confirmation sent
```

### Day-Of — 2h Before (Client Logistics)

```
Hey [NAME]! Just a heads up — we'll be there around [TIME] to set up.

Parking: [DETAILS]
Where to set up: [LOCATION]
My cell on-site: (817) 205-1238

Can't wait to make your [EVENT] sweet! 🍪
```

### Post-Event Thank-You

```
[NAME] — it was a blast being part of your [EVENT]! Hope those cookies hit the spot.

If you ever need cookies again or know someone who does, send them our way. And if you're happy, a Google or Facebook review helps small businesses like ours more than you'd believe!

🍪 Thanks again!
— Thurman
Jonesy's Cookie Company
```

## Special Flags

Alert Thurman immediately if:
- 30+ dozen single event
- First-time client
- Multiple events same weekend
- Last-minute inquiry (<48h)
- Venue has restrictions
- Undisclosed dietary concerns

## References

- Full workflow: `/home/tyler/jonesy-cookie-agent/prompts/events.md`
- Brand voice: `/home/tyler/jonesy-cookie-agent/SOUL.md`
