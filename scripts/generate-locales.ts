/**
 * Generate locale message directories for all supported locales.
 * Copies English messages as templates for locales that don't have translations yet.
 *
 * Usage: npx tsx scripts/generate-locales.ts
 */

import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
} from "fs";
import { join } from "path";

// Read locale codes from locales.ts by parsing the file
const localesFilePath = join(__dirname, "../src/i18n/locales.ts");
const localesFileContent = readFileSync(localesFilePath, "utf-8");

// Extract all locale codes using regex
const codeMatches = localesFileContent.matchAll(/code:\s*"([a-z]{2,3})"/g);
const localeCodes = Array.from(codeMatches, (m) => {
  const code = m[1];
  if (code === undefined) {
    throw new Error("Failed to extract locale code from match");
  }
  return code;
});

const messagesDir = join(__dirname, "../messages");
const enDir = join(messagesDir, "en");

// Get all namespace files from the English directory
const namespaceFiles = readdirSync(enDir).filter((f) => f.endsWith(".json"));

let created = 0;
let skipped = 0;

for (const code of localeCodes) {
  const localeDir = join(messagesDir, code);

  // Create directory if it doesn't exist
  if (!existsSync(localeDir)) {
    mkdirSync(localeDir, { recursive: true });
  }

  for (const file of namespaceFiles) {
    const targetPath = join(localeDir, file);

    if (existsSync(targetPath)) {
      skipped++;
      continue;
    }

    // Copy English file as template
    const enContent = readFileSync(join(enDir, file), "utf-8");
    writeFileSync(targetPath, enContent, "utf-8");
    created++;
  }
}

console.log(`\n✅ Locale generation complete!`);
console.log(`   Created: ${created} files`);
console.log(`   Skipped: ${skipped} files (already exist)`);
console.log(`   Total locales: ${localeCodes.length}`);
console.log(`   Namespaces: ${namespaceFiles.length}`);
