"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

export type DestinationItem = {
  id: string;
  name: string;
  country: string;
  image: string;
  rating: number;
  price: string;
  tag?: string;
  description?: string;
};

export default function DestinationCard({ destination }: { destination: DestinationItem }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {destination.tag && (
          <span className="absolute top-4 left-4 bg-teal-600/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {destination.tag}
          </span>
        )}

        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm text-xs font-bold text-gray-800">
          <FaStar className="text-amber-400" />
          <span>{destination.rating.toFixed(1)}</span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-1 text-teal-300 text-xs font-medium mb-1">
            <FaMapMarkerAlt />
            <span>{destination.country}</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight">{destination.name}</h3>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        {destination.description && (
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {destination.description}
          </p>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wider block">Starts from</span>
            <span className="text-xl font-bold text-teal-600">{destination.price}</span>
          </div>

          <Link href={`/packages?destination=${encodeURIComponent(destination.name)}`}>
            <button className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition shadow-md shadow-teal-600/20">
              Explore Tours
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
