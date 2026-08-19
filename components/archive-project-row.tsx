import Link from "next/link";
import { ProjectArtifact } from "@/components/project-artifact";
import type { Project } from "@/lib/projects";

export function ArchiveProjectRow({ project }: { project: Project }) {
  const evidence = project.isPlaceholder
    ? "Development artifact only"
    : project.caseStudy
      ? "Published analysis · charts · repository"
      : project.coverImage
        ? "Cover image · case narrative"
      : "Case narrative";

  return (
    <article className="archive-entry" data-reveal>
      <Link className="archive-entry-link focus-ring" href={`/work/${project.slug}`}>
        <div className="archive-entry-meta">
          <span>{project.index}</span>
          <span>{project.isPlaceholder ? "Illustrative placeholder" : "Published case study"}</span>
        </div>

        <div className="archive-entry-body">
          <p className="archive-entry-problem">{project.transformationProblem}</p>
          <h2>{project.displayTitle}</h2>
          <p className="archive-entry-description">{project.shortDescription}</p>
          <p className="archive-entry-technical">{project.technicalTitle}</p>

          <dl className="archive-entry-facts">
            <div>
              <dt>Methods</dt>
              <dd>{project.methods.join(" · ")}</dd>
            </div>
            <div>
              <dt>Evidence</dt>
              <dd>{evidence}</dd>
            </div>
            <div>
              <dt>Context</dt>
              <dd>{project.sector}</dd>
            </div>
          </dl>

          <span className="archive-entry-action">
            {project.isPlaceholder ? "Open prototype scenario" : "Open case study"}
            <span aria-hidden="true">→</span>
          </span>
        </div>

        <div className="archive-entry-artifact">
          <ProjectArtifact project={project} compact />
        </div>
      </Link>
    </article>
  );
}
