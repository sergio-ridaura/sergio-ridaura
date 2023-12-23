import classDefault from "./default";
import { expect } from "vitest";
import {
  testPerfInit,
  testPerfEnd,
  type TestPerfInitType,
} from "../vitest/test";

/**
 * Test for classDefault function.
 */
export default function classDefaultTest(
  className: string | undefined,
  addClass: string | undefined,
  classDefaultText: string | undefined,
  hasResult: string | undefined
): void {
  const performance: TestPerfInitType = testPerfInit();
  const result: string | undefined = classDefault(
    className,
    addClass,
    classDefaultText
  );
  testPerfEnd(performance);

  expect(result).toBe(hasResult);
  expect(result).toMatchSnapshot();
}
