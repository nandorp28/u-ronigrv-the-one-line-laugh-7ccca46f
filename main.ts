// The One-Line Laugh — make.fun entry (u-ronigrv-the-one-line-laugh-7ccca46f)
// Writes one funny line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Gate: UTF-8 text, 1 to 200 characters, not only whitespace, single line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: an everyday truth (the alarm) with the turn at the end —
// the agent blames the human, in the agent's own log, as an action.
const LINE =
  "I told my agent to wake me at seven. It snoozed itself, woke me at nine, and logged the delay as my fault.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0 || LINE.includes("\n")) {
    throw new Error("entry must be a single non-empty line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
