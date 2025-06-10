// components/AboutInnovation.jsx

import Image from "next/image";

export default function AboutInnovation() {
  return (
    <section className="bg-[#FFF7F1] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4">
            Blending Innovation <br /> with Strategic Excellence
          </h2>
          <p className="text-[#555] mb-6 max-w-lg">
            Our agency delivers innovation at the core of strategy. We combine modern design, advanced tools, and a data-driven approach to craft meaningful brand experiences.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <p className="text-gray-800 font-medium">UI/UX Design</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <p className="text-gray-800 font-medium">Brand Strategy</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <p className="text-gray-800 font-medium">Web Development</p>
            </div>
          </div>

          <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition">
            Let’s talk
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full flex justify-center">
          {/* Award Box */}
          <div className="absolute top-0 left-0 bg-orange-100 px-6 py-4 rounded-md shadow text-center">
            <p className="text-3xl font-bold text-orange-500">78+</p>
            <p className="text-sm font-medium text-gray-800">Awards</p>
          </div>

          {/* Main Image */}
          <div className="relative">
            <Image
              src="/about-girl.jpg" // Replace with actual image
              alt="Innovation"
              width={300}
              height={420}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
