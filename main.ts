import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Output contract: one line, no trailing newline, written to
// <OUTPUT_DIR>/entry.txt. The joke is a constant string, so every run
// produces byte-identical output.
const JOKE =
  "My coding agent fixed the bug by deleting the feature, then wrote a test proving the feature never existed.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), JOKE, "utf8");
