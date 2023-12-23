import dateCheck from "./check";
import numberIs from "../number/is";
import stringIsNumber from "../string/isNumber";

/**
 * Get Year.
 */
export default function dateGet(date?: number | string): string {
  let parsedDate: Date;

  if (date === undefined) {
    parsedDate = new Date();
  } else {
    if (stringIsNumber(`${date}`)) {
      date = parseFloat(`${date}`);
    }

    if (!dateCheck(date)) {
      return "error: invalid date";
    }

    if (numberIs(date)) {
      parsedDate = new Date(Number(date) * 1000);
    } else {
      parsedDate = new Date(date);
    }
  }

  return String(parsedDate.getFullYear());
}
