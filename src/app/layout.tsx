
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/cursor/cursor";

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
  icons: {
    icon: "/images/DK Emoji.png",
    shortcut: "/images/DK Emoji.png",
    apple: "/favicon.ico",
  },
  description: "Eveything you need to hire Diquan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 font-inter`}
        id="root"
        suppressHydrationWarning={true}
      >
        <Cursor/>
        {children}
      </body>
    </html>
  );
}
