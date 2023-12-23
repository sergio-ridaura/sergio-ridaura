import getFolder from "./getFolder";
import getFile from "./getFile";
import getTitle from "./getTitle";
import getDate from "./getDate";
import getText from "./getText";
import { describe, it, expect } from "vitest";
import {
  testClean,
  testPerfInit,
  testPerfEnd,
  type TestPerfInitType,
} from "./test";
import fs from "fs";

testClean();

describe("testPerfEnd. Create a file with performance data for the current test.", (): void => {
  it("1. Empty performance test.", (): void => {
    const performance: TestPerfInitType = testPerfInit();
    testPerfEnd(performance);

    const pathFolder: string = getFolder();
    const existFolder: boolean = fs.existsSync(pathFolder);
    expect(true).toBe(existFolder);
    expect(pathFolder).toMatchSnapshot();

    const pathFile: string = `${pathFolder}/__performances__/${getFile()}.log`;
    const existFile: boolean = fs.existsSync(pathFile);
    expect(true).toBe(existFile);
    expect(pathFile).toMatchSnapshot();

    const content = fs.readFileSync(pathFile, "utf8");

    const title: string = getTitle();
    expect(content).toContain(title);
    expect(title).toMatchSnapshot();

    const text: string = getText();
    expect(content).toContain(text);
    expect(text).toMatchSnapshot();

    const date: string = getDate();
    expect(content).toContain(date);

    const cpuUs: string = '{"cpuUs":';
    expect(content).toContain(cpuUs);
  });
});
