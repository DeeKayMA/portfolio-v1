
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/cursor/cursor";
import { SpeedInsights } from "@vercel/speed-insights/next"
// import { Analytics } from "@vercel/analytics/next"

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
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/images/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/images/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-950 font-inter text-stone-400 selection:bg-amber-400 selection:text-stone-900`}
        id="root"
        suppressHydrationWarning={true}
      >
        {/* <Analytics/> */}
        <SpeedInsights/>
        <Cursor/>
        {children}
      </body>
    </html>
  );
}
