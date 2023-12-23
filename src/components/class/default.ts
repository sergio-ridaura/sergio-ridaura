/**
 * It is used in components to avoid generating the `class` attribute on an element or to use the received class or the "default" class or use the default class and the added class.
 */
export default function classDefault(
  className: string | undefined,
  addClass: string | undefined,
  classDefaultText: string | undefined
): string | undefined {
  let classReturn;

  if (className !== undefined) {
    if (className === "default") {
      classReturn = classDefaultText;
    } else {
      classReturn = className;
    }
  }

  if (addClass !== undefined) {
    if (classReturn !== undefined) {
      classReturn = `${classReturn} ${addClass}`;
    } else {
      classReturn = addClass;
    }
  }
  return classReturn;
}
