"use client"
import React from "react";

// DripCo Case Study Project Page
// Single-file React component (TailwindCSS required in the project)
// Usage: import and render <DripCoCaseStudy /> inside your app

export default function DripCoCaseStudy() {
  const gallery = [
    { id: 1, src: "/images/dripco-1.jpg", alt: "Latte art on wooden table" },
    { id: 2, src: "/images/dripco-2.jpg", alt: "Café interior" },
    { id: 3, src: "/images/dripco-3.jpg", alt: "Gourmet bites closeup" },
    { id: 4, src: "/images/dripco-4.jpg", alt: "Barista pouring coffee" },
  ];

  const metrics = [
    { label: "Follower growth (3 months)", value: "+245%" },
    { label: "Avg. engagement rate", value: "9.4%" },
    { label: "Avg. reel views", value: "10k+" },
    { label: "Attributed footfall", value: "+30%" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-12 md:pt-20">
      <article className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* HERO */}
        <header className="relative grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-12 items-center">
          <div className="space-y-4">
            <p className="inline-block text-sm font-medium text-amber-600">Case Study</p>
            <h1 className="text-3xl md:text-4xl font-extrabold">DripCo — Specialty Coffee Brewers</h1>
            <p className="text-gray-600 max-w-xl">
              Social media growth & brand storytelling for Indore’s No.1 coffee experience — 100% Arabica
              brews, gourmet bites and a vibe people come back for. #Stay_Dripped
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-sm">Cafeteria</span>
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-sm">Instagram</span>
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-sm">Content Strategy</span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#results"
                className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-amber-600 text-white font-medium shadow-sm hover:shadow-md"
              >
                View results
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center px-5 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                View gallery
              </a>
            </div>
          </div>

          <div className="h-64 md:h-72 w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
            {/* Replace with a hero image or Instagram feed mockup */}
            <img
              src="/images/dripco-hero.jpg"
              alt="DripCo hero"
              className="object-cover w-full h-full"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/800x600?text=DripCo+Hero";
              }}
            />
          </div>
        </header>

        <div className="border-t border-gray-100" />

        {/* BODY: Overview + Challenge + Strategy + Results */}
        <section className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column: Overview & Challenge */}
          <div className="md:col-span-2 space-y-8">
            {/* Client Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Client Overview</h2>
                <p className="text-gray-600">DripCo is a specialty coffee brand based in Indore focused on premium Arabica brews and gourmet cafe experiences.</p>

                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <li><strong>Industry:</strong> Cafeteria / F&B</li>
                  <li><strong>Location:</strong> Indore, India</li>
                  <li><strong>USP:</strong> 100% Arabica Brews</li>
                  <li><strong>Hashtag:</strong> #Stay_Dripped</li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-xl p-4 text-sm">
                <p className="font-medium">Quick snapshot</p>
                <p className="mt-2 text-gray-600">A premium café with a loyal local following — needed a more strategic social presence to scale reach and footfall.</p>
              </div>
            </div>

            {/* The Challenge */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">The Challenge</h3>
              <p className="text-gray-600">DripCo had a strong product and local reputation but lacked a consistent social media voice and visual identity that matched its premium positioning. The market in Indore is crowded, and organic discovery was limited.</p>
            </div>

            {/* Objectives */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Objectives</h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-600">✅</span>
                  <span>Establish a premium Instagram presence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-600">✅</span>
                  <span>Increase local engagement & reach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-600">✅</span>
                  <span>Drive footfall using campaigns & collaborations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-600">✅</span>
                  <span>Encourage UGC and community features</span>
                </li>
              </ul>
            </div>

            {/* Strategy & Execution */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Strategy & Execution</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Content Pillars</h4>
                  <p className="text-sm text-gray-600 mt-2">Coffee education, lifestyle shots, product highlights, UGC, seasonal campaigns under #Stay_Dripped.</p>
                </div>
                <div className="p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Visual Identity</h4>
                  <p className="text-sm text-gray-600 mt-2">Warm palette, clean typography, focus on texture and closeups (latte art, wood surfaces).</p>
                </div>
                <div className="p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium">Engagement</h4>
                  <p className="text-sm text-gray-600 mt-2">Polls, Q&A, influencer collabs, giveaways and featuring customers to grow community trust.</p>
                </div>
              </div>
            </div>

            {/* Key Learnings */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Key Learnings</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Coffee education + lifestyle visuals drives shares and saves.</li>
                <li>Local influencers amplified reach and produced measurable footfall increases.</li>
                <li>Featuring customer content increased repeat visits and UGC submissions.</li>
              </ul>
            </div>
          </div>

          {/* Right column: Results & Metrics */}
          <aside className="space-y-6 p-6 bg-gray-50 rounded-xl">
            <div>
              <h3 className="text-lg font-semibold">Results</h3>
              <p className="text-sm text-gray-600 mt-2">Performance highlights from the campaign (replace with verified metrics).</p>
            </div>

            <div id="results" className="grid grid-cols-2 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-xs text-gray-500">{m.label}</p>
                  <p className="text-xl font-bold mt-2">{m.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-semibold">Top performing content</h4>
              <p className="text-xs text-gray-600 mt-1">Reels about brewing technique and latte art performed best — consistent 10k+ views.</p>
              <div className="mt-3 flex gap-3">
                <button className="flex-1 px-4 py-2 rounded-lg border border-amber-600 text-amber-600">Download report</button>
                <button className="flex-1 px-4 py-2 rounded-lg bg-amber-600 text-white">Contact</button>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-500">
              <p>Role: Social Media Manager / Content Creator</p>
              <p>Tools: Instagram, Canva, InShot, Google Forms (for UGC)</p>
            </div>
          </aside>
        </section>

        <div className="border-t border-gray-100" />

        {/* Gallery Section */}
        <section id="gallery" className="p-8 md:p-12">
          <h3 className="text-2xl font-semibold mb-6">Gallery — top posts & assets</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((g) => (
              <figure key={g.id} className="rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={g.src}
                  alt={g.alt}
                  className="w-full h-48 object-cover"
                  onError={(e) => (e.currentTarget.src = `https://via.placeholder.com/600x400?text=DripCo+${g.id}`)}
                />
                <figcaption className="p-3 text-sm text-gray-600">{g.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100" />

        {/* CTA Footer */}
        <footer className="p-8 md:p-12 bg-amber-50 rounded-b-2xl">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold">Want results like this?</h4>
              <p className="text-gray-700 text-sm">I help cafés and F&B brands grow on social — strategy, creative content and community building.</p>
            </div>
            <div className="flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-amber-600 text-white">Work with me</a>
              <a href="#projects" className="px-5 py-3 rounded-xl border border-amber-600">See more projects</a>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
