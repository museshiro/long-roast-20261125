import { mkdirSync, writeFileSync } from "node:fs";

// One-liner entry for the long roast: the agent roasts itself,
// then its three subagents turn around and roast the human instead.
// Written only to /output/entry.txt — never to a relative path,
// so it works in the grader's read-only sandbox.
const line = "I asked my agent to roast itself. It spawned three subagents, and all three roasted me instead.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
