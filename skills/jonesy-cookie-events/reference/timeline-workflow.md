# Timeline Workflow Reference

## Complete Event Lifecycle

---

## Phase 1 — Booking Confirmed

**Day 0 (or within 24h of deposit)**

1. Confirm all intake data is complete (see `./event-data-checklist.md`)
2. Lock date in calendar with event name, venue, dozen count
3. Send client confirmation message

**Confirmation message template:**
```
[NAME] — you're confirmed!

🍪 [QTY] dozen [FLAVORS] + [COOKIE CAKE if applicable]
📅 [DATE] | [TIME] — [EVENT TYPE]
📍 [VENUE]

Here's what to expect:
- I'll be there around [SETUP TIME] to set up
- My cell on-site: (817) 205-1238
- Balance due [7 DAYS BEFORE EVENT DATE] — I'll send a reminder

Looking forward to it!
— Thurman
```

---

## Phase 2 — 48 Hours Before

**48h before event — Generate prep checklist for Thurman**

```bash
node ./scripts/event-prep.js "[event-name]" [date] "[venue]" [dozens] "[flavors]"
```

This outputs a prep checklist with:
- Dozen count by flavor
- Special items (cookie cakes)
- Setup notes
- Client contact
- All checklist items for Thurman to tick off

**Send prep checklist to Thurman via text:**
```
📋 EVENT PREP — [EVENT NAME]
📅 [DATE] | ⏰ [TIME]
📍 [VENUE/ADDRESS]

🍪 DOZENS: [QTY] dozen [FLAVORS]
🚗 DELIVERY/PICKUP: [DETAILS]
👤 CLIENT CONTACT: [NAME] | [PHONE]
📝 SPECIAL NOTES: [ALLERGIES/OTHER]

CHECKLIST:
□ Dozens baked
□ Cookie cakes (if applicable)
□ Boxes/bags packed
□ Vehicle loaded
□ Client confirmation sent

You're all set. See you at [SETUP TIME].
```

---

## Phase 3 — 2 Hours Before

**2h before event — Send client day-of logistics brief**

```bash
node ./scripts/client-brief.js "[client-name]" [time] "[venue]" "[parking]"
```

**Client brief template:**
```
Hey [NAME]! Just a heads up — we'll be there around [TIME] to set up.

A few things:
- Parking: [DETAILS]
- Where to set up: [LOCATION]
- My cell on-site: (817) 205-1238

Can't wait to make your [EVENT TYPE] sweet! 🍪
```

---

## Phase 4 — Post-Event

**Same day, after event — Send client thank-you + review request**

```
[NAME] — it was a blast being part of your [EVENT TYPE]! Hope those cookies hit the spot.

If you ever need cookies again or know someone who does, send them our way. And if you're happy with how things went, we'd love a Google or Facebook review — it really helps small businesses like ours more than you'd believe!

🍪 Thanks again!
— Thurman
Jonesy's Cookie Company
(817) 205-1238
```

**Flag referral opportunity if:**
- Happy customer, high headcount event
- Connected to a community (wedding planner, corporate HR, church)
- They mentioned sending friends or colleagues

See `./referral-nurturing.md` in `jonesy-cookie-reviews/` for referral process.

---

## Phase 5 — Post-Event Log

- Mark event as complete in orders log
- Update metrics (dozens sold, flavors, deposit received)
- Flag any issues for next time
