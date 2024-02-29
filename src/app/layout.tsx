"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["cyrillic-ext"] });

const metadata: Metadata = {
  title: "Bloomverse",
  description: "A blog website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="font-bold text-3xl p-3 w-full text-center">
          <div className="flex justify-center items-baseline -space-x-1">
            <span>Bloomsphere</span>
            <code className="text-blue-800 text-4xl">.</code>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
