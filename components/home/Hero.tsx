"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCompass,
  FaSearch,
  FaStar,
  FaShieldAlt,
  FaTags,
  FaUsers
} from "react-icons/fa";

export default function Hero() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("any");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams();
    if (destination) query.set("search", destination);
    if (category !== "all") query.set("category", category);
    if (duration !== "any") query.set("duration", duration);
    router.push(`/packages?${query.toString()}`);
  };

  const trendingTags = ["Goa", "Bali", "Kashmir", "Dubai", "Paris", "Maldives"];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Cinematic Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop')",
        }}
      />
      {/* Gradient Mask */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/40" />
      <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        {/* Floating Social Proof Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-md border border-white/25 px-5 py-2 rounded-full text-white text-xs md:text-sm font-semibold shadow-lg mb-8"
        >
          <div className="flex text-amber-400 text-xs">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <span>Rated 4.9/5 by 25,000+ Happy Explorers</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl"
        >
          Escape The Ordinary. <br />
          <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-amber-200 bg-clip-text text-transparent">
            Explore The World.
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl font-light"
        >
          Handcrafted holiday packages, authentic cultural tours, and seamless bookings for unforgettable memories.
        </motion.p>

        {/* Floating Luxury Search Console */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-5xl mt-12 bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-3xl shadow-2xl border border-white/40 text-left"
        >
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Destination Input */}
            <div className="md:col-span-4 p-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-teal-300 transition">
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-teal-600" /> Destination
              </label>
              <input
                type="text"
                placeholder="Where to? (e.g. Bali, Kashmir)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Travel Category */}
            <div className="md:col-span-3 p-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-teal-300 transition">
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <FaCompass className="text-teal-600" /> Tour Type
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-gray-800 focus:outline-none cursor-pointer"
              >
                <option value="all">All Styles</option>
                <option value="beach">Beach & Coastal</option>
                <option value="mountain">Mountain & Snow</option>
                <option value="luxury">Luxury & Honeymoon</option>
                <option value="adventure">Adventure & Wildlife</option>
              </select>
            </div>

            {/* Duration */}
            <div className="md:col-span-2 p-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-teal-300 transition">
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <FaCalendarAlt className="text-teal-600" /> Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-gray-800 focus:outline-none cursor-pointer"
              >
                <option value="any">Any Length</option>
                <option value="short">1 - 4 Days</option>
                <option value="medium">5 - 7 Days</option>
                <option value="long">8+ Days</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="md:col-span-3">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 px-6 rounded-2xl transition duration-300 shadow-lg shadow-teal-600/30 flex items-center justify-center gap-2.5 text-base hover:scale-102"
              >
                <FaSearch className="text-sm" />
                <span>Find Tours</span>
              </button>
            </div>
          </form>

          {/* Quick Trending Tags */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-gray-400 flex items-center gap-1">
              <FaTags className="text-teal-500" /> Popular:
            </span>
            {trendingTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setDestination(tag);
                  router.push(`/packages?search=${encodeURIComponent(tag)}`);
                }}
                className="bg-gray-100 hover:bg-teal-50 text-gray-600 hover:text-teal-700 px-2.5 py-1 rounded-lg transition font-medium"
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-slate-300 text-xs sm:text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-teal-400 text-base" />
            <span>100% Secure Payments</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCompass className="text-teal-400 text-base" />
            <span>Handpicked Local Guides</span>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-teal-400 text-base" />
            <span>Best Price Guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
