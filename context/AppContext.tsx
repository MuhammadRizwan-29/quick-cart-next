"use client";

import { productsDummyData, userDummyData } from "@/assets/assets";
import { useUser, UserResource } from "@clerk/nextjs";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// -------------------- TYPES --------------------

export interface Product {
  _id: string;
  name: string;
  price: number;
  offerPrice: number;
  [key: string]: any; // Allows extra fields
}

export interface UserData {
  name: string;
  email: string;
  [key: string]: any;
}

interface AppContextType {
  currency: string | undefined;

  isSeller: boolean;
  setIsSeller: (value: boolean) => void;

  products: Product[];
  setProducts: (p: Product[]) => void;
  fetchProductsData: () => Promise<void>;

  cartItems: Record<string, number>;
  setCartItems: (items: Record<string, number>) => void;

  addToCart: (itemId: string) => Promise<void>;
  updateCartQuantity: (itemId: string, quantity: number) => Promise<void>;

  getCartCount: () => number;
  getCartAmount: () => number;

  userData: UserData | false;
  setUserData: (data: UserData | false) => void;
  fetchUserData: () => Promise<void>;

  user: UserResource | null;
}

// -------------------- CONTEXT --------------------

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppContextProvider");
  }
  return context;
};

// -------------------- PROVIDER --------------------

interface ProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: ProviderProps) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY;

  const { user } = useUser();

  const [isSeller, setIsSeller] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Record<string, number>>({});
  const [userData, setUserData] = useState<UserData | false>(false);

  // Fetch products
  const fetchProductsData = async () => {
    setProducts(productsDummyData);
  };

  // Add item to cart
  const addToCart = async (itemId: string) => {
    const cartData = { ...cartItems };

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
  };

  // Update item quantity
  const updateCartQuantity = async (itemId: string, quantity: number) => {
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

  const value: AppContextType = {
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
