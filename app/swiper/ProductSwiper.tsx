"use client";
import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ProductSwiperProps {
  products: Product[];
}

export default function ProductSwiper({ products }: ProductSwiperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!products?.length) return;

    gsap.from(".swiper-slide", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    gsap.to(".product-card", {
      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        scrub: true
      }
    });
  }, [products]);

  if (!products?.length) {
    return (
      <div className="w-full py-24 text-center">
        <p className="text-gray-400 text-lg">No products available</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full py-16 bg-neutral-50">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4 }
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 5000 }}
        loop
        pagination={{ clickable: true }}
       
      >
        {products.map((product) => (
          <SwiperSlide key={product.slug.current}>
            <div className="product-card group h-[500px] bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
              <Link 
                href={`/final/${product.slug.current}`}
                className="relative block flex-1 overflow-hidden"
              >
                <div className="relative h-[300px] w-full transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </Link>

              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
                    {product._type}
                  </span>
                  <span className="text-lg font-bold text-blue-600">
                    {new Intl.NumberFormat('en-PK', {
                      style: 'currency',
                      currency: 'PKR'
                    }).format(product.price -100 )}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-neutral-800 line-clamp-2">
                  {product.name}
                </h3>

                <Link
                  href={`/ContactUs?product=${encodeURIComponent(product.name)}&price=${product.price}`}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-900 text-white rounded-lg transition-colors duration-200"
                >
                  <span>Purchase</span>
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="swiper-button-next !text-neutral-800 !w-12 !h-12 !rounded-full !bg-white !shadow-lg after:!text-xl" />
        <div className="swiper-button-prev !text-neutral-800 !w-12 !h-12 !rounded-full !bg-white !shadow-lg after:!text-xl" />
      </Swiper>
      <style jsx>{`
  .swiper-button-next,
  .swiper-button-prev {
    transition: all 0.3s ease;
    top: 45%;
    transform: translateY(-50%);
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    transform: translateY(-50%) scale(1.1);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 1.2rem;
    font-weight: 700;
  }
`}</style>
    </div>
  );
}