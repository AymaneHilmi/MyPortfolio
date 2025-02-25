import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Optimisation de Tailwindcss à ameliorer pour les pages principales
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
