"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaCompass,
  FaHeart,
  FaLeaf,
  FaShieldAlt,
  FaUsers,
  FaGlobeAmericas,
  FaArrowRight
} from "react-icons/fa";

const values = [
  {
    icon: <FaHeart className="text-3xl text-rose-500" />,
    title: "Passionate Curation",
    desc: "We don't sell random cookie-cutter trips. Every single route is personally tested and approved by our team.",
  },
  {
    icon: <FaLeaf className="text-3xl text-emerald-500" />,
    title: "Eco & Community Conscious",
    desc: "We partner with local guides, boutique eco-resorts, and support village artisans across every destination.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-teal-500" />,
    title: "Uncompromising Safety",
    desc: "24/7 incident tracking, verified chauffeurs, vetted hotel partners, and comprehensive emergency support.",
  },
  {
    icon: <FaUsers className="text-3xl text-cyan-500" />,
    title: "Human First Service",
    desc: "No automated chatbots when you need urgent help. Talk directly to human travel designers anytime.",
  },
];

const team = [
  {
    name: "Rishabh Khandelwal",
    role: "Founder & Chief Explorer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    bio: "Traveled across 28 countries, passionate about bringing effortless bespoke travel to millions.",
  },
  {
    name: "Pooja Deshmukh",
    role: "Head of Destination Curation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    bio: "12+ years of Himalayan mountaineering and luxury resort discovery in Southeast Asia.",
  },
  {
    name: "Kabir Sengupta",
    role: "Guest Experience Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    bio: "Obsessed with creating frictionless, magical journeys from airport pickup to final return.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-r from-teal-950 via-teal-900 to-cyan-950 text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop')" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 border border-teal-500/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <FaCompass /> Our Story & Mission
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Reinventing How The World Explores.
            </h1>
            <p className="mt-6 text-lg text-teal-100 max-w-2xl mx-auto font-light leading-relaxed">
              We started TravelGo with a single mission: To strip away the stress, hidden costs, and guesswork from travel, leaving only the joy of discovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop"
            alt="Travelers exploring mountains"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div>
          <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block mb-3">
            Born From A Love Of Wandering
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug mb-6">
            Travel should feel like an adventure, never a chore.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Traditional travel booking is broken: fragmented ticket confirmations, unexpected resort fees, pushy commercial tours, and zero assistance when flights get delayed.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            At TravelGo, we reimagined everything. We combine intuitive modern technology with hands-on human concierge support. Every hotel is pre-audited, every driver is vetted, and every itinerary is optimized for leisure, not marathon rush.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
            <div>
              <div className="text-3xl font-black text-teal-600">25,000+</div>
              <p className="text-xs text-gray-500 font-medium uppercase mt-1">Travelers Hosted</p>
            </div>
            <div>
              <div className="text-3xl font-black text-teal-600">99.4%</div>
              <p className="text-xs text-gray-500 font-medium uppercase mt-1">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block mb-2">
              What Guides Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Core Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-5 p-3 rounded-2xl bg-gray-50 w-fit">{v.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-600 font-bold text-xs uppercase tracking-widest block mb-2">
            Meet The Visionaries
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Curators Behind Your Journeys
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition flex flex-col items-center text-center"
            >
              <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6 border-4 border-teal-500/20 group-hover:scale-105 transition">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-4">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-teal-700 to-cyan-700 text-white rounded-3xl p-10 md:p-14 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Begin Your Next Adventure?
          </h2>
          <p className="text-teal-100 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Discover our handpicked destinations and start creating memories that last a lifetime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/packages">
              <button className="bg-white text-teal-800 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-teal-50 transition">
                Browse Tour Packages
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-teal-900/60 hover:bg-teal-900 text-white font-bold px-8 py-3.5 rounded-xl border border-white/20 transition">
                Talk to a Travel Specialist
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
