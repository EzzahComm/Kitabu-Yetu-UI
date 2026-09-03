import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import { BackToTop } from "@/components/BackToTop";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kitabu Yetu — Bookkeeping for CHAMAs and SACCOs",
  description:
    "Kitabu Yetu keeps members, contributions, loans, welfare and M-Pesa on one double-entry ledger for savings groups across East Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
