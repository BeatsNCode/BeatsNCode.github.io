
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-technologies">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
      <div className="project-links">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  )
}
