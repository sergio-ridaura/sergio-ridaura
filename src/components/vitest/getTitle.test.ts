import getTitle from "./getTitle";
import { describe, it, expect } from "vitest";
import {
  testClean,
  testPerfInit,
  testPerfEnd,
  type TestPerfInitType,
} from "./test";

testClean();

describe("testGetTitle. Get title of active Vitest test.", (): void => {
  it("1. Return title.", (): void => {
    const performance: TestPerfInitType = testPerfInit();
    const result: string = getTitle();
    testPerfEnd(performance);

    expect(result).toMatchSnapshot();
    expect(result).toBe("testGetTitle. Get title of active Vitest test.");
  });
});
