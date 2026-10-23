
import { useEffect, useRef, useState } from "react";
import "./sectionNav.css";

const sections = [
  { id: "portfolio-header", label: "Introduction" },
  { id: "portfolio-skills", label: "Skills" },
  { id: "portfolio-projects", label: "Projects" },
  { id: "github-activity", label: "GitHub" },
];

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState(0);

  const selectedSection = useRef<number | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      // Keep the clicked dot active until the user scrolls manually.
      if (selectedSection.current !== null) return;

      const scrollTop = window.scrollY;

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight -
          window.innerHeight
      );

      if (maxScroll <= 0) {
        setActiveSection(0);
        return;
      }

      const progress = Math.min(
        1,
        Math.max(0, scrollTop / maxScroll)
      );

      const index = Math.min(
        sections.length - 1,
        Math.floor(progress * sections.length)
      );

      setActiveSection(index);
    };

    const handleWheel = () => {
      selectedSection.current = null;
    };

    const handleTouch = () => {
      selectedSection.current = null;
    };

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("wheel", handleWheel, {
      passive: true,
    });

    window.addEventListener("touchstart", handleTouch, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id);

    if (!element) return;

    selectedSection.current = index;
    setActiveSection(index);

    element.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <nav
      className="section-nav"
      aria-label="Page navigation"
    >
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
            activeSection === index
              ? "location"
              : undefined
          }
        />
      ))}
    </nav>
  );
}
