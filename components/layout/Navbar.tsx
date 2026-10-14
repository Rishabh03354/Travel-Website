"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/";
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-bold text-teal-600"
        >
          TravelGo
        </Link>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-teal-600">
            Home
          </Link>

          <Link href="/packages" className="hover:text-teal-600">
            Packages
          </Link>

          <Link href="/my-bookings" className="hover:text-teal-600">
            My Bookings
          </Link>

          <Link href="/destinations" className="hover:text-teal-600">
            Destinations
          </Link>

          <Link href="/about" className="hover:text-teal-600">
            About
          </Link>

          <Link href="/contact" className="hover:text-teal-600">
            Contact
          </Link>
        </div>

        {user ? (
          <div className="flex items-center gap-4">

            <span className="font-semibold text-teal-600">
              Welcome, {user.name} 👋
            </span>

            <Link
              href="/dashboard"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>

          </div>
        ) : (
          <Link
            href="/login"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Login
          </Link>
        )}

      </div>
    </nav>
  );
}