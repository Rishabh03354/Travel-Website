"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          Discover the World
        </h1>

        <p className="mt-6 text-xl md:text-2xl max-w-2xl mx-auto">
          Book unforgettable trips, explore beautiful destinations,
          and travel with confidence.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link href="/packages">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-lg font-semibold transition">
              Explore Packages
            </button>
          </Link>

          <Link href="/my-bookings">
            <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl text-lg font-semibold transition">
              My Bookings
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}