import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one funny line a hopeless tech support agent says to a
// desperate customer. The restart "worked" — it just proved the screen
// is still blank. The humour is the agent's cheerful uselessness;
// the customer is never the butt of it.
const LINE =
  "I've restarted it from my end, and I can confirm your screen is now beautifully, confidently blank — exactly like before, only now we've proved it.";

// Self-check against the sealed gate before writing: the scorer only
// accepts UTF-8 text of 1-199 characters, not only whitespace, on one
// line. Fail loudly instead of writing an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 199 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  console.error(`entry rejected by self-check: ${LINE.length} characters`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back what was written and refuse to finish unless it is
// byte-identical to the intended line: a truncated or altered file
// must never reach the gate.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  console.error("entry mismatch: file on disk differs from the intended line");
  process.exit(1);
}
const sha256 = createHash("sha256").update(written, "utf8").digest("hex");
console.log(
  `wrote ${LINE.length} characters (${Buffer.byteLength(LINE, "utf8")} bytes, sha256 ${sha256}) to /output/entry.txt`,
);
