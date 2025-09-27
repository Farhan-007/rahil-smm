import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-12">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{project.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
