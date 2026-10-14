"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaCompass } from "react-icons/fa";
import DestinationCard, { DestinationItem } from "@/components/cards/DestinationCard";

const allDestinations: DestinationItem[] = [
  {
    id: "goa",
    name: "Goa",
    country: "India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    rating: 4.8,
    price: "₹14,999",
    tag: "Beach Paradise",
    description: "Sun-kissed beaches, vibrant nightlife, Portuguese heritage, and relaxing seaside vibes."
  },
  {
    id: "kashmir",
    name: "Kashmir",
    country: "India",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    rating: 4.9,
    price: "₹24,999",
    tag: "Heaven on Earth",
    description: "Snow-capped peaks, serene Dal Lake shikaras, and tranquil valleys of Gulmarg & Pahalgam."
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
    rating: 4.9,
    price: "₹45,999",
    tag: "Island Bliss",
    description: "Lush rice terraces, spiritual ancient temples, vibrant beach clubs, and world-class surfing."
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    rating: 4.7,
    price: "₹52,999",
    tag: "Ultra Luxury",
    description: "Iconic skyscrapers, thrilling desert safaris, luxury shopping, and golden dunes."
  },
  {
    id: "manali",
    name: "Manali",
    country: "India",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    rating: 4.7,
    price: "₹18,500",
    tag: "Adventure Hub",
    description: "Rohtang Pass adventures, pine forests, cafe culture, and stunning Himalayan panoramas."
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    rating: 5.0,
    price: "₹89,999",
    tag: "Romantic Getaway",
    description: "Overwater luxury villas, crystal-clear turquoise lagoons, and private coral reefs."
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    rating: 4.9,
    price: "₹95,000",
    tag: "City of Lights",
    description: "The Eiffel Tower, world-class art at the Louvre, romantic Seine cruises, and Parisian bistros."
  },
  {
    id: "phuket",
    name: "Phuket",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5",
    rating: 4.8,
    price: "₹34,999",
    tag: "Tropical Haven",
    description: "Limestone cliffs, island hopping, exotic night markets, and thrilling water sports."
  }
];

const categories = ["All", "India", "International", "Beaches", "Mountains", "Luxury"];

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDestinations = allDestinations.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedCategory === "All") return true;
    if (selectedCategory === "India") return dest.country === "India";
    if (selectedCategory === "International") return dest.country !== "India";
    if (selectedCategory === "Beaches")
      return ["Goa", "Bali", "Maldives", "Phuket"].includes(dest.name);
    if (selectedCategory === "Mountains")
      return ["Kashmir", "Manali"].includes(dest.name);
    if (selectedCategory === "Luxury")
      return ["Dubai", "Maldives", "Paris"].includes(dest.name);

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Header */}
      <section className="relative py-24 bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-teal-200 text-sm font-semibold mb-6">
              <FaCompass /> Discover The World
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Top Travel Destinations
            </h1>
            <p className="mt-4 text-lg md:text-xl text-teal-100 max-w-2xl mx-auto">
              Explore hand-picked destinations around the globe crafted for unforgettable memories.
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="mt-10 max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search by city or country (e.g., Bali, Kashmir, France)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-gray-800 placeholder-gray-400 pl-12 pr-6 py-4 rounded-2xl shadow-xl text-base focus:outline-none focus:ring-4 focus:ring-teal-400/40"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-600 text-xl" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 mt-12">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-teal-600 text-white shadow-md shadow-teal-600/30 scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Destination Grid */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <FaCompass className="text-gray-300 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">No destinations found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search terms or filters.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
