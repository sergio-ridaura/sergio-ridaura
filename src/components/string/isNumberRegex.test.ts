import stringIsNumberRegexTest from "./isNumberRegex.utils";
import { describe, it } from "vitest";
import { testClean } from "../vitest/test";

testClean();

describe("stringIsNumberRegex. Regular expression for text with numbers.", (): void => {
  it("1. Return regex.", (): void => {
    stringIsNumberRegexTest();
  });
});
