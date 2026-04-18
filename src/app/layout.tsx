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
    process.env.NEXT_PUBLIC_SITE_URL || "https://hakkey.in",
  ),
  title: "Hakkey – Home Food Near You",
  description:
    "Fresh home-cooked meals from nearby kitchens. Join early access today.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Hakkey – Home Food Near You",
    description:
      "Fresh home-cooked meals from nearby kitchens. Join early access today.",
    url: "/",
    siteName: "Hakkey",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hakkey – Home Food Near You",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkey – Home Food Near You",
    description:
      "Fresh home-cooked meals from nearby kitchens. Join early access today.",
    images: ["/og-image.png"],
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
