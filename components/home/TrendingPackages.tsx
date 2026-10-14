"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaHeart,
  FaUtensils,
  FaHotel,
  FaCar,
  FaArrowRight
} from "react-icons/fa";

export interface PackageItem {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  discount: string;
  badge?: string;
  image: string;
  highlights: string[];
}

export const trendingPackagesData: PackageItem[] = [
  {
    id: "goa",
    title: "Goa Tropical Beach & Cruise Tour",
    location: "North & South Goa, India",
    duration: "4 Days / 3 Nights",
    price: 7999,
    originalPrice: 11999,
    rating: 4.8,
    reviews: 142,
    discount: "33% OFF",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop",
    highlights: ["4★ Beachfront Resort", "Mandovi Sunset Cruise", "Water Sports", "Daily Breakfast"],
  },
  {
    id: "kashmir",
    title: "Enchanting Kashmir & Dal Lake Shikara",
    location: "Srinagar & Gulmarg, India",
    duration: "6 Days / 5 Nights",
    price: 14999,
    originalPrice: 19999,
    rating: 4.9,
    reviews: 218,
    discount: "25% OFF",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop",
    highlights: ["Luxury Houseboat Stay", "Gondola Cable Car", "Mughal Gardens", "Private Cab"],
  },
  {
    id: "bali",
    title: "Magical Bali Temples & Island Retreat",
    location: "Ubud & Kuta, Indonesia",
    duration: "7 Days / 6 Nights",
    price: 39999,
    originalPrice: 49999,
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
    duration: "5 Days / 4 Nights",
    price: 44999,
    originalPrice: 58999,
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
    duration: "5 Days / 4 Nights",
    price: 11499,
    originalPrice: 15999,
    rating: 4.7,
    reviews: 98,
    discount: "28% OFF",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop",
    highlights: ["Solang Valley Adventure", "River Rafting", "Campfire Night", "Luxury Volvo Bus"],
  },
  {
    id: "maldives",
    title: "Maldives Overwater Lagoon Romance",
    location: "Male Atoll, Maldives",
    duration: "5 Days / 4 Nights",
    price: 69999,
    originalPrice: 89999,
    rating: 5.0,
    reviews: 84,
    discount: "22% OFF",
    badge: "Honeymoon Special",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop",
    highlights: ["Water Villa with Pool", "Speedboat Transfers", "Snorkeling Safari", "All Meals & Drinks"],
  },
];

export default function TrendingPackages() {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full mb-3">
              <FaStar className="text-amber-400" /> Handcrafted Itineraries
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Trending Tour Packages
            </h2>
            <p className="text-gray-500 mt-2 text-base max-w-xl">
              All-inclusive holiday packages with verified stays, local sightseeing, and personalized assistance.
            </p>
          </div>

          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700 hover:gap-3 transition-all"
          >
            <span>Explore All Packages</span>
            <FaArrowRight />
          </Link>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingPackagesData.map((pkg, index) => {
            const isLiked = wishlist.includes(pkg.id);
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Image Section */}
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

                  {/* Duration Chip on Image */}
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

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium mb-2">
                    <FaMapMarkerAlt className="text-teal-600" />
                    <span>{pkg.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-1">
                    {pkg.title}
                  </h3>

                  {/* Amenity Icons */}
                  <div className="grid grid-cols-2 gap-2 my-4 pt-3 border-t border-gray-100 text-xs text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <FaHotel className="text-teal-500" /> Stay Included
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaUtensils className="text-teal-500" /> Meals Included
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaCar className="text-teal-500" /> Cab Transfers
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaStar className="text-teal-500" /> Top Sightseeing
                    </span>
                  </div>

                  {/* Pricing and Book Button */}
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
                      <button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold text-xs px-5 py-3 rounded-xl transition shadow-md shadow-teal-600/20">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
