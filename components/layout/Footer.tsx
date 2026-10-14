import Link from "next/link";
import {
  FaCompass,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaCreditCard
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
                <FaCompass className="text-xl" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Travel<span className="text-teal-400">Go</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              TravelGo is India&apos;s fastest growing modern travel booking platform. We craft bespoke itineraries, secure hotel stays, and authentic experiences worldwide.
            </p>

            <div className="flex items-center gap-3 text-slate-400 text-lg">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-teal-400 hover:border-teal-500/40 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-teal-400 hover:border-teal-500/40 transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-teal-400 hover:border-teal-500/40 transition"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-teal-400 hover:border-teal-500/40 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/destinations" className="hover:text-teal-400 transition">
                  All Destinations
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-teal-400 transition">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/packages?category=beach" className="hover:text-teal-400 transition">
                  Beach Getaways
                </Link>
              </li>
              <li>
                <Link href="/packages?category=mountain" className="hover:text-teal-400 transition">
                  Himalayan Treks
                </Link>
              </li>
              <li>
                <Link href="/packages?category=luxury" className="hover:text-teal-400 transition">
                  Luxury Honeymoons
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-teal-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/my-bookings" className="hover:text-teal-400 transition">
                  Track My Booking
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-teal-400 transition">
                  Customer Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              24/7 Support
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-teal-400 text-xs" />
                <a href="tel:+919876543210" className="hover:text-teal-400 transition">
                  +91 (0) 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-teal-400 text-xs" />
                <a href="mailto:support@travelgo.com" className="hover:text-teal-400 transition">
                  support@travelgo.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-teal-400 text-sm mt-0.5" />
                <span>Cyber City, Gurugram, India 122002</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment & Security Strip */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-teal-400 text-sm" />
            <span>256-Bit SSL Encrypted & Verified Payments • IATA Member Agency</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500 font-semibold">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>UPI / GPay</span>
            <span>NetBanking</span>
            <span>PayPal</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-slate-900 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} TravelGo Technologies Inc. All Rights Reserved. Crafted for travelers worldwide.
        </div>
      </div>
    </footer>
  );
}
