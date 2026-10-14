"use client";

import { motion } from "framer-motion";
import {
  FaGlobeAsia,
  FaShieldAlt,
  FaHeadset,
  FaWallet,
  FaAward,
  FaCheckCircle
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaGlobeAsia className="text-3xl" />,
    title: "150+ Handpicked Destinations",
    description: "Every itinerary is verified in person by local destination experts and seasoned travelers.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: <FaWallet className="text-3xl" />,
    title: "Best Price Guarantee",
    description: "Transparent all-inclusive rates with zero hidden fees. Found it cheaper elsewhere? We match it.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: "Flexible & 100% Safe",
    description: "Instant booking confirmations with free cancellation on select tours and end-to-end travel insurance.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: <FaHeadset className="text-3xl" />,
    title: "24/7 Dedicated Concierge",
    description: "Direct WhatsApp and phone assistance during your trip. We are with you before, during, and after.",
    gradient: "from-blue-500 to-indigo-500",
  },
];

const stats = [
  { number: "25k+", label: "Happy Explorers" },
  { number: "150+", label: "Global Destinations" },
  { number: "99.2%", label: "Satisfaction Rate" },
  { number: "12+", label: "Years Experience" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full mb-3">
            <FaAward className="text-sm" /> The TravelGo Advantage
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Why Travelers Choose TravelGo
          </h2>
          <p className="mt-4 text-gray-500 text-base md:text-lg">
            We handle the flights, premium hotel stays, custom transfers, and hidden gems so you can just pack and enjoy.
          </p>
        </motion.div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gray-50/80 hover:bg-white rounded-3xl p-8 border border-gray-100 hover:border-teal-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${benefit.gradient} text-white flex items-center justify-center shadow-lg mb-6`}
              >
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>

              <div className="mt-auto pt-6 flex items-center gap-2 text-xs font-bold text-teal-600">
                <FaCheckCircle />
                <span>Verified Quality</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proof / Numbers Strip */}
        <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-900 rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={stat.label} className={i > 0 ? "pt-6 md:pt-0" : ""}>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-teal-200 to-amber-200 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm font-medium text-teal-100 mt-2 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
