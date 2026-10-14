"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaMapMarkerAlt, FaSuitcase, FaArrowRight } from "react-icons/fa";

const destinations = [
  {
    name: "Goa",
    country: "India",
    category: "beach",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop",
    packagesCount: "14 Packages",
    rating: 4.8,
    price: "₹7,999",
    tag: "Trending Beach",
  },
  {
    name: "Kashmir",
    country: "India",
    category: "mountain",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop",
    packagesCount: "10 Packages",
    rating: 4.9,
    price: "₹14,999",
    tag: "Heaven on Earth",
  },
  {
    name: "Bali",
    country: "Indonesia",
    category: "international",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1000&auto=format&fit=crop",
    packagesCount: "18 Packages",
    rating: 4.9,
    price: "₹39,999",
    tag: "Tropical Haven",
  },
  {
    name: "Dubai",
    country: "UAE",
    category: "luxury",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    packagesCount: "12 Packages",
    rating: 4.8,
    price: "₹44,999",
    tag: "Ultra Luxury",
  },
  {
    name: "Manali",
    country: "India",
    category: "mountain",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop",
    packagesCount: "9 Packages",
    rating: 4.7,
    price: "₹11,499",
    tag: "Adventure Peak",
  },
  {
    name: "Maldives",
    country: "Maldives",
    category: "luxury",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop",
    packagesCount: "8 Packages",
    rating: 5.0,
    price: "₹69,999",
    tag: "Island Bliss",
  },
];

const categories = [
  { id: "all", label: "All Destinations" },
  { id: "beach", label: "Beaches" },
  { id: "mountain", label: "Himalayas" },
  { id: "international", label: "International" },
  { id: "luxury", label: "Luxury Escapes" },
];

export default function PopularDestinations() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? destinations
      : destinations.filter((d) => d.category === activeTab);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Title and Tab Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full mb-3">
              <FaSuitcase className="text-sm" /> Explore Iconic Places
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Popular Destinations
            </h2>
            <p className="text-gray-500 mt-2 text-base max-w-xl">
              Curated by travel veterans. Choose from sun-soaked beaches, tranquil snow valleys, and futuristic cityscapes.
            </p>
          </div>

          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700 hover:gap-3 transition-all"
          >
            <span>View All Destinations</span>
            <FaArrowRight />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                activeTab === cat.id
                  ? "bg-teal-600 text-white shadow-md shadow-teal-600/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm text-xs font-bold text-gray-800">
                    <FaStar className="text-amber-400" />
                    <span>{item.rating}</span>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-teal-300 font-semibold mb-1">
                      <FaMapMarkerAlt />
                      <span>{item.country}</span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">{item.name}</h3>
                  </div>
                </div>

                {/* Card Footer Content */}
                <div className="p-5 flex items-center justify-between border-t border-gray-100 mt-auto bg-gray-50/60">
                  <div>
                    <span className="text-[11px] text-gray-400 font-medium block uppercase tracking-wider">
                      Starting From
                    </span>
                    <span className="text-xl font-extrabold text-teal-600">{item.price}</span>
                  </div>

                  <Link href={`/packages?destination=${encodeURIComponent(item.name)}`}>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-md shadow-teal-600/20 flex items-center gap-1.5">
                      <span>View Packages</span>
                      <FaArrowRight className="text-[10px]" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
