
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/cursor/cursor";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diquan Kerr",
  description: "Diquan Kerr Portfolio - Front End Engineer",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-950 font-inter text-stone-400 selection:bg-amber-400 selection:text-stone-900`}
        id="root"
        suppressHydrationWarning={true}
      >
        <SpeedInsights/>
        <Cursor/>
        {children}
      </body>
    </html>
  );
}
