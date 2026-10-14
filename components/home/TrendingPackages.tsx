"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";

const packages = [
  {
    id: "goa",
    title: "Goa Beach Escape",
    location: "Goa, India",
    duration: "4 Days / 3 Nights",
    price: 7999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
  },
  {
    id: "kashmir",
    title: "Kashmir Paradise",
    location: "Srinagar",
    duration: "6 Days / 5 Nights",
    price: 14999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: "bali",
    title: "Beautiful Bali",
    location: "Indonesia",
    duration: "7 Days / 6 Nights",
    price: 39999,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
  },
];

export default function TrendingPackages() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          🔥 Trending Packages
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                  unoptimized
                />

                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow">
                  <FaStar className="text-yellow-500" />
                  <span>{pkg.rating}</span>
                </div>
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {pkg.title}
                </h3>

                <div className="flex items-center gap-2 mt-3 text-gray-500">
                  <FaMapMarkerAlt />
                  {pkg.location}
                </div>

                <div className="flex items-center gap-2 mt-2 text-gray-500">
                  <FaClock />
                  {pkg.duration}
                </div>

                <div className="flex justify-between items-center mt-6">

                  <div>
                    <p className="text-sm text-gray-500">
                      Starting From
                    </p>

                    <h2 className="text-3xl font-bold text-teal-600">
                      ₹{pkg.price.toLocaleString()}
                    </h2>
                  </div>

                  <Link href={`/package/${pkg.id}`}>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl transition">
                      View
                    </button>
                  </Link>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}