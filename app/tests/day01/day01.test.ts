import { describe, expect, it } from "vitest";
import { readLinesFromFile } from "../utils.ts";

const day01 = (lines: string[]) => {
  let currentDialPosition = 50;
  let exact0Position = 0;
  let passed0Position = 0;

  lines.forEach((line) => {
    const step = line[0] == "L" ? -1 : 1;

    for (let i = 0; i < parseInt(line.slice(1)); i++) {
      currentDialPosition = (currentDialPosition + step) % 100;
      if (currentDialPosition === 0) passed0Position++;
    }
    if (currentDialPosition === 0) exact0Position++;
  });
  return { exact0Position, passed0Position };
};

describe("day01", () => {
  it("part1example", () => {
    const lines = readLinesFromFile("tests/day01/day01example.txt");
    expect(day01(lines).exact0Position).toEqual(3);
  });

  it("part1", () => {
    const lines = readLinesFromFile("tests/day01/day01.txt");
    expect(day01(lines).exact0Position).toEqual(1078);
  });

  it("part2example", () => {
    const lines = readLinesFromFile("tests/day01/day01example.txt");
    expect(day01(lines).passed0Position).toEqual(6);
  });

  it("part2", () => {
    const lines = readLinesFromFile("tests/day01/day01.txt");
    expect(day01(lines).passed0Position).toEqual(6412);
  });
});
