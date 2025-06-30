import { RocketIcon, BrushIcon, GlobeIcon, BarChart2Icon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: <GlobeIcon className="w-6 h-6 text-white" />,
    title: "Web Design & Development",
    desc: "Fast, responsive, and tailored to your brand. Built with React, Tailwind, Next.js. SEO-friendly structure and CMS integration.",
    link: "/web-development",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <RocketIcon className="w-6 h-6 text-white" />,
    title: "Social Media Management",
    desc: "Growth strategies, platform content planning, post scheduling, analytics, and community building.",
    link: "/digital-strategy",
    image: "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <BrushIcon className="w-6 h-6 text-white" />,
    title: "Content Creation",
    desc: "Blog posts, ads copywriting, branded visuals, carousels, and short-form videos that connect and convert.",
    link: "/creative-design",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: <BarChart2Icon className="w-6 h-6 text-white" />,
    title: "Video Production",
    desc: "Optimizing visibility with powerful analytics and SEO tools.",
    link: "/analytics-seo",
    image: "https://images.pexels.com/photos/5863369/pexels-photo-5863369.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];


export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-6 md:px-20">
      <div className="flex flex-col items-center max-w-7xl mx-auto gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`
              flex flex-col-reverse md:flex-row 
              ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}
              items-center justify-center gap-6 w-full rounded-xl
            `}
          >
            <Link href={service.link} className="w-full md:w-1/2 p-6 lg:p-10">
              {/* <div className="bg-black w-12 h-12 flex items-center justify-center rounded-md mb-4">
                {service.icon}
              </div> */}
              <h3 className="text-2xl md:text-3xl font-semibold text-[#1B1B1B] mb-2">
                {service.title}
              </h3>
              <p className="text-base md:text-xl text-gray-500">{service.desc}</p>
            </Link>

            <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square overflow-hidden rounded-xl relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
