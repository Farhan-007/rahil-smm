"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function SplitSection({
  heading,
  content,
  image,
  reverse = false,
}) {
  return (
    <section className="py-20">
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:grid-flow-dense" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">{heading}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{content}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src={image}
            alt={heading}
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
