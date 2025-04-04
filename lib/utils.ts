import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getInitials = (name:any): string =>
    name
        .split("")
        .map(() => [0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
