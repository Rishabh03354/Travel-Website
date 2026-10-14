"use client";

import { motion } from "framer-motion";
import {
  FaGlobeAsia,
  FaMoneyCheckAlt,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaGlobeAsia size={45} />,
    title: "Best Destinations",
    description:
      "Explore handpicked destinations across India and around the world.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaMoneyCheckAlt size={45} />,
    title: "Affordable Packages",
    description:
      "Get the best travel deals with transparent pricing and no hidden charges.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaShieldAlt size={45} />,
    title: "Safe & Secure",
    description:
      "Your bookings and payments are protected with secure technology.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FaHeadset size={45} />,
    title: "24/7 Support",
    description:
      "Our support team is always available to help you during your journey.",
    color: "from-purple-500 to-pink-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Why Choose TravelGo?
          </h2>

          <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto">
            We make your travel experience simple, safe, and unforgettable with
            premium services and carefully curated destinations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              className="bg-gray-50 rounded-3xl shadow-lg p-8 text-center"
            >
              <div
                className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white bg-gradient-to-r ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}