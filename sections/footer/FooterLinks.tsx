export default function FooterLinks() {
  return (
    <div>
      <h3 className="text-xl font-semibold">
        Quick Links
      </h3>

      <ul className="mt-5 space-y-3">

        <li>
          <a href="#about" className="text-gray-400 hover:text-blue-400">
            About
          </a>
        </li>

        <li>
          <a href="#skills" className="text-gray-400 hover:text-blue-400">
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" className="text-gray-400 hover:text-blue-400">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" className="text-gray-400 hover:text-blue-400">
            Contact
          </a>
        </li>

      </ul>
    </div>
  );
}