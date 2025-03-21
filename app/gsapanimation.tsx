"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import Link from "next/link";
import Head from "next/head";

export default function HeroSection() {
  const sphereRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
 

  // 3D Sphere Animation
  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    let rotation = 0;
    const animate = () => {
      rotation += 0.2;
      sphere.style.transform = `rotateY(${rotation}deg) rotateX(${rotation * 0.7}deg)`;
      requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(requestAnimationFrame(animate));
  }, []);

  // Parallax Effect (Disabled on Mobile)
  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.innerWidth < 768) return; // Disable on mobile

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      gsap.to(container, {
        duration: 1,
        rotationY: 10 * (x - 0.5),
        rotationX: -10 * (y - 0.5),
        ease: "power2.out"
      });
    };

    container.addEventListener("mousemove", handleMove);
    return () => container.removeEventListener("mousemove", handleMove);
  }, []);
  
  // Floating Elements (Slower on Mobile)
  useEffect(() => {
    gsap.to(".float-element", {
      duration: window.innerWidth < 768 ? 5 : 3, // Slower on mobile
      y: 15,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <>
      <Head>
        <title>NovaCart - Your Ultimate Shopping Destination</title>
        <meta name="description" content="Discover the best deals on fashion, electronics, home goods, and more at NovaCart. Shop now for exclusive offers!" />
      </Head>

      <section 
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-zinc-900 via-gray-900 to-indigo-900"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle ${5 + i/10}s linear infinite`
              }}
            />
          ))}
        </div>

        {/* Central 3D Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 perspective-2000 w-[90%] max-w-[800px]">
          <div className={`relative w-full h-[300px] md:h-[500px] bg-gradient-to-br from-black/80 to-indigo-900/50 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/10 transform-style-preserve-3d`}>
            {/* Rotating Sphere */}
            <div
              ref={sphereRef}
              className={`absolute -top-16 md:-top-32 right-8 md:right-32 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-indigo-500 to-emerald-400 rounded-full opacity-20 blur-xl transform-gpu`}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-center p-6 md:p-12 z-10">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-300 to-emerald-400 bg-clip-text text-transparent mb-4 md:mb-6">
                Welcome to NovaCart
                <span className="block text-lg md:text-2xl font-light text-gray-300 mt-2 md:mt-4">Your Gateway to Premium Shopping</span>
              </h1>

              {/* Animated Feature Ticker */}
              <div className="w-full overflow-hidden my-4 md:my-8">
                <div className="flex space-x-6 md:space-x-12 animate-infinite-scroll">
                  {['Shopify Owners', 'Bulk Quantities', '24/7 Support', 'Secure Payments', 'Exclusive Deals'].map((text, i) => (
                    <div key={i} className="flex items-center space-x-2 md:space-x-4">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-emerald-400 rounded-full" />
                      <span className="text-base md:text-xl text-gray-300">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive CTA */}
              <Link
                href="/hero"
                className="relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button className={`relative px-8 md:px-16 py-2 md:py-4 bg-black/50 backdrop-blur-lg border border-white/20 rounded-full text-base md:text-xl font-medium text-white group-hover:text-white/90 transition-all duration-300`}>
                  Shop Now
                  <div className={`absolute inset-0 border border-white/20 rounded-full pointer-events-none group-hover:border-transparent transition-all duration-300`} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="float-element absolute top-1/4 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-indigo-500/20 rounded-xl transform rotate-45" />
        <div className="float-element absolute top-1/3 right-1/4 w-20 h-20 md:w-32 md:h-32 bg-emerald-400/20 rounded-full" />

        {/* Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-2">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/20 animate-pulse" />
          ))}
        </div>

        {/* Mobile Interaction Prompt */}
        <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="i-ph-hand-swipe-light text-4xl text-white/50 animate-swipe-hint" />
          <span className="text-sm text-white/50 mt-2">Swipe to explore</span>
        </div>
      </section>

      <style jsx global>{`
        @keyframes particle {
          0% { transform: translateY(0) scale(1); opacity: 0.8; }
          100% { transform: translateY(-100vh) scale(0); opacity: 0; }
        }

        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }

        .animate-swipe-hint {
          animation: swipe-hint 2s ease-in-out infinite;
        }

        @keyframes swipe-hint {
          0%, 100% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
        }

        @media (max-width: 768px) {
          .perspective-2000 {
            perspective: 1000px; /* Reduce perspective for mobile */
          }
        }
      `}</style>
    </>
  );
}
