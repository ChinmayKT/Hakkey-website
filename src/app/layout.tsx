import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hakkey - Home Food Near You | Order from Local Home Chefs",
  description:
    "Discover freshly prepared homemade food from trusted local home chefs. Order breakfast, lunch, dinner & snacks made with love and care. Download the Hakkey app now!",
  keywords: [
    "home food",
    "home chef",
    "homemade food delivery",
    "local food",
    "fresh meals",
    "Hakkey",
  ],
  openGraph: {
    title: "Hakkey - Home Food Near You",
    description:
      "Freshly prepared by home chefs with love & care. Download the Hakkey app.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
