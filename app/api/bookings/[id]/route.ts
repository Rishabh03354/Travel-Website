"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
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

export default function BookingDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const [cancelling, setCancelling] = useState(false);
  const [error, setError] = useState("");

  async function loadBooking() {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`/api/bookings/${id}`, {
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.message || "Booking not found");
        setLoading(false);
        return;
      }

      setBooking(data.booking);
    } catch (error) {
      console.error("BOOKING DETAILS ERROR:", error);
      setError("Unable to load booking details.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      loadBooking();
    }
  }, [id]);

  async function handleCancelBooking() {
    if (!booking) return;

    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setCancelling(true);

      const res = await fetch(`/api/bookings/${booking.id}`, {
        method: "PATCH",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.message || "Unable to cancel booking.");
        return;
      }

      setBooking(data.booking);

      alert("Booking cancelled successfully.");
    } catch (error) {
      console.error("CANCEL ERROR:", error);
      alert("Something went wrong while cancelling the booking.");
    } finally {
      setCancelling(false);
    }
  }

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
            Loading booking...
          </p>
        </motion.div>
      </main>
    );
  }

  if (error || !booking) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-100 flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center max-w-md">
          <div className="text-6xl mb-5">😕</div>

          <h1 className="text-3xl font-bold text-gray-800">
            Booking Not Found
          </h1>

          <p className="text-gray-500 mt-3">
            {error || "We couldn't find this booking."}
          </p>

          <Link href="/my-bookings">
            <button className="mt-7 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold">
              Back to My Bookings
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-100 py-14 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <Link href="/my-bookings">
          <button className="mb-7 text-teal-600 font-semibold hover:text-teal-800 transition">
            ← Back to My Bookings
          </button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/10 rounded-full" />

            <div className="relative z-10">
              <p className="text-sm text-white/80 font-semibold tracking-wider">
                TRAVELGO
              </p>

              <h1 className="text-3xl md:text-4xl font-extrabold mt-2">
                Booking Details
              </h1>

              <p className="mt-3 text-white/80 break-all">
                Booking ID: {booking.id}
              </p>
            </div>
          </div>

          {/* Destination */}
          <div className="p-8 md:p-10 border-b">
            <p className="text-sm text-gray-400 uppercase tracking-wider">
              Destination
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              {booking.destination}
            </h2>

            <div className="mt-5">
              <span
                className={`inline-flex px-5 py-2 rounded-full font-semibold ${
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
          </div>

          {/* Details */}
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-7">
              Traveler Details
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Name */}
              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-sm text-gray-400">
                  Full Name
                </p>

                <p className="text-lg font-semibold text-gray-800 mt-1">
                  {booking.name || "Not available"}
                </p>
              </div>

              {/* Email */}
              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-sm text-gray-400">
                  Email
                </p>

                <p className="text-lg font-semibold text-gray-800 mt-1 break-all">
                  {booking.email || "Not available"}
                </p>
              </div>A

              {/* Phone */}f
              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-sm text-gray-400">
                  Phone
                </p>

                <p className="text-lg font-semibold text-gray-800 mt-1">
                  {booking.phone || "Not available"}
                </p>
              </div>

              {/* Travelers */}
              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-sm text-gray-400">
                  Number of Travelers
                </p>

                <p className="text-lg font-semibold text-gray-800 mt-1">
                  {booking.travelers
                    ? `${booking.travelers} Traveler${
                        booking.travelers > 1 ? "s" : ""
                      }`
                    : "Not available"}
                </p>
              </div>

              {/* Date */}
              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-sm text-gray-400">
                  Travel Date
                </p>

                <p className="text-lg font-semibold text-gray-800 mt-1">
                  📅 {booking.date}
                </p>
              </div>

              {/* Price */}
              <div className="bg-teal-50 rounded-2xl p-5">
                <p className="text-sm text-teal-600">
                  Total Price
                </p>

                <p className="text-2xl font-extrabold text-teal-700 mt-1">
                  ₹{booking.price.toLocaleString("en-IN")}
                </p>
              </div>

            </div>

            {/* Old Booking Notice */}
            {!booking.name &&
              !booking.email &&
              !booking.phone &&
              !booking.travelers && (
                <div className="mt-7 bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
                  <p className="text-sm text-yellow-700">
                    This booking was created before traveler details
                    were added. Some traveler information is not
                    available.
                  </p>
                </div>
              )}

            {/* Actions */}
            <div className="mt-10 flex flex-col md:flex-row gap-4">

              <Link
                href="/packages"
                className="flex-1"
              >
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-xl font-bold transition">
                  Book Another Trip
                </button>
              </Link>

              {booking.status !== "Cancelled" && (
                <button
                  onClick={handleCancelBooking}
                  disabled={cancelling}
                  className="flex-1 bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white py-4 rounded-xl font-bold transition"
                >
                  {cancelling
                    ? "Cancelling..."
                    : "Cancel Booking"}
                </button>
              )}

            </div>

            {booking.status === "Cancelled" && (
              <div className="mt-5 bg-red-50 border border-red-200 rounded-2xl p-5 text-center">
                <p className="text-red-600 font-semibold">
                  This booking has been cancelled.
                </p>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </main>
  );
}