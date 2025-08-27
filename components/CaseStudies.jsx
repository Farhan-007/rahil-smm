"use client"

// import { getAllPosts } from "@/lib/markdown";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BlurryBackground from "./BlurryBG";
import { useState } from "react";

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

  const [hovered, setHovered] = useState(null);
  // const posts = getAllPosts()

  return (
    <section id="case-studies" className="py-20 px-6 md:px-20 bg-[#f9f9f900] text-gray-900">
      <BlurryBackground />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Work</h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
        {/* {posts.map((post, index) => {
            return (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group col-span-2 block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                <div className="relative h-60 w-full">
                  <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 transition">{post.title}</h3>
                  <p className="text-sm text-gray-500">{post.description}</p>
                </div>
              </Link>
            );
          })} */}
        <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-6 min-h-[500px]">
          {caseStudies.map((study, index) => {
            const isHovered = hovered === index;

            return (
              <motion.div
                key={index}
                onHoverStart={() => setHovered(index)}
                onHoverEnd={() => setHovered(null)}
                transition={{ duration: 0.4, ease: "easeInOut" }} 
                className={`relative overflow-hidden rounded-xl shadow transition-all duration-500 ease-in-out
                  ${index === 0 && hovered === null ? "col-span-2 row-span-2"
                    : isHovered ? " col-start-1 row-start-1 col-span-2 row-span-2" : "col-span-1 row-span-1"}
                  ${isHovered && index === 2 ? "col-start-2 row-start-1" : ""}`}
              >
                <Link href={study.link} className="block h-full">
                  <div className="relative h-60 md:h-full w-full">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-gray-200">{study.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
