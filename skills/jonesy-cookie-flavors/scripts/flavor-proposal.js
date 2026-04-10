#!/usr/bin/env node
/**
 * Flavor Proposal Generator
 * Generates a complete flavor proposal for Jonesy's Cookie Company
 * 
 * Usage: node flavor-proposal.js "[flavor-name]" "[description]" [tier] [launch-date]
 * 
 * Example:
 * node flavor-proposal.js "Honey Walnut" "Butter-rich cookie with walnuts and local honey" "Classic" 2026-03-01
 */

const [flavorName, description, tier, launchDate] = process.argv.slice(2);

if (!flavorName || !description || !tier || !launchDate) {
  console.error(`
❌ Missing required arguments

Usage: node flavor-proposal.js "[flavor-name]" "[description]" [tier] [launch-date]

Tier options: Classic (Gourmet) or Premium
Date format: YYYY-MM-DD

Example:
  node flavor-proposal.js "Honey Walnut" "Butter-rich cookie with walnuts and local honey" "Classic" 2026-03-01
  `);
  process.exit(1);
}

const tierLabel = tier.toLowerCase().includes('premium') ? 'Premium Tier' : 'Gourmet Classic';
const tierPrice = tier.toLowerCase().includes('premium') ? '$30-45/dozen' : '$20-30/dozen';
const dateFormatted = new Date(launchDate + 'T00:00:00').toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

const proposal = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍪 NEW FLAVOR PROPOSAL: ${flavorName.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DESCRIPTION:
${description}

PRICE TIER: ${tierLabel} (${tierPrice})

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LAUNCH COPY — INSTAGRAM/FACEBOOK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[HOOK — 1 line about the flavor]

[2-3 sentences describing the flavor, who it's for, when to have it]

📍 Available ${dateFormatted} through [END DATE] only
📦 Order via DM or (817) 205-1238

#[FlavorHashtag] #JonesysCookies #DFWCookies #ThickAndGooey

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMAGE PROMPT (MiniMax):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Professional food photography of ${flavorName.toLowerCase()} cookies from Jonesy's Cookie Company. Thick, gooey, golden brown on white marble. Natural lighting. Top-down angle. Warm Texas bakery aesthetic. No text overlay.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHY IT WORKS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Fill in: seasonality, trend fit, differentiator]

PROPOSED LAUNCH DATE: ${dateFormatted}
CAMPAIGN HOOK: [Limited Run / Event Tie-In / Insider Drop / Flavor Showdown]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ FOR THURMAN APPROVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();

console.log(proposal);
export {};
