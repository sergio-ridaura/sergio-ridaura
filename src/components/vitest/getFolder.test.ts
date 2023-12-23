import getFolder from "./getFolder";
import { describe, it } from "vitest";
import {
  testClean,
  testPerfInit,
  testPerfEnd,
  testLog,
  type TestPerfInitType,
} from "./test";

testClean();

describe("testGetFolder. Get folder name of active Vitest test.", (): void => {
  it("1. Return folder name.", (): void => {
    const performance: TestPerfInitType = testPerfInit();
    const result: string = getFolder();
    testPerfEnd(performance);

    testLog(result);
  });
});
