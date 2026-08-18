import type { Metadata } from "next";
import "./globals.css";

import LenisProvider from "@/components/providers/LenisProvider";

export const metadata: Metadata = {
  title: "Abhishek Sharma",
  description: "AI Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-black text-white"
      >
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
