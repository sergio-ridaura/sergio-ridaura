import getFile from "./getFile";
import { describe, it, expect } from "vitest";
import {
  testClean,
  testPerfInit,
  testPerfEnd,
  type TestPerfInitType,
} from "./test";

testClean();

describe("testGetFile. Get file name of active Vitest test.", (): void => {
  it("1. Return file name.", (): void => {
    const performance: TestPerfInitType = testPerfInit();
    const result: string = getFile();
    testPerfEnd(performance);

    expect(result).toBe("getFile.test.ts");
    expect(result).toMatchSnapshot();
  });
});
