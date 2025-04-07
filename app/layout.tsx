import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { twMerge } from "tailwind-merge";
// import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eid mubarak",
  description: "Template created by Frontend Tribe",
};

const mutiaraRamadhan = localFont({
  src: "assets/fonts/mutiara-ramadhan.ttf",
});

const newGerbil = localFont({
  src: "assets/fonts/new-gerbil.woff",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(newGerbil.className, "antialiased bg-[#000000]")}>
        {children}
      </body>
    </html>
  );
}
