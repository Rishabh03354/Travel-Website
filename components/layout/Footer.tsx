import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-3xl font-bold text-teal-400">
            TravelGo
          </h2>

          <p className="mt-4 text-gray-400">
            Explore the world with confidence and unforgettable experiences.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>

          <div className="space-y-2">
            <Link href="/">Home</Link><br />
            <Link href="/packages">Packages</Link><br />
            <Link href="/my-bookings">My Bookings</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Support</h3>

          <p>Email: support@travelgo.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Address</h3>

          <p>Jaipur, Rajasthan</p>
          <p>India</p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-400">
        © 2026 TravelGo. All Rights Reserved.
      </div>
    </footer>
  );
}