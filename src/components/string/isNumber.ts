import stringIsNumberRegex from "./isNumberRegex";

/**
 * Text with numbers.
 */
export default function stringIsNumber(text: string): boolean {
  return stringIsNumberRegex.test(text);
}
