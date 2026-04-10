# Deposit Tracking Reference

## Deposit Policy

### Standard Terms
- **Deposit:** 50% of estimated total at booking
- **Balance:** Remaining 50% due 7 days before event
- **Final count:** Confirm exact dozen count 5 days before event (for any adjustments)

### Why the Deposit Structure Matters
- Protects against last-minute cancellations
- Covers ingredient costs for custom orders
- Secures the date commitment

---

## Payment Methods

| Method | How |
|--------|-----|
| **Bakesy** (preferred) | Send Bakesy link — Thurman sets up in his Bakesy account |
| **Venmo** | For smaller orders or one-dozen events |
| **Cash** | On-site for balance due — discourage this for deposits |

### Bakesy Setup
- Thurman uses Bakesy to generate a payment link per booking
- Link sent via text after quote is approved
- Deposit clears → date is confirmed

---

## Deposit Log Format

Track every booking in `research/orders/[year]-[month].md`:

```
| DATE       | CLIENT      | EVENT        | DEPOSIT | BALANCE | STATUS   |
|------------|-------------|--------------|---------|---------|----------|
| YYYY-MM-DD | [NAME]      | [EVENT TYPE] | $[AMT]  | $[AMT]   | CONFIRMED |
```

---

## Follow-Up Schedule

| Trigger | Action |
|---------|--------|
| Quote sent | Log in orders file |
| Deposit due | Send Bakesy link |
| 3 days, no deposit response | Follow-up text |
| 7 days, no deposit | Second follow-up |
| 10 days, no deposit | Release date, notify client |
| Deposit received | Mark CONFIRMED, send confirmation |
| 7 days before event | Send balance reminder |
| 5 days before event | Confirm final count |
| Balance due (event day) | Confirm payment received |

---

## Cancellation Policy

```
Hey [NAME] — I'm sorry to hear things didn't work out.

Per our booking terms, the deposit is non-refundable since it covers the cost of ingredients and blocking the date for your event.

If you'd like to reschedule instead, I have [NEXT AVAILABLE DATE] available — just let me know.

Hope everything else with the event goes smoothly.
```

---

## Refund Policy (Discretionary)

Thurman can choose to refund deposits in special circumstances (family emergency, weather disaster, etc.). This is a judgment call — always run it by him first before offering.

---

## Order File Locations

```
research/orders/
├── 2026-04.md
├── 2026-05.md
├── 2026-06.md
└── ...
```

Create a new file at the start of each month. All bookings that month go in that file.
