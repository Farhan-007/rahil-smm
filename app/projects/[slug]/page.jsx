import { projects } from "@/data/projects";

export default function ProjectPage({ params }) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return <div>Project not found</div>;

    return (
        <main className="w-full">
            {project.layout.map((section, i) => {
                const Component = section.component;
                return <Component key={i} {...section.props} />;
            })}
        </main>
    );
}
