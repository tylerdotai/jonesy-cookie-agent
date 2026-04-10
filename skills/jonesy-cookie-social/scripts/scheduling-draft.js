#!/usr/bin/env node
/**
 * Scheduling Draft Generator
 * Formats social post content into a ready-to-approve scheduling draft
 * 
 * Usage: node scheduling-draft.js [day] [content-type] "[caption]" [image-path]
 * 
 * Example:
 * node scheduling-draft.js Saturday "Flavor Reveal" "These almost didn't make the menu..." ./research/images/churro.png
 */

import { writeFile } from 'fs/promises';
import { join } from 'path';

const [day, contentType, caption, imagePath] = process.argv.slice(2);

if (!day || !contentType || !caption) {
  console.error(`
❌ Missing required arguments

Usage: node scheduling-draft.js [day] [content-type] "[caption]" [image-path]

Required:
  day          - e.g., "Saturday"
  content-type - e.g., "Flavor Reveal", "Event Promo", "Behind-the-Scenes"
  caption      - The full caption text in quotes

Optional:
  image-path   - Path to the image file

Example:
  node scheduling-draft.js Saturday "Flavor Reveal" "Hook line here..." ./images/churro.png
  `);
  process.exit(1);
}

const now = new Date().toISOString().split('T')[0];

const draft = `📅 ${day.toUpperCase()} — ${contentType.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📸 IMAGE: ${imagePath || '[Generate with MiniMax — see image-prompts.md]'}

📝 CAPTION:
${caption}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 METADATA:
Day: ${day}
Content Type: ${contentType}
Image: ${imagePath || 'TBD — generate first'}
Drafted: ${now}

✅ READY FOR THURMAN APPROVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

console.log(draft);

// Also write to ./research/scheduled/ as a backup record
try {
  const safeName = `${day.toLowerCase()}-${contentType.toLowerCase().replace(/\s+/g, '-')}-${now}.txt`;
  const outPath = join('./research/scheduled', safeName);
  await writeFile(outPath, draft);
  console.log(`\n💾 Draft saved to: ${outPath}`);
} catch {
  // Folder might not exist, that's fine
}

export {};
