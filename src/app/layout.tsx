import "@/styles/globals.scss";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nanami Iwahashi Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <title>Nanami Iwahashi Portfolio</title>
      </head>
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
