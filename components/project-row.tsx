import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectArtifact } from "@/components/project-artifact";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="project-row" data-reveal>
      <Link className="project-row-link focus-ring" href={`/work/${project.slug}`}>
        <div className="project-row-meta">
          <span>{project.index}</span>
          <span>{project.transformationProblem}</span>
        </div>
        <h3>{project.displayTitle}</h3>
        <div className="project-row-copy">
          <p className="project-row-description">{project.shortDescription}</p>
          <p className="project-row-technical">{project.technicalTitle}</p>
          <p className="project-row-methods">{[...project.metadata, ...project.methods].join(" · ")}</p>
        </div>
        <div className="project-row-action">
          <span className="placeholder-label">
            {project.isPlaceholder ? "Illustrative placeholder" : "Evidence-bearing case study"}
          </span>
          <span aria-hidden="true">↗</span>
        </div>
        <div className="project-row-preview">
          <ProjectArtifact project={project} compact />
        </div>
      </Link>
    </article>
  );
}
