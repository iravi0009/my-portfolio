import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import StatCard from "@/components/common/StatCard";
import FadeIn from "@/components/common/FadeIn";

export default function Stats() {
  return (
    <Section id="stats">
      <FadeIn>
        <SectionTitle>
          My Journey
        </SectionTitle>

        <p className="mx-auto mt-4 mb-12 max-w-3xl text-center text-lg text-gray-400">
          A quick overview of my technical experience, research work,
          and continuous learning as an aspiring Software Engineer.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            value={5}
            suffix="+"
            title="Projects"
          />

          <StatCard
            value={15}
            suffix="+"
            title="Technologies"
          />

          <StatCard
            value={2}
            suffix="+"
            title="IEEE Conference Papers"
          />

          <StatCard
            value={8}
            suffix="+"
            title="Certifications"
          />

        </div>
      </FadeIn>
    </Section>
  );
}