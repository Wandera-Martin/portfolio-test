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
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-row-action">
          <span className="placeholder-label">Illustrative placeholder</span>
          <span aria-hidden="true">↗</span>
        </div>
        <div className="project-row-preview">
          <ProjectArtifact project={project} compact />
        </div>
      </Link>
    </article>
  );
}
