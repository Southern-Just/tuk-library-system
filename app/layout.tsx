import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react";
import localFont from "next/font/local";
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";


const inter = localFont({
    src: [
        { path: "/fonts/inter.ttf", weight: "400", style: "normal" },
        { path: "/fonts/inter.ttf", weight: "500", style: "normal" },
        { path: "/fonts/inter.ttf", weight: "600", style: "normal" },
        { path: "/fonts/inter.ttf", weight: "700", style: "normal" },
    ],
});

const inter_italic = localFont({
    src: [
        { path: "/fonts/inter-italic.ttf", weight: "400", style: "normal" },
    ],
    variable: "--inter_italic",
});

export const metadata: Metadata = {
  title: "TUK library",
  description: "A library solution for TUK",
};

const RootLayout = async(
{
    children
}: {
  children: ReactNode
}) =>{

    const session = await auth()
  return (
    <html lang="en">
    <SessionProvider session={session}>
      <body
        className={`${inter_italic.variable} ${inter.className}  font-poppins antialiased`}
      >
        {children}
      </body>
    </SessionProvider>
    </html>
  );
}

export default RootLayout;