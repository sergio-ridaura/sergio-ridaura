import getFolder from "./getFolder";
import getFile from "./getFile";
import getTitle from "./getTitle";
import getText from "./getText";
import getDate from "./getDate";
import fs from "fs";
import { expect } from "vitest";
import {
  testPerfInit,
  testPerfEnd,
  testLog,
  type TestPerfInitType,
} from "./test";

/**
 * Test of testLog function.
 */
export default function testLogTest(data: any): void {
  const performance: TestPerfInitType = testPerfInit();
  testLog(data);
  testPerfEnd(performance);

  const pathFolder: string = getFolder();
  const existFolder: boolean = fs.existsSync(pathFolder);
  expect(true).toBe(existFolder);
  expect(pathFolder).toMatchSnapshot();

  const pathFile: string = `${pathFolder}/__logs__/${getFile()}.log`;
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

  const logData: string = `${JSON.stringify(data)}`;
  expect(content).toContain(logData);
  expect(logData).toMatchSnapshot();
}
