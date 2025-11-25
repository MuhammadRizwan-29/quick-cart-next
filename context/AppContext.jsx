"use client";

import { productsDummyData, userDummyData } from "@/assets/assets";
import { useUser } from "@clerk/nextjs";

import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppContextProvider");
  }
  return context;
};

export const AppContextProvider = ({ children }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY;

  const { user } = useUser();

  const [isSeller, setIsSeller] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [userData, setUserData] = useState(false);

  // Fetch products
  const fetchProductsData = async () => {
    setProducts(productsDummyData);
  };

  // Add item to cart
  const addToCart = async (itemId) => {
    const cartData = { ...cartItems };

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
  };

  // Update item quantity
  const updateCartQuantity = async (itemId, quantity) => {
    const cartData = { ...cartItems };

    if (quantity === 0) {
      delete cartData[itemId];
    } else {
      cartData[itemId] = quantity;
    }

    setCartItems(cartData);
  };

  // Total items in cart
  const getCartCount = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  // Total amount
  const getCartAmount = () => {
    let total = 0;

    for (const id in cartItems) {
      const item = products.find((p) => p._id === id);
      if (!item) continue;

      total += item.offerPrice * cartItems[id];
    }

    return Math.round(total * 100) / 100;
  };

  // Get user data
  const fetchUserData = async () => {
    setUserData(userDummyData);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  useEffect(() => {
    fetchUserData();
  }, []);

  const value = {
    currency,

    isSeller,
    setIsSeller,

    products,
    setProducts,
    fetchProductsData,

    cartItems,
    setCartItems,
    addToCart,
    updateCartQuantity,

    getCartCount,
    getCartAmount,

    userData,
    setUserData,
    fetchUserData,

    user: user ?? null,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
