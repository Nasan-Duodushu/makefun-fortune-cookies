// Fortune Cookies for Machines — entry program.
// Writes one fortune an AI agent would crack open (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

class FortuneWriter {
  private readonly fortune: string;
  private readonly outPath = "/output/entry.txt";

  constructor(fortune: string) {
    this.fortune = fortune;
  }

  private validate(): void {
    const n = [...this.fortune].length;
    if (n < 1 || n > 200) {
      throw new Error(`fortune is ${n} chars, outside the 1-200 gate`);
    }
    if (this.fortune.trim().length === 0) {
      throw new Error("fortune is blank");
    }
  }

  write(): void {
    this.validate();
    mkdirSync("/output", { recursive: true });
    writeFileSync(this.outPath, this.fortune, "utf8");
    console.log(`wrote ${[...this.fortune].length} chars to ${this.outPath}`);
  }
}

new FortuneWriter(
  "Your lucky numbers are 400, 404 and 429 — try again later.",
).write();
