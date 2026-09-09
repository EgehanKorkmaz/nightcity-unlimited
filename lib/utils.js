import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind class'larını dinamik ve çakışmasız birleştirmemizi sağlayacak fonksiyon
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
