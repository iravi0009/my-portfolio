import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import SkillCard from "@/components/common/SkillCard";
import portfolioData from "@/data/portfolio";
import FadeIn from "@/components/common/FadeIn";
import SkillsDashboard from "./SkillsDashboard";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <Section id="skills">
      <FadeIn>

      <SectionTitle>
        My Skills
      </SectionTitle>

      <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-400">
        Here are the technologies, programming languages, frameworks,
        and tools that I use to build modern applications.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SkillCard
          title="Frontend"
          skills={skills.frontend}
        />

        <SkillCard
          title="Backend"
          skills={skills.backend}
        />

        <SkillCard
          title="Programming"
          skills={skills.programming}
        />

        <SkillCard
          title="Database"
          skills={skills.database}
        />

        <SkillCard
          title="AI / ML"
          skills={skills.ai}
        />

        <SkillCard
          title="Tools"
          skills={skills.tools}
        />

        <SkillsDashboard />
      </div>

      </FadeIn>
    </Section>
  );
}