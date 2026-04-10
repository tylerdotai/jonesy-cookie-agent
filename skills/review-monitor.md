# Skill: Review Monitor

**Purpose:** Automatically monitor Google, Yelp, and Facebook for new reviews of Jonesy's Cookie Company and alert the agent for response.

---

## Overview

Reviews are critical for local businesses. This skill sets up monitoring across the three main platforms and routes new reviews to the agent for response handling.

---

## Platform Configuration

### Google Business Profile
- URL: https://business.google.com — Jonesy's Business Profile
- Monitoring: Google Alerts for "Jonesy's Cookie Company Corinth"
- Alert email: routed to OpenClaw agent inbox

### Yelp
- URL: https://www.yelp.com/biz/jonesys-cookie-company-corinth
- Monitoring: Direct link monitoring + browser check cron
- Alert: New review detected → agent workflow

### Facebook
- URL: https://www.facebook.com/jonesyscookieco
- Monitoring: Facebook page notifications
- Alert: New review → agent workflow

---

## Google Alerts Setup

1. Go to google.com/alerts
2. Create alert: "Jonesy's Cookie Company"
3. Frequency: As-it-happens
4. Deliver to: agent email address
5. Add variations: "Jonesys Cookies", "Jonesy's Cookies", "Thurman Jones cookies"

---

## Review Check Cron

Run every 6 hours via OpenClaw cron:

```
openclaw cron add --name "Jonesy's Review Check" --pattern "0 */6 * * *" --task "Check Google, Yelp, Facebook for new Jonesy's reviews"
```

---

## Workflow on New Review

1. **New review detected** → agent receives payload
2. **Parse platform, rating, text** → agent evaluates
3. **If 4+ stars:** generate response (see reviews.md), await Thurman approval
4. **If 3 or below:** flag to Thurman immediately, do not respond until approved
5. **Log review** in monthly digest

---

## Status

- [ ] Set up Google Alerts
- [ ] Configure Facebook page notifications
- [ ] Create OpenClaw cron job for review checks
- [ ] Test review detection workflow
- [ ] Add to README with monitoring links
