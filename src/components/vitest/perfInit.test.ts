import { describe, it, expect } from "vitest";
import {
  testClean,
  testPerfInit,
  testPerfEnd,
  testLog,
  type TestPerfInitType,
} from "./test";

testClean();

describe("testPerfInit. Start of performance analysis of a block in JavaScript.", (): void => {
  it("1. Start of performance analysis.", (): void => {
    const performance: TestPerfInitType = testPerfInit();
    testPerfEnd(performance);

    expect(performance).toHaveProperty("cpuUs");
    expect(performance).toHaveProperty("memoryKb");
    expect(performance).toHaveProperty("timeMs");

    testLog(performance);
  });
});
