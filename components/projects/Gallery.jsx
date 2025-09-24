"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Gallery({ images }) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Showcase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
