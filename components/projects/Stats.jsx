"use client";
import { motion } from "framer-motion";

export function Stats({ data }) {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {data.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-4xl font-bold text-primary">{stat.value}</p>
            <p className="mt-2 text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
