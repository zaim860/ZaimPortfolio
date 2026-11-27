import type { Metadata } from "next";
import { Bangers, Comic_Neue } from "next/font/google";
import "./globals.css";

const display = Bangers({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Comic_Neue({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Za'im | Portfolio",
  description: "Student portfolio: education, skills, experience and projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
