import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inter Air",
  description: "Excellence In Aviation Service.",
  icons: {
    icon: "/inter-air-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/inter-air-logo.svg" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#ff7652" />
      </Head>

      <body
        className={`${interSans.variable} grid grid-rows-[max-content_auto] h-full bg-layout_hero bg-no-repeat bg-cover w-full mx-auto`}
      >
        <Header />
        <main className="max-w-mac w-full mx-auto min-h-dvh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
