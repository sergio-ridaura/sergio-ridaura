import numberIs from "./is";
import { expect } from "vitest";
import {
  testPerfInit,
  testPerfEnd,
  type TestPerfInitType,
} from "../vitest/test";

/**
 * Test for numberIs function.
 */
export default function numberIsTest(number: any, hasResult: boolean): void {
  const performance: TestPerfInitType = testPerfInit();
  const result = numberIs(number);
  testPerfEnd(performance);

  expect(result).toBe(hasResult);
  expect(result).toMatchSnapshot();
}
