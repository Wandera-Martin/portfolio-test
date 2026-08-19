import Image from "next/image";
import type { Project } from "@/lib/projects";

type ProjectArtifactProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectArtifact({ project, compact = false }: ProjectArtifactProps) {
  const variant = Number(project.index) % 3;

  if (project.coverImage) {
    return (
      <figure
        className="artifact"
        data-cover=""
        data-compact={compact || undefined}
      >
        <Image
          className="artifact-cover-image"
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          fill
          priority={!compact}
          sizes={compact
            ? "(max-width: 820px) calc(100vw - 2.5rem), 18rem"
            : "(max-width: 820px) calc(100vw - 2.5rem), 1280px"}
        />
      </figure>
    );
  }

  return (
    <figure
      className="artifact"
      data-variant={variant}
      data-compact={compact || undefined}
      aria-label={`Abstract development artifact for ${project.title}. This is not evidence of completed work.`}
    >
      <div className="artifact-grid" aria-hidden="true">
        <span className="artifact-axis artifact-axis-x" />
        <span className="artifact-axis artifact-axis-y" />
        <span className="artifact-node artifact-node-a" />
        <span className="artifact-node artifact-node-b" />
        <span className="artifact-node artifact-node-c" />
        <span className="artifact-trace" />
        <span className="artifact-index">S/{project.index}</span>
        <span className="artifact-caption">DEVELOPMENT ARTIFACT</span>
      </div>
    </figure>
  );
}
