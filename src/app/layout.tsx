import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import { Providers } from "./providers";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My blog | Explore the new horizon",
  description: "Awesome blog website created by andraX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex w-full bg-black overflow-hidden">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
