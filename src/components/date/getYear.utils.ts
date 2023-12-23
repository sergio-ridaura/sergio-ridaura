import dateGet from "./getYear";
import dateCheck from "./check";
import { expect } from "vitest";
import { testPerfInit, testPerfEnd, type TestPerfInitType } from "../vitest/test";

/**
 * Test for dateGetYear function.
 */
export default function dateGetYearTest(
  date?: string | number,
  hasResult?: string,
  hasValidate: boolean = true
): void {
  let result: string;

  if (date === undefined) {
    const performance: TestPerfInitType = testPerfInit();
    result = dateGet();
    testPerfEnd(performance);
  } else {
    const performance: TestPerfInitType = testPerfInit();
    result = dateGet(date);
    testPerfEnd(performance);
  }

  expect(result).toBe(hasResult);

  if (date !== undefined) {
    expect(result).toMatchSnapshot();
  }

  const validate = dateCheck(result);
  expect(validate).toBe(hasValidate);
}
