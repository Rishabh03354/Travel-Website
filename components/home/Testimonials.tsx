"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaPaperPlane,
  FaRegSmileBeam
} from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Software Architect",
    location: "Jaipur, Rajasthan",
    trip: "Kashmir 6D/5N Honeymoon",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    review:
      "TravelGo made our honeymoon to Gulmarg and Dal Lake utterly seamless. The luxury houseboat was breathtaking and our private chauffeur was like family. 10/10 experience!",
  },
  {
    name: "Sneha Mukherjee",
    role: "Product Designer",
    location: "Bangalore, Karnataka",
    trip: "Bali 7D/6N Island Escape",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    review:
      "The private pool villa in Ubud was a dream! Every single transfer, temple ticket, and breakfast was pre-arranged with zero wait time. Will only book through TravelGo now.",
  },
  {
    name: "Vikram Malhotra",
    role: "Entrepreneur",
    location: "Mumbai, Maharashtra",
    trip: "Dubai 5D/4N Luxury Tour",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    review:
      "From Desert Safari VIP seating to Burj Khalifa priority access, TravelGo delivered premium quality at rates better than any competing booking site.",
  },
];

export default function Testimonials() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-teal-50/40 to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-100/70 px-3.5 py-1.5 rounded-full mb-3">
            <FaRegSmileBeam className="text-sm" /> Verified Traveler Reviews
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Stories From Our Explorers
          </h2>
          <p className="mt-4 text-gray-500 text-base md:text-lg">
            Join over 25,000 delighted travelers who trust TravelGo for their dream vacations.
          </p>
        </motion.div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col relative"
            >
              <FaQuoteLeft className="text-teal-200 text-3xl mb-4" />

              {/* Stars */}
              <div className="flex gap-1 text-amber-400 text-sm mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                "{item.review}"
              </p>

              {/* Trip Tag */}
              <div className="bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-lg w-fit mb-6">
                {item.trip}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 mt-auto pt-4 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-teal-500">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                    <FaCheckCircle className="text-teal-500 text-xs" title="Verified Traveler" />
                  </div>
                  <p className="text-xs text-gray-400">{item.role} • {item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIP Club / Newsletter Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-900 text-white p-8 md:p-14 shadow-2xl"
        >
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none text-[200px] leading-none font-black">
            ✈
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
              Exclusive Travel Perk
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Get ₹2,500 Off Your First Trip
            </h3>
            <p className="mt-3 text-teal-100 text-sm md:text-base leading-relaxed">
              Join the TravelGo Wanderers Club. Receive members-only flash deals, curated weekend itineraries, and seasonal discounts directly in your inbox.
            </p>

            {subscribed ? (
              <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-4 flex items-center gap-3 text-emerald-300 font-bold">
                <FaCheckCircle className="text-xl" />
                <span>Coupon code TRAVELGO2500 has been sent to your email!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-gray-900 placeholder-gray-400 px-5 py-4 rounded-2xl text-sm font-medium flex-grow focus:outline-none focus:ring-4 focus:ring-teal-400/50 shadow-inner"
                />
                <button
                  type="submit"
                  className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-8 py-4 rounded-2xl text-sm transition shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 hover:scale-102 active:scale-98 whitespace-nowrap"
                >
                  <FaPaperPlane />
                  <span>Claim ₹2,500 Off</span>
                </button>
              </form>
            )}
            <p className="text-[11px] text-teal-200/70 mt-3">
              No spam ever. Unsubscribe anytime with 1 click.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
