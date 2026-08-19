import type { Metadata } from "next";
import { ProjectRow } from "@/components/project-row";
import { SiteFooter } from "@/components/site-footer";
import { SplitHeading } from "@/components/split-heading";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "An editorial archive organized around transformation problems.",
};

export default function WorkPage() {
  return (
    <>
      <main id="main-content" className="inner-page" tabIndex={-1}>
        <header className="page-hero section-shell">
          <div className="page-hero-meta" data-intro-item>
            <p className="micro">Work archive</p>
            <p className="micro">03 illustrative scenarios</p>
          </div>
          <SplitHeading as="h1" className="page-title" intro>Transformation problems, read in context.</SplitHeading>
          <p className="page-deck" data-intro-item>
            This prototype archive demonstrates how future case studies will connect evidence, systems, institutions,
            communication, and adoption. Every current entry is explicitly fictional.
          </p>
          <div className="signal-rule" data-hero-line />
        </header>

        <section className="archive section-shell" aria-label="Illustrative project archive">
          <div className="archive-key" data-reveal>
            <span>Index</span><span>Transformation problem</span><span>Case</span>
          </div>
          <div className="project-list">
            {projects.map((project) => <ProjectRow project={project} key={project.slug} />)}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
