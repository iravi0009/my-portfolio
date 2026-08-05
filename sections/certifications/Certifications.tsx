import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import portfolioData from "@/data/portfolio";
import CertificationCard from "./CertificationCard";
import FadeIn from "@/components/common/FadeIn";

export default function Certification() {
  return (
    <Section id="certifications">
       <FadeIn>

      <SectionTitle>
        Certifications
      </SectionTitle>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.certifications.map((certificate) => (
          <CertificationCard
            key={certificate.title}
            title={certificate.title}
            issuer={certificate.issuer}
            year={certificate.year}
            link={certificate.link}
          />
        ))}
      </div>
      </FadeIn>
    </Section>
  );
}