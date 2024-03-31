import type { Metadata } from "next";
import { Nova_Flat } from "next/font/google";

import "../style/globals.css";
import "../style/navBarStyles.css";
import "../style/techStyles.css";
import "../style/projectStyles.css";

import NavUp from "../components/global/NavUp";
import NavBar from "../components/global/NavBar";

import '@fortawesome/fontawesome-free/css/all.css';

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
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={nova_flat.className}>
        <div className="w-full fixed top-0 z-10">
          <NavUp />
          <NavBar />
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
