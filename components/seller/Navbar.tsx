import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SellerNavbar() {
  const router = useRouter();
  return (
    <header className="container mx-auto px-5">
      <div className="flex items-center justify-between py-3 border-b">
        <Image
          src={assets.logo}
          alt="Seller Header Logo"
          className="w-28 lg:w-32 cursor-pointer"
          onClick={() => router.push("/")}
          width={32}
          height={32}
        />
        <button className="bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm">
          Logout
        </button>
      </div>
    </header>
  );
}
