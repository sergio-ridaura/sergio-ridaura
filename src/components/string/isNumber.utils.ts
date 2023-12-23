import stringIsNumber from "./isNumber";
import { expect } from "vitest";
import { testPerfInit, testPerfEnd, type TestPerfInitType } from "../vitest/test";

/**
 * Test for stringIsNumber function.
 */
export default function stringIsNumberTest(
  text: string,
  hasResult: boolean
): void {
  const performance: TestPerfInitType = testPerfInit();
  const result = stringIsNumber(text);
  testPerfEnd(performance);

  expect(result).toBe(hasResult);
  expect(result).toMatchSnapshot();
}
