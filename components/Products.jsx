"use client";
import { useAppContext } from "@/context/AppContext";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  const { products, router } = useAppContext();

  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center pt-14 px-5">
        <h2 className="text-2xl font-medium text-left w-full">
          Popular products
        </h2>
        <div className="grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-6 mt-6 pb-14 w-full">
          {products.map((product, index) => {
            return <ProductCard product={product} key={index} />;
          })}
        </div>
        <button
          onClick={() => {
            router.push("/all-products");
          }}
          className="px-12 py-2.5 border rounded text-gray-500/70 hover:bg-slate-50/90 transition cursor-pointer"
        >
          See more
        </button>
      </div>
    </section>
  );
}
