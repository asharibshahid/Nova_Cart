import Head from "next/head";
import Image from "next/image"
import Link from "next/link"
import { Perfumes } from "@/sanity/lib/queries";

import { SanityFetch } from "@/sanity/lib/fetch";

type PerfumeType = {
  id: string;
  name: string;
unique:number;
  description: string;
  price: number;
  brand: string;
  imageUrl: string;
  slug: {
    current: string;
  };

};
export default async function PerfumeCard() {
  const perfumes: PerfumeType[] = await SanityFetch({ query: Perfumes });


  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Exclusive Perfumes Collection | NovaCart</title>
        <meta
          name="description"
          content="Discover premium perfumes from top brands at NovaCart. Shop now for exclusive deals on luxury fragrances, available in bulk for B2B customers."
        />
        <meta
          name="keywords"
          content="luxury perfumes, premium fragrances, B2B perfumes, NovaCart, buy perfumes online, bulk perfumes"
        />
        <meta name="author" content="NovaCart" />
        <meta property="og:title" content="Exclusive Perfumes Collection | NovaCart" />
        <meta
          property="og:description"
          content="Discover premium perfumes from top brands at NovaCart. Shop now for exclusive deals on luxury fragrances, available in bulk for B2B customers."
        />
        <meta property="og:image" content="https://novacart.info/thd1.jpg" />
        <meta property="og:url" content="https://novacart.info/components/perfume" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Exclusive Perfumes Collection | NovaCart" />
        <meta
          name="twitter:description"
          content="Discover premium perfumes from top brands at NovaCart. Shop now for exclusive deals on luxury fragrances, available in bulk for B2B customers."
        />
        <meta name="twitter:image" content="https://novacart.info/thd1.jpg" />
      </Head>

      {/* Page Content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-white">
          Discover Our Exclusive Perfumes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
          {perfumes.map((perfume) => (
            <div
              key={perfume.id}
              className="group relative bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <Link href={`/final/${perfume.slug.current}`}>
                <div className="relative w-full h-64">
                  <Image
                    alt={perfume.name}
                    src={perfume.imageUrl}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
              </Link>
              <div className="p-5 bg-gray-900 bg-opacity-90">
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {perfume.name}
                </h2>
                <p className="text-sm text-gray-400 mb-3 italic">by {perfume.brand}</p>
                <p className="text-sm text-gray-300 line-clamp-3 mb-4">
                  {perfume.description.split(" ").slice(0, 25).join(" ")}...
                </p>
                <p className="text-lg font-bold text-emerald-400 mb-4">{perfume.price} PKR</p>
                <div className="flex flex-col space-y-3">
                  <Link
                    href={`/ContactUs?product=${encodeURIComponent(perfume.name)}&price=${perfume.price}`}
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
    </>
  );
}