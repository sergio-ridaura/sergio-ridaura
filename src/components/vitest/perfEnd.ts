import numberTwoDecimal from "../number/twoDecimal";
import getFolder from "./getFolder";
import getFile from "./getFile";
import getTitle from "./getTitle";
import getDate from "./getDate";
import getText from "./getText";
import type TestPerfInitType from "./perfInit.types";
import type TestPerfEndType from "./perfEnd.types";
import fs from "fs";

/**
 * Create a file with performance data for the current test.
 */
export default function testPerfEnd(perf: TestPerfInitType): void {
  const folder: string = getFolder();
  const file: string = `${folder}/__performances__/${getFile()}.log`;

  if (!fs.existsSync(`${folder}/__performances__`)) {
    fs.mkdirSync(`${folder}/__performances__`, { recursive: true });
  }

  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, `"${getTitle()}"\n\n`);
  }

  fs.appendFileSync(file, `[${getDate()}]\n`);
  fs.appendFileSync(file, `"${getText()}"\n\n`);

  const results: TestPerfEndType = {
    cpuUs: process.cpuUsage(perf.cpuUs).user,
    memoryKb: process.memoryUsage().heapUsed - perf.memoryKb,
    timeMs: numberTwoDecimal(performance.now() - perf.timeMs),
  };

  fs.appendFileSync(file, `${JSON.stringify(results)}\n\n`);
}
