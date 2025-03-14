/**
 * Concatenate class names with proper handling of falsy values
 */
export function cx(...classNames: (string | boolean | undefined)[]) {
  return classNames.filter(Boolean).join(" ");
}
