"use client";

import { assets } from "@/assets/assets";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [address, setAddress] = useState({
    fullName: "",
    phoneNumber: "",
    pincode: "",
    area: "",
    city: "",
    state: "",
  });

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row justify-between">
          <form className="w-full" onSubmit={onSubmitHandler}>
            <h1 className="text-2xl md:text-3xl text-gray-500">
              Add Shipping{" "}
              <span className="font-medium text-orange-600">Address</span>
            </h1>
            <div className="space-y-3 max-w-sm mt-10">
              <input
                className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                type="text"
                placeholder="Full Name"
                onChange={(e) =>
                  setAddress({ ...address, fullName: e.target.value })
                }
                value={address.fullName}
              />
              <input
                className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                type="text"
                placeholder="Phone Number"
                onChange={(e) =>
                  setAddress({ ...address, phoneNumber: e.target.value })
                }
                value={address.phoneNumber}
              />
              <input
                className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                type="text"
                placeholder="Pin code"
                onChange={(e) =>
                  setAddress({ ...address, pincode: e.target.value })
                }
                value={address.pincode}
              />
              <textarea
                className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                rows={4}
                placeholder="Address (Area and Street)"
                onChange={(e) =>
                  setAddress({ ...address, area: e.target.value })
                }
                value={address.area}
              ></textarea>
              <div className="flex space-x-3">
                <input
                  className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                  type="text"
                  placeholder="City/District/Town"
                  onChange={(e) =>
                    setAddress({ ...address, city: e.target.value })
                  }
                  value={address.city}
                />
                <input
                  className="px-2 py-2.5 focus:border-orange-500 transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                  type="text"
                  placeholder="State"
                  onChange={(e) =>
                    setAddress({ ...address, state: e.target.value })
                  }
                  value={address.state}
                />
              </div>
            </div>
            <button
              type="submit"
              className="max-w-sm w-full mt-6 bg-orange-600 text-white py-3 hover:bg-orange-700 uppercase"
            >
              Save Address
            </button>
          </form>
          <Image
            src={assets.my_location_image}
            className="md:mr-16 mt-16 md:mt-0"
            alt="Map"
            width={1020}
            height={720}
          />
        </div>
      </section>
    </MainLayout>
  );
}
