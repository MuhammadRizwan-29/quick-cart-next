import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-start justify-center gap-10 text-gray-500">
        <div className="w-4/5">
          <Image src={assets.logo} alt="Footer Logo" className="w-28 md:w-32" />
          <p className="mt-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/" className="hover:underline transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline transition">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline transition">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline transition">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-567-890</p>
              <p>contact@quickcart.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* Container end */}
      <div className="w-full mt-4 border-t border-gray-300 text-gray-500">
        <p className="py-4 text-center text-xs md:text-sm">
          Copyright {new Date().getFullYear()} © All Right Reserved.
        </p>
      </div>
    </footer>
  );
}
