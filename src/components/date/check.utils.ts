import dateCheck from "./check";
import { expect } from "vitest";
import { testPerfInit, testPerfEnd, type TestPerfInitType } from "../vitest/test";

/**
 * Test of dateCheck function.
 */
export default function dateCheckTest(
  date: string | number,
  hasResult: boolean
): void {
  const performance: TestPerfInitType = testPerfInit();
  const result: boolean = dateCheck(date);
  testPerfEnd(performance);

  expect(result).toBe(hasResult);
  expect(result).toMatchSnapshot();
}
