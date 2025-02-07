import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500','600','700','800','900'],
});


export const metadata: Metadata = {
  title: "TUK library",
  description: "A library solution for TUK",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
