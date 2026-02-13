import { Geist, Geist_Mono } from "next/font/google";

export const fontSans = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
