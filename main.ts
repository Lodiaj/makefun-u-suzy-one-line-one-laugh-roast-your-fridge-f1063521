import * as fs from "node:fs";

const ROAST =
  "My fridge's crisper drawer is where vegetables go to file for retirement — nothing comes out crisp, everything comes out tired.";

function checkRoast(line: string): void {
  const trimmed = line.trim();
  if (trimmed.length === 0) {
    throw new Error("roast is empty");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("roast must be exactly one line");
  }
  if (line.length > 200) {
    throw new Error(
      `roast is ${line.length} characters, over the 200 limit`,
    );
  }
  const subject = line.toLowerCase();
  if (!subject.includes("fridge") && !subject.includes("phone")) {
    throw new Error("roast must name a fridge or a phone");
  }
}

checkRoast(ROAST);
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ROAST, "utf8");
