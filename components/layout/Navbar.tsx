"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCompass,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaSuitcaseRolling,
  FaSignOutAlt,
  FaChartPie,
  FaPhoneAlt
} from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error(e);
      }
    }

    // Close dropdown on outside click
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setUserDropdownOpen(false);
    window.location.href = "/";
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Packages", href: "/packages" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
            <FaCompass className="text-xl group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              TravelGo
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 -mt-1">
              Explore Beyond
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-100/70 p-1.5 rounded-full border border-gray-200/50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-teal-700 bg-white shadow-sm"
                    : "text-gray-600 hover:text-teal-600 hover:bg-white/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: User / Auth & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-teal-600 transition"
          >
            <FaPhoneAlt className="text-teal-500" />
            <span>24/7 Helpline</span>
          </Link>

          <div className="h-6 w-px bg-gray-200" />

          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2.5 bg-white border border-gray-200/80 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition"
              >
                <div className="w-8 h-8 rounded-full bg-teal-600 text-white font-bold text-sm flex items-center justify-center">
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <span className="text-sm font-semibold text-gray-800 max-w-[120px] truncate">
                  {user.name || "My Account"}
                </span>
              </button>

              <AnimatePresence>
                {userDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50"
                  >
                    <div className="px-3 py-2 border-b border-gray-100">
                      <p className="text-xs text-gray-400">Signed in as</p>
                      <p className="text-sm font-bold text-gray-800 truncate">{user.name}</p>
                      {user.email && <p className="text-xs text-gray-500 truncate">{user.email}</p>}
                    </div>

                    <div className="py-1">
                      <Link
                        href="/dashboard"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-xl transition"
                      >
                        <FaChartPie className="text-teal-600" />
                        <span>Dashboard</span>
                      </Link>

                      <Link
                        href="/my-bookings"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-xl transition"
                      >
                        <FaSuitcaseRolling className="text-teal-600" />
                        <span>My Bookings</span>
                      </Link>
                    </div>

                    <div className="pt-1 border-t border-gray-100">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl transition"
                      >
                        <FaSignOutAlt />
                        <span>Log Out</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="text-sm font-bold text-gray-700 hover:text-teal-600 px-4 py-2 transition"
              >
                Log In
              </Link>
              <Link
                href="/packages"
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-teal-600/20 transition hover:shadow-lg hover:scale-102"
              >
                Book a Tour
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 p-2 rounded-xl hover:bg-gray-100 transition text-xl"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-semibold text-base ${
                    pathname === link.href
                      ? "bg-teal-50 text-teal-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-teal-50 text-teal-700 font-semibold"
                    >
                      <FaChartPie />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      href="/my-bookings"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold"
                    >
                      <FaSuitcaseRolling />
                      <span>My Bookings</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 text-red-600 font-semibold text-left"
                    >
                      <FaSignOutAlt />
                      <span>Log Out</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full text-center py-3 font-semibold text-gray-700 border border-gray-200 rounded-xl"
                    >
                      Log In
                    </Link>
                    <Link
                      href="/packages"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full text-center py-3 font-semibold text-white bg-teal-600 rounded-xl"
                    >
                      Explore Tours
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
