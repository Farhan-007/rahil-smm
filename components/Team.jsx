// components/Team.jsx

import Image from "next/image";

const team = [
  {
    name: "Sarah Miles",
    role: "Creative Director",
    image: "/team1.jpg",
  },
  {
    name: "James Lee",
    role: "Lead Developer",
    image: "/team2.jpg",
  },
  {
    name: "Ava Thomas",
    role: "Marketing Strategist",
    image: "/team3.jpg",
  },
  {
    name: "Ava Thomas",
    role: "Marketing Strategist",
    image: "/team3.jpg",
  },
];

export default function Team() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto  mb-12">
        <h2 className="text-3xl md:text-2xl font-bold text-[#1B1B1B]">
          Meet the Team
        </h2>
        <p className="text-gray-600  mx-auto">
          We are a group of designers, developers, and strategists who love what we do.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#FFF7F1] rounded-xl p-6 shadow hover:shadow-md transition"
          >
            <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#1B1B1B]">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
