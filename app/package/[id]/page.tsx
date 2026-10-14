import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaCheck,
  FaTimes,
  FaShieldAlt,
  FaArrowLeft,
  FaPlaneDeparture,
  FaHotel,
  FaUtensils,
  FaCar
} from "react-icons/fa";

const packages = [
  {
    id: "goa",
    title: "Goa Tropical Beach & Cruise Tour",
    location: "North & South Goa, India",
    price: 7999,
    originalPrice: 11999,
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
    description:
      "Indulge in sun-kissed sands, historic Portuguese architecture, and exhilarating water sports. Cruise the Mandovi River as the sun sets over the Arabian Sea, stay at a curated 4-star beachfront resort, and savor delectable Goan seafood.",
    itinerary: [
      { day: "Day 1", title: "Arrival in Goa & Sunset Beach Walk", desc: "Airport/railway pickup in private AC cab. Check-in at the beachfront resort. Evening at leisure on Calangute beach with a welcome coconut drink." },
      { day: "Day 2", title: "North Goa Sightseeing & Water Sports", desc: "Explore Fort Aguada, Chapora Fort, and Anjuna Beach. Enjoy parasailing and jet-skiing with certified instructors. Evening nightlife experience at Tito's Lane." },
      { day: "Day 3", title: "South Goa Heritage & Mandovi River Cruise", desc: "Visit Basilica of Bom Jesus, Se Cathedral, and Mangueshi Temple. Enjoy a 1-hour sunset cruise along the Mandovi river with Goan folk dance performances." },
      { day: "Day 4", title: "Souvenir Shopping & Departure", desc: "Breakfast by the pool. Free morning for flea market shopping in Panjim. Transfer back to Dabolim/Mopa airport with unforgettable memories." },
    ],
    inclusions: [
      "3 Nights luxury 4-star beachfront resort stay",
      "Daily buffet breakfast & welcome drink",
      "Mandovi River Sunset Cruise tickets",
      "Private AC vehicle for all airport transfers & sightseeing",
      "Certified local tour guide",
    ],
    exclusions: [
      "Flight or train tickets",
      "Personal expenses, laundry, and alcoholic drinks",
      "Optional water sport charges not mentioned above",
    ],
  },
  {
    id: "kashmir",
    title: "Enchanting Kashmir & Dal Lake Shikara",
    location: "Srinagar & Gulmarg, Jammu & Kashmir",
    price: 14999,
    originalPrice: 19999,
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    reviews: 218,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    description:
      "Surrender to the tranquil beauty of the Kashmir valley, heralded as Paradise on Earth. Glide through floating vegetable markets on a handcrafted shikara, ascend snow-blanketed peaks aboard the Gulmarg Gondola, and stay aboard a heritage cedarwood houseboat.",
    itinerary: [
      { day: "Day 1", title: "Arrival in Srinagar & Dal Lake Shikara Ride", desc: "Warm Kashmiri welcome at Srinagar Airport. Check-in to a luxury Dal Lake houseboat. Enjoy a magical 2-hour sunset shikara ride with hot Kahwa tea." },
      { day: "Day 2", title: "Srinagar Mughal Gardens & Old City", desc: "Stroll through Shalimar Bagh, Nishat Bagh, and the botanical Chashme Shahi. Explore the ancient wooden architecture of Jamia Masjid." },
      { day: "Day 3", title: "Gulmarg Alpine Wonderland & Gondola", desc: "Day excursion to Gulmarg. Ride the world's highest cable car (Phase 1 & Phase 2 Gondola) with panoramic views of Mount Apharwat." },
      { day: "Day 4", title: "Pahalgam Valley of Shepherds & Betaab Valley", desc: "Scenic drive through saffron fields of Pampore. Explore Lidder River banks, Betaab Valley, and Aru Valley in pony rides." },
      { day: "Day 5", title: "Sonmarg Meadow of Gold & Thajiwas Glacier", desc: "Excursion to Sonmarg. Visit the Thajiwas Glacier with pony treks or snow sledging. Return to hotel in Srinagar for a grand Wazwan dinner." },
      { day: "Day 6", title: "Departure from Srinagar", desc: "Breakfast with lake views. Transfer to Srinagar International Airport for return flight." },
    ],
    inclusions: [
      "1 Night Heritage Dal Lake Houseboat + 4 Nights Premium Hotel",
      "Daily breakfast & Kashmiri Wazwan dinners",
      "2-Hour Shikara ride on Dal Lake",
      "Gulmarg Gondola Phase 1 passes",
      "Private dedicated heating-equipped SUV cab",
    ],
    exclusions: [
      "Airfare to Srinagar",
      "Pony or sledging charges in Sonmarg / Pahalgam",
      "Camera fees at monuments",
    ],
  },
  {
    id: "bali",
    title: "Magical Bali Temples & Island Retreat",
    location: "Ubud, Seminyak & Nusa Penida, Indonesia",
    price: 39999,
    originalPrice: 49999,
    duration: "7 Days / 6 Nights",
    rating: 5.0,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1200&auto=format&fit=crop",
    description:
      "Awaken to mist rising over Ubud's emerald rice terraces, immerse in sacred purification baths at Tirta Empul, and watch fiery sunsets over Uluwatu's sea cliff temple accompanied by Kecak fire dancing.",
    itinerary: [
      { day: "Day 1", title: "Welcome to Bali & Ubud Check-in", desc: "Flower garland welcome at Denpasar Airport. Transfer to your private pool villa in Ubud. Free evening to relax." },
      { day: "Day 2", title: "Ubud Culture & Tegalalang Rice Terraces", desc: "Visit Sacred Monkey Forest, iconic jungle swing over Tegalalang rice terraces, and coffee plantation tasting." },
      { day: "Day 3", title: "Kintamani Volcano & Batur Lake", desc: "Breathtaking views of Mount Batur active volcano. Visit Tirta Empul water temple for spiritual blessing." },
      { day: "Day 4", title: "Nusa Penida Island Speedboat Excursion", desc: "Full-day trip to Nusa Penida island: Kelingking T-Rex cliff, Broken Beach, Angel's Billabong, and Crystal Bay snorkeling." },
      { day: "Day 5", title: "Seminyak Beach Vibes & Potato Head", desc: "Transfer to Seminyak beachfront hotel. Shopping at boutique markets and sunset lounge at Potato Head Beach Club." },
      { day: "Day 6", title: "Uluwatu Clifftop Temple & Kecak Dance", desc: "Clifftop temple of Uluwatu perched 70 meters above roaring Indian ocean waves. Watch hypnotic Kecak fire dance." },
      { day: "Day 7", title: "Departure", desc: "Balinese traditional massage treatment followed by transfer to Denpasar Airport." },
    ],
    inclusions: [
      "3 Nights Ubud Private Pool Villa + 3 Nights Seminyak 5-Star Resort",
      "All daily gourmet breakfasts & 2 traditional dinners",
      "Nusa Penida full-day speedboat excursion with guide",
      "Uluwatu Kecak Fire Dance tickets",
      "Private AC luxury van with English-speaking chauffeur",
    ],
    exclusions: [
      "International flights to Bali",
      "Indonesia Visa on Arrival ($35 USD paid at airport)",
      "Travel Insurance",
    ],
  },
  {
    id: "dubai",
    title: "Glitz & Glamour of Modern Dubai",
    location: "Downtown Dubai, UAE",
    price: 44999,
    originalPrice: 58999,
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    reviews: 175,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Witness architectural marvels rising from golden Arabian sands. Ascend the world's tallest skyscraper Burj Khalifa, carve the desert dunes in a 4x4 Land Cruiser safari with BBQ stargazing, and cruise the neon Dubai Marina.",
    itinerary: [
      { day: "Day 1", title: "Arrival & Dubai Marina Luxury Dhow Cruise", desc: "Airport pickup in private sedan. Evening luxury dhow cruise along Dubai Marina canal with international buffet dinner." },
      { day: "Day 2", title: "Half-Day City Tour & Burj Khalifa 124th Floor", desc: "Visit Dubai Frame, Palm Jumeirah, and Burj Al Arab photo stop. Fast-track entry to Burj Khalifa At the Top observation deck." },
      { day: "Day 3", title: "Desert Safari with Dune Bashing & BBQ", desc: "Thrilling dune bashing in Arabian desert, camel rides, sandboarding, Henna painting, and live belly dance BBQ dinner." },
      { day: "Day 4", title: "Museum of the Future & Dubai Mall", desc: "Morning visit to the futuristic Museum of the Future. Afternoon shopping and Dubai Fountain dancing water show." },
      { day: "Day 5", title: "Departure", desc: "Free morning for Gold & Spice Souk shopping in Deira. Private transfer to Dubai International Airport (DXB)." },
    ],
    inclusions: [
      "4 Nights 4? Hotel in Downtown Dubai",
      "Burj Khalifa 124th Floor observation tickets",
      "Red Dune Desert Safari with BBQ Dinner & Entertainment",
      "Dubai Marina Dhow Cruise with 5-Star Buffet",
      "UAE Tourist Visa with Insurance included",
    ],
    exclusions: [
      "International flights",
      "Tourism Dirham fee paid directly to hotel (approx $4/night)",
      "Lunch meals not specified",
    ],
  },
];

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tour = packages.find((pkg) => pkg.id === id);

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Package Not Found</h1>
        <p className="text-gray-500 mb-6">The requested tour package does not exist or has been archived.</p>
        <Link href="/packages">
          <button className="bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-700 transition">
            Explore All Packages
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Top Breadcrumb Header */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs font-semibold text-gray-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-teal-600">Home</Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-teal-600">Packages</Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-xs">{tour.title}</span>
          </div>

          <Link href="/packages" className="flex items-center gap-1.5 text-teal-600 hover:text-teal-700">
            <FaArrowLeft className="text-[10px]" />
            <span>Back to packages</span>
          </Link>
        </div>
      </div>

      {/* Main Image Banner & Title */}
      <section className="relative h-[480px] w-full bg-slate-900">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

        <div className="absolute bottom-10 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <div className="flex flex-wrap items-center gap-3 mb-3 text-xs font-bold">
              <span className="bg-teal-600 px-3 py-1 rounded-full uppercase tracking-wider">
                Featured Package
              </span>
              <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-amber-300">
                <FaStar /> {tour.rating} ({tour.reviews} reviews)
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl">
              {tour.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-4 text-xs md:text-sm text-slate-200">
              <span className="flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-teal-400" />
                {tour.location}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-teal-400" />
                {tour.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Layout Grid: Content + Sticky Booking Box */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left 2 Columns: Overview, Highlights, Itinerary, Inclusions */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Overview</h2>
            <p className="text-gray-600 text-base leading-relaxed">{tour.description}</p>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-teal-50/60 text-teal-800">
                <FaHotel className="text-xl text-teal-600" />
                <div className="text-xs">
                  <span className="block font-bold">Stay</span>
                  <span className="text-gray-500">4? & Luxury</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-amber-50/60 text-amber-800">
                <FaUtensils className="text-xl text-amber-600" />
                <div className="text-xs">
                  <span className="block font-bold">Meals</span>
                  <span className="text-gray-500">Breakfast Incl.</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-cyan-50/60 text-cyan-800">
                <FaCar className="text-xl text-cyan-600" />
                <div className="text-xs">
                  <span className="block font-bold">Transfers</span>
                  <span className="text-gray-500">Private Cab</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-indigo-50/60 text-indigo-800">
                <FaPlaneDeparture className="text-xl text-indigo-600" />
                <div className="text-xs">
                  <span className="block font-bold">Airport</span>
                  <span className="text-gray-500">Pickup & Drop</span>
                </div>
              </div>
            </div>
          </div>

          {/* Day by Day Itinerary */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary</h2>
            <div className="space-y-6">
              {tour.itinerary.map((item, index) => (
                <div key={item.day} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-md shadow-teal-600/30">
                      {index + 1}
                    </div>
                    {index !== tour.itinerary.length - 1 && (
                      <div className="w-0.5 h-full bg-teal-100 my-2" />
                    )}
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-5 flex-grow border border-gray-100">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                        {item.day}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">
                  ?
                </span>
                What Included
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {tour.inclusions.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5">
                    <FaCheck className="text-emerald-500 mt-1 shrink-0 text-xs" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-xs">
                  ?
                </span>
                What Not Included
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {tour.exclusions.map((exc) => (
                  <li key={exc} className="flex items-start gap-2.5">
                    <FaTimes className="text-rose-500 mt-1 shrink-0 text-xs" />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Sticky Booking Card */}
        <div>
          <div className="sticky top-28 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
            <div className="flex items-baseline justify-between mb-2">
              <div>
                <span className="text-xs text-gray-400 line-through block">
                  ?{tour.originalPrice.toLocaleString()}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-teal-600">
                    ?{tour.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">/ person</span>
                </div>
              </div>

              <span className="bg-red-50 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full border border-red-200">
                Special Deal
              </span>
            </div>

            <p className="text-xs text-emerald-600 font-semibold mb-6 flex items-center gap-1.5">
              <FaShieldAlt /> Best Price Guarantee � No Hidden Charges
            </p>

            {/* CTA Button */}
            <Link
              href={`/book?destination=${encodeURIComponent(tour.title)}&price=${tour.price}`}
            >
              <button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-teal-600/30 text-base transition hover:scale-102 active:scale-98">
                Proceed to Book Now
              </button>
            </Link>

            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Instant Confirmation on Booking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span>Free cancellation up to 72 hours before</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                <span>Custom dates & flights available on request</span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-gray-50 text-center">
              <p className="text-xs text-gray-500">Need help customizing this trip?</p>
              <a
                href="tel:+919876543210"
                className="text-teal-600 text-xs font-bold hover:underline block mt-1"
              >
                Call travel consultant: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
