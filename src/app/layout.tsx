import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://hakkey.com",
  ),
  title: "India's Home Food Revolution Starts Here 🇮🇳",
  description:
    "Real home-cooked meals made with care, and a chance to earn from your own kitchen.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "India's Home Food Revolution Starts Here 🇮🇳",
    description:
      "Real home-cooked meals made with care, and a chance to earn from your own kitchen.",
    url: "https://hakkey.com",
    siteName: "Hakkey",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hakkey - Home Food Marketplace",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "India's Home Food Revolution Starts Here 🇮🇳",
    description:
      "Real home-cooked meals made with care, and a chance to earn from your own kitchen.",
    images: ["/og-image.png"],
    creator: "@hakkey",
  },
  alternates: {
    canonical: "https://hakkey.com",
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
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
