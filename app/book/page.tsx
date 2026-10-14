"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaShieldAlt,
  FaCalendarAlt,
  FaUsers,
  FaCheckCircle,
  FaTag,
  FaPlaneDeparture,
  FaLock,
  FaArrowLeft
} from "react-icons/fa";

function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const destination = searchParams.get("destination") || "Tropical Getaway";
  const price = Number(searchParams.get("price")) || 14999;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [date, setDate] = useState("");
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const discountRate = appliedCoupon === "TRAVEL10" ? 0.1 : appliedCoupon === "TRAVELGO2500" ? 2500 : 0;
  const baseTotal = price * travelers;
  const calculatedDiscount =
    typeof discountRate === "number" && discountRate < 1
      ? Math.round(baseTotal * discountRate)
      : Math.min(baseTotal, discountRate);
  const finalPrice = Math.max(0, baseTotal - calculatedDiscount);

  const handleApplyCoupon = (e: React.MouseEvent) => {
    e.preventDefault();
    setCouponError("");
    const cleaned = coupon.trim().toUpperCase();
    if (cleaned === "TRAVEL10") {
      setAppliedCoupon("TRAVEL10");
    } else if (cleaned === "TRAVELGO2500") {
      setAppliedCoupon("TRAVELGO2500");
    } else {
      setCouponError("Invalid coupon code. Try TRAVEL10");
    }
  };

  async function handleBooking(e: React.FormEvent) {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    if (!user || !user.id) {
      alert("Please log in to finalize your booking.");
      router.push("/login?redirect=" + encodeURIComponent(`/book?destination=${destination}&price=${price}`));
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination,
          price: finalPrice,
          date,
          userId: user.id,
          name,
          email,
          phone,
          travelers,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/my-bookings");
        }, 2000);
      } else {
        alert(data.message || "Failed to complete booking");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while connecting to the server.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="max-w-xl mx-auto my-16 bg-white rounded-3xl p-10 text-center shadow-2xl border border-gray-100">
        <FaCheckCircle className="text-emerald-500 text-6xl mx-auto mb-4 animate-bounce" />
        <h2 className="text-3xl font-bold text-gray-900">Booking Confirmed!</h2>
        <p className="text-gray-600 mt-2">
          Your reservation for <strong className="text-teal-600">{destination}</strong> has been secured.
        </p>
        <p className="text-xs text-gray-400 mt-4">Redirecting you to your bookings dashboard...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Left Form: 2 Cols */}
      <motion.form
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        onSubmit={handleBooking}
        className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
      >
        <div className="flex items-center gap-2 text-teal-600 text-xs font-bold uppercase tracking-wider mb-2">
          <FaPlaneDeparture /> Secure Booking Checkout
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
          Traveler Information
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Please fill in the details of the primary traveler as per government ID.
        </p>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Primary Traveler Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Email Address for E-Tickets
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Phone Number (WhatsApp updates)
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Departure Date
              </label>
              <input
                type="date"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Number of Guests / Travelers
            </label>
            <div className="flex items-center gap-4">
              <input
                type="number"
                min={1}
                max={20}
                className="w-32 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={travelers}
                onChange={(e) => setTravelers(Math.max(1, Number(e.target.value)))}
                required
              />
              <span className="text-xs text-gray-500">
                Children above 5 years counted as full traveler.
              </span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-10 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 rounded-2xl text-base shadow-xl shadow-teal-600/30 transition hover:scale-101 flex items-center justify-center gap-2"
        >
          {loading ? (
            <span>Securing Your Reservation...</span>
          ) : (
            <>
              <FaLock className="text-sm" />
              <span>Confirm & Book for ₹{finalPrice.toLocaleString()}</span>
            </>
          )}
        </button>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
          <FaShieldAlt className="text-teal-600" />
          <span>256-Bit SSL Encrypted. Free cancellation up to 72 hours before trip.</span>
        </div>
      </motion.form>

      {/* Right Booking Summary Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 h-fit sticky top-28"
      >
        <h2 className="text-xl font-bold text-gray-900 pb-4 border-b border-gray-100 mb-6">
          Booking Summary
        </h2>

        <div className="space-y-4 text-sm">
          <div className="flex justify-between items-start">
            <span className="text-gray-500">Destination</span>
            <span className="font-bold text-gray-900 text-right max-w-[160px] truncate">
              {destination}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Rate / Traveler</span>
            <span className="font-bold text-gray-900">₹{price.toLocaleString()}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Total Travelers</span>
            <span className="font-bold text-gray-900">{travelers} Guests</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Base Fare</span>
            <span className="font-bold text-gray-900">₹{baseTotal.toLocaleString()}</span>
          </div>

          {calculatedDiscount > 0 && (
            <div className="flex justify-between text-emerald-600 font-semibold bg-emerald-50 px-3 py-2 rounded-xl text-xs">
              <span>Promo Code Applied ({appliedCoupon})</span>
              <span>-₹{calculatedDiscount.toLocaleString()}</span>
            </div>
          )}

          <div className="pt-4 border-t border-gray-100 flex justify-between items-baseline">
            <span className="text-base font-bold text-gray-900">Total Amount</span>
            <span className="text-3xl font-black text-teal-600">
              ₹{finalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Promo Code Box */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
            Have a Promo Code?
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. TRAVEL10"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs flex-grow font-semibold focus:outline-none focus:bg-white"
            />
            <button
              type="button"
              onClick={handleApplyCoupon}
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition"
            >
              Apply
            </button>
          </div>
          {couponError && <p className="text-xs text-rose-500 mt-1">{couponError}</p>}
          <div className="mt-3 bg-teal-50 border border-teal-200/60 rounded-xl p-3 text-xs text-teal-800 flex items-center gap-2">
            <FaTag className="text-teal-600 shrink-0" />
            <span>Use code <strong>TRAVEL10</strong> for 10% instant discount!</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function BookPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-14 px-6">
      <Suspense fallback={<div className="text-center py-20 font-bold">Loading Checkout...</div>}>
        <BookingForm />
      </Suspense>
    </div>
  );
}
