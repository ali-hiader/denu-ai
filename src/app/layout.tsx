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
    <html lang="en">
      <body
        className={`${quicksand.className} text-quicksand system-ui  antialiased bg-[#050A14] text-gray-100`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 120%, rgba(235, 0, 144, 0.1), rgba(0, 0, 0, 0) 50%)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
