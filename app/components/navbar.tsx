"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser, SignInButton, SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import gsap from "gsap";

const Navbar = () => {
  const { signOut } = useClerk();
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { user } = useUser();

  // Refs for GSAP animations
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const authRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client

    // GSAP Animations
    const tl = gsap.timeline();

    // Logo Animation
    tl.fromTo(
      logoRef.current,
      { opacity: 0, x: -50, scale: 0.8 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: "elastic.out(1, 0.75)" }
    );

    // Navigation Animation
    tl.fromTo(
      navRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
    );

    // Authentication Animation
    tl.fromTo(
      authRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 1 }
    );

    // Dynamic Background Color Change on Scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const header = headerRef.current;

      if (scrollY > 50) {
        gsap.to(header, {
          backgroundColor: "rgba(17, 24, 39, 0.9)", // Semi-transparent dark background
          backdropFilter: "blur(10px)",
          duration: 0.5,
        });
      } else {
        gsap.to(header, {
          backgroundColor: "rgba(0, 0, 0, 0.9)", // Semi-transparent black background
          backdropFilter: "blur(0px)",
          duration: 0.5,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isClient) return null; // Prevents SSR mismatches

  const categories = [
    { name: "Wallets", href: "/components/wallet" },
    { name: "Perfume", href: "/components/perfume" },
    { name: "Electronics", href: "/components/electronics" },
    { name: "Caps", href: "/components/caps" },
    { name: "Hoodies", href: "/components/Hoddie" },
    { name: "T-Shirts", href: "/components/tshirt" },
    { name: "Jewelries", href: "/components/jewelry" },
    { name: "Hijabs", href: "/components/hijabs" },
    { name: "Shoes", href: "/components/shoes" },
  ];

  return (
    <header
      ref={headerRef}
      className="body-font text-white border-4 border-gray-600 hover:shadow-lg transition-shadow p-1 sticky top-0 z-50 bg-black/90 backdrop-blur-sm"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <div ref={logoRef} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link href="/">
            <Image
              src="/thd.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="bg-black cursor-pointer rounded-full hover:rotate-180 transition-transform duration-500"
              priority // Ensures no hydration error
            />
          </Link>
          <span className="ml-3 text-xl text-emerald-400 hover:text-teal-500 transition-colors duration-300">
            NovaCart
          </span>
        </div>

        {/* Navigation */}
        <nav ref={navRef} className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center space-x-4">
          <Link href="/" className="hover:text-white transition-colors duration-300 hover:scale-110">
            Home
          </Link>
          <Link href="/components/jewelry" className="hover:text-white transition-colors duration-300 hover:scale-110">
            Jewelry
          </Link>
          <Link href="/components/clothing" className="hover:text-white transition-colors duration-300 hover:scale-110">
            Clothing
          </Link>
          <Link href="/components/furniture" className="hover:text-white transition-colors duration-300 hover:scale-110">
            Furniture
          </Link>

          {/* Category Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setTimeout(() => setIsVisible(false), 1000)}
          >
            <div className="flex items-center cursor-pointer hover:text-white transition-colors duration-300 hover:scale-110">
              <span>Category</span>
              <span className="ml-1">▼</span>
            </div>
            {isVisible && (
              <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded z-50">
                {categories.map((item) => (
                  <li key={item.name} className="px-4 py-2 hover:bg-gray-100 transition-colors duration-300">
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link href="/services" className="hover:text-white transition-colors duration-300 hover:scale-110">
            Services
          </Link>
        </nav>

        {/* Authentication and User Profile */}
        <div ref={authRef} className="space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="inline-flex items-center hover:bg-gradient-to-r from-emerald-400 to-teal-500 border-0 py-2 px-4 focus:outline-none bg-gradient-to-r hover:from-teal-500 hover:to-emerald-400 rounded text-base mt-4 md:mt-0 transition-all duration-300 hover:scale-105">
               Login
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center space-x-4">
              {/* User Profile */}
              <div className="flex items-center">
                <img
                  src={user?.imageUrl || "/default-profile.jpg"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full hover:rotate-180 transition-transform duration-500"
                />
                <span className="ml-2 text-sm font-semibold text-white hover:text-teal-500 transition-colors duration-300">
                  {user?.fullName || "User"}
                </span>
              </div>

              {/* Sign Out Button */}
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 rounded hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-600 transition-all duration-300 hover:scale-105"
              >
               Logout
              </button>
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;