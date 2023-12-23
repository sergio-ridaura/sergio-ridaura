import getDate from "./getDate";
import dateCheck from "../date/check";
import { describe, it, expect } from "vitest";
import {
  testClean,
  testPerfInit,
  testPerfEnd,
  testLog,
  type TestPerfInitType,
} from "./test";

testClean();

describe("testGetDate. Get date.", (): void => {
  it("1. Returns the current date.", (): void => {
    const performance: TestPerfInitType = testPerfInit();
    const result: string = getDate();
    testPerfEnd(performance);

    const validate = dateCheck(result);
    expect(validate).toBe(true);

    testLog(result);
  });
});
