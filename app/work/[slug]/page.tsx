import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectArtifact } from "@/components/project-artifact";
import { SiteFooter } from "@/components/site-footer";
import { SplitHeading } from "@/components/split-heading";
import { getProject, projects } from "@/lib/projects";

type CaseStudyPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.displayTitle, description: project.shortDescription } : {};
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <main id="main-content" className="case-study" tabIndex={-1}>
        <header className="case-hero section-shell">
          <div className="case-topline" data-intro-item>
            <Link className="text-link focus-ring" href="/work">← Work archive</Link>
            <span>{project.index} / 03</span>
          </div>
          {project.isPlaceholder && (
            <div className="placeholder-banner" data-intro-item>
              <strong>Illustrative placeholder</strong>
              <span>{project.disclaimer}</span>
            </div>
          )}
          <SplitHeading as="h1" className="case-title" intro>{project.displayTitle}</SplitHeading>
          <p className="case-technical-title" data-intro-item>{project.technicalTitle}</p>
          <p className="case-question" data-intro-item>{project.question}</p>
          <dl className="case-meta" data-intro-item>
            <div><dt>Context</dt><dd>{project.sector}</dd></div>
            <div><dt>Problem</dt><dd>{project.transformationProblem}</dd></div>
            <div><dt>Methods</dt><dd>{project.methods.join(" · ")}</dd></div>
            <div><dt>Status</dt><dd>{project.isPlaceholder ? "Prototype scenario" : "Published project"}</dd></div>
          </dl>
        </header>

        <section className="case-art section-shell" data-reveal>
          <ProjectArtifact project={project} />
        </section>

        <section className="case-reading section-shell section-space">
          <div className="case-aside" data-reveal><span className="micro">Context</span></div>
          <div className="case-prose" data-reveal>
            <h2>The transformation question</h2>
            <p>{project.context}</p>
            <p>
              This narrative is intentionally framed as a hypothetical design scenario. It demonstrates the depth and
              sequence expected from a future verified case study without assigning achievements to the portfolio owner.
            </p>
          </div>
        </section>

        <section className="case-reading section-shell section-space-sm">
          <div className="case-aside" data-reveal><span className="micro">Tensions</span></div>
          <div className="case-prose" data-reveal>
            <h2>What the problem holds in tension</h2>
            <ol className="tension-list">
              {project.tensions.map((tension, index) => <li key={tension}><span>0{index + 1}</span>{tension}</li>)}
            </ol>
          </div>
        </section>

        <section className="case-lenses section-shell section-space">
          <div className="section-marker" data-reveal><span>Lens</span><span>Signals · Systems · Stories</span></div>
          <div className="lens-grid">
            {[
              ["Signals", project.signals],
              ["Systems", project.systems],
              ["Stories", project.stories],
            ].map(([title, items]) => (
              <article className="lens-column" key={title as string} data-reveal>
                <h2>{title as string}</h2>
                <ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="replacement-block section-shell section-space">
          <div className="replacement-inner" data-reveal>
            <span className="micro">Required before publication</span>
            <h2>Verified role, contribution, evidence, and outcome to be added.</h2>
            <p>
              Replace this block with factual information, approved artifacts, appropriate attribution, and enough
              context to understand what changed and how the portfolio owner contributed.
            </p>
          </div>
        </section>

        <nav className="case-next section-shell" aria-label="Case study navigation">
          <Link className="primary-link focus-ring" href="/work">Return to all work <span aria-hidden="true">→</span></Link>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
