import testLogTest from "./log.utils";
import { describe, it } from "vitest";
import { testClean } from "./test";

testClean();

describe("log. Create a log file of the test in progress.", (): void => {
  it("1. Log of a text.", (): void => {
    testLogTest("Hello World!");
  });

  it("2 Log of a number.", (): void => {
    testLogTest(123);
  });

  it("3. Log of a variable.", (): void => {
    const data: string = "Hello World!";
    testLogTest(data);
  });

  it("4. Log of a array.", (): void => {
    const data: number[] = [0, 1, 2, 3];
    testLogTest(data);
  });

  it("5. Log of a object.", (): void => {
    const data: { text: string } = { text: "Hello World!" };
    testLogTest(data);
  });

  it("6. Log of a null.", (): void => {
    const data: null = null;
    testLogTest(data);
  });

  it("7. Log of a undefined.", (): void => {
    const data: undefined = undefined;
    testLogTest(data);
  });

  it("8. Log of a infinity.", (): void => {
    const data: number = Infinity;
    testLogTest(data);
  });
});
