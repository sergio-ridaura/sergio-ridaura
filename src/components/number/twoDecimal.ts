/**
 * Transform a number to two decimal places.
 */
export default function twoDecimals(number: number): number {
  let result: number = Math.round(number * 100) / 100;

  if (Object.is(result, -0)) {
    result = 0;
  }

  return result;
}
