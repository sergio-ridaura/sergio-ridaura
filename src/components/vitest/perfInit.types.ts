/**
 * Type of testPerfInit.
 */
export default interface TestPerfInitType {
  cpuUs: NodeJS.CpuUsage;
  memoryKb: number;
  timeMs: number;
}
