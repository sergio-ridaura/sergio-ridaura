import dateGetYearTest from "./getYear.utils";
import dateYearGet from "./getYear";
import { describe, it } from "vitest";
import { testClean } from "../vitest/test";

testClean();

describe("dateYearGet. Get date.", (): void => {
  const error: string = "error: invalid date";

  it("1. Return date when it receives a valid date.", (): void => {
    dateGetYearTest("2023-09-18 21:21:06", "2023", true);
  });

  it("2. Returns date when receiving a valid date in linux format.", (): void => {
    dateGetYearTest(1695074971, "2023", true);
  });

  it("3. Returns date when receiving a valid date in text and linux format.", (): void => {
    dateGetYearTest("1695074971", "2023", true);
  });

  it("4. Return error when it receives a invalid date.", (): void => {
    dateGetYearTest("2023-99-18 21:21:06", error, false);
  });

  it("5. Returns error when receiving a invalid date in text and linux format.", (): void => {
    dateGetYearTest("169507497%", error, false);
  });

  it("6. Return date when it receives a valid number.", (): void => {
    dateGetYearTest("2023", "1970", true);
  });

  it("7. Return date when it receives a zero number.", (): void => {
    dateGetYearTest("0", "1970", true);
  });

  it("8. Returns the current date when no data is received.", (): void => {
    dateGetYearTest(undefined, dateYearGet(), true);
  });
});
