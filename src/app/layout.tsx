import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sai Creations — Sunlight-Inspired Digital & AI Agency",
  description:
    "We design high-performance websites, AI-powered applications, mobile apps, branding, and digital experiences that make your business stand out.",
  keywords: [
    "Sai Creations",
    "Digital Agency",
    "Web Design",
    "AI Applications",
    "Mobile Apps",
    "Branding",
    "UI/UX Design",
    "SEO",
    "Web Development",
  ],
  authors: [{ name: "Sai Creations Team" }],
  openGraph: {
    title: "Sai Creations — Sunlight-Inspired Digital Agency",
    description:
      "Building Beautiful Digital Experiences That Grow Businesses with AI & Modern Web Architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Sai Creations",
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
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-[#FFFDF8] text-[#1E1E1E] antialiased selection:bg-[#FFE082] selection:text-[#1E1E1E] font-body relative overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
