import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Toaster } from '@/app/components/ui/sonner'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kariem Gerges",
  description: "Portofilo webpage created by Kariem With Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        min-h-screen flex flex-col bg-white
        `}
      >
        <Header />
        {children}
        <Toaster />
        <Footer
          ownerName="Kariem Gerges"
          
        />
      </body>
    </html>
  );
}
