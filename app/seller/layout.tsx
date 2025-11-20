"use client";
import SellerNavbar from "@/components/seller/Navbar";
import Sidebar from "@/components/seller/Sidebar";
import { Outfit } from "next/font/google";

export default function RootLayout({ children }) {
  return (
    <>
      <SellerNavbar />
      <section className="container mx-auto px-5 flex">
        <Sidebar />
        {children}
      </section>
    </>
  );
}
