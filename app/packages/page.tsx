"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaHeart,
} from "react-icons/fa";

const packages = [
  {
    id: "goa",
    title: "Goa Beach Escape",
    location: "Goa, India",
    price: 7999,
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    discount: "20% OFF",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
  },
  {
    id: "kashmir",
    title: "Kashmir Paradise",
    location: "Srinagar",
    price: 14999,
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    discount: "15% OFF",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: "bali",
    title: "Beautiful Bali",
    location: "Indonesia",
    price: 39999,
    duration: "7 Days / 6 Nights",
    rating: 5.0,
    discount: "10% OFF",
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
  },
  {
    id: "dubai",
    title: "Dubai Luxury Tour",
    location: "Dubai, UAE",
    price: 44999,
    duration: "5 Days / 4 Nights",
    rating: 4.7,
    discount: "25% OFF",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
];

export default function PackagesPage() {
  const [search, setSearch] = useState("");

  const filteredPackages = packages.filter((pkg) =>
    pkg.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-10"
        >
          🌍 Explore Tour Packages
        </motion.h1>

        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-14">
          <FaSearch className="absolute left-5 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-full py-4 pl-14 pr-6 shadow-lg focus:ring-2 focus:ring-teal-500 outline-none"
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="relative h-60">

                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                  unoptimized
                />

                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {pkg.discount}
                </div>

                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
                  <FaHeart className="text-red-500" />
                </button>

              </div>

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  {pkg.title}
                </h2>

                <div className="flex items-center gap-2 mt-3 text-gray-500">
                  <FaMapMarkerAlt />
                  {pkg.location}
                </div>

                <div className="flex items-center gap-2 mt-2 text-gray-500">
                  <FaClock />
                  {pkg.duration}
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <FaStar className="text-yellow-500" />
                  <span>{pkg.rating}</span>
                </div>

                <div className="flex justify-between items-center mt-6">

                  <div>
                    <p className="text-gray-500 text-sm">
                      Starting From
                    </p>

                    <h3 className="text-3xl font-bold text-teal-600">
                      ₹{pkg.price.toLocaleString()}
                    </h3>
                  </div>

                  <Link href={`/package/${pkg.id}`}>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl">
                      View
                    </button>
                  </Link>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </div>
  );
}