#!/usr/bin/env node
/**
 * Review Digest Generator
 * Generates a monthly review digest for Jonesy's Cookie Company
 * 
 * Usage: node review-digest.js [month] [year]
 * 
 * Example:
 * node review-digest.js April 2026
 */

const [month, year] = process.argv.slice(2);

if (!month || !year) {
  console.error(`
❌ Missing required arguments

Usage: node review-digest.js [month] [year]

Example:
  node review-digest.js April 2026
  `);
  process.exit(1);
}

const digest = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 MONTHLY REVIEW DIGEST — ${month} ${year}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NEW REVIEWS THIS MONTH:
- Google: [N]
- Yelp: [N]
- Facebook: [N]
Total: [N]

AVERAGE RATING: [X.X] / 5

PLATFORM BREAKDOWN:
- Google: [N] reviews
- Yelp: [N] reviews  
- Facebook: [N] reviews

FLAGS THIS MONTH: [N]
RESPONDED: [Y/N]
RESPONSE RATE: [X%]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOTABLE PATTERNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- [What customers mentioned most — flavor, service, etc.]
- [Most common positive theme]
- [Any negative theme or recurring issue]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REFERRAL OPPORTUNITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- [Client name] — [event type] — [reason]
- [Client name] — [event type] — [reason]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACTION ITEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Respond to any unresponded reviews
[ ] Follow up on referral leads
[ ] Note any product/service issues for next month

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();

console.log(digest);
export {};
