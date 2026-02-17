import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const gilroy = localFont({
  variable: "--font-gilroy",
  src: [
    { path: "../public/fonts/Gilroy-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Gilroy-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Gilroy-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Gilroy-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Gilroy-Heavy.ttf", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Panto — Furniture Landing Page",
  description:
    "Make your interior more minimalistic & modern with Panto premium furniture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${dmSans.variable} ${gilroy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
