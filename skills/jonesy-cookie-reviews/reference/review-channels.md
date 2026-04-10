# Review Channels Reference

## Setup for Each Platform

---

## Google Business Profile

**URL:** https://business.google.com — search "Jonesy's Cookie Company Corinth"

**Why it matters:** Google reviews appear in search results. This is the #1 review source for local businesses.

**Setup:**
1. Claim the Google Business Profile (if not already done)
2. Enable notifications for new reviews
3. Set up Google Alerts as backup:
   - Go to google.com/alerts
   - Create alert: "Jonesy's Cookie Company" + "Jonesys Cookies" + "Thurman Jones cookies"
   - Deliver to: email

**Monitoring:** Check the Google Business Dashboard weekly. New reviews trigger notifications if set up.

---

## Yelp

**URL:** https://www.yelp.com/biz/jonesys-cookie-company-corinth

**Why it matters:** Some users default to Yelp for local business reviews. Less critical than Google but worth monitoring.

**Setup:**
1. Claim the Yelp business page
2. Enable email notifications for reviews
3. Save the page in your browser for weekly check

**Monitoring:** Weekly manual check or email notification.

---

## Facebook

**URL:** https://www.facebook.com/jonesyscookieco

**Why it matters:** Facebook reviews carry social weight for community-focused businesses. Also doubles as social proof for your social audience.

**Setup:**
1. Go to Page Settings → Notifications
2. Enable "Reviews" notifications
3. Set up page tabs to show reviews prominently

**Monitoring:** Facebook will send notifications for new reviews if enabled.

---

## Cross-Platform Summary

| Platform | URL | Monitoring Method | Priority |
|----------|-----|-------------------|----------|
| Google Business | maps.google.com | Notifications + Alerts | 🔴 High |
| Yelp | yelp.com | Email notifications | 🟡 Medium |
| Facebook | facebook.com | Page notifications | 🟡 Medium |

---

## When a New Review Comes In

1. **Parse it** — Platform, rating, text, date
2. **Route it** — 5-star → respond, 4-star → respond + ask, 3-or-below → escalate
3. **Respond** — Draft in Jonesy's voice, await approval if 3-or-below
4. **Log it** — Add to monthly digest tracker

---

## Manual Review Check (Weekly)

Run this check once per week:

```
node ./scripts/review-digest.js [month] [year] --check
```

This outputs any new reviews detected since last check and updates the digest log.
