import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import portfolio_image from "./images/roshan_portfolio.png" ;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Roshan Pandit | Full Stack Developer",
  description: "Full Stack Developer specializing in MERN, Next.js, Prisma, PostgreSQL, Docker.",
  openGraph: {
    title: "Roshan Pandit | Full Stack Developer",
    description: "Explore my portfolio showcasing modern full stack projects.",
    url: "https://roshan-pandit.vercel.app/",
    siteName: "Roshan Pandit Portfolio",
    images: [
      {
        url: {portfolio_image},
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
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
      </body>
    </html>
  );
}
