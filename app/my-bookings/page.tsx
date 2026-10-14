"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Booking {
  id: string;
  destination: string;
  price: number;
  date: string;
  status: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  travelers: number | null;
  userId: string;
  createdAt: string;
}

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBookings() {
      try {
        const userString = localStorage.getItem("user");

        if (!userString) {
          setError("Please login first.");
          setLoading(false);
          return;
        }

        const user = JSON.parse(userString);

        if (!user.id) {
          setError("User information not found. Please login again.");
          setLoading(false);
          return;
        }

        const res = await fetch(
          `/api/my-bookings?userId=${encodeURIComponent(user.id)}`,
          {
            cache: "no-store",
          }
        );

        const data = await res.json();

        if (!res.ok || !data.success) {
          setError(data.message || "Unable to load bookings.");
          setLoading(false);
          return;
        }

        setBookings(data.bookings || []);
      } catch (error) {
        console.error("MY BOOKINGS FRONTEND ERROR:", error);
        setError("Something went wrong while loading your bookings.");
      } finally {
        setLoading(false);
      }
    }

    loadBookings();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin mx-auto" />

          <p className="mt-5 text-xl font-semibold text-gray-700">
            Loading your bookings...
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-center gap-5 mb-12"
        >
          <div>
            <p className="text-teal-600 font-semibold mb-2">
              TRAVELGO
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              My Bookings
            </h1>

            <p className="text-gray-500 mt-3">
              Manage and view all your trips in one place.
            </p>
          </div>

          <Link href="/packages">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-7 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              + Book More Trips
            </button>
          </Link>
        </motion.div>

        {/* Error */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 text-red-600 rounded-2xl p-6 text-center mb-8"
          >
            <p className="font-semibold">{error}</p>

            <Link href="/login">
              <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg">
                Login Again
              </button>
            </Link>
          </motion.div>
        )}

        {/* Empty State */}
        {!error && bookings.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-xl p-12 text-center"
          >
            <div className="text-6xl mb-5">
              ✈️
            </div>

            <h2 className="text-3xl font-bold text-gray-800">
              No Bookings Found
            </h2>

            <p className="text-gray-500 mt-3">
              You haven't booked a trip yet.
            </p>

            <Link href="/packages">
              <button className="mt-7 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold">
                Explore Packages
              </button>
            </Link>
          </motion.div>
        )}

        {/* Booking Count */}
        {bookings.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <span className="bg-white px-5 py-2 rounded-full shadow-sm text-gray-600">
              {bookings.length}{" "}
              {bookings.length === 1 ? "Booking" : "Bookings"}
            </span>
          </motion.div>
        )}

        {/* Booking Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {bookings.map((booking, index) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
            >
              <Link href={`/my-bookings/${booking.id}`}>
                <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2">

                  {/* Top Banner */}
                  <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6 text-white relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />

                    <div className="relative z-10">
                      <p className="text-sm text-white/80">
                        DESTINATION
                      </p>

                      <h2 className="text-2xl font-bold mt-1">
                        {booking.destination}
                      </h2>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-7">

                    {/* Price + Status */}
                    <div className="flex justify-between items-center mb-6">

                      <div>
                        <p className="text-sm text-gray-400">
                          Total Price
                        </p>

                        <p className="text-2xl font-extrabold text-teal-600">
                          ₹{booking.price.toLocaleString("en-IN")}
                        </p>
                      </div>

                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          booking.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : booking.status === "Cancelled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {booking.status}
                      </span>

                    </div>

                    {/* Information Grid */}
                    <div className="grid grid-cols-2 gap-5">

                      <div>
                        <p className="text-xs text-gray-400 uppercase">
                          Travel Date
                        </p>

                        <p className="font-semibold text-gray-700 mt-1">
                          📅 {booking.date}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400 uppercase">
                          Travelers
                        </p>

                        <p className="font-semibold text-gray-700 mt-1">
                          👥{" "}
                          {booking.travelers
                            ? `${booking.travelers} Traveler${
                                booking.travelers > 1 ? "s" : ""
                              }`
                            : "Not available"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400 uppercase">
                          Passenger
                        </p>

                        <p className="font-semibold text-gray-700 mt-1 truncate">
                          👤 {booking.name || "Not available"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400 uppercase">
                          Phone
                        </p>

                        <p className="font-semibold text-gray-700 mt-1">
                          📱 {booking.phone || "Not available"}
                        </p>
                      </div>

                    </div>

                    {/* Old Booking Notice */}
                    {!booking.name &&
                      !booking.email &&
                      !booking.phone &&
                      !booking.travelers && (
                        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-3">
                          <p className="text-xs text-gray-500">
                            This booking was created before traveler
                            details were added.
                          </p>
                        </div>
                      )}

                    {/* View Details */}
                    <div className="mt-7 pt-5 border-t flex justify-between items-center">
                      <span className="text-gray-400 text-sm">
                        Booking ID:{" "}
                        {booking.id.slice(-8)}
                      </span>

                      <span className="text-teal-600 font-bold group-hover:translate-x-1 transition-transform">
                        View Details →
                      </span>
                    </div>

                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}