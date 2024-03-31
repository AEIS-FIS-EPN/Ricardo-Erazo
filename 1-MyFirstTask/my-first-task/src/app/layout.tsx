import type { Metadata } from "next";
import { Nova_Flat } from "next/font/google";
import "./globals.css";

import NavUp from "../components/NavUp";

const nova_flat = Nova_Flat({ weight: "400", style: "normal", display: "swap", subsets: ['latin']});

export const metadata: Metadata = {
  title: "Ricardo Erazo - Portfolio",
  description: "Ricardo Erazo's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={nova_flat.className}>
        <NavUp />
        {children}
      </body>
    </html>
  );
}
