"use client";

import { assets, orderDummyData } from "@/assets/assets";
import Loading from "@/components/Loading";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const { currency } = useAppContext();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSellerOrders = async () => {
    setOrders(orderDummyData);
    setLoading(false);
  };

  useEffect(() => {
    fetchSellerOrders();
  }, []);

  return (
    <div className="flex-1 min-h-screen overflow-scroll flex flex-col justify-between text-sm">
      {loading ? (
        <Loading />
      ) : (
        <div className="md:p-10 p-4 space-y-5">
          <h1 className="text-lg font-medium">Orders</h1>
          <div className="max-w-4xl rounded-md">
            {orders.map((order, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between md:flex-row gap-5 p-5 border-t border-gray-300"
                >
                  <div className="flex-1 flex gap-5 max-w-80">
                    <Image
                      src={assets.order_icon}
                      alt="Order Box"
                      className="max-w-16 max-h-16 object-cover"
                      width={16}
                      height={16}
                    />
                    <p className="flex flex-col gap-3">
                      <span className="font-medium">
                        {order.items
                          .map(
                            (item) => item.product.name + ` x${item.quantity}`
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
                      <span>{`${order.address.city}, ${order.address.state}`}</span>
                      <br />
                      <span>{order.address.phoneNumber}</span>
                    </p>
                  </div>
                  <p className="font-medium my-auto">
                    {currency}
                    {order.amount}
                  </p>
                  <div>
                    <p className="flex flex-col">
                      <span>Method : COD</span>
                      <span>
                        Date : {new Date(order.date).toLocaleDateString()}
                      </span>
                      <span>Payment : Pending</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
