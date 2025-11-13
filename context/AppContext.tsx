"use client";
import { productsDummyData } from "@/assets/assets";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = (props) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY;
  const router = useRouter();
  const [isSeller, setIsSeller] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProductsData = async () => {
    setProducts(productsDummyData);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  const value = {
    currency,
    router,
    isSeller,
    setIsSeller,
    products,
    setProducts,
    fetchProductsData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
