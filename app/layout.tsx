import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Panto — Premium Furniture for Minimalist & Modern Interiors",
  description:
    "Make your interior more minimalistic & modern with Panto premium furniture. Discover luxury facilities, affordable prices, and many unique furniture choices.",
  keywords: ["furniture", "interior design", "minimalist", "modern", "chairs", "beds", "sofa", "lamps"],
  authors: [{ name: "Panto" }],
  openGraph: {
    title: "Panto — Premium Furniture for Minimalist & Modern Interiors",
    description:
      "Make your interior more minimalistic & modern with Panto premium furniture. Discover luxury facilities, affordable prices, and many unique furniture choices.",
    type: "website",
    locale: "en_US",
    siteName: "Panto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panto — Premium Furniture for Minimalist & Modern Interiors",
    description:
      "Make your interior more minimalistic & modern with Panto premium furniture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} ${gilroy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
