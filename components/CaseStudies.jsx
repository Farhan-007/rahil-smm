import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "E-commerce Growth for Local Fashion Brand",
    description: "Increased sales by 300% through SEO, paid ads, and a custom Shopify redesign.",
    image: "https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/case-studies/fashion-growth",
  },
  {
    title: "Viral Campaign for Food Delivery Startup",
    description: "Generated 1M+ impressions in under 2 weeks via reels, influencers, and geo-targeting.",
    image: "https://images.pexels.com/photos/4393667/pexels-photo-4393667.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/case-studies/food-delivery-viral",
  },
  {
    title: "Brand Refresh & Conversion Boost for SaaS Company",
    description: "Redesigned their entire brand identity and landing flow, boosting signups by 70%.",
    image: "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/case-studies/saas-refresh",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-6 md:px-20 bg-[#f9f9f9] text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <Link href={study.link} key={idx} className="group block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative h-60 w-full">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 transition">{study.title}</h3>
                <p className="text-sm text-gray-500">{study.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
