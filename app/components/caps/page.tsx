import { SanityFetch } from "@/sanity/lib/fetch";
import { Caps } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

type CapType = {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  imageUrl: string;
  slug: {
    current: string;
    _type: string;
  };
};

export default async function CapCard() {
  const Data: CapType[] = await SanityFetch({ query: Caps });
 

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-200">
        Explore Our Caps
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {Data.map((cap) => (
          <div
            key={cap.id}
            className="group relative bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <Link href={`/final/${cap.slug.current}`}>
              <div className="relative w-full h-64 cursor-pointer">
                <Image
                  alt={cap.name}
                  src={cap.imageUrl}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-indigo-400 transition-colors">
                {cap.name}
              </h2>
              <p className="text-sm text-gray-400 mb-2 italic">{cap.brand}</p>
              <p className="text-sm text-gray-300 mb-3 line-clamp-2">
              {cap.description.split(" ").slice(0, 25).join(" ")}...
              </p>
              <p className="text-lg font-bold text-emerald-400 mb-4">
                {cap.price} PKR
              </p>
              <div className="flex flex-col space-y-3">
              
                <Link
                  href={`/ContactUs?product=${encodeURIComponent(
                    cap.name
                  )}&price=${cap.price}`}
                >
                  <button className="w-full py-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-transform">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
