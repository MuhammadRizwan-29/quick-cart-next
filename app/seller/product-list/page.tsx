"use client";

import { assets, productsDummyData } from "@/assets/assets";
import Loading from "@/components/Loading";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSellerProduct = async () => {
    setProducts(productsDummyData);
    setLoading(false);
  };

  useEffect(() => {
    fetchSellerProduct();
  }, []);

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between">
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full md:p-10 p-4">
          <h1 className="pb-4 text-lg font-medium">All Product</h1>
          <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
            <table className="table-fixed w-full overflow-hidden">
              <thead className="text-gray-900 text-sm text-left">
                <tr>
                  <th className="w-2/3 md:w-2/5 px-4 py-3 font-medium turncate">
                    Product
                  </th>
                  <th className="px-4 py-3 font-medium turncate max-sm:hidden">
                    Category
                  </th>
                  <th className="px-4 py-3 font-medium turncate">Price</th>
                  <th className="px-4 py-3 font-medium turncate max-sm:hidden">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-500 text-sm">
                {products.map((product, index) => {
                  return (
                    <tr key={index} className="border-t border-gray-500/20">
                      <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center truncate space-x-3">
                        <div className="bg-gray-500/10 rounded p-2">
                          <Image
                            src={product.image[0]}
                            alt={product.name}
                            className="w-16"
                            width={1280}
                            height={720}
                          />
                        </div>
                        <span className="turncate w-full">{product.name}</span>
                      </td>
                      <td className="px-4 py-3 max-sm:hidden">
                        {product.category}
                      </td>
                      <td className="px-4 py-3">${product.offerPrice}</td>
                      <td className="px-4 py-3 max-sm:hidden">
                        <button
                          onClick={() => router.push(`/product/${product._id}`)}
                          className="flex items-center gap-1 px-1.5 md:px-3.5 py-2 bg-orange-600 text-white rounded-md cursor-pointer"
                        >
                          <span className="hidden md:block">Visit</span>
                          <Image
                            className="h-3.5"
                            src={assets.redirect_icon}
                            alt="redirect_icon"
                          />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
