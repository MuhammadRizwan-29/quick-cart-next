"use client";

import { assets, orderDummyData } from "@/assets/assets";
import Loading from "@/components/Loading";
import MainLayout from "@/components/MainLayout";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  userId: string;
  name: string;
  description: string;
  price: number;
  offerPrice: number;
  image: string[];
  category: string;
  date: number;
  __v: number;
}

interface OrderItem {
  product: Product;
  quantity: number;
  _id: string;
}

interface Address {
  fullName: string;
  area: string;
  city: string;
  state: string;
  amount?: number;
}

interface Order {
  _id: string;
  userId: string;
  items: OrderItem[];
  address: Address;
  amount: number;
  date: string;
  __v: number;
}

// -------------------- COMPONENT --------------------

export default function Page() {
  const { currency } = useAppContext();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    setOrders(orderDummyData);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <MainLayout>
      <section className="container mx-auto px-5">
        <div className="min-h-screen flex flex-col justify-between">
          <div className="space-y-5">
            <h2 className="text-lg font-medium mt-6">My Orders</h2>
            {loading ? (
              <Loading />
            ) : (
              <div className="max-w-5xl border-t border-gray-300 text-sm">
                {orders.map((order, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row gap-5 justify-between p-5 border-b border-gray-300"
                  >
                    <div className="flex-1 flex gap-5 max-w-80">
                      <Image
                        src={assets.box_icon}
                        alt="Box Icon"
                        className="max-w-16 max-h-16 object-cover"
                      />
                      <p className="flex flex-col gap-3">
                        <span className="font-medium text-base">
                          {order.items
                            .map(
                              (item) =>
                                `${item.product.name} x ${item.quantity}`
                            )
                            .join(", ")}
                        </span>
                        <span>Items: {order.items.length}</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className="font-medium">
                          {order.address.fullName}
                        </span>
                        <br />
                        <span>{order.address.area}</span>
                        <br />
                        <span>
                          {order.address.city}, {order.address.state}
                        </span>
                        <br />
                        <span>{order.address.amount}</span>
                      </p>
                    </div>
                    <p className="font-medium my-auto">
                      {currency} {order.amount}
                    </p>
                    <div>
                      <p className="flex flex-col">
                        <span>Method: COD</span>
                        <span>
                          Date: {new Date(order.date).toLocaleDateString()}
                        </span>
                        <span>Payment: Pending</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
