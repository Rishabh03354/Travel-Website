"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaRupeeSign, FaEye } from "react-icons/fa";

interface BookingProps {
  booking: {
    id: string;
    destination: string;
    price: number;
    date: string;
    status: string;
  };
}

export default function BookingCard({ booking }: BookingProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "cancelled":
        return "bg-red-50 text-red-700 border-red-200";
      case "pending":
      default:
        return "bg-amber-50 text-amber-700 border-amber-200";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row justify-between sm:items-center gap-4"
    >
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-xl font-bold text-gray-900">{booking.destination}</h3>
          <span
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${getStatusColor(
              booking.status
            )}`}
          >
            {booking.status}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-2">
          <span className="flex items-center gap-1.5">
            <FaCalendarAlt className="text-teal-600" />
            {booking.date}
          </span>
          <span className="flex items-center gap-1 text-teal-700 font-bold">
            <FaRupeeSign />
            {booking.price.toLocaleString()}
          </span>
        </div>
      </div>

      <Link href={`/my-bookings/${booking.id}`}>
        <button className="flex items-center gap-2 bg-gray-50 hover:bg-teal-50 text-gray-700 hover:text-teal-700 font-semibold px-4 py-2 rounded-xl text-sm transition border border-gray-200 hover:border-teal-200">
          <FaEye />
          <span>Details</span>
        </button>
      </Link>
    </motion.div>
  );
}
