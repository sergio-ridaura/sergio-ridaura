import dateCheckTest from "./check.utils";
import { describe, it } from "vitest";
import { testClean } from "../vitest/test";

testClean();

describe("dateCheck. Check that the date is correct.", (): void => {
  it("1. Return true when it receives a valid date.", (): void => {
    dateCheckTest("2023-09-18 21:21:06", true);
  });

  it("2. Returns true when receiving a valid date in linux format.", (): void => {
    dateCheckTest(1695074971, true);
  });

  it("3. Returns false when receiving a valid date in text and linux format.", (): void => {
    dateCheckTest("1695074971", false);
  });

  it("4. Return false when it receives a invalid date.", (): void => {
    dateCheckTest("2023-99-18 21:21:06", false);
  });

  it("5. Return true when it receives a valid year.", (): void => {
    dateCheckTest("2023", true);
  });
});
