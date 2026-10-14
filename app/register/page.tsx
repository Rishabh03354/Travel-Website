"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaCompass, FaUser, FaEnvelope, FaLock, FaArrowRight, FaShieldAlt } from "react-icons/fa";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      router.push("/login?registered=true");
    } catch (err) {
      console.error(err);
      setError("Something went wrong connecting to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md p-8 md:p-12 border border-white/20"
      >
        {/* Brand Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-teal-600/30">
            <FaCompass className="text-2xl" />
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-center text-gray-900 tracking-tight">
          Join TravelGo
        </h1>
        <p className="text-center text-gray-500 text-sm mt-1 mb-8">
          Create an account to book trips, save wishlist, and unlock exclusive discounts
        </p>

        {error && (
          <div className="mb-6 bg-rose-50 border border-rose-200 text-rose-600 text-xs font-semibold rounded-xl p-3 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="e.g. John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                required
                minLength={6}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-teal-600/30 transition hover:scale-101 active:scale-99 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>Creating your account...</span>
            ) : (
              <>
                <span>Register Account</span>
                <FaArrowRight className="text-xs" />
              </>
            )}
          </button>
        </form>

        <p className="text-center mt-8 text-xs text-gray-500">
          Already registered?{" "}
          <Link
            href="/login"
            className="text-teal-600 font-bold hover:underline"
          >
            Log in instead
          </Link>
        </p>

        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-[11px] text-gray-400">
          <FaShieldAlt className="text-teal-600" />
          <span>Your data is protected by strict privacy policies</span>
        </div>
      </motion.div>
    </div>
  );
}
