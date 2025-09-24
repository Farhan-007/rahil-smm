"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTA({ text, link }) {
  return (
    <section className="py-20 bg-gradient-to-r from-[#9C6644] to-[#7F5539] text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{text}</h2>
        <Link
          href={link}
          className="inline-block bg-white text-[#7F5539] px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Let’s Talk
        </Link>
      </motion.div>
    </section>
  );
}
