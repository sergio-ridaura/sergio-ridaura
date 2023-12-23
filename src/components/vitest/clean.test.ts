import getFolder from "./getFolder";
import getFile from "./getFile";
import fs from "fs";
import { describe, it, expect } from "vitest";
import {
  testClean,
  testPerfInit,
  testPerfEnd,
  testLog,
  type TestPerfInitType,
} from "./test";

testClean();

describe("testClean. Clean up the log and performance files used in Vitest tests.", (): void => {
  it("1. Clean up.", (): void => {
    expect("snapshot").toMatchSnapshot();
    testLog("Hello World!");

    const pathFolder: string = getFolder();
    const fileName: string = getFile();
    const file: string = `${pathFolder}/__logs__/${fileName}.log`;

    const existLogs: boolean = fs.existsSync(file);
    expect(true).toBe(existLogs);

    const performance: TestPerfInitType = testPerfInit();
    testClean();
    testPerfEnd(performance);

    const nonExistLogs: boolean = fs.existsSync(file);
    expect(false).toBe(nonExistLogs);
  });
});
