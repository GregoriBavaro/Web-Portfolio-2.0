import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/layout/footer/Footer";
import Navigation from "../components/layout/navigation/Header";
import Blob from "../components/ui/blob/Blob";

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
  title: "Web Portfolio 2.0 | Web Developer Portfolio",
  description:
    "Explore the portfolio of Gregori Bavaro, a skilled web developer specializing in web design, development, and SEO optimization. Discover innovative projects and solutions crafted with React, Next.js, SCSS, and more.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Blob />
      </body>
    </html>
  );
};

export default RootLayout;
