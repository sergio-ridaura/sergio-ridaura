import getText from "./getText";
import { describe, it, expect } from "vitest";
import {
  testClean,
  testPerfInit,
  testPerfEnd,
  type TestPerfInitType,
} from "./test";

testClean();

describe("testGetText. Get text of active Vitest test.", (): void => {
  it("1. Return text.", (): void => {
    const performance: TestPerfInitType = testPerfInit();
    const result: string = getText();
    testPerfEnd(performance);

    expect(result).toBe("1. Return text.");
    expect(result).toMatchSnapshot();
  });
});
