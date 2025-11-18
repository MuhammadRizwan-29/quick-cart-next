"use client";
import { assets } from "@/assets/assets";
import Loading from "@/components/Loading";
import ProductCard from "@/components/ProductCard";
import { useAppContext } from "@/context/AppContext";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  const { products, addToCart } = useAppContext();

  const [mainImage, setMainImage] = useState(null);
  const [productData, setProductData] = useState(null);

  const fetchProductData = () => {
    if (!products || products.length === 0) return;

    const product = products.find((p) => p._id === id);

    setProductData(product);
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData();
    }
  }, [id, products]);

  return (
    <>
      {productData ? (
        <section className="container mx-auto px-5 pt-14 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="px-5 lg:16 xl:20">
              <div className="rounded-lg overflow-hidden bg-gray-500/10 mb-4">
                <Image
                  src={mainImage || productData.image[0]}
                  alt={productData.name}
                  className="w-full h-auto object-cover mix-blend-multiply"
                  width={1280}
                  height={720}
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {productData.image.map((image, index) => {
                  return (
                    <div
                      className="cursor-pointer rounded-lg overflow-hidden bg-gray-500/10"
                      key={index}
                      onClick={() => setMainImage(image)}
                    >
                      <Image
                        src={image}
                        alt="product image"
                        width={1280}
                        height={720}
                        className="w-full h-auto object-cover mix-blend-multiply"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-medium text-gray-800/90 mb-4">
                {productData.name}
              </h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  <Image
                    src={assets.star_icon}
                    alt="review star icon"
                    className="w-4 h-4"
                  />
                  <Image
                    src={assets.star_icon}
                    alt="review star icon"
                    className="w-4 h-4"
                  />
                  <Image
                    src={assets.star_icon}
                    alt="review star icon"
                    className="w-4 h-4"
                  />
                  <Image
                    src={assets.star_icon}
                    alt="review star icon"
                    className="w-4 h-4"
                  />
                  <Image
                    src={assets.star_dull_icon}
                    alt="review star icon"
                    className="w-4 h-4"
                  />
                </div>
                <p>{4.5}</p>
              </div>
              <p className="text-gray-600 mt-3">{productData.description}</p>
              <p className="text-3xl font-medium mt-6">
                ${productData.offerPrice}
                <span className="text-base font-normal text-gray-800/60 line-through ml-2">
                  ${productData.price}
                </span>
              </p>
              <hr className="bg-gray-600 my-6" />
              <div className="overflow-x-auto">
                <table className="table-auto border-collapse w-full max-w-72">
                  <tbody>
                    <tr>
                      <td className="text-gray-600 font-medium">Brand</td>
                      <td className="text-gray-800/50">Generic</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 font-medium">Color</td>
                      <td className="text-gray-800/50">Multi</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 font-medium">Category</td>
                      <td className="text-gray-800/50">
                        {productData.category}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center mt-10 gap-4">
                <button
                  onClick={() => addToCart(productData._id)}
                  className="w-full py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition cursor-pointer"
                >
                  Add to Cart
                </button>
                <button
                  onClick={async () => {
                    await addToCart(productData._id);
                    router.push("/cart");
                  }}
                  className="w-full py-3.5 bg-orange-500 text-white hover:bg-orange-600 transition"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <div className="flex items-center flex-col mb-8 mt-16">
              <h2 className="text-3xl font-medium">
                Featured
                <span className="font-medium text-orange-600">Products</span>
              </h2>
              <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-col-3 lg:grid-col-4 xl:grid-cols-5 gap-3 pb-14 w-full">
              {products.slice(0, 5).map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
            <button
              onClick={() => router.push("/all-products")}
              className="px-8 py-2 mb-16 border rounded text-gray-500/70 hover:bg-slate-50/90 transition cursor-pointer"
            >
              See more
            </button>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
