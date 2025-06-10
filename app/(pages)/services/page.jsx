"use client"

import { motion } from 'framer-motion';

const services = [
  {
    title: "Web Development",
    desc: "Modern, responsive websites & web apps using React, Tailwind, and more.",
    icon: "💻",
  },
  {
    title: "Content Creation",
    desc: "Blog posts, visuals, ad copy & SEO-optimized content to fuel growth.",
    icon: "📝",
  },
  {
    title: "Social Media Management",
    desc: "Content strategy, scheduling, analytics & engagement growth.",
    icon: "📱",
  },
  {
    title: "Marketing Campaigns",
    desc: "Paid ads, funnel design, A/B testing & performance tracking.",
    icon: "📈",
  },
];

const features = [
  { icon: "⚡", label: "Fast Delivery" },
  { icon: "🎯", label: "Custom Solutions" },
  { icon: "📊", label: "Analytics-Driven" },
  { icon: "🚀", label: "Scalable Services" },
];

export default function Services() {
  return (
    <div className="bg-slate-900 text-white">
      {/* Hero */}
      <section className="py-20 px-6 md:px-12 text-center overflow-hidden relative">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Everything You Need to Grow Online
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8 text-lg text-sky-100"
        >
          We offer full-stack digital marketing services—development, content, social, campaigns—all aligned for ROI.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-orange-300 hover:bg-orange-400 text-slate-900 font-bold px-6 py-3 rounded-full"
        >
          Let’s Work Together
        </motion.button>
        {/* Optional animated background visuals (illustration or floating icons) */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-8 top-10 text-teal-200 text-6xl opacity-10"
        >
          🌐
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-8 bottom-10 text-orange-300 text-6xl opacity-10"
        >
          💡
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={i}
              className="bg-slate-800 rounded-2xl shadow-lg p-6 text-center transition hover:border hover:border-orange-300"
            >
              <div className="text-4xl mb-4 text-orange-300">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sky-100 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-12 bg-slate-800">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {features.map((f, i) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              key={i}
              className="bg-slate-700 rounded-2xl p-6 shadow-lg"
            >
              <div className="text-4xl text-teal-200 mb-2">{f.icon}</div>
              <h4 className="text-lg font-bold">{f.label}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-orange-300 to-sky-100 text-slate-900 text-center">
        <h2 className="text-3xl font-bold mb-4">Transparent Pricing, Scalable to Your Needs</h2>
        <p className="text-lg mb-8">Explore our packages or get a custom quote that fits your goals.</p>
        <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-full">
          View Pricing
        </button>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 text-center bg-slate-900">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to Take Your Business to the Next Level?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-orange-300 hover:bg-orange-400 text-slate-900 font-bold px-6 py-4 rounded-full text-lg"
        >
          Schedule a Free Strategy Call
        </motion.button>
      </section>
    </div>
  );
}
