import "../style/hero.css";
import Image from "next/image";
import "../style/about.css";
import { FaInstagram, FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="header-container">
      <div className="header-boxes-container">
        {/* Left Section */}
        <div>
          <Image
            src="/image.JPEG"
            width={200}
            height={200}
            alt="profile"
          />
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <FaInstagram className="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/saba-jadoon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="Linkedin" />
            </a>
            <a href="saba123345" aria-label="Discord">
              <FaDiscord className="Discord" />
            </a>
            <a
              href="https://github.com/Sabashahid689"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="Github" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="hero-right-div">
          <h1 className="title-hero">About Us</h1>
          <p className="des-hero">
            I am a first-year college student with I have a experience in Amazon wholesale and because. 
            I am currently taking a course in Artificial Intelligence Web 3.0 
            and Metaverse as part of the Governors Initiative for Applied Cloud Computing I have multi languages experience Proficient in HTML and CSS for building responsive web layouts with a focus on clean semantic code. Experienced with **TypeScript** for scalable maintainable JavaScript projects ensuring strong type-checking and enhanced development. Skilled in **Tailwind CSS** for rapid UI design and styling creating modern and consistent interfaces efficiently. Familiar with **Amazon wholesale business** strategies including product sourcing FBA (Fulfillment by Amazon) and inventory management optimizing operations for profitability.

.
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;
