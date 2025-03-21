// app/final/[slug]/page.jsx

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import ProductContent from "./ProductContent";

async function getProduct(slug) {
  try {
    return await client.fetch(
      groq`*[_type in [
        "wallet", 
        "shoes", 
        "electronic", 
        "hijab", 
        "jewelry", 
        "cap", 
        "perfume", 
        "hoodie", 
        "tshirt"
      ] && slug.current == $slug][0] {
        _id,
        name,
        description,
        price,
        _type,
        "imageUrl": image.asset->url,
        slug
      }`,
      { slug }
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        Product not found
      </div>
    );
  }

  return <ProductContent product={product} />;
}