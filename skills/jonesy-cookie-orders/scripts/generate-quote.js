#!/usr/bin/env node
/**
 * Quote Generator
 * Generates a formatted quote for Jonesy's Cookie Company
 * 
 * Usage: node generate-quote.js "[client-name]" "[event-type]" [dozens] "[flavors]" [date]
 * 
 * Example:
 * node generate-quote.js "Sarah Martinez" "Wedding" 8 "Churro Delight, Chocolate Chip" 2026-05-15
 */

import { writeFile } from 'fs/promises';

const [clientName, eventType, dozensRaw, flavors, date] = process.argv.slice(2);

if (!clientName || !eventType || !dozensRaw || !flavors || !date) {
  console.error(`
❌ Missing required arguments

Usage: node generate-quote.js "[name]" "[event-type]" [dozens] "[flavors]" [date]

Example:
  node generate-quote.js "Sarah Martinez" "Wedding" 8 "Churro Delight, Chocolate Chip" 2026-05-15
  `);
  process.exit(1);
}

const dozens = parseInt(dozensRaw, 10);

// Base pricing — confirm with Thurman before finalizing
const CLASSIC_PRICE_PER_DOZEN = 25;
const PREMIUM_PRICE_PER_DOZEN = 35;
const CELEBRATION_CAKE_PRICE = 35;

const flavorList = flavors.split(',').map(f => f.trim());
const premiumFlavors = ['churro', 'pb', 'peanut butter', 'premium'];
const isPremiumFlavor = flavorList.some(f => premiumFlavors.includes(f.toLowerCase()));

const cookieTotal = isPremiumFlavor 
  ? dozens * PREMIUM_PRICE_PER_DOZEN 
  : dozens * CLASSIC_PRICE_PER_DOZEN;

const depositAmount = Math.round(cookieTotal * 0.5);
const balanceAmount = cookieTotal - depositAmount;

// Format date for display
const eventDate = new Date(date + 'T00:00:00');
const formattedDate = eventDate.toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

const quote = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍪 JONESY'S COOKIE COMPANY — QUOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DATE: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
EVENT DATE: ${formattedDate}
CLIENT: ${clientName}
EVENT TYPE: ${eventType}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ORDER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍪 ${dozens} dozen — ${flavors}
   @ $${isPremiumFlavor ? PREMIUM_PRICE_PER_DOZEN : CLASSIC_PRICE_PER_DOZEN}/dozen

SUBTOTAL:                                    $${cookieTotal}

DEPOSIT (due at booking):                     $${depositAmount}
BALANCE (due 7 days before event):            $${balanceAmount}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TO CONFIRM THIS ORDER:
Send $${depositAmount} via Bakesy link or Venmo.

Once deposit is received, your date is locked in.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUESTIONS? TEXT THURMAN: (817) 205-1238
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();

console.log(quote);

// Save quote to research/quotes/[date]-[client-name].txt
try {
  const safeDate = date.replace(/-/g, '');
  const safeName = clientName.toLowerCase().replace(/\s+/g, '-');
  const outPath = `./research/quotes/${safeDate}-${safeName}.txt`;
  await writeFile(outPath, quote);
  console.log(`\n💾 Quote saved to: ${outPath}`);
} catch {
  // Folder might not exist, that's fine
}

export {};
