import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import AboutContent from "./AboutContent";
import AboutHighlights from "./AboutHighlights";
import AboutStats from "./AboutStats";
import FadeIn from "@/components/common/FadeIn";

export default function About() {
  return (
    <Section id="about">
      <FadeIn>
        <SectionTitle>
          About Me
        </SectionTitle>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <AboutContent />
            <AboutHighlights />
          </div>

          <AboutStats />
        </div>
      </FadeIn>
    </Section>
  );
}