"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaSuitcaseRolling,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaPlaneDeparture,
} from "react-icons/fa";
import Link from "next/link";

interface Booking {
  id: string;
  destination: string;
  price: number;
  date: string;
  status: string;
}

interface DashboardData {
  stats: {
    totalBookings: number;
    pendingBookings: number;
    confirmedBookings: number;
    cancelledBookings: number;
  };
  recentBookings: Booking[];
}

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    setUser(storedUser);

    if (!storedUser.id) return;

    fetch(`/api/dashboard?userId=${storedUser.id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setData(result);
        }
      });
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-bold">
        Loading Dashboard...
      </div>
    );
  }

  const cards = [
    {
      title: "Total Bookings",
      value: data.stats.totalBookings,
      color: "from-blue-500 to-cyan-500",
      icon: <FaSuitcaseRolling size={34} />,
    },
    {
      title: "Pending",
      value: data.stats.pendingBookings,
      color: "from-yellow-500 to-orange-500",
      icon: <FaClock size={34} />,
    },
    {
      title: "Confirmed",
      value: data.stats.confirmedBookings,
      color: "from-green-500 to-emerald-500",
      icon: <FaCheckCircle size={34} />,
    },
    {
      title: "Cancelled",
      value: data.stats.cancelledBookings,
      color: "from-red-500 to-pink-500",
      icon: <FaTimesCircle size={34} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-100 p-8">

      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-5xl font-bold">
          Welcome,
          <span className="text-teal-600">
            {" "}
            {user?.name || "Traveler"} 👋
          </span>
        </h1>

        <p className="text-gray-500 mt-3">
          Plan your next adventure with TravelGo.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className={`bg-gradient-to-r ${card.color} text-white rounded-3xl shadow-xl p-8`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p>{card.title}</p>
                <h2 className="text-5xl font-bold mt-3">
                  {card.value}
                </h2>
              </div>

              {card.icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 mb-10">
        <Link href="/packages">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl">
            Explore Packages
          </button>
        </Link>

        <Link href="/my-bookings">
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl">
            My Bookings
          </button>
        </Link>
      </div>

      {/* Recent Bookings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-3xl shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold mb-6">
          Recent Bookings
        </h2>

        {data.recentBookings.length === 0 ? (
          <div className="text-center py-10">
            <FaPlaneDeparture
              size={60}
              className="mx-auto text-gray-300 mb-4"
            />

            <p className="text-gray-500">
              No bookings yet.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {data.recentBookings.map((booking) => (
              <motion.div
                key={booking.id}
                whileHover={{ scale: 1.02 }}
                className="border rounded-2xl p-5 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-bold">
                    {booking.destination}
                  </h3>

                  <p className="text-gray-500">
                    {booking.date}
                  </p>

                  <p className="font-semibold text-teal-600">
                    ₹{booking.price.toLocaleString()}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-white ${
                    booking.status === "Confirmed"
                      ? "bg-green-500"
                      : booking.status === "Cancelled"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {booking.status}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

    </div>
  );
}