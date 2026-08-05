import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import ProjectCard from "@/components/common/ProjectCard";
import portfolioData from "@/data/portfolio";
import FadeIn from "@/components/common/FadeIn";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <Section id="projects">
      <FadeIn>
        <SectionTitle>Featured Projects</SectionTitle>

        <p className="mx-auto mt-4 mb-14 max-w-3xl text-center text-lg leading-8 text-gray-400">
          A collection of software engineering, AI/ML, and full-stack projects
          that demonstrate my ability to design scalable applications, solve
          real-world problems, and build production-ready solutions.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}