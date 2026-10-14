"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaSuitcaseRolling,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaPlaneDeparture,
  FaCompass,
  FaCalendarAlt,
  FaUser
} from "react-icons/fa";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setLoading(false);
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      if (parsedUser.id) {
        fetch(`/api/dashboard?userId=${parsedUser.id}`)
          .then((res) => res.json())
          .then((result) => {
            if (result.success) {
              setData(result);
            }
            setLoading(false);
          })
          .catch(() => setLoading(false));
      } else {
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center">
        <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-gray-500 font-bold">Loading Dashboard...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center px-6 text-center">
        <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center text-3xl mb-4">
          <FaUser />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Please Sign In</h2>
        <p className="text-gray-500 text-sm mb-6 max-w-sm">
          You need to be logged in to view your dashboard, bookings, and traveler perks.
        </p>
        <Link href="/login">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-teal-600/20 transition">
            Go to Login
          </button>
        </Link>
      </div>
    );
  }

  const statsCards = [
    {
      title: "Total Bookings",
      value: data?.stats.totalBookings || 0,
      gradient: "from-blue-600 to-cyan-500",
      icon: <FaSuitcaseRolling className="text-2xl" />,
    },
    {
      title: "Confirmed",
      value: data?.stats.confirmedBookings || 0,
      gradient: "from-emerald-600 to-teal-500",
      icon: <FaCheckCircle className="text-2xl" />,
    },
    {
      title: "Pending Approval",
      value: data?.stats.pendingBookings || 0,
      gradient: "from-amber-500 to-orange-500",
      icon: <FaClock className="text-2xl" />,
    },
    {
      title: "Cancelled",
      value: data?.stats.cancelledBookings || 0,
      gradient: "from-rose-600 to-pink-500",
      icon: <FaTimesCircle className="text-2xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-900 text-white rounded-3xl p-8 md:p-12 shadow-xl mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div>
            <span className="text-teal-300 text-xs font-bold uppercase tracking-wider block mb-2">
              Explorer Dashboard
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">
              Welcome back, {user.name || "Traveler"}!
            </h1>
            <p className="text-teal-100 text-sm md:text-base mt-2 max-w-lg">
              Manage your upcoming adventures, check flight schedules, and explore tailored holiday deals.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/packages">
              <button className="bg-white text-teal-900 hover:bg-teal-50 font-bold px-6 py-3 rounded-xl text-sm shadow-md transition">
                Explore Packages
              </button>
            </Link>
            <Link href="/my-bookings">
              <button className="bg-teal-950/60 hover:bg-teal-950 text-white font-bold px-6 py-3 rounded-xl text-sm border border-white/20 transition">
                All Bookings
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`bg-gradient-to-r ${stat.gradient} text-white rounded-3xl p-6 shadow-md hover:shadow-xl transition`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs text-white/80 uppercase font-bold tracking-wider block">
                    {stat.title}
                  </span>
                  <div className="text-4xl font-black mt-2">{stat.value}</div>
                </div>
                <div className="p-3 bg-white/15 backdrop-blur-md rounded-2xl">
                  {stat.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Bookings Section */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Recent Bookings</h2>
              <p className="text-gray-500 text-sm mt-1">Your latest reservations and vouchers</p>
            </div>

            <Link href="/packages" className="text-sm font-bold text-teal-600 hover:underline">
              + Plan New Journey
            </Link>
          </div>

          {!data || data.recentBookings.length === 0 ? (
            <div className="text-center py-16">
              <FaPlaneDeparture className="text-5xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800">No trips booked yet</h3>
              <p className="text-gray-500 text-sm mt-2 mb-6">
                Ready to take off? Discover our curated packages with exclusive savings.
              </p>
              <Link href="/packages">
                <button className="bg-teal-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-teal-700 transition">
                  Browse Tour Packages
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {data.recentBookings.map((b) => (
                <div
                  key={b.id}
                  className="p-5 rounded-2xl border border-gray-100 hover:border-teal-200 bg-gray-50/50 hover:bg-white transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{b.destination}</h3>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-teal-600" />
                        {b.date || "Date Pending"}
                      </span>
                      <span className="font-bold text-teal-700">
                        ₹{b.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        b.status === "Confirmed"
                          ? "bg-emerald-100 text-emerald-800"
                          : b.status === "Cancelled"
                          ? "bg-rose-100 text-rose-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {b.status}
                    </span>

                    <Link href={`/my-bookings/${b.id}`}>
                      <button className="text-xs font-bold bg-white border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-50 transition">
                        View Ticket
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
