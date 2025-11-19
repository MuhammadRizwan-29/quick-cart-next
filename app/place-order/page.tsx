"use client";

import { assets } from "@/assets/assets";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/my-order");
    }, 5000);
  }, []);
  return (
    <MainLayout>
      <section className="container mx-auto px-5">
        <div className="h-screen flex justify-center items-center gap-2">
          <div className="flex justify-center items-center relative">
            <Image
              src={assets.checkmark}
              alt="Order success icon"
              className="absolute p-5"
            />
            <div className="animate-spin rounded-full w-24 h-24 border-4 border-t-green-300 border-gray-200"></div>
          </div>
          <div className="text-center text-2xl font-semibold">
            Order Placed Successfully
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
