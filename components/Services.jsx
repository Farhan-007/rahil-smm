"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);

  const services = [
    {
      id: 1,
      title: "Social Media Management",
      desc: "Growth strategies, platform content planning, post scheduling, analytics, and community building.",
      link: "/digital-strategy",
      color: "#72b01d"
    },
    {
      id: 2,
      title: "Content Creation",
      desc: "Blog posts, ads copywriting, branded visuals, carousels, and short-form videos that connect and convert.",
      link: "/creative-design",
      color: "#403d39"
    },
    {
      id: 3,
      title: "Web Design & Development",
      desc: "Fast, responsive, and tailored to your brand. Built with React, Tailwind, Next.js. SEO-friendly structure and CMS integration.",
      link: "/web-development",
      color: "#ff6900"
    },
    {
      id: 4,
      title: "Video Production",
      desc: "Optimizing visibility with powerful analytics and SEO tools.",
      link: "/analytics-seo",
      color: "#1d3557"
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-6 bg-[#eff8e200] text-[#252422]"
      // style={{ backgroundColor: "#eff8e2", color: "#252422" }} // primary1 bg + secondary2 text
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4 text-center"
        style={{ color: "#252422" }} // darkest gray for headline
      >
        Our Services
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg mb-10 text-center max-w-xl"
        style={{ color: "#403d39" }} // medium gray for text
      >
        We provide creative, tailored, and result-driven digital solutions designed to help your brand <span style={{ color: "#ff6900" }}>Grow</span> &
        <span style={{ color: "#72b01d" }}> Thrive</span>.
      </motion.p>

      {/* Feature cards */}
      <div className="flex flex-wrap w-full h-[300px] max-w-5xl gap-4">
        {services.map((card, index) => {
          const isHovered = hovered === index;

          return (
            <motion.div
              key={card.id}
              onHoverStart={() => setHovered(index)}
              onHoverEnd={() => setHovered(null)}
              animate={{ flex: isHovered ? 3 : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center text-center cursor-pointer"
              style={{
                backgroundColor: card.color,
                color: "#eff8e2", // always white text on cards
              }}
            >
              {/* <Link href={card.link}> */}
                <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
                {isHovered && (
                  <motion.p
                    className="text-center"
                    // style={{ color: "var(--accent)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    {card.desc}
                  </motion.p>
                )}
              {/* </Link> */}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
