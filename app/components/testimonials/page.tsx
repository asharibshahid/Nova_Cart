"use client";


import Image from "next/image";


const testimonials = [
  {
    name: "Rizwan Ahmed",
    feedback: "Absolutely fantastic service The quality exceeded my expectations",
    image: "/customer2.jpg",
  },
  {
    name: "Nadeem Khan",
    feedback: "Incredible experience highly recommended",
    image: "/customer1.jpg",
  },
  {
    name: "Arhum Shahid",
    feedback: "Best purchase I ve ever made Worth every penny",
    image: "/customer3.jpg",
  },
 
];

export default function TestimonialsPage() {
 

  return (
    <div className="min-h-screen bg-black py-16 px-6 text-white flex flex-col items-center">
      <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500 mb-12">
        What Our Customers Say
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card bg-white bg-opacity-10 p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-white/20 transform hover:scale-105 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-red-500"></div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-yellow-400">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-xl font-semibold">{testimonial.name}</h2>
            </div>
            <p className="mt-4 text-lg italic text-gray-200">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}