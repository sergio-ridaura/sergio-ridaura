import dateGetTest from "./get.utils";
import dateGet from "./get";
import { describe, it } from "vitest";
import { testClean } from "../vitest/test";

testClean();

describe("dateGet. Get date.", (): void => {
  const error: string = "error: invalid date";

  it("1. Return date when it receives a valid date.", (): void => {
    dateGetTest("2023-09-18 21:21:06", "2023-09-18 21:21:06", true);
  });

  it("2. Returns date when receiving a valid date in linux format.", (): void => {
    dateGetTest(1695074971, "2023-09-18 22:09:31", true);
  });

  it("3. Returns date when receiving a valid date in text and linux format.", (): void => {
    dateGetTest("1695074971", "2023-09-18 22:09:31", true);
  });

  it("4. Return error when it receives a invalid date.", (): void => {
    dateGetTest("2023-99-18 21:21:06", error, false);
  });

  it("5. Returns error when receiving a invalid date in text and linux format.", (): void => {
    dateGetTest("169507497%", error, false);
  });

  it("6. Return date when it receives a valid number.", (): void => {
    dateGetTest("2023", "1970-01-01 00:33:43", true);
  });

  it("7. Return date when it receives a zero number.", (): void => {
    dateGetTest("0", "1970-01-01 00:00:00", true);
  });

  it("8. Returns the current date when no data is received.", (): void => {
    dateGetTest(undefined, dateGet(), true);
  });
});
