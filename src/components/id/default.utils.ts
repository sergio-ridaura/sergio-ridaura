import idDefault from "./default";
import { expect } from "vitest";
import {
  testPerfInit,
  testPerfEnd,
  type TestPerfInitType,
} from "../vitest/test";

/**
 * Test for idDefault function.
 */
export default function idDefaultTest(
  id: string | undefined,
  idDefaultText: string | undefined,
  hasResult: string | undefined
): void {
  const performance: TestPerfInitType = testPerfInit();
  const result: string | undefined = idDefault(id, idDefaultText);
  testPerfEnd(performance);

  expect(result).toBe(hasResult);
  expect(result).toMatchSnapshot();
}
