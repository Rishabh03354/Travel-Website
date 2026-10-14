"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeadset,
  FaPaperPlane,
  FaCheckCircle
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 border border-teal-500/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <FaHeadset /> We are here to help
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Get in Touch with TravelGo
            </h1>
            <p className="mt-4 text-lg text-teal-100 max-w-2xl mx-auto">
              Have questions about an itinerary, custom bookings, or corporate travel? Our travel specialists are available 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-6 mt-12 grid lg:grid-cols-3 gap-10">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-5">
            <div className="bg-teal-50 text-teal-600 p-4 rounded-2xl text-2xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Call Us Anytime</h3>
              <p className="text-gray-500 text-sm mt-1">Direct customer support line</p>
              <a href="tel:+919876543210" className="text-teal-600 font-semibold block mt-2 hover:underline">
                +91 (0) 98765 43210
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-5">
            <div className="bg-cyan-50 text-cyan-600 p-4 rounded-2xl text-2xl">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Email Support</h3>
              <p className="text-gray-500 text-sm mt-1">Expect a reply within 2 hours</p>
              <a href="mailto:support@travelgo.com" className="text-teal-600 font-semibold block mt-2 hover:underline">
                support@travelgo.com
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-5">
            <div className="bg-amber-50 text-amber-600 p-4 rounded-2xl text-2xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Headquarters</h3>
              <p className="text-gray-500 text-sm mt-1">
                TravelGo Tower, 4th Floor<br />
                Cyber City, Sector 24, Gurugram<br />
                Haryana 122002, India
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <FaCheckCircle className="text-emerald-500 text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Message Sent Successfully!</h3>
                <p className="text-gray-500 mt-2 max-w-md mx-auto">
                  Thank you for reaching out, {formData.name || "Traveler"}. One of our tour consultants will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                  }}
                  className="mt-6 bg-teal-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-teal-700 transition"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Fill out the form below and we will get back to you with custom quotes and recommendations.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Inquiry about Bali 5-Day Tour"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your travel plans, number of guests, dates, or specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-lg shadow-teal-600/30"
                >
                  {loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
