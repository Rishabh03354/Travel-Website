"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMoneyBillWave,
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
  const { id } = useParams();

  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooking() {
      try {
        const res = await fetch(`/api/bookings/${id}`);
        const data = await res.json();

        if (data.success) {
          setBooking(data.booking);
        }
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }

    fetchBooking();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl font-bold">
        Loading...
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 text-3xl font-bold">
        Booking Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 py-12">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >

        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-10">
          <h1 className="text-4xl font-bold">
            TravelGo Booking Ticket
          </h1>

          <p className="mt-3 opacity-90">
            Booking ID: {booking.id}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-10">

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-teal-600" />
              <span>{booking.destination}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaUser className="text-teal-600" />
              <span>{booking.name}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-teal-600" />
              <span>{booking.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-teal-600" />
              <span>{booking.phone}</span>
            </div>

          </div>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <FaUsers className="text-teal-600" />
              <span>{booking.travelers} Traveler(s)</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-teal-600" />
              <span>{booking.date}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMoneyBillWave className="text-teal-600" />
              <span>₹{booking.price.toLocaleString()}</span>
            </div>

            <div>
              <span
                className={`px-5 py-2 rounded-full text-white ${
                  booking.status === "Confirmed"
                    ? "bg-green-500"
                    : booking.status === "Cancelled"
                    ? "bg-red-500"
                    : "bg-yellow-500"
                }`}
              >
                {booking.status}
              </span>
            </div>

          </div>

        </div>

      </motion.div>

    </div>
  );
}