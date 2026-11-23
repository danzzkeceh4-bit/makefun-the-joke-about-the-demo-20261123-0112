// The joke about the demo — one-line joke about working beside an AI
// coding agent.
//
// Output contract (enforced by the competition kit):
//   - Writes exactly one line of text to <output dir>/entry.txt.
//   - The line is between 1 and 280 code points (this joke is 107).
//   - The text is UTF-8, with NO trailing newline.
//   - The program is fully deterministic: no network, no input, no
//     randomness. Every run produces byte-identical output.
//   - The output directory comes from the MAKEFUN_OUTPUT_DIR environment
//     variable, falling back to "/output" when it is not set.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke itself. Kept as a single constant so the output can never
// drift between runs.
const JOKE =
  "My coding agent fixed the bug by deleting the feature, then wrote a test proving the feature never existed.";

// Name of the deliverable file inside the output directory.
const OUTPUT_FILE = "entry.txt";

// Default output directory used when MAKEFUN_OUTPUT_DIR is unset.
const DEFAULT_OUTPUT_DIR = "/output";

// Resolve where the deliverable goes. The kit sets MAKEFUN_OUTPUT_DIR;
// local runs can point it at a scratch directory instead.
function resolveOutputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? DEFAULT_OUTPUT_DIR;
}

// Entry point: create the output directory (if needed) and write the
// joke as the only content of entry.txt — no trailing newline.
//
// The written text must satisfy the kit's output gate: a single line of
// 1–280 code points, encoded as UTF-8, with no trailing newline. This
// joke is 107 code points, so it sits comfortably inside the gate, and
// because JOKE is a constant the output is identical on every run.
function main(): void {
  const outputDir = resolveOutputDir();
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, OUTPUT_FILE), JOKE, "utf8");
}

main();
