# Skill: Bakesy Integration

**Purpose:** Connect the Jonesy's Cookie Agent to the Bakesy ordering platform to read orders, send quotes, and track deposits.

---

## Overview

Bakesy is the order platform Jonesy's uses for online orders and payments. The agent can interact with Bakesy via their API (if available) or via email/ webhook forwarding.

*Note: Full Bakesy API integration requires an API key from Bakesy. This skill should be configured once Thurman provides those credentials.*

---

## Configuration

```yaml
bakesy:
  api_key: "{{BAKESY_API_KEY}}"
  shop_id: "{{BAKESY_SHOP_ID}}"
  webhook_secret: "{{BAKESY_WEBHOOK_SECRET}}"
```

---

## Capabilities

### Read Orders
- Fetch new orders from Bakesy
- Parse order details: flavor, quantity, event date, customer info
- Flag orders that need Thurman's attention

### Send Quotes
- Submit custom quote to Bakesy for a client inquiry
- Attach flavors, quantities, pricing

### Track Deposits
- Monitor deposit payments via Bakesy
- Alert when deposit is received
- Mark events as confirmed once deposit clears

### Order Status Updates
- Notify client when order is confirmed
- Send balance reminder as due date approaches
- Confirm final balance received

---

## Webhook Mode

If Bakesy API isn't available, set up a Zapier/Make webhook:
- Bakesy order received → webhook → OpenClaw agent
- Agent receives the order payload and processes it

---

## Status

- [ ] Get Bakesy API credentials from Thurman
- [ ] Configure API keys in OpenClaw config
- [ ] Test read orders endpoint
- [ ] Test quote submission
- [ ] Set up deposit monitoring
- [ ] Document in README with live links
