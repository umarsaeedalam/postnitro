import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility for combining class names and resolving Tailwind CSS conflicts
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
