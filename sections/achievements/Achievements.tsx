import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import portfolioData from "@/data/portfolio";
import AchievementCard from "./AchievementCard";

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionTitle>
        Achievements
      </SectionTitle>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {portfolioData.achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            title={achievement.title}
            paper={achievement.paper}
            year={achievement.year}
            proof={achievement.proof}
          />
        ))}
      </div>
    </Section>
  );
}