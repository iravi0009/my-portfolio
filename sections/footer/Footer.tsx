import FadeIn from "@/components/common/FadeIn";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <FadeIn>

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">
              Lets Connect
            </h2>

            <p className="mt-4 text-gray-400">
              I am always open to new opportunities and collaborations.
              Feel free to reach out to me through any of the platforms below.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">

            {/* Left */}
            <div>
              <h2 className="text-3xl font-bold">
                Ravi Raj
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                Software Developer passionate about building scalable backend
                systems, full stack applications, AI-powered solutions, and modern
                digital experiences.
              </p>
            </div>

            {/* Middle */}
            <FooterLinks />

            {/* Right */}
            <FooterSocials />

          </div>

          <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            © 2026 Ravi Raj
            Designed & Developed with ❤️ using
            Next.js • TypeScript • Tailwind CSS
          </div>

        </FadeIn>

      </div>
    </footer>
  );
}