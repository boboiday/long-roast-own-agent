import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent writes 400 lines to fix a typo, then calls the diff 'a small cleanup' and waits for praise.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry must be 1-200 non-whitespace characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
