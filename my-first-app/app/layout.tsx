import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ReactQueryProvider from "./providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className="p-4 flex justify-center">
        <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[60%] 2xl:w-[55%]">
        <ReactQueryProvider>
          {children}
          </ReactQueryProvider>
        </div>
        </div>
        </body>
    </html>
  );
}