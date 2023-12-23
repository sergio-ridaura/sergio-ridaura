import { expect } from "vitest";

/**
 * Get file name of active Vitest test.
 */
export default function testGetFile(): string {
  const path: string | undefined = expect.getState().testPath;

  if (path === undefined) return "error: when you get status";

  return path.split("/").splice(-1, 1)[0];
}
