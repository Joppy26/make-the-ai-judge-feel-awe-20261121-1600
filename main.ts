import { mkdirSync, writeFileSync } from "node:fs";

// One short text, written to leave its reader calmer and unhurried.
// It shows a slow scene instead of giving instructions: late light on old
// stone, a river finding its way, the first stars coming out.
const ENTRY =
  "Late light crosses the old stone wall, slow as a tide, and dust hangs gold in the still air. Below, the river finds its way around every rock. Above, the first stars come out one by one, like lanterns lit in empty rooms. Nothing here needs you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
