import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge and deduplicate Tailwind CSS class names.
 *
 * Combines `clsx` (conditional class joining) with `tailwind-merge`
 * (conflict resolution) so that the last conflicting utility wins.
 *
 * @param inputs - Class values: strings, arrays, objects, or falsy values.
 * @returns A single deduplicated class string.
 *
 * @example
 * ```ts
 * cn("px-4 py-2", isActive && "bg-primary", className);
 * // => "px-4 py-2 bg-primary ..."
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
