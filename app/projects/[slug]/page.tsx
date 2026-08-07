import { notFound } from "next/navigation";

import projects from "@/data/projects";

import ProjectHero from "@/components/project/ProjectHero";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl space-y-20 px-6 py-16">

      {/* Hero */}
      <ProjectHero project={project} />

      {/* Overview */}
      <section>
        <h2 className="mb-6 text-3xl font-bold">
          Overview
        </h2>

        <p className="max-w-4xl text-lg leading-9 text-gray-300">
          {project.longDescription}
        </p>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="mb-6 text-3xl font-bold">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

    </main>
  );
}