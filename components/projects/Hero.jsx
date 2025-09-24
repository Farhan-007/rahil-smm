"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero({ tagline, image }) {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center">
      <Image src={image} alt={tagline} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-white text-4xl md:text-6xl font-bold max-w-3xl"
      >
        {tagline}
      </motion.h1>
    </section>
  );
}
