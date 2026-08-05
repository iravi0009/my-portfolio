import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import portfolioData from "@/data/portfolio";
import EducationCard from "./EducationCard";
import FadeIn from "@/components/common/FadeIn";


export default function Education() {
  return (
    <Section id="education">
      <FadeIn>


      <SectionTitle>
        Education
      </SectionTitle>

      <div className="mt-12 grid gap-8">
        {portfolioData.education.map((item) => (
          <EducationCard
            key={item.degree}
            degree={item.degree}
            institution={item.institution}
            duration={item.duration}
            score={item.score}
          />
        ))}
      </div>

      </FadeIn>
    </Section>
  );
}
