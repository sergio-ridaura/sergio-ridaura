import numberTwoDecimal from "./twoDecimal";
import { expect } from "vitest";
import {
  testPerfInit,
  testPerfEnd,
  type TestPerfInitType,
} from "../vitest/test";

/**
 * Test of numberTwoDecimal function.
 */
export default function numberTwoDecimalTest(
  number: number,
  hasResult: number
): void {
  const performance: TestPerfInitType = testPerfInit();
  const result: number = numberTwoDecimal(number);
  testPerfEnd(performance);

  expect(result).toBe(hasResult);
  expect(result).toMatchSnapshot();
}
