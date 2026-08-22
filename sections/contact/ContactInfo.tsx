import portfolioData from "@/data/portfolio";
import { Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-8 shadow-lg">
      {/* Heading */}
      <h3 className="text-3xl font-bold text-white">
        Get In Touch
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        I am open to Software Developer opportunities, with a strong interest
        in Backend Development, Full Stack Development, and AI/ML projects.
        I am also interested in internships, full-time roles, and freelance
        collaborations. Feel free to connect with me.
      </p>

      {/* Contact Details */}
      <div className="mt-8 space-y-6">

        <div className="flex items-center gap-4">
          <Mail className="text-blue-500" />
          <span className="text-gray-200">
            {portfolioData.email}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <MapPin className="text-blue-500" />
          <span className="text-gray-200">
            {portfolioData.location}
          </span>
        </div>

        <div>
          <span className="font-semibold text-white">
            GitHub:
          </span>{" "}
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 transition hover:text-blue-300 hover:underline"
          >
            github.com/iravi0009
          </a>
        </div>

        <div>
          <span className="font-semibold text-white">
            LinkedIn:
          </span>{" "}
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 transition hover:text-blue-300 hover:underline"
          >
            linkedin.com/in/raviraj0009
          </a>
        </div>

      </div>

      {/* Availability Card */}
      <div className="mt-10 rounded-xl border border-blue-500/20 bg-blue-600/10 p-6">

        {/* Hiring Badge */}
        <span className="inline-block rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">
          🟢 Available for Hiring
        </span>

        <h4 className="mt-5 text-xl font-semibold text-blue-400">
          Currently Seeking Opportunities
        </h4>

        <p className="mt-3 leading-7 text-gray-300">
          As a final-year Computer Science student, I am actively seeking
          opportunities to begin my professional career in software
          development. I am passionate about building scalable applications,
          solving real-world problems, and continuously learning modern
          technologies while contributing to innovative teams.
        </p>

        <ul className="mt-6 space-y-3 text-gray-300">
          <li>✅ Software Development Engineer (Fresher)</li>
          <li>✅ Backend Developer</li>
          <li>✅ Software Engineer </li>
          <li>✅ AI / Machine Learning Engineer</li>
          <li>✅ Internship Opportunities</li>
          <li>✅ Full-Time Opportunities</li>
          <li>✅ Part-Time & Freelance Projects</li>
        </ul>

      </div>
    </div>
  );
}