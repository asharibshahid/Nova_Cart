"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  slug: {
    current: string;
  };
};

const FurniturePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type=="chairs" || _type=="table" || _type=="outdoor" || _type=="sofa" || _type=="sets"]{
          _id,
          name,
          description,
          price,
          "imageUrl": image.asset->url,
          "slug": slug.current
        }`;
        const res = await fetch(
          `https://v2d5om50.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(query)}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setProducts(data.result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-zinc-400 to-purple-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading furniture collection...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-zinc-400 to-purple-100">
        <div className="text-center">
          <p className="text-red-600 text-lg font-semibold">{error}</p>
          <p className="text-gray-600 mt-2">
            Please try again later or contact support.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-zinc-400 to-purple-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Furniture Collection
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Discover comfort and elegance in every piece
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="group relative bg-white rounded-2xl overflow-hidden border-2 border-amber-300 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={product.imageUrl || "https://via.placeholder.com/150"}
                    alt={product.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-semibold text-blue-600">
                      {new Intl.NumberFormat("en-PK", {
                        style: "currency",
                        currency: "PKR",
                      }).format(product.price + 500)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  <div>
                    <Link
                      href={`/ContactUs?product=${encodeURIComponent(
                        product.name
                      )}&price=${product.price}`}
                    >
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                        <span>Buy Now</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600">
              No products found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FurniturePage;