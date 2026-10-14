"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaHeart,
  FaFilter,
  FaHotel,
  FaUtensils,
  FaCar,
  FaArrowRight
} from "react-icons/fa";

interface PackageItem {
  id: string;
  title: string;
  location: string;
  category: string;
  price: number;
  originalPrice: number;
  duration: string;
  durationDays: number;
  rating: number;
  reviews: number;
  discount: string;
  badge?: string;
  image: string;
  highlights: string[];
}

const allPackages: PackageItem[] = [
  {
    id: "goa",
    title: "Goa Tropical Beach & Cruise Tour",
    location: "Goa, India",
    category: "beach",
    price: 7999,
    originalPrice: 11999,
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    rating: 4.8,
    reviews: 142,
    discount: "33% OFF",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop",
    highlights: ["4★ Beachfront Resort", "Sunset Cruise", "Water Sports", "Daily Breakfast"],
  },
  {
    id: "kashmir",
    title: "Enchanting Kashmir & Dal Lake Shikara",
    location: "Srinagar & Gulmarg, India",
    category: "mountain",
    price: 14999,
    originalPrice: 19999,
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    rating: 4.9,
    reviews: 218,
    discount: "25% OFF",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop",
    highlights: ["Luxury Houseboat", "Gondola Ride", "Mughal Gardens", "Private Cab"],
  },
  {
    id: "bali",
    title: "Magical Bali Temples & Island Retreat",
    location: "Ubud & Kuta, Indonesia",
    category: "international",
    price: 39999,
    originalPrice: 49999,
    duration: "7 Days / 6 Nights",
    durationDays: 7,
    rating: 5.0,
    reviews: 310,
    discount: "20% OFF",
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1000&auto=format&fit=crop",
    highlights: ["Private Pool Villa", "Uluwatu Sunset Tour", "Kintamani Volcano", "All Transfers"],
  },
  {
    id: "dubai",
    title: "Glitz & Glamour of Modern Dubai",
    location: "Downtown Dubai, UAE",
    category: "luxury",
    price: 44999,
    originalPrice: 58999,
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    rating: 4.8,
    reviews: 175,
    discount: "24% OFF",
    badge: "Luxury Deal",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    highlights: ["Burj Khalifa 124th Floor", "Desert Safari BBQ", "Marina Yacht Dinner", "Visa Included"],
  },
  {
    id: "manali",
    title: "Scenic Manali & Rohtang Pass Explorer",
    location: "Himachal Pradesh, India",
    category: "mountain",
    price: 11499,
    originalPrice: 15999,
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    rating: 4.7,
    reviews: 98,
    discount: "28% OFF",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop",
    highlights: ["Solang Valley Adventure", "River Rafting", "Campfire Night", "Luxury Volvo"],
  },
  {
    id: "maldives",
    title: "Maldives Overwater Lagoon Romance",
    location: "Male Atoll, Maldives",
    category: "luxury",
    price: 69999,
    originalPrice: 89999,
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    rating: 5.0,
    reviews: 84,
    discount: "22% OFF",
    badge: "Honeymoon Special",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop",
    highlights: ["Water Villa with Pool", "Speedboat Transfers", "Snorkeling Safari", "All Meals Included"],
  },
  {
    id: "paris",
    title: "Romantic Paris & Seine River Romance",
    location: "Paris, France",
    category: "international",
    price: 94999,
    originalPrice: 115000,
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    rating: 4.9,
    reviews: 67,
    discount: "18% OFF",
    badge: "European Dream",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop",
    highlights: ["Eiffel Tower Access", "Louvre Guided Tour", "Seine Dinner Cruise", "Central 4★ Hotel"],
  },
  {
    id: "phuket",
    title: "Phuket Island Hopping & Coral Reefs",
    location: "Phuket, Thailand",
    category: "beach",
    price: 32999,
    originalPrice: 42999,
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    rating: 4.8,
    reviews: 124,
    discount: "23% OFF",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1000&auto=format&fit=crop",
    highlights: ["Phi Phi Island Speedboat", "James Bond Island", "Sea Kayaking", "Buffet Lunch"],
  },
];

const categoryTabs = [
  { id: "all", label: "All Packages" },
  { id: "beach", label: "Beach Holidays" },
  { id: "mountain", label: "Mountains & Snow" },
  { id: "international", label: "International" },
  { id: "luxury", label: "Luxury & Honeymoon" },
];

export default function PackagesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredPackages = useMemo(() => {
    return allPackages
      .filter((pkg) => {
        const matchesSearch =
          pkg.title.toLowerCase().includes(search.toLowerCase()) ||
          pkg.location.toLowerCase().includes(search.toLowerCase());

        const matchesCat =
          activeCategory === "all" || pkg.category === activeCategory;

        return matchesSearch && matchesCat;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
      });
  }, [search, activeCategory, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-900 text-white py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-white/10 backdrop-blur-md text-teal-200 border border-white/20 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
              Curated Escapes
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">
              Tour Packages & Itineraries
            </h1>
            <p className="mt-4 text-teal-100 text-base md:text-lg max-w-2xl mx-auto font-light">
              Explore handpicked, all-inclusive vacation packages with guaranteed best prices and verified accommodations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Filter & Search Console */}
      <main className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Box */}
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by package name or destination..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-50 border border-gray-200 text-gray-800 text-sm font-semibold rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer w-full md:w-auto"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-gray-100">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  activeCategory === tab.id
                    ? "bg-teal-600 text-white shadow-md shadow-teal-600/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <FaFilter className="text-gray-300 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">No packages match your search</h3>
            <p className="text-gray-500 mt-2 text-sm">Try resetting your filters or search keyword.</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
              className="mt-5 bg-teal-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-teal-700 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPackages.map((pkg) => {
                const isLiked = wishlist.includes(pkg.id);
                return (
                  <motion.div
                    layout
                    key={pkg.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6 }}
                    className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {pkg.badge && (
                          <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                            {pkg.badge}
                          </span>
                        )}
                        <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                          {pkg.discount}
                        </span>
                      </div>

                      {/* Wishlist Button */}
                      <button
                        onClick={() => toggleWishlist(pkg.id)}
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-md hover:scale-110 transition active:scale-95"
                        aria-label="Save to wishlist"
                      >
                        <FaHeart className={isLiked ? "text-red-500" : "text-gray-300"} />
                      </button>

                      {/* Duration & Rating Chips */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                        <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl">
                          <FaClock className="text-teal-300" />
                          {pkg.duration}
                        </span>
                        <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-xl">
                          <FaStar className="text-amber-400" />
                          {pkg.rating} ({pkg.reviews})
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium mb-2">
                        <FaMapMarkerAlt className="text-teal-600" />
                        <span>{pkg.location}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-1">
                        {pkg.title}
                      </h3>

                      {/* Highlights */}
                      <div className="grid grid-cols-2 gap-2 my-4 pt-3 border-t border-gray-100 text-xs text-gray-600">
                        <span className="flex items-center gap-1.5">
                          <FaHotel className="text-teal-500" /> Hotel Stay
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaUtensils className="text-teal-500" /> Meals
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaCar className="text-teal-500" /> Transfers
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaStar className="text-teal-500" /> Sightseeing
                        </span>
                      </div>

                      {/* Pricing and Button */}
                      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div>
                          <span className="text-xs text-gray-400 line-through block">
                            ₹{pkg.originalPrice.toLocaleString()}
                          </span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-black text-teal-600">
                              ₹{pkg.price.toLocaleString()}
                            </span>
                            <span className="text-xs text-gray-500">/ person</span>
                          </div>
                        </div>

                        <Link href={`/package/${pkg.id}`}>
                          <button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold text-xs px-5 py-3 rounded-xl transition shadow-md shadow-teal-600/20 flex items-center gap-1.5">
                            <span>Details</span>
                            <FaArrowRight className="text-[10px]" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  );
}
