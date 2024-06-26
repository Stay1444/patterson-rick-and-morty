import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import style from "@/styles/layout.module.css";
import Link from "next/link";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Rick and Morty browser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className}`}>
        <div className="flex flex-row items-center gap-4 p-4 bg-blue-300 shadow-2xl w-full h-14">
          <Link href={"/characters"} className="text-2xl">
            Rick and Morty
          </Link>
          <SearchBox className={`ml-auto ${style.search}`} />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
