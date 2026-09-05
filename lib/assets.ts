/** Prefix a public asset path with the configured basePath (only set for the GitHub Pages preview). */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return `${base}${path}`;
}
