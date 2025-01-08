import BaseProvider from "@/providers/BaseProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Layerd",
  description: "Layerd • AI",
  icons: {
    icon: [
      {
        url: "/logo2.png",
        sizes: "any",
      },
      {
        url: "/logo2.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.className}>
        <BaseProvider>{children}</BaseProvider>
        <Toaster />
      </body>
    </html>
  );
}
