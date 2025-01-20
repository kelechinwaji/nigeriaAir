import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} grid grid-rows-[max-content_auto] h-full bg-layout_hero bg-no-repeat bg-cover`}
      >
        <Header />
        <main className="max-w-mac w-full mx-auto min-h-dvh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
