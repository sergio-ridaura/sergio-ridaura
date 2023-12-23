import getFolder from "./getFolder";
import getFile from "./getFile";
import getTitle from "./getTitle";
import getDate from "./getDate";
import getText from "./getText";
import fs from "fs";

/**
 * Create a log file of the test in progress.
 */
export default function testLog(data: any): void {
  const folder: string = getFolder();
  const type: string = "__logs__";
  const file: string = `${folder}/${type}/${getFile()}.log`;

  if (!fs.existsSync(`${folder}/${type}`)) {
    fs.mkdirSync(`${folder}/${type}`, { recursive: true });
  }

  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, `"${getTitle()}"\n\n`);
  }

  fs.appendFileSync(file, `[${getDate()}]\n`);
  fs.appendFileSync(file, `"${getText()}"\n\n`);
  fs.appendFileSync(file, `${JSON.stringify(data)}\n\n`);
}
