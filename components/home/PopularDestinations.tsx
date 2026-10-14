"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  {
    name: "Goa",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
  },
  {
    name: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
  },
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          🌍 Popular Destinations
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl overflow-hidden shadow-xl cursor-pointer"
            >
              <div className="relative h-72">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                  unoptimized
                />

                <div className="absolute inset-0 bg-black/35 flex items-end p-6">
                  <h3 className="text-white text-3xl font-bold">
                    {destination.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}