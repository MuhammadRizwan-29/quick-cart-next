import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const menuItems = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    {
      name: "Product List",
      path: "/seller/product-list",
      icon: assets.product_list_icon,
    },
    { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
  ];
  return (
    <aside className="md:w-64 w-16 border-r min-h-screen text-base border-gray-300 py-2 flex flex-col">
      {menuItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            href={item.path}
            key={item.name}
            className={`flex items-center py-3 px-4 gap-3 ${
              isActive
                ? "border-r-4 md:border-r-[6px] bg-orange-600/10 border-orange-500/90"
                : "hover:bg-gray-100/90 border-white"
            }`}
            passHref
          >
            <Image
              src={item.icon}
              alt={`${item.name.toLowerCase()} icon`}
              className="w-7 h-7"
            />
            <span className="md:block hidden text-center">{item.name}</span>
          </Link>
        );
      })}
    </aside>
  );
}
