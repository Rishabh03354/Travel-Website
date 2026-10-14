"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaSuitcaseRolling,
  FaCalendarAlt,
  FaUser,
  FaPhoneAlt,
  FaArrowRight,
  FaPlusCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaClock
} from "react-icons/fa";

interface Booking {
  id: string;
  destination: string;
  price: number;
  date: string;
  status: string;
  name?: string;
  email?: string;
  phone?: string;
  travelers?: number;
}

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setLoading(false);
      setError("Please log in to view your bookings.");
      return;
    }

    try {
      const user = JSON.parse(storedUser);
      if (!user.id) {
        setLoading(false);
        setError("Invalid user session. Please log in again.");
        return;
      }

      fetch(`/api/my-bookings?userId=${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success && Array.isArray(data.bookings)) {
            setBookings(data.bookings);
          } else {
            setError(data.message || "Failed to fetch bookings.");
          }
          setLoading(false);
        })
        .catch(() => {
          setError("Network error while loading your trips.");
          setLoading(false);
        });
    } catch {
      setError("Session expired. Please log in again.");
      setLoading(false);
    }
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
            <FaCheckCircle className="text-[10px]" /> Confirmed
          </span>
        );
      case "cancelled":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800">
            <FaTimesCircle className="text-[10px]" /> Cancelled
          </span>
        );
      case "pending":
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
            <FaClock className="text-[10px]" /> Pending
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block mb-1">
              Your Travel History
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
              My Bookings
            </h1>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Track upcoming trips, view itinerary receipts, and check booking status.
            </p>
          </div>

          <Link href="/packages">
            <button className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-teal-600/20 transition hover:scale-102">
              <FaPlusCircle />
              <span>Book Another Trip</span>
            </button>
          </Link>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-24">
            <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-500 font-semibold">Loading your bookings...</p>
          </div>
        )}

        {/* Error / Not Logged In */}
        {!loading && error && (
          <div className="bg-white rounded-3xl p-10 text-center max-w-lg mx-auto border border-gray-100 shadow-xl">
            <FaSuitcaseRolling className="text-5xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{error}</h3>
            <p className="text-gray-500 text-sm mb-6">Log in to sync and access your reservations.</p>
            <Link href="/login">
              <button className="bg-teal-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-teal-700 transition">
                Log In Now
              </button>
            </Link>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && bookings.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center max-w-xl mx-auto border border-gray-100 shadow-xl">
            <FaSuitcaseRolling className="text-6xl text-teal-300 mx-auto mb-5" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No Bookings Found</h2>
            <p className="text-gray-500 text-sm mb-8">
              You haven&apos;t reserved any trips yet. Discover our top trending destinations and start your adventure!
            </p>
            <Link href="/packages">
              <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-teal-600/20 hover:scale-102 transition">
                Explore Holiday Packages
              </button>
            </Link>
          </div>
        )}

        {/* Bookings List */}
        {!loading && !error && bookings.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-800 p-6 text-white flex justify-between items-start">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-teal-200 font-bold block mb-1">
                      Confirmed Destination
                    </span>
                    <h3 className="text-2xl font-black tracking-tight">{booking.destination}</h3>
                  </div>
                  <div>{getStatusBadge(booking.status)}</div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 text-sm text-gray-600">
                  <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-100">
                    <div>
                      <span className="text-[11px] text-gray-400 font-bold uppercase block mb-1">
                        Travel Date
                      </span>
                      <div className="flex items-center gap-1.5 font-bold text-gray-900">
                        <FaCalendarAlt className="text-teal-600" />
                        <span>{booking.date || "To be confirmed"}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] text-gray-400 font-bold uppercase block mb-1">
                        Guests
                      </span>
                      <div className="flex items-center gap-1.5 font-bold text-gray-900">
                        <FaUser className="text-teal-600" />
                        <span>{booking.travelers ? `${booking.travelers} Guests` : "1 Guest"}</span>
                      </div>
                    </div>
                  </div>

                  {booking.name && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">Primary Traveler:</span>
                      <span className="font-semibold text-gray-800">{booking.name}</span>
                    </div>
                  )}

                  {booking.phone && (
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">Contact:</span>
                      <span className="font-semibold text-gray-800">{booking.phone}</span>
                    </div>
                  )}

                  {/* Pricing and Action */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-gray-400 uppercase tracking-wider block">
                        Total Amount Paid
                      </span>
                      <span className="text-2xl font-black text-teal-600">
                        ₹{booking.price ? booking.price.toLocaleString("en-IN") : "0"}
                      </span>
                    </div>

                    <Link href={`/my-bookings/${booking.id}`}>
                      <button className="flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 bg-teal-50 hover:bg-teal-100 px-4 py-2.5 rounded-xl transition">
                        <span>Receipt & Details</span>
                        <FaArrowRight className="text-[10px]" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
