import Head from "next/head";
import AllProductsPage from "./swiper/page";
import TestimonialsPage from "./components/testimonials/page";
import Hero from "./productsAll/page";
import ServicesPage from "./services/page";
import GsapAnimation from "./gsapanimation"; // Import Client Component
import CategoriesPage from "./hero/page";

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>NovaCart - Top Online Store for Fashion, Electronics, and More</title>
        <meta
          name="description"
          content="Discover the best deals on fashion, electronics, jewelry, and more at NovaCart Shop now for exclusive offers and fast delivery"
        />
        <meta
          name="keywords"
          content="online shopping, fashion, electronics, jewelry, furniture, NovaCart, best deals, affordable prices ,top1 , trending ,pakistan , google , viral , fyp , shopify , ordernow , exclusive deals"
        />
        <meta name="author" content="NovaCart" />
        <meta property="og:title" content="NovaCart - Top Online Store for Fashion, Electronics, and More" />
        <meta
          property="og:description"
          content="Discover the best deals on fashion, electronics, jewelry, and more at NovaCart. Shop now for exclusive offers and fast delivery"
        />
        <meta property="og:image" content="https://novacart.info/thd1.jpg" />
        <meta property="og:url" content="https://novacart.info" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NovaCart - Top Online Store for Fashion, Electronics, and More" />
        <meta
          name="twitter:description"
          content="Discover the best deals on fashion, electronics, jewelry, and more at NovaCart. Shop now for exclusive offers and fast delivery"
        />
        <meta name="twitter:image" content="https://novacart.info/thd1.jpg" />
      </Head>

      {/* Main Content */}
      <div className="bg-black text-white">
        {/* GSAP Animation (Client Component) */}
        <GsapAnimation />

        {/* All Products Section */}
      
          <AllProductsPage />
        
 <CategoriesPage />
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-900">
          <TestimonialsPage />
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              Features
            </h1>
            <span className="inline-block h-1 w-24 rounded bg-emerald-500" />
          </div>
          <Hero />
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-900">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              Services
            </h1>
            <span className="inline-block h-1 w-24 rounded bg-emerald-500" />
          </div>
          <ServicesPage />
        </section>
      </div>
    </>
  );
}