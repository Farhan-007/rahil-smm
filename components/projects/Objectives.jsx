"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function Objectives({ items }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Objectives</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md"
            >
              <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
              <p className="text-lg text-gray-700 text-left">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
