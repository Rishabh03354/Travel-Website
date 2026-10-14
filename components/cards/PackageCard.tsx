import Image from "next/image";
import Link from "next/link";

type PackageProps = {
  pkg: {
    id: string;
    title: string;
    price: string;
    duration: string;
    image: string;
  };
};

export default function PackageCard({ pkg }: PackageProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">

      <div className="relative h-64">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="p-5">

        <h2 className="text-2xl font-bold">
          {pkg.title}
        </h2>

        <p className="text-gray-500 mt-2">
          {pkg.duration}
        </p>

        <p className="text-teal-600 text-xl font-semibold mt-2">
          {pkg.price}
        </p>

        <Link href={`/package/${pkg.id}`}>
          <button className="w-full mt-5 bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl">
            View Details
          </button>
        </Link>

      </div>

    </div>
  );
}