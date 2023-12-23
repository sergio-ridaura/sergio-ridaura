import numberIsTest from "./is.utils";
import { describe, it } from "vitest";
import { testClean } from "../vitest/test";

testClean();

describe("numberIs. Is number.", (): void => {
  it("1. Return true when input is a positive integer.", (): void => {
    numberIsTest(5, true);
  });

  it("2. Return true when input is a negative integer.", (): void => {
    numberIsTest(-5, true);
  });

  it("3. Return true when input is zero.", (): void => {
    numberIsTest(0, true);
  });

  it("4. Return false when input is null.", (): void => {
    numberIsTest(null, false);
  });

  it("5. Return false when input is undefined.", (): void => {
    numberIsTest(undefined, false);
  });

  it("6. Return true when input is a decimal number.", (): void => {
    numberIsTest(10.9, true);
  });

  it("7. Return true for exponential notation input.", (): void => {
    numberIsTest(1e10, true);
  });

  it("8. Return true for Infinity input.", (): void => {
    numberIsTest(Infinity, true);
  });

  it("9. Return true for -Infinity input.", (): void => {
    numberIsTest(-Infinity, true);
  });

  it("10. Return false for NaN input.", (): void => {
    numberIsTest(NaN, false);
  });

  it("11. Return false for true boolean input.", (): void => {
    numberIsTest(true, false);
  });

  it("12. Return false for false boolean input.", (): void => {
    numberIsTest(false, false);
  });

  it("13. Return false for string input.", (): void => {
    numberIsTest("1234", false);
  });

  it("14. Return false for object input.", (): void => {
    numberIsTest({ number: 1234 }, false);
  });

  it("15. Return false for array input.", (): void => {
    numberIsTest([1234], false);
  });

  it("16. Return false when input has leading/trailing spaces.", (): void => {
    numberIsTest(" 5 ", false);
  });

  it("17. Return false when input has leading/trailing non-numeric characters.", (): void => {
    numberIsTest("abc123", false);
  });

  it("18. Return false when input has non-numeric characters in between.", (): void => {
    numberIsTest("1a2", false);
  });

  it("19. Return false when input is a string with unicode characters.", (): void => {
    numberIsTest("世界", false);
  });

  it("20. Return false when input is a string with emojis.", (): void => {
    numberIsTest("😊", false);
  });

  it("21. Return false when input is an empty string.", (): void => {
    numberIsTest("", false);
  });

  it("22. Return false when the string contains accented letters.", (): void => {
    numberIsTest("áÁèÈïÏ", false);
  });

  it("23. Return false when input is a string with spaces.", (): void => {
    numberIsTest(" ", false);
  });
});
