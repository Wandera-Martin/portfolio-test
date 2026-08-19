import type { Metadata } from "next";
import { ArchiveProjectRow } from "@/components/archive-project-row";
import { SiteFooter } from "@/components/site-footer";
import { SplitHeading } from "@/components/split-heading";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "An editorial archive organized around transformation problems.",
};

export default function WorkPage() {
  const publishedCount = projects.filter((project) => !project.isPlaceholder).length;
  const placeholderCount = projects.length - publishedCount;

  return (
    <>
      <main id="main-content" className="inner-page" tabIndex={-1}>
        <header className="page-hero section-shell">
          <div className="page-hero-meta" data-intro-item>
            <p className="micro">Work archive</p>
            <p className="micro">{publishedCount.toString().padStart(2, "0")} published · {placeholderCount.toString().padStart(2, "0")} placeholders</p>
          </div>
          <SplitHeading as="h1" className="page-title" intro>Transformation problems, read in context.</SplitHeading>
          <p className="page-deck" data-intro-item>
            A deeper index of transformation problems, methods, evidence, and artifacts. Placeholder scenarios remain
            explicitly marked and are not presented as professional claims.
          </p>
          <div className="signal-rule" data-hero-line />
        </header>

        <section className="archive section-shell" aria-label="Project archive">
          <div className="archive-key" data-reveal>
            <span>Index</span><span>Transformation problem</span><span>Evidence and methods</span>
          </div>
          <div className="archive-list">
            {projects.map((project) => <ArchiveProjectRow project={project} key={project.slug} />)}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
