import idDefaultTest from "./default.utils";
import { describe, it } from "vitest";
import { testClean } from "../vitest/test";

testClean();

describe("idDefault. Used in components to avoid generating the `id` attribute in an element or to use the received identifier or the `default` identifier.", (): void => {
  it("Return undefined when all parameters are undefined.", () => {
    idDefaultTest(undefined, undefined, undefined);
  });

  it("Return the same id when id is defined and not `default`.", () => {
    idDefaultTest("123", undefined, "123");
  });

  it("Return idDefault when id is defined and `default`.", () => {
    idDefaultTest("default", "456", "456");
  });

  it("Return an empty string when id is an empty string.", () => {
    idDefaultTest("", undefined, "");
  });

  it("Return `default` when id is `default` and idDefault is undefined.", () => {
    idDefaultTest("default", undefined, undefined);
  });
});
