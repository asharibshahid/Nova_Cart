import { CheckCircle } from "lucide-react";

// Define services data
const services = [
  { name: "Web Development", description: "Building scalable and robust web applications tailored to your needs." },
  { name: "UI/UX Designing", description: "Crafting intuitive and visually stunning user experiences." },
  { name: "I.T Services", description: "Providing reliable tech solutions for your business growth." },
  { name: "Web Designing", description: "Creating modern, responsive, and elegant website designs." },
  { name: "Shopify", description: "Empowering e-commerce businesses with Shopify expertise." },
  { name: "CMS", description: "Customizing and optimizing content management systems." },
  { name: "Prompt Engineering", description: "Delivering advanced AI prompt engineering solutions." },
];

// Metadata for SEO
export const metadata = {
  title: "Our Premium Services | Nova Cart",
  description: "Explore our range of professional services designed to elevate your business and streamline your workflows.",
  keywords: ["Web Development", "UI/UX Designing", "I.T Services", "Shopify", "CMS", "Prompt Engineering", "Nova Cart"],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Hero Section */}
      <section aria-labelledby="services-heading" className="text-center mb-16">
        <h1 id="services-heading" className="text-4xl font-extrabold text-lime-300 mb-4">
          Our Premium Services
        </h1>
        <p className="text-xl text-emerald-300 max-w-3xl mx-auto">
          Explore our range of professional services designed to elevate your business and streamline your workflows.
        </p>
      </section>

      {/* Services Section */}
      <section aria-labelledby="services-list-heading" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <article
            key={index}
            className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-emerald-300 transition-shadow"
            aria-labelledby={`service-${index}-heading`}
          >
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 text-lime-300 mr-4" aria-hidden="true" />
              <h2 id={`service-${index}-heading`} className="text-2xl font-bold text-white">
                {service.name}
              </h2>
            </div>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </article>
        ))}
      </section>

      {/* Call to Action */}
      <section aria-labelledby="cta-heading" className="mt-16 text-center">
        <h2 id="cta-heading" className="text-lg text-gray-300 mb-6">
          Ready to transform your business? Let’s create something extraordinary together.
        </h2>
        <a
          href="https://wa.me/03212558027"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-lime-300 to-emerald-300 text-black font-semibold rounded-full hover:from-emerald-300 hover:to-lime-300 transition-colors"
        >
          Contact Us On WhatsApp <span className="text-lg ml-2" aria-hidden="true">🚀</span>
        </a>
      </section>
    </div>
  );
}