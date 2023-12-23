import type TestPerfInitType from "./perfInit.types";
import numberTwoDecimal from "../number/twoDecimal";

/**
 * Start of performance analysis of a block in JavaScript.
 */
export default function testPerfInit(): TestPerfInitType {
  return {
    cpuUs: process.cpuUsage(),
    memoryKb: process.memoryUsage().heapUsed,
    timeMs: numberTwoDecimal(performance.now()),
  };
}
