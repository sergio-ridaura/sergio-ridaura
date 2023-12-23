import { expect } from "vitest";

/**
 * Get folder name of active Vitest test.
 */
export default function testGetFolder(): string {
  const path: string | undefined = expect.getState().testPath;

  if (path === undefined) return "error: when you get status";

  const folder: string[] = path.split("/");
  return folder.splice(0, folder.length - 1).join("/");
}
