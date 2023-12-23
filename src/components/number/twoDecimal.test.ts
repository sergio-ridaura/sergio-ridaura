import numberTwoDecimalTest from "./twoDecimal.utils";
import { describe, it } from "vitest";
import { testClean } from "../vitest/test";

testClean();

describe("numberTwoDecimal. Transform a number to two decimal places.", (): void => {
  it("1. Return a number with two decimal places when given a positive integer.", (): void => {
    numberTwoDecimalTest(5, 5.0);
  });

  it("2. Return a number with two decimal places when given a positive float.", (): void => {
    numberTwoDecimalTest(3.14159, 3.14);
  });

  it("3. Return a number with two decimal places when given a negative integer.", (): void => {
    numberTwoDecimalTest(-3.14159, -3.14);
  });

  it("4. Return a 0 when given 0.", (): void => {
    numberTwoDecimalTest(0, 0);
  });

  it("5. Returns a number with two decimal places when given a positive float value, where rounding alters the digits.", (): void => {
    numberTwoDecimalTest(1999.9999, 2000.0);
  });

  it("6. Returns a number with two decimal places when given a negative float value, where rounding alters the digits.", (): void => {
    numberTwoDecimalTest(-1999.9999, -2000.0);
  });
});
