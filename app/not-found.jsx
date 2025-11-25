"use client";

import { usePathname } from "next/navigation";
import Navbar from "./../components/Navbar";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <>
      <Navbar />
      <section className="container mx-auto">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <span className="text-red-500 text-xs">
            www.quickcart.com{pathname}
          </span>
          <h1 className="text-4xl"> Not Found</h1>
          <p className="text-gray-600">Sorry, this page does not exist.</p>
        </div>
      </section>
    </>
  );
}
