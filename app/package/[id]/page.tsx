import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";

const packages = [
  {
    id: "goa",
    title: "Goa Beach Escape",
    location: "Goa, India",
    price: 7999,
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    description:
      "Enjoy beautiful beaches, nightlife, water sports and luxurious resorts.",
  },
  {
    id: "kashmir",
    title: "Kashmir Paradise",
    location: "Srinagar",
    price: 14999,
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description:
      "Experience snow-covered mountains, Dal Lake, Gulmarg and Sonmarg.",
  },
  {
    id: "bali",
    title: "Beautiful Bali",
    location: "Indonesia",
    price: 39999,
    duration: "7 Days / 6 Nights",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
    description:
      "Discover tropical beaches, temples, waterfalls and luxury resorts.",
  },
  {
    id: "dubai",
    title: "Dubai Luxury Tour",
    location: "Dubai, UAE",
    price: 44999,
    duration: "5 Days / 4 Nights",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    description:
      "Visit Burj Khalifa, Desert Safari, Dubai Mall and Palm Jumeirah.",
  },
];

export default async function PackagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const tour = packages.find((pkg) => pkg.id === id);

  if (!tour) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-5xl font-bold text-red-500">
          Package Not Found
        </h1>
      </div>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero Image */}
      <div className="relative h-[500px] w-full">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          unoptimized
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-5xl font-bold">
            {tour.title}
          </h1>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              {tour.location}
            </div>

            <div className="flex items-center gap-2">
              <FaClock />
              {tour.duration}
            </div>

            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              {tour.rating}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6 grid lg:grid-cols-3 gap-10">

        {/* Left */}
        <div className="lg:col-span-2">

          <h2 className="text-3xl font-bold mb-6">
            About This Tour
          </h2>

          <p className="text-gray-600 leading-8">
            {tour.description}
          </p>

          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-5">
              Tour Highlights
            </h2>

            <ul className="space-y-3 list-disc ml-6 text-gray-700">
              <li>Luxury Hotel Stay</li>
              <li>Breakfast Included</li>
              <li>Airport Pickup & Drop</li>
              <li>Sightseeing Tours</li>
              <li>Professional Guide</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-5">
              Day-wise Itinerary
            </h2>

            <div className="space-y-5">

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-xl">
                  Day 1
                </h3>

                <p className="text-gray-600 mt-2">
                  Arrival, hotel check-in and local sightseeing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-xl">
                  Day 2
                </h3>

                <p className="text-gray-600 mt-2">
                  Full-day guided tour with activities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-xl">
                  Final Day
                </h3>

                <p className="text-gray-600 mt-2">
                  Breakfast and airport transfer.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Right Booking Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-24">

          <p className="text-gray-500">
            Starting From
          </p>

          <h2 className="text-5xl font-bold text-teal-600 mt-2">
            ₹{tour.price.toLocaleString()}
          </h2>

          <p className="mt-4 text-gray-500">
            Per Person
          </p>

          <Link
            href={`/book?destination=${encodeURIComponent(
              tour.title
            )}&price=${tour.price}`}
          >
            <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl text-xl font-bold">
              Book Now
            </button>
          </Link>

        </div>

      </div>

    </main>
  );
}