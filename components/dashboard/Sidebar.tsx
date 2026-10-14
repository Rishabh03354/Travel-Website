"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaChartPie,
  FaSuitcaseRolling,
  FaCompass,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Overview", href: "/dashboard", icon: <FaChartPie /> },
    { name: "My Bookings", href: "/my-bookings", icon: <FaSuitcaseRolling /> },
    { name: "Explore Packages", href: "/packages", icon: <FaCompass /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-100 min-h-screen p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-10">
          <span className="text-2xl font-black bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            TravelGo
          </span>
          <span className="text-xs bg-teal-50 text-teal-700 font-bold px-2 py-0.5 rounded-full">
            User
          </span>
        </div>

        <nav className="space-y-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition ${
                  isActive
                    ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-2xl transition"
        >
          <FaSignOutAlt className="text-lg" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
