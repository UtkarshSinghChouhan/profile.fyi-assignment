import { clsx, ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassArray) {
  return twMerge(clsx(inputs));
}

export const Utils = {
  cleanCategoryString: (value: string) => {
    
    const cleanCategory = value
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return cleanCategory;
  },
};
