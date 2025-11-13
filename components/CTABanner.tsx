import { assets } from "@/assets/assets";
import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="container mx-auto px-5">
      <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 my-16 bg-[#E6E9F2] rounded-xl overflow-hidden">
        <Image
          src={assets.jbl_soundbox_image}
          alt="JBL Sandbox Speakers"
          className="max-w-56"
        />
        <div className="flex flex-col items-center justify-center text-center space-y-2 py-4 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px]">
            Level Up Your Gaming Experience
          </h2>
          <p className="max-w-[343px] font-medium text-gray-800/60">
            From immersive sound to precise controls—everything you need to win
          </p>
          <button className="group flex items-center justify-center gap-1 px-5 lg:px-12 py-2.5 bg-orange-600 rounded text-white">
            Buy now
            <Image
              src={assets.arrow_icon_white}
              className="group-hover:translate-x-1 transition"
              alt="Arrow icon"
            />
          </button>
        </div>
        <Image
          src={assets.md_controller_image}
          alt="Controller Icon"
          className="hidden md:block max-w-80 -mt-8 lg:mt-0"
        />
        <Image
          src={assets.sm_controller_image}
          alt="Controller Icon"
          className="md:hidden"
        />
      </div>
    </section>
  );
}
