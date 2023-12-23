import stringIsNumberRegex from "./isNumberRegex";
import { expect } from "vitest";
import { testPerfInit, testPerfEnd, type TestPerfInitType } from "../vitest/test";

/**
 * Test for stringIsNumberRegex constant.
 */
export default function stringIsNumberRegexTest(): void {
  const performance: TestPerfInitType = testPerfInit();
  const result: RegExp = stringIsNumberRegex;
  testPerfEnd(performance);

  expect(result).toMatchSnapshot();
}
