"use client";
import { NextAuthProvider } from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css"; // radix ui
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Upload Mate",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NextAuthProvider>
          <ThemeProvider attribute="class">
            <Theme>{<div className="sm:px-0 px-3">{children}</div>}</Theme>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
