import { expect } from "vitest";

/**
 * Get text of active Vitest test.
 */
export default function testGetText(): string {
  const text: string | undefined = expect.getState().currentTestName;

  if (text === undefined) return "error: when you get status";

  const paragraph: string[] = text.split("> ");
  return paragraph.splice(2).join(". ");
}
