// components/Services.jsx

import { RocketIcon, BrushIcon, GlobeIcon, BarChart2Icon } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <GlobeIcon className="w-6 h-6 text-white" />,
    title: "Web Design & Development",
    desc: "Fast, responsive, and tailored to your brand. Built with React, Tailwind, Next.js. SEO-friendly structure and CMS integration.",
    link: "/web-development",
  },
  {
    icon: <RocketIcon className="w-6 h-6 text-white" />,
    title: "Social Media Management",
    desc: "Growth strategies, platform content planning, post scheduling, analytics, and community building.",
    link: "/digital-strategy",
  },
  {
    icon: <BrushIcon className="w-6 h-6 text-white" />,
    title: "Content Creation",
    desc: "Blog posts, ads copywriting, branded visuals, carousels, and short-form videos that connect and convert.",
    link: "/creative-design",
  },
  {
    icon: <BarChart2Icon className="w-6 h-6 text-white" />,
    title: "Video Production",
    desc: "Optimizing visibility with powerful analytics and SEO tools.",
    link: "/analytics-seo",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-6 md:px-20">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex items-center justify-center gap-6 aspect-2/1 w-full py-6 rounded-xl ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
          >
            <Link href={service.link} className="w-1/2  p-6 lg:p-20">
              {/* <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-md mb-4">
                {service.icon}
              </div> */}
              <h3 className="text-3xl font-semibold text-[#1B1B1B] mb-2">
                {service.title}
              </h3>
              <p className="text-xl text-gray-400">{service.desc}</p>
            </Link>
            <div className="bg-[#f0f0f0] aspect-square w-1/2 rounded-xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
