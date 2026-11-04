import { describe, expect, it } from "vitest";
import { readLinesFromFile } from "../utils.ts";

const day02 = (lines: string[], invalidFunction: (id: string) => boolean) => {
  const idRanges = lines[0].split(",");

  const invalidIds = idRanges.flatMap((idRange) => {
    const [start, end] = idRange.split("-").map(Number);
    const ids = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    return ids.filter((id) => invalidFunction(id.toString()));
  });

  return invalidIds.reduce((acc, curr) => acc + curr, 0);
};

const regexPart1 = /^([1-9]\d*)\1$/;
const part1Invalid = (id: string) => regexPart1.test(id);

const regexPart2 = /^([1-9]\d*)\1+$/;
const part2Invalid = (id: string) => regexPart2.test(id);

describe("Day 02", () => {
  it("part1example", () => {
    const lines = readLinesFromFile("tests/day02/day02example.txt");
    expect(day02(lines, part1Invalid)).toBe(1227775554);
  });

  it("part1", () => {
    const lines = readLinesFromFile("tests/day02/day02.txt");
    expect(day02(lines, part1Invalid)).toBe(19219508902);
  });

  it("part2example", () => {
    const lines = readLinesFromFile("tests/day02/day02example.txt");
    expect(day02(lines, part2Invalid)).toBe(4174379265);
  });

  it("part2", () => {
    const lines = readLinesFromFile("tests/day02/day02.txt");
    expect(day02(lines, part2Invalid)).toBe(27180728081);
  });
});
