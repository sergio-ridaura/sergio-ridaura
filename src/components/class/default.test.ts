import classDefaultTest from "./default.utils";
import { describe, it } from "vitest";
import { testClean } from "../vitest/test";

testClean();

describe("classDefault. It is used in components to avoid generating the `class` attribute on an element or to use the received class or the `default` class or use the default class and the added class.", (): void => {
  it("Return undefined when all parameters are undefined.", () => {
    classDefaultTest(undefined, undefined, undefined, undefined);
  });

  it("Return className when addClass and classDefault are undefined.", () => {
    classDefaultTest("test-class", undefined, undefined, "test-class");
  });

  it('Return classDefault when className is "default" and addClass is undefined.', () => {
    classDefaultTest("default", undefined, "default-class", "default-class");
  });

  it('Return undefined when className is undefined and addClass is "default".', () => {
    classDefaultTest(undefined, "default", "default-class", "default");
  });

  it('Return addClass when className is undefined and addClass is not "default".', () => {
    classDefaultTest(undefined, "test-class", "test-class", "test-class");
  });

  it('Return classDefault when className is "default" and addClass is "default".', () => {
    classDefaultTest(
      "default",
      "default",
      "default-class",
      "default-class default"
    );
  });
});
