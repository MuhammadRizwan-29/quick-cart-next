import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "QuickCart",
  description: "E-Commerce with Next.js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased`}>
          <AppContextProvider>
            <>
              <main>{children}</main>
            </>
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
