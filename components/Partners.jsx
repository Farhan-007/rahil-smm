"use client"

import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const logos = [
  { alt: "Acme" },
  { alt: "Nimbus" },
  { alt: "Aventis" },
  { alt: "Pixelcraft" },
  { alt: "Vertex" },
  { alt: "Zypher" },
  // Add more as needed
];

const PartnerLogos = () => {
  const containerRef = useRef(null);
  const x = useRef(0);

  // Animate frame-by-frame
  useAnimationFrame((t, delta) => {
    if (containerRef.current) {
      x.current -= delta * 0.10; // Speed control
      if (x.current <= -containerRef.current.scrollWidth / 2) {
        x.current = 0;
      }
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <section className="bg-[#c7b76e60] py-10 px-6 md:px-20  overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-24 whitespace-nowrap will-change-transform"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-12 justify-center grayscale hover:grayscale-0 transition text-black text-xl lg:text-2xl font-bold min-w-max"
            >
              <span className="block w-5 h-5 bg-black rounded-full"></span>
              <p>{logo.alt}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogos;
