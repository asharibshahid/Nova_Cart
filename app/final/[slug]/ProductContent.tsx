"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  _type: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const imageVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

const buttonVariants = { hover: { scale: 1.05 }, tap: { scale: 0.95 } };

export default function ProductContent({ product }: { product: Product }) {
  return (
    <motion.div className="min-h-screen bg-gray-900 text-white" variants={containerVariants} initial="hidden" animate="visible">
      <div className="container mx-auto px-4 py-12">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8" variants={containerVariants}>
          
          {/* Product Image */}
          <motion.div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-800" variants={imageVariants}>
            <Image src={product.imageUrl} alt={product.name} fill className="object-cover" priority quality={100} />
          </motion.div>

          {/* Product Details */}
          <motion.div className="space-y-6" variants={textVariants}>
            <motion.div variants={textVariants}>
              <span className="bg-purple-500/20 text-purple-400 px-4 py-1 rounded-full text-sm">{product._type}</span>
              <h1 className="text-4xl font-bold mt-4">{product.name}</h1>
            </motion.div>

            <motion.p className="text-gray-300 text-lg" variants={textVariants}>{product.description}</motion.p>

            <motion.div variants={textVariants}>
              <div className="text-3xl font-bold text-purple-400">{product.price.toFixed(2)}</div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div className="flex flex-col gap-4" variants={textVariants}>
              <Link href={`/ContactUs?product=${encodeURIComponent(product.name)}&price={product.price}`}>
                <motion.button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-colors"
                  variants={buttonVariants} whileHover="hover" whileTap="tap">
                  Buy Now
                </motion.button>
              </Link>
              <motion.a href={`https://wa.me/923212558027?text=I'm interested in ${encodeURIComponent(product.name)} (${product.price})`}
                target="_blank" rel="noopener noreferrer"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-center transition-colors"
                variants={buttonVariants} whileHover="hover" whileTap="tap">
                Contact on WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
