/**
 * Check that the date is correct.
 */
export default function dateCheck(date: number | string): boolean {
  const parsedDate: Date = new Date(date);

  return !isNaN(parsedDate.getTime());
}
