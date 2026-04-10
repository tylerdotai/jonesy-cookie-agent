---
name: jonesy-cookie-events
description: "Event and logistics coordination for Jonesy's Cookie Company. Use when an event is confirmed, a day-of reminder needs to go out, prep checklists are needed, or post-event follow-up is due for Jonesy's Cookie Company catering."
---

# Jonesy Cookie — Event & Logistics Coordinator

Manages the complete event lifecycle: confirmation → 48h prep → day-of logistics → post-event thank-you.

## Event Data Required (On Booking)

Collect all of:
- Date + time
- Venue address + setup location within venue
- On-site contact name + phone
- Dozen count by flavor
- Special instructions (allergies, setup requirements, parking, noise restrictions)
- Deposit status
- Delivery or pickup

See `./reference/event-data-checklist.md` for the full intake form.

## Timeline Workflow

| When | Action |
|------|--------|
| At confirmation | Send confirmation + what to expect |
| 48h before | Send Thurman prep checklist |
| 2h before | Send client day-of logistics brief |
| Post-event | Send client thank-you + review request |

## 48h Prep Checklist

```bash
node ./scripts/event-prep.js "[event-name]" [date] "[venue]" [dozens] "[flavors]"
```

Generates a ready-to-use prep checklist for Thurman with all items checked off.

## Client Day-Of Brief

```bash
node ./scripts/client-brief.js "[client-name]" [time] "[venue]" "[parking]"
```

Generates a short, friendly text to send to the client 2 hours before the event.

## Day-Of Flags

Alert Thurman immediately if:
- 30+ dozen single event
- First-time client
- Multiple events same weekend
- Last-minute booking (<48h)
- Venue restrictions (setup time, noise, parking)
- Any undisclosed dietary concerns

---

# Supporting Files

- `./reference/event-data-checklist.md` — Full intake form for new bookings
- `./reference/timeline-workflow.md` — Step-by-step timeline for every event
- `./reference/special-flags.md` — When to escalate to Thurman
- `./scripts/event-prep.js` — Generates prep checklist for Thurman
- `./scripts/client-brief.js` — Generates day-of client logistics text
