"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaPrint,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaShieldAlt,
  FaPlaneDeparture
} from "react-icons/fa";

interface Booking {
  id: string;
  destination: string;
  price: number;
  date: string;
  status: string;
  name: string;
  email: string;
  phone: string;
  travelers: number;
}

export default function BookingDetailsPage() {
  const params = useParams();
  const id = params?.id as string;

  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooking() {
      try {
        const res = await fetch(`/api/bookings/${id}`);
        const data = await res.json();
        if (data.success && data.booking) {
          setBooking(data.booking);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }

    if (id) {
      fetchBooking();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-gray-500 font-bold">Retrieving E-Ticket & Itinerary...</p>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Booking Not Found</h2>
        <p className="text-gray-500 mb-6">We could not find a reservation matching this booking reference.</p>
        <Link href="/my-bookings">
          <button className="bg-teal-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-teal-700 transition">
            Back to My Bookings
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/my-bookings"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-teal-600 transition"
          >
            <FaArrowLeft className="text-xs" />
            <span>Back to All Bookings</span>
          </Link>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl text-xs font-bold shadow-sm hover:bg-gray-50 transition"
          >
            <FaPrint />
            <span>Print E-Ticket</span>
          </button>
        </div>

        {/* E-Ticket Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
        >
          {/* Ticket Header */}
          <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-900 text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
                <FaPlaneDeparture /> Official Booking Confirmation
              </div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">{booking.destination}</h1>
              <p className="text-xs text-teal-200 mt-2">
                Confirmation Reference: <span className="font-mono font-bold text-white uppercase">{booking.id}</span>
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl text-right">
              <span className="text-[10px] text-teal-200 uppercase font-bold block">Status</span>
              <span className="text-lg font-black text-white">
                {booking.status}
              </span>
            </div>
          </div>

          {/* Ticket Body: Two Columns */}
          <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Passenger & Contact Details */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                Traveler Details
              </h3>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600 mt-0.5">
                  <FaUser className="text-sm" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium">Primary Traveler</span>
                  <span className="text-base font-bold text-gray-900">{booking.name || "Guest"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-600 mt-0.5">
                  <FaEnvelope className="text-sm" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium">E-Ticket Delivery Email</span>
                  <span className="text-base font-semibold text-gray-900">{booking.email || "Registered Account"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 mt-0.5">
                  <FaPhone className="text-sm" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium">WhatsApp & Call Updates</span>
                  <span className="text-base font-semibold text-gray-900">{booking.phone || "Not provided"}</span>
                </div>
              </div>
            </div>

            {/* Itinerary & Payment Details */}
            <div className="space-y-6 md:pl-8 pt-6 md:pt-0">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                Trip Breakdown
              </h3>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600 mt-0.5">
                  <FaCalendarAlt className="text-sm" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium">Scheduled Departure</span>
                  <span className="text-base font-bold text-gray-900">{booking.date || "Pending schedule"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-600 mt-0.5">
                  <FaUsers className="text-sm" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-medium">Group Size</span>
                  <span className="text-base font-bold text-gray-900">
                    {booking.travelers ? `${booking.travelers} Guests` : "1 Guest"}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block">Total Fare Paid</span>
                  <span className="text-3xl font-black text-teal-600">
                    ?{booking.price ? booking.price.toLocaleString("en-IN") : "0"}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                  <FaCheckCircle />
                  <span>Payment Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Footer / Instructions */}
          <div className="bg-gray-50/80 p-6 md:px-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-teal-600 text-sm" />
              <span>Please carry a valid government-issued photo ID at check-in.</span>
            </div>

            <div className="text-gray-400 font-mono text-[11px]">
              TICKET-VOUCHER-{booking.id.slice(-6).toUpperCase()}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
