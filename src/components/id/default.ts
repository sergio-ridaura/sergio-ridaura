/**
 * Used in components to avoid generating the `id` attribute in an element or to use the received identifier or the "default" identifier.
 */
export default function idDefault(
  id: string | undefined,
  idDefaultText: string | undefined
): string | undefined {
  if (id !== undefined && id === "default") {
    return idDefaultText;
  }
  return id;
}
