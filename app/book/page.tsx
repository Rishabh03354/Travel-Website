"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BookPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const destination = searchParams.get("destination") || "";
  const price = Number(searchParams.get("price")) || 0;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [date, setDate] = useState("");
  const [coupon, setCoupon] = useState("");

  const discount = coupon.toUpperCase() === "TRAVEL10" ? 0.1 : 0;

  const total = price * travelers;
  const finalPrice = Math.round(total - total * discount);

  async function handleBooking(e: React.FormEvent) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (!user.id) {
      alert("Please login first");
      router.push("/login");
      return;
    }

    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
      alert("Booking Successful!");

      router.push("/my-bookings");
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 px-6">

        {/* Left */}
        <motion.form
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleBooking}
          className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-10"
        >
          <h1 className="text-4xl font-bold mb-8">
            Traveler Information
          </h1>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-xl p-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-xl p-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded-xl p-4"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <input
              type="date"
              className="border rounded-xl p-4"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <input
              type="number"
              min={1}
              className="border rounded-xl p-4"
              value={travelers}
              onChange={(e) =>
                setTravelers(Number(e.target.value))
              }
              required
            />

            <input
              type="text"
              placeholder="Coupon Code (Optional)"
              className="border rounded-xl p-4"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />

          </div>

          <button
            type="submit"
            className="w-full mt-10 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl text-xl font-bold"
          >
            Confirm Booking
          </button>

        </motion.form>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-24"
        >
          <h2 className="text-3xl font-bold mb-6">
            Booking Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Destination</span>
              <strong>{destination}</strong>
            </div>

            <div className="flex justify-between">
              <span>Price / Person</span>
              <strong>₹{price.toLocaleString()}</strong>
            </div>

            <div className="flex justify-between">
              <span>Travelers</span>
              <strong>{travelers}</strong>
            </div>

            <div className="flex justify-between">
              <span>Total</span>
              <strong>₹{total.toLocaleString()}</strong>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <strong>10%</strong>
              </div>
            )}

            <hr />

            <div className="flex justify-between text-2xl font-bold text-teal-600">
              <span>Final Price</span>
              <span>₹{finalPrice.toLocaleString()}</span>
            </div>

            <div className="bg-green-50 border border-green-300 rounded-xl p-4 mt-5">
              <p className="text-green-700">
                🎁 Use coupon <strong>TRAVEL10</strong> to get
                <strong> 10% OFF</strong>.
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </div>
  );
}