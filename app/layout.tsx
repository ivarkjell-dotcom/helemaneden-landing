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
  description: "Vi bygger økonomisk navigasjon for hverdagen.",

  icons: {
    icon: "/icon-512.png",
    shortcut: "/icon-512.png",
    apple: "/icon-512.png",
  },

  openGraph: {
    title: "HeleMåneden",
    description:
      "Se hva du trygt kan bruke i dag og denne uken — uten å gå tom før neste lønning.",
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
    <html lang="nb">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
