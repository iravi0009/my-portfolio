import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import ProjectCard from "@/components/common/ProjectCard";
import FadeIn from "@/components/common/FadeIn";

import projects from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <FadeIn>
        <SectionTitle>Featured Projects</SectionTitle>

        <p className="mx-auto mb-14 mt-4 max-w-3xl text-center text-lg leading-8 text-gray-400">
          A collection of software engineering, AI/ML, and full-stack projects
          that demonstrate my ability to design scalable applications, solve
          real-world problems, and build production-ready solutions.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}