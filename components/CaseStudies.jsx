"use client"

// import { getAllPosts } from "@/lib/markdown";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BlurryBackground from "./BlurryBG";
import { useState } from "react";
import { caseStudiesData } from "../data/caseStudies";
import ProductVideo from "@/app/temp/page";

// dripco, dhanuka agriculture, af gym, drushika imperial, greeto, alpha vibes
export default function CaseStudies() {

  const data = caseStudiesData
  const [hovered, setHovered] = useState(null);
  // const posts = getAllPosts()

  return (
    <section id="case-studies" className="py-20 px-6 md:px-20 bg-[#f9f9f900] text-gray-900">
      <BlurryBackground />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Work </h2>
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
          {data.map((study, index) => {
            // const isHovered = hovered === index;

            return (
              <motion.div
                key={index}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`relative overflow-hidden rounded-xl shadow transition-all duration-500 ease-in-out ${index === 0 ? "col-span-2 md:row-span-2" : ""} group`} // Make first item larger --
              >
                <Link href={`/case-studies/${study.id}`} className="block h-full">
                  <div className="relative h-60 md:h-full w-full">
                    {/* <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    /> */}
                    {/* Vimeo Embed */}
                    <video
                      src={study.video} // put your video in /public/videos/
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      poster="/images/product-thumb.jpg" // fallback image
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    {/* {index === 0 && (
                      <ProductVideo />
                    )} */}
                  </div>
                  <div className="absolute inset-0 top-0 bg-gradient-to-t from-black/70 to-transparent p-2 flex flex-col justify-end">
                    <h3 className={`md:text-xl ${index !== 0 ? "text-sm" : ""} text-lg font-semibold text-white p-1`}>
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
