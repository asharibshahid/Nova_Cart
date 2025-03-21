import { SanityFetch } from "@/sanity/lib/fetch";
import { allProd } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import ProductSwiper from "./ProductSwiper";

export default async function AllProductsPage() {
  let products: Product[] = [];

  try {
    products = await SanityFetch({ query: allProd });
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <div >
      <h1 className="text-center text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 tracking-wide">
        <br />
        Trending Items
         <br />
      </h1>
      <ProductSwiper products={products} />
    </div>
  );
}