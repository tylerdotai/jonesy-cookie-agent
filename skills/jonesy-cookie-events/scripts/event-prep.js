#!/usr/bin/env node
/**
 * Event Prep Checklist Generator
 * Generates a ready-to-use prep checklist for Thurman before an event
 * 
 * Usage: node event-prep.js "[event-name]" [date] "[venue]" [dozens] "[flavors]"
 */

const [eventName, date, venue, dozensRaw, flavors] = process.argv.slice(2);

if (!eventName || !date || !venue || !dozensRaw || !flavors) {
  console.error(`
❌ Missing required arguments

Usage: node event-prep.js "[event-name]" [date] "[venue]" [dozens] "[flavors]"

Example:
  node event-prep.js "Martinez Wedding" 2026-05-15 "SpringVille Gardens" 8 "Churro Delight, Chocolate Chip"
  `);
  process.exit(1);
}

const dozens = parseInt(dozensRaw, 10);
const eventDate = new Date(date + 'T00:00:00');
const formattedDate = eventDate.toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

const checklist = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 EVENT PREP CHECKLIST — ${eventName.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 DATE: ${formattedDate}
📍 VENUE: ${venue}
🍪 DOZENS: ${dozens} dozen (${flavors})

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍪 ORDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ ${dozens} dozen — ${flavors}
□ Cookie cakes (if applicable): _______________
□ Boxes/bags packed: _______________
□ Ingredient check — do we have everything?: _______________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚗 LOGISTICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Vehicle loaded: _______________
□保温 bags / transport: _______________
□ Parking at venue: _______________
□ Load-in path clear: _______________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 CLIENT CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Client confirmation sent (2h before): _______________
□ On-site cell: (817) 205-1238
□ Venue contact: _______________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ DONE — SEE YOU AT SETUP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();

console.log(checklist);
export {};
