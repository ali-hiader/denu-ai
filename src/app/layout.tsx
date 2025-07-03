import "./globals.css";

import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const metadata: Metadata = {
  title: "DenuAI",
  description: "DenuAI is a nude image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${quicksand.className} system-ui antialiased h-full`}>
        {children}
      </body>
    </html>
  );
}
