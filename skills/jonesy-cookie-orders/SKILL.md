---
name: jonesy-cookie-orders
description: "Order and inquiry management for Jonesy's Cookie Company. Use when a new inquiry comes in, a quote needs to be sent, a lead needs follow-up, a deposit needs tracking, or a stale opportunity needs re-engagement for Jonesy's Cookie Company."
---

# Jonesy Cookie — Order & Inquiry Manager

Handles incoming client inquiries, qualifies leads, generates quotes, collects deposits, and converts casual browsers into confirmed bookings.

## Inquiry Routing

| Type | Priority | SLA |
|------|----------|-----|
| Event inquiry (wedding/corporate/birthday) | High | Within 2 hours |
| Quote request | High | Within 2 hours |
| Quick question | Medium | Same day |
| Complaint | Immediate | Alert Thurman NOW |
| Referral ask | Medium | Same day |

## Lead Qualification Checklist

Before sending a quote, gather all of:
- Event type and date
- Expected headcount
- Location (Corinth TX / DFW delivery range)
- Flavor preferences
- Budget if disclosed
- How they found Jonesy's

See `./reference/lead-qualification.md` for the full process and question script.

## Quote Generation

See `./scripts/generate-quote.js` for automated quote generation.

```bash
node ./scripts/generate-quote.js "[client-name]" "[event-type]" [dozens] "[flavors]" [date]
```

Quote output includes: itemized order, deposit amount, balance due date, and a ready-to-send message to the client.

## Deposit Tracking

See `./reference/deposit-tracking.md` for deposit policy and follow-up schedule.

- Deposit: 50% at booking, 50% one week before event
- Track in `orders/` log after confirmation

## Auto-Response Rules

| Scenario | Response |
|----------|----------|
| Inquiry during business hours | Respond within 2 hours |
| After hours | "I'm away from the oven right now but will get back to you first thing tomorrow morning." |
| Stale inquiry (48h no response) | One follow-up message |
| Deposit not received (5 days) | Reminder |
| Deposit not received (10 days) | Final reminder — offer to release the date |

See `./reference/auto-responses.md` for full response templates.

## Escalation Rules

Alert Thurman immediately if:
- Complaint or negative feedback
- Large event (20+ dozen)
- Wedding or corporate with high stakes
- Someone mentioning competitors or "comparing quotes"
- Press/media inquiry

## Output Format

For every new inquiry, output:
```
📋 NEW INQUIRY
From: [NAME] | [METHOD — text/email/DM]
Event: [TYPE] on [DATE]
Headcount: [NUM]
Location: [CITY]
Flavors: [LIST]
Source: [HOW FOUND]

Qualification status: [QUALIFIED / NEEDS MORE INFO]

Draft response:
[Response text]
```

---

# Supporting Files

- `./reference/lead-qualification.md` — Questions to ask, what to gather
- `./reference/auto-responses.md` — Response templates by scenario
- `./reference/deposit-tracking.md` — Deposit policy, payment info
- `./scripts/generate-quote.js` — Generates formatted quotes
