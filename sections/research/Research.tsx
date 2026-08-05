import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import ResearchCard from "./ResearchCard";

export default function Research() {
  return (
    <Section id="research">
      <FadeIn>

        <SectionTitle>
          Research & IEEE Conference Papers
        </SectionTitle>

        <p className="mx-auto mb-14 max-w-3xl text-center text-lg text-gray-400">
          My research focuses on Artificial Intelligence, Deep Learning,
          and Computer Vision, contributing innovative solutions accepted
          at IEEE conferences.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">

          <ResearchCard
            title="Handwritten Devanagari Character Recognition Using Separable Convolutional Neural Networks with Dynamic Learning Rate Scheduling"
            conference="Accepted in IEEE Conference (Scopus Indexed)"
            year="2026"
            description="Designed an efficient handwritten character recognition system using Separable CNN with Dynamic Learning Rate Scheduling, achieving high recognition accuracy while reducing computational complexity."
            github="YOUR_GITHUB_LINK"
            paper="#"
          />

          <ResearchCard
            title="Autonomous DNN Repair: A Unified Framework Integrating Gradient Anomaly Detection and LoRA Fine-Tuning"
            conference="Accepted in IEEE Conference (Scopus Indexed)"
            year="2026"
            description="Proposed a unified framework for repairing faulty Deep Neural Networks by combining Gradient Anomaly Detection with LoRA-based fine-tuning, restoring model performance efficiently."
            github="YOUR_GITHUB_LINK"
            paper="#"
          />

        </div>

      </FadeIn>
    </Section>
  );
}