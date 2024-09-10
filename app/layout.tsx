import BaseProvider from "@/providers/BaseProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WhopMe",
  description: "WhopMe • AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.className}>
        <BaseProvider>
          {children}
          <Toaster />
        </BaseProvider>
      </body>
    </html>
  );
}
