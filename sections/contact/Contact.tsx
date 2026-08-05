import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import FadeIn from "@/components/common/FadeIn";

export default function Contact() {
  return (
    <Section id="contact">
      <FadeIn>
      <SectionTitle>
        Contact Me
      </SectionTitle>

      <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-400">
        Passionate about building scalable software and AI-powered solutions,
         I am actively seeking Software Engineering, SDE, Backend, and Full Stack opportunities.
        If you are looking for a motivated developer who enjoys solving real-world problems, 
        I would be glad to connect.
      </p>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
      
      
      </FadeIn>
    </Section>
  );
}