import { SanityFetch } from "@/sanity/lib/fetch";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

type WalletTypo = {
  id: string;
  name: string;
  size: string;
  slug: {
    current: string;
    _type: string;
  };
  description: string;
  price: number;
  imageUrl: string;
};

export default async function WalletCard() {
  const Data: WalletTypo[] = await SanityFetch({ query: allProducts });



return (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-extrabold text-center mb-12 text-white">
      Discover Our Exclusive wallets
    </h1>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {Data.map((wallet) => (
        <div
          key={wallet.id}
          className="group relative bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105"
        >
          <Link href={`/final/${wallet.slug.current}`}>
            <div className="relative w-full h-64">
              <Image
                alt={wallet.name}
                src={wallet.imageUrl}
                layout="fill"
                objectFit="cover"
                className="group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          </Link>
          <div className="p-5 bg-gray-900 bg-opacity-90">
            <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">
              {wallet.name}
            </h2>
          
            <p className="text-sm text-gray-300 line-clamp-3 mb-4">
              {wallet.description.split(" ").slice(0, 18).join(" ")}...
            </p>
            <p className="text-lg font-bold text-emerald-400 mb-4">{wallet.price} PKR</p>
            <div className="flex flex-col space-y-3">
              
              <Link
                href={`/ContactUs?product=${encodeURIComponent(wallet.name)}&price=${wallet.price}`}
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

