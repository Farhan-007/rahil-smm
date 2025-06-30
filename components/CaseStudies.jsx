// components/CaseStudies.jsx

import Image from "next/image";

const studies = [
  {
    title: "E-commerce Growth Campaign",
    category: "Digital Marketing",
    image: "/case1.jpg", // Add your image
  },
  {
    title: "Brand Identity for Startups",
    category: "Design Strategy",
    image: "/case2.jpg",
  },
  {
    title: "SEO Boost for SaaS Platform",
    category: "SEO & Content",
    image: "/case3.jpg",
  },
  {
    title: "SEO Boost for SaaS Platform",
    category: "SEO & Content",
    image: "/case3.jpg",
  },
];

export default function CaseStudies() {
  return (
    <section id="casestudies" className="bg-[#FFF7F1] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-4xl font-bold text-[#1B1B1B]">
          Case Studies
        </h2>
        <p className="text-[#adadad] text-xl mt-4 max-w-xl mx-auto">
          Real-world success stories powered by our strategy, creativity, and
          performance.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto">
        {studies.map((study, index) => (
          <div
            key={index}
            className="flex flex-col justify-end bg-white aspect-square w-full rounded-lg shadow hover:shadow-lg transition overflow-hidden "
          >
            {/* <div className="absolute z-0 aspect-square h-full"> */}
              {/* <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover"
              /> */}
            {/* </div> */}
            <div className="p-6 ">
              <span className="text-sm text-orange-500 font-medium uppercase">
                {study.category}
              </span>
              <h3 className="text-xl font-semibold mt-2 text-[#1B1B1B]">
                {study.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
