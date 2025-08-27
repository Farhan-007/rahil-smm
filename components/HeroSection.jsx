"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlurryBackground from "./BlurryBG";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden flex justify-center items-center min-h-screen py-24 px-6 md:px-20 bg-[#eff8e200] text-[#252422]" >
      {/* <BlurryBackground /> */}
      {/* Background subtle shapes */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#ff6900] rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#72b01d] rounded-full blur-3xl opacity-25"></div>
      </motion.div> */}

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between md:gap-0 gap-12">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left flex flex-col gap-6"
        >
          <p className="w-max px-3 py-1 text-sm font-medium rounded-md bg-[#403d39] text-[#eff8e2]">
            Your Growth. In Motion.
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-4xl font-extrabold leading-tight">
            StillMotionPictures marketing agency that turns {" "}
            <span style={{ color: "#ff6900" }}>clicks into customers.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-lg" style={{ color: "#403d39" }}>
            We craft bold strategies in SEO, social, and digital advertising to build brands that don’t just compete — they lead. 🚀
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition"
                style={{ backgroundColor: "#ff6900" }}
              >
                Book Strategy Call
              </motion.button>
            </Link>
            <Link href="#about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 rounded-full font-semibold border transition"
                style={{
                  borderColor: "#ff6900",
                  color: "#ff6900",
                }}
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Side - Illustration / Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center"
        >
          <div
            className="w-80 h-80 md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center"
            style={{ backgroundColor: "#403d39" }}
          >
            <span className="text-6xl" style={{ color: "#ff6900" }}>
              🚀
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
