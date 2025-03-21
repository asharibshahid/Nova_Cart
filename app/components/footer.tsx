import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
    <div className="container mx-auto px-4">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-center">
        {/* Brand Section */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-white">Nova Cart</h1>
          <p className="text-sm text-gray-700">Innovating Your Shopping Experience</p>
        </div>
  
        {/* Navigation Links */}
        <div className="flex flex-wrap space-x-6">
          <Link
          href="/About" className="text-sm text-white hover:text-black">
           About Us
            </Link>
          
          <Link href="/productsAll" className="text-sm text-white hover:text-black">
           Feutured
            </Link>

          <Link href="/services" className="text-sm text-white hover:text-black">
            Services
            </Link>
          <Link href="/services" className="text-sm text-white hover:text-black">
            Contact
            </Link>
        </div>
      </div>
  
      {/* Divider */}
      <div className="border-t border-gray-300 my-6"></div>
  
      {/* Bottom Section */}
      <div className="flex flex-wrap justify-between items-center">
        {/* Copyright Section */}
        <p className="text-sm text-white">
          © 2025 Nova Cart. All Rights Reserved.
        </p>
  
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/asharib.shahid/" target='blank' className="text-emerald-400 hover:text-black">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.08 3.79 9.27 8.7 9.93v-7.02H7.9V12h2.8v-1.67c0-2.77 1.63-4.31 4.1-4.31 1.2 0 2.45.22 2.45.22v2.7h-1.38c-1.36 0-1.78.84-1.78 1.7V12h3.03l-.48 2.91h-2.55v7.02C18.21 21.27 22 17.08 22 12z" />
            </svg>
          </a>
          <a href="https://x.com/AsharibSheikh01" target='blank' className="text-emerald-400 hover:text-black">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1A4.48 4.48 0 0022.4.6a9.77 9.77 0 01-3.1 1.18A4.92 4.92 0 0016.88 0a4.48 4.48 0 00-4.44 5.4A12.94 12.94 0 011.64 2.2a4.48 4.48 0 001.38 6A4.92 4.92 0 01.8 7v.05a4.48 4.48 0 003.64 4.43A4.92 4.92 0 012.4 11a4.48 4.48 0 004.18 4.3A9.77 9.77 0 010 18.88a13 13 0 007.16 2.1c8.62 0 13.34-7.17 13.34-13.4v-.61A9.29 9.29 0 0023 3z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/web_ghost.io/" target='blank' className="text-emerald-400 hover:text-black">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.5 2h9a5.5 5.5 0 015.5 5.5v9a5.5 5.5 0 01-5.5 5.5h-9a5.5 5.5 0 01-5.5-5.5v-9A5.5 5.5 0 017.5 2zm0 1.5a4 4 0 00-4 4v9a4 4 0 004 4h9a4 4 0 004-4v-9a4 4 0 00-4-4h-9zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6zm5.25-2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer