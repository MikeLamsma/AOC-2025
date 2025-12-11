import { describe, expect, it } from "vitest";
import { readLinesFromFile } from "../utils.ts";

const day11 = (lines: string[]) => {
  const map = new Map<string, string[]>();

  lines.forEach((line) => {
    const device = line.slice(0, 3);
    const outputsTo = line.slice(5).split(" ");
    map.set(device, outputsTo);
  });

  return recursion(map, "you");
};

const recursion = (map: Map<string, string[]>, value: string): number => {
  if (value === "out") return 1;

  return map
    .get(value)!
    .reduce((acc, currentValue) => acc + recursion(map, currentValue), 0);
};

describe("day11", () => {
  it("part1example", () => {
    const lines = readLinesFromFile("tests/day11/day11example.txt");
    expect(day11(lines)).toEqual(5);
  });

  it("part1", () => {
    const lines = readLinesFromFile("tests/day11/day11.txt");
    expect(day11(lines)).toEqual(724);
  });
});
