import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HeleMåneden",
  description: "Hva kan du trygt bruke i dag?",

  openGraph: {
    title: "HeleMåneden",
    description: "Få ett konkret svar på hva du kan bruke i dag og denne uken.",
    url: "https://helemaneden.no",
    siteName: "HeleMåneden",
    images: [
      {
        url: "https://helemaneden.no/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "nb_NO",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
