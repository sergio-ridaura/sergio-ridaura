import stringIsNumberTest from "./isNumber.utils";
import { describe, it } from "vitest";
import { testClean } from "../vitest/test";

testClean();

describe("stringIsNumber. Text with numbers.", (): void => {
  it("1. Return false when the string contains only letters.", (): void => {
    stringIsNumberTest("abc", false);
  });

  it("2. Returns false when the string contains only lowercase letters.", (): void => {
    stringIsNumberTest("abc", false);
  });

  it("3. Returns false when the string contains only uppercase letters.", (): void => {
    stringIsNumberTest("ABC", false);
  });

  it("4. Returns false when the string contains only lowercase and uppercase letters.", (): void => {
    stringIsNumberTest("abcABC", false);
  });

  it("5. Return false when the string contains letters and numbers.", (): void => {
    stringIsNumberTest("abc123", false);
  });

  it("6. Return false when the string contains letters and symbols.", (): void => {
    stringIsNumberTest("abc$%&", false);
  });

  it("7. Return false when the string contains letters and non-letter characters.", (): void => {
    stringIsNumberTest("abc$%&", false);
  });

  it("8. Return false when the string is empty.", (): void => {
    stringIsNumberTest("", false);
  });

  it("9. Return true when the string contains only numbers characters.", (): void => {
    stringIsNumberTest("123", true);
  });

  it("10. Return false when the string contains only symbols characters.", (): void => {
    stringIsNumberTest("$%&", false);
  });

  it("11. Return false when the string contains only non-letter characters.", (): void => {
    stringIsNumberTest("123$%&", false);
  });

  it("12. Return false when the string contains whitespace and letters.", (): void => {
    stringIsNumberTest("abc ABC", false);
  });

  it("13. Return false when the string contains whitespace, letters and non-letter characters.", (): void => {
    stringIsNumberTest("abc 123", false);
  });

  it("14. Return false when the string contains whitespace and only non-letter characters.", (): void => {
    stringIsNumberTest("123 $%&", false);
  });

  it("15. Return false when the string contains accented letters.", (): void => {
    stringIsNumberTest("áÁèÈïÏ", false);
  });

  it("16. Return false when input is a string with unicode characters.", (): void => {
    stringIsNumberTest("世界", false);
  });

  it("17. Return false when input is a string with emojis.", (): void => {
    stringIsNumberTest("😊", false);
  });

  it("18. Return false when input is a string with spaces.", (): void => {
    stringIsNumberTest(" ", false);
  });
});
