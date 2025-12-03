import * as fs from "fs";

export const readLinesFromFile = (filePath: string) =>
  fs.readFileSync(filePath, "utf-8").split(/\r?\n/);
