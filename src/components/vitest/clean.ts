import getFolder from "./getFolder";
import getFile from "./getFile";
import fs from "fs";

/**
 * Clean up the log and performance files used in Vitest tests.
 */
export default function testClean(): void {
  const folder: string = getFolder();
  const fileLog: string = `${folder}/__logs__/${getFile()}.log`;
  const filePrf: string = `${folder}/__performances__/${getFile()}.log`;

  try {
    fs.unlinkSync(fileLog);
  } catch (error) {}

  try {
    fs.unlinkSync(filePrf);
  } catch (error) {}
}
