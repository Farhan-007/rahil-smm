"use client"

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Landing Pages", icon: "🌐", desc: "High-converting, fast-loading pages tailored for campaigns." },
  { title: "E-commerce Stores", icon: "🛒", desc: "Custom storefronts built for performance and sales." },
  { title: "Web Apps", icon: "⚙️", desc: "Scalable, interactive applications tailored to your goals." },
  { title: "SEO-ready Sites", icon: "🔍", desc: "Built with clean structure and optimized for search engines." },
];

const steps = ["Discovery", "Design", "Development", "Launch", "Support"];

const pricing = [
  {
    name: "Starter",
    price: "$499",
    features: ["1-page static site", "Responsive design", "Basic SEO"],
  },
  {
    name: "Professional",
    price: "$999",
    features: ["5-page site", "CMS (e.g. WordPress)", "Animations"],
  },
  {
    name: "Premium",
    price: "$1999+",
    features: ["Custom design", "Full-stack dev", "Integrations", "Priority support"],
  },
];

const tech = ["React", "Next.js", "TailwindCSS", "Node.js", "Shopify"];

const faqs = [
  { q: "What’s the typical turnaround time?", a: "Starter sites are delivered in 1 week, full sites in 2-4 weeks." },
  { q: "How many revisions are included?", a: "Each package includes up to 3 revisions. More on request." },
  { q: "Do I get access to the site after launch?", a: "Yes, full ownership and access are handed over at launch." },
];

export default function WebDev() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="bg-slate-900 text-white">

      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 flex flex-col items-center text-center relative overflow-hidden">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Custom Web Development That Converts
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mb-8 text-lg text-sky-100"
        >
          From stunning designs to scalable code, we build websites that grow your business.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-orange-300 hover:bg-orange-400 text-slate-900 font-bold px-6 py-3 rounded-full"
        >
          Get Started
        </motion.button>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl font-semibold text-center mb-12">What We Offer</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map(({ title, icon, desc }, idx) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={idx}
              className="bg-slate-800 rounded-xl p-6 text-center transition hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold mb-2 text-orange-300">{title}</h3>
              <p className="text-sm text-sky-100">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-6 md:px-12 bg-slate-800">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Process</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              key={step}
              className="bg-slate-700 text-center px-4 py-6 rounded-xl w-40"
            >
              <div className="text-orange-300 text-lg font-bold mb-2">{step}</div>
              <div className="h-1 w-8 bg-teal-200 mx-auto rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-3xl font-semibold text-center mb-12">Pricing Plans</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, i) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={i}
              className="bg-slate-900 border border-slate-700 p-8 rounded-2xl text-center"
            >
              <h3 className="text-orange-300 text-xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold mb-4">{plan.price}</div>
              <ul className="text-sky-100 mb-6 space-y-2">
                {plan.features.map((f, idx) => <li key={idx}>• {f}</li>)}
              </ul>
              <button className="bg-orange-300 hover:bg-orange-400 text-slate-900 font-bold px-6 py-3 rounded-full">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 md:px-12 bg-slate-800">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-10 items-center text-xl text-teal-200">
          {tech.map((t, i) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={i}
              className="bg-slate-700 px-4 py-2 rounded-md"
            >
              {t}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-3xl font-semibold text-center mb-12">What Our Clients Say</h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <div className="bg-slate-800 p-6 rounded-xl text-sky-100 w-full sm:w-1/3">
            <p>"They transformed our vision into a powerful, high-performing site."</p>
            <p className="mt-4 text-orange-300 font-semibold">— Sarah M., Ecom Founder</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl text-sky-100 w-full sm:w-1/3">
            <p>"Working with their dev team was seamless and professional."</p>
            <p className="mt-4 text-orange-300 font-semibold">— David R., Startup CTO</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-12 bg-slate-800">
        <h2 className="text-3xl font-semibold text-center mb-12">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              className="bg-slate-700 p-4 rounded-xl cursor-pointer transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold">{faq.q}</h3>
                <span>{openFAQ === i ? "-" : "+"}</span>
              </div>
              {openFAQ === i && <p className="text-sky-100 mt-2">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-orange-300 to-sky-100 text-slate-900 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
        <p className="mb-6">Let’s bring your web vision to life. Book a free strategy session today.</p>
        <button className="bg-slate-900 text-white font-bold px-6 py-3 rounded-full hover:bg-slate-800">
          Book a Free Consultation
        </button>
      </section>
    </div>
  );
}
