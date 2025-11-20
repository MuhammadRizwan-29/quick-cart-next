"use client";
import Image from "next/image";
import Link from "next/link";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { useClerk, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const router = useRouter();
  const { isSeller, user } = useAppContext();
  const { openSignIn } = useClerk();

  return (
    <header className="container mx-auto py-5 px-3 flex items-center justify-between border-b border-gray-300 text-gray-700">
      <Link href="/">
        <Image
          src={assets.logo || null}
          alt="Logo"
          width={32}
          height={32}
          className="w-28 md:w-32 object-cover cursor-pointer"
        />
      </Link>
      <nav>
        <ul className="flex items-center gap-4 lg:gap-8 max-md:hidden">
          <li>
            <Link
              href="/"
              className="hover:text-gray-900 transition-colors duration-150"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/all-products"
              className="hover:text-gray-900 transition-colors duration-150"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="hover:text-gray-900 transition-colors duration-150"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-900 transition-colors duration-150"
            >
              Contact
            </Link>
          </li>
          {isSeller && (
            <li>
              <button
                onClick={() => router.push("/seller")}
                className="text-xs border px-4 py-1.5 rounded-full cursor-pointer"
              >
                Seller Dashboard
              </button>
            </li>
          )}
        </ul>
      </nav>

      <ul className="hidden md:flex items-center gap-4">
        <Image
          src={assets.search_icon || null}
          alt="Search icon"
          width={16}
          height={16}
        />
        {user ? (
          <>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="Cart"
                  labelIcon={<CartIcon />}
                  onClick={() => router.push("/cart")}
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Orders"
                  labelIcon={<BagIcon />}
                  onClick={() => router.push("/my-orders")}
                />
              </UserButton.MenuItems>
            </UserButton>
          </>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-gray-900 transition cursor-pointer"
          >
            <Image src={assets.user_icon || null} alt="user icon" />
          </button>
        )}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
        {user ? (
          <>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="Home"
                  labelIcon={<HomeIcon />}
                  onClick={() => router.push("/")}
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="Products"
                  labelIcon={<BoxIcon />}
                  onClick={() => router.push("/all-products")}
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="Cart"
                  labelIcon={<CartIcon />}
                  onClick={() => router.push("/cart")}
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Orders"
                  labelIcon={<BagIcon />}
                  onClick={() => router.push("/my-orders")}
                />
              </UserButton.MenuItems>
            </UserButton>
          </>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-gray-900 transition cursor-pointer"
          >
            <Image src={assets.user_icon || null} alt="user icon" />
          </button>
        )}
      </div>
    </header>
  );
}
