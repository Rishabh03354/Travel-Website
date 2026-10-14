"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Jaipur",
    review:
      "TravelGo made my Goa trip completely hassle-free. Booking was simple and the hotels were excellent.",
  },
  {
    name: "Priya Mehta",
    location: "Delhi",
    review:
      "Amazing service! The Bali package was exactly as described. Highly recommended.",
  },
  {
    name: "Aman Verma",
    location: "Mumbai",
    review:
      "Professional support team and affordable pricing. I'll definitely book my next trip here.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            ⭐ What Our Travelers Say
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Thousands of happy travelers trust TravelGo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="flex gap-1 text-yellow-500 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 leading-7">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}