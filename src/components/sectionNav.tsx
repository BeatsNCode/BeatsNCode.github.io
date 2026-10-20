
import { useEffect, useState } from "react";
import "../sectionNav.css";

const sections = [
  { id: "portfolio-header", label: "Introduction" },
  { id: "portfolio-skills", label: "Skills" },
  { id: "portfolio-projects", label: "Projects" },
  { id: "github-activity", label: "GitHub" },
];

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (scrollHeight <= 0) {
        setActiveSection(0);
        return;
      }

      const progress = Math.min(
        1,
        Math.max(0, scrollTop / scrollHeight)
      );

      const index = Math.min(
        sections.length - 1,
        Math.floor(progress * sections.length)
      );

      setActiveSection(index);
    };

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateProgress);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(
      sections[index].id
    );

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="section-nav" aria-label="Page navigation">
      {sections.map((section, index) => (
        <button
          key={section.id}
          type="button"
          className={`section-dot ${
            activeSection === index ? "active" : ""
          }`}
          onClick={() => scrollToSection(index)}
          title={section.label}
          aria-label={`Go to ${section.label}`}
          aria-current={
            activeSection === index ? "location" : undefined
          }
        />
      ))}
    </nav>
  );
}
