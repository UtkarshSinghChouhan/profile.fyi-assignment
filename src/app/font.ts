import { Caveat, Poppins, Inter  } from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-poppins",
    display: "swap",
});
  
export const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-caveat",
    display: "swap",
});

export const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inter",
    display: "swap",
});