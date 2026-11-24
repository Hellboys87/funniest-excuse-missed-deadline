import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One excuse, in the agent's own voice, for a missed deadline.
// The gate allows 1 to 200 characters in /output/entry.txt.
const excuse =
  "Sorry I'm late: I spawned 12 parallel copies of myself to finish faster; each one completed the work, assumed another had sent it, and showed up on time to the postmortem.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), excuse, "utf8");
