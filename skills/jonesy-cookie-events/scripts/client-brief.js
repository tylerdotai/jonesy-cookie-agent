#!/usr/bin/env node
/**
 * Client Day-Of Brief Generator
 * Generates a friendly logistics text for the client 2 hours before the event
 * 
 * Usage: node client-brief.js "[client-name]" [time] "[venue]" "[parking]"
 */

const [clientName, time, venue, parking] = process.argv.slice(2);

if (!clientName || !time || !venue || !parking) {
  console.error(`
❌ Missing required arguments

Usage: node client-brief.js "[client-name]" [time] "[venue]" "[parking]"

Example:
  node client-brief.js "Sarah Martinez" "2:00 PM" "SpringVille Gardens" "Use rear entrance, parking lot B"
  `);
  process.exit(1);
}

const brief = `
Hey ${clientName}! Just a heads up — we'll be there around ${time} to set up.

A few things:
- Parking: ${parking}
- Where to set up: I'll text when I arrive
- My cell on-site: (817) 205-1238

Can't wait to make your event sweet! 🍪
`.trim();

console.log(brief);
export {};
