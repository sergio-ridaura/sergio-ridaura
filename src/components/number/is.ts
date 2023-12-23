/**
 * Is number.
 */
export default function numberIs(number: any): boolean {
  return typeof number === "number" && !isNaN(number);
}
