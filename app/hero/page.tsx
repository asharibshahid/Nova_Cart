"use client"; // Client-side component for interactivity

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Head from "next/head";

const categories = [
  { name: "Wallets", emoji: "👛", route: "/components/wallet" },
  { name: "Shoes", emoji: "👟", route: "/components/shoes" },
  { name: "Perfume", emoji: "🌸", route: "/components/perfume" },
  { name: "Furniture", emoji: "🪑", route: "/components/furniture" },
  { name: "Electronics", emoji: "📱", route: "/components/electronics" },
  { name: "Clothing", emoji: "👕", route: "/components/clothing" },
  { name: "Hijabs", emoji: "🧕", route: "/components/hijabs" },
  { name: "Jewelry", emoji: "💍", route: "/components/jewelry" },
  { name: "Caps", emoji: "🧢", route: "/components/caps" },
  { name: "T-Shirts", emoji: "👚", route: "/components/tshirt" },
];

export default function CategoriesPage() {
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Initial animation for cards
    gsap.fromTo(
      categoryRefs.current,
      { opacity: 0, scale: 0.5, y: 100 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
      }
    );

    // Heading text animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    // Scroll-triggered animations
    const scrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    scrollTrigger.fromTo(
      categoryRefs.current,
      { opacity: 0, scale: 0.2, y: 100, rotation: -45 },
      {
        opacity: 1,
        scale: 1.2,
        y: 0,
        rotation: 0,
        duration: 2,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
        onComplete: () => {
          gsap.to(categoryRefs.current, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      }
    );

    // Shaking effect after cards settle
    scrollTrigger.to(categoryRefs.current, {
      y: -10,
      duration: 0.1,
      repeat: 5,
      yoyo: true,
      ease: "power1.inOut",
      delay: 2,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Explore Our Categories - Your Brand Name</title>
        <meta
          name="description"
          content="Discover a wide range of categories including wallets, shoes, perfume, furniture, electronics, clothing, hijabs, jewelry, caps, and t-shirts."
        />
        <meta
          name="keywords"
          content="wallets, shoes, perfume, furniture, electronics, clothing, hijabs, jewelry, caps, t-shirts"
        />
        <meta name="author" content="Novacart" />
        <link rel="canonical" href="https://novacart.info/hero" />
      </Head>

      <div
        ref={sectionRef}
        className="min-h-screen bg-black text-white py-16 px-4 relative overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-full h-full bg-gradient-to-r from-teal-900 via-purple-900 to-indigo-900 opacity-50 animate-gradient"></div>
        </div>

        <style jsx>{`
          .glowing-card {
            position: relative;
            overflow: hidden;
          }

          .glowing-card::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300%;
            height: 300%;
            background: radial-gradient(
              circle,
              rgba(255, 255, 255, 0.4),
              transparent 70%
            );
            transform: translate(-50%, -50%) scale(0);
            transition: transform 0.5s ease-out;
            pointer-events: none;
          }

          .glowing-card:hover::before {
            transform: translate(-50%, -50%) scale(1);
          }

          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 10s ease infinite;
          }
        `}</style>

        <div className="container mx-auto relative z-10">
          <h1
            ref={headingRef}
            className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Explore Our Categories
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.name}
                ref={(el) => {
                  categoryRefs.current[index] = el;
                }}
                className="group relative bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-neon transition-shadow duration-300 transform hover:scale-110 hover:-rotate-3 hover:brightness-150 hover:shadow-lg hover:shadow-teal-500 glowing-card"
              >
                <Link href={category.route}>
                  <div className="p-8 text-center">
                    <span className="text-6xl mb-4 inline-block transform group-hover:scale-125 transition-transform duration-300">
                      {category.emoji}
                    </span>
                    <h2 className="text-2xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
                      {category.name}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}