"use-client"

import { motion } from "framer-motion";

export default function CaseStudyPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16 px-4 md:px-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-y-4">
          <h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold"
          >
            How We Helped Acme Co. Increase Traffic by 300%
          </h1>
          <p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sky-100 text-base md:text-lg max-w-xl"
          >
            A full-funnel digital strategy that transformed their online presence.
          </p>
          <button
            whileHover={{ scale: 1.05 }}
            className="mt-4 bg-orange-300 hover:bg-orange-400 text-slate-900 font-semibold px-6 py-3 rounded-full"
          >
            Start Your Project
          </button>
          <div className="mt-10 w-16 h-16 bg-orange-300 rounded-full flex items-center justify-center">
            🏭 {/* Industry Icon */}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-14 px-4 md:px-10 flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-1 space-y-4">
          <h2 className="text-xl font-semibold">Project Overview</h2>
          <ul className="text-base space-y-2 text-slate-700">
            <li><strong>Industry:</strong> Manufacturing</li>
            <li><strong>Timeline:</strong> 3 months</li>
            <li><strong>Services:</strong> SEO, Web Dev, PPC</li>
            <li><strong>Platform:</strong> WordPress</li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="bg-slate-100 w-full h-64 md:h-80 rounded-xl"></div>
        </div>
      </section>

      {/* Goals & Challenges */}
      <section className="py-14 px-4 md:px-10 bg-slate-50">
        <h2 className="text-xl font-semibold mb-6">What They Needed</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Low website traffic despite strong offline brand</li>
          <li>No clear conversion path for leads</li>
          <li>Outdated, slow website with poor UX</li>
        </ul>
        <div className="mt-6 p-4 bg-sky-100 text-slate-900 italic rounded-md">
          “We knew our site was underperforming, but we didn’t realize how much we were missing out.”
        </div>
      </section>

      {/* Our Strategy */}
      <section className="py-14 px-4 md:px-10">
        <h2 className="text-xl font-semibold mb-6">Our Solution</h2>
        <div className="space-y-6">
          {["Discovery", "Design", "Development", "Launch", "Optimize"].map((step, i) => (
            <div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-orange-300 text-slate-900 rounded-full font-bold">
                {i + 1}
              </div>
              <p className="text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-14 px-4 md:px-10 bg-slate-900 text-white">
        <h2 className="text-xl font-semibold mb-8">The Results</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { label: "Traffic Increase", value: "300%" },
            { label: "Leads Generated", value: "1,200+" },
            { label: "Bounce Rate Reduced", value: "↓ 45%" },
          ].map((stat, i) => (
            <div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="text-3xl font-bold text-orange-300"
            >
              <div>{stat.value}</div>
              <p className="text-white text-base mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white h-48 rounded-xl"></div>
          <div className="bg-white h-48 rounded-xl"></div>
        </div>

        <div className="mt-10 p-6 bg-sky-100 text-slate-900 rounded-lg text-center italic">
          “They helped us unlock online growth we didn’t think was possible.” – Acme Co.
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-14 px-4 md:px-10">
        <h2 className="text-xl font-semibold mb-8">Key Takeaways</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Data-driven strategy wins",
            "User experience is conversion fuel",
            "Fast loading = better SEO",
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="text-orange-300 text-xl">✅</div>
              <p className="text-slate-700">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-br from-orange-300 to-sky-100 text-center text-slate-900">
        <h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Want Similar Results for Your Business?
        </h2>
        <button
          whileHover={{ scale: 1.05 }}
          className="bg-slate-900 text-white px-6 py-4 rounded-full font-semibold"
        >
          Book a Free Strategy Call
        </button>
      </section>
    </div>
  );
}
