import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { dependencies } from "../dependencies/dependencies";
import { DependenciesContext } from "../contexts/dependencies.context";
import { DepenciesContextProvider } from "../contexts/dependenciesContextProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leaning dependency-inversion principle",
  authors:{name:"Boris N'kuako"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">   
        <body className={`h-screen ${inter.className}`}>
          <DepenciesContextProvider>{children}</DepenciesContextProvider>
          <Toaster />
        </body>
    </html>
  );
}
