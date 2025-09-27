// components/ProductVideo.jsx
"use client";

import React from "react";

const ProductVideo = () => {
  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* Video */}
      <video
        src="/videos/demo.MP4" // put your video in /public/videos/
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/product-thumb.jpg" // fallback image
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay content */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Experience the Product
        </h1>
        <p className="text-lg md:text-2xl text-center max-w-2xl">
          Smooth, fast, and seamless.
        </p>
      </div> */}
    </section>
  );
};

export default ProductVideo;
