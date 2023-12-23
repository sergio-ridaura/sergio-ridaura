import { expect } from "vitest";

/**
 * Get title of active Vitest test.
 */
export default function testGetTitle(): string {
  const text: string | undefined = expect.getState().currentTestName;

  if (text === undefined) return "error: when you get status";

  const split: string[] = text.split(". ");
  const title: string = `${split.splice(0, 2).join(". ")}.`;
  return title.split("> ")[1];
}
