import Link from "next/link";
import { ProjectRow } from "@/components/project-row";
import { SiteFooter } from "@/components/site-footer";
import { SplitHeading } from "@/components/split-heading";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const framework = [
  {
    index: "01",
    title: "Signals",
    summary: "Seeing what is happening, what matters, and what the available evidence does—or does not—support.",
    items: "Data · Research · Evidence · Context · Observation",
    relationship: "Signals inform the systems we design.",
  },
  {
    index: "02",
    title: "Systems",
    summary: "Understanding how technologies, institutions, incentives, decisions, and operating structures interact.",
    items: "Technology · Strategy · Products · Institutions · Operating models",
    relationship: "Systems shape what becomes possible.",
  },
  {
    index: "03",
    title: "Stories",
    summary: "Helping people understand change, locate themselves within it, and act with greater alignment.",
    items: "Communication · Shared meaning · Alignment · Adoption",
    relationship: "Stories create shared understanding and adoption.",
  },
];

export default function Home() {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <section className="hero section-shell">
          <div className="hero-top" data-intro-item>
            <p className="micro">African digital transformation</p>
            <p className="micro hero-location">Based in {site.location}</p>
          </div>

          <div className="hero-grid">
            <SplitHeading as="h1" className="hero-title" intro>
              Digital transformation is rarely just a technology problem.
            </SplitHeading>
            <div className="hero-aside" data-intro-item>
              <p>
                I work at the intersection of technology, strategy, data, institutions, and communication—connecting
                the evidence, systems, and shared understanding that transformation requires.
              </p>
              <div className="hero-actions">
                <Link className="primary-link focus-ring" href="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
                <Link className="text-link focus-ring" href="/work">Explore my work <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </div>

          <div className="hero-signal" data-hero-line>
            <span>Signals</span><span>Systems</span><span>Stories</span>
          </div>
        </section>

        <section className="pov section-shell section-space">
          <div className="section-marker" data-reveal>
            <span>00</span><span>Point of view</span>
          </div>
          <div className="pov-grid">
            <SplitHeading className="section-thesis">
              Technology operates inside systems of evidence, institutions, incentives, people, and meaning.
            </SplitHeading>
            <div className="pov-copy" data-reveal>
              <p>
                Transformation becomes more useful when these relationships are considered together—not handed to
                separate disciplines and reconciled after the fact.
              </p>
              <p>
                The work begins by reading context carefully, shaping systems deliberately, and creating the shared
                understanding required for meaningful adoption.
              </p>
            </div>
          </div>
        </section>

        <section className="work-section section-shell section-space" aria-labelledby="selected-work-title">
          <div className="section-heading-row" data-reveal>
            <div className="section-marker"><span>01</span><span>Selected work</span></div>
            <p className="section-note">One published analysis is accompanied by two clearly marked prototype scenarios.</p>
          </div>
          <SplitHeading as="h2" className="section-title" id="selected-work-title">Work is organized by transformation problem.</SplitHeading>
          <div className="project-list">
            {projects.map((project) => <ProjectRow project={project} key={project.slug} />)}
          </div>
          <div className="section-end-link" data-reveal>
            <Link className="primary-link focus-ring" href="/work">Enter the work archive <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="framework section-space" aria-labelledby="framework-title">
          <div className="section-shell framework-head">
            <div className="section-marker" data-reveal><span>02</span><span>Working framework</span></div>
            <SplitHeading as="h2" className="section-title" id="framework-title">Signals, Systems, Stories</SplitHeading>
            <p className="framework-intro" data-reveal>
              Three connected lenses for understanding transformation—not three separate services or a one-way sequence.
            </p>
          </div>
          <div className="framework-list section-shell">
            {framework.map((item) => (
              <article className="framework-row" key={item.title} data-reveal>
                <div className="framework-line" data-signal-line />
                <span className="framework-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p className="framework-items">{item.items}</p>
                <div className="framework-relationship">
                  <span className="framework-relationship-line" data-signal-line aria-hidden="true" />
                  <p>{item.relationship}</p>
                </div>
              </article>
            ))}
            <div className="framework-feedback" data-reveal>
              <span className="framework-feedback-line" data-signal-line aria-hidden="true" />
              <span className="framework-feedback-index" aria-hidden="true">↺</span>
              <p>Adoption, use, and changing context feed back into new Signals.</p>
            </div>
          </div>
        </section>

        <section className="profile-preview section-shell section-space">
          <div className="section-marker" data-reveal><span>03</span><span>Profile & perspective</span></div>
          <div className="profile-preview-grid">
            <div className="portrait-placeholder" data-reveal role="img" aria-label="Portrait area reserved for a verified photograph of the portfolio owner">
              <span className="micro">Verified portrait to be added</span>
              <span className="portrait-orbit" aria-hidden="true" />
            </div>
            <div className="profile-preview-copy" data-reveal>
              <p className="profile-kicker">Multidisciplinary by design.</p>
              <h2>Moving between technical, institutional, and communication contexts.</h2>
              <p>
                This space will introduce the verified biography, experience, and perspective of the portfolio owner.
                It is intentionally unresolved rather than filled with invented credentials.
              </p>
              <Link className="primary-link focus-ring" href="/profile">Read the profile <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="opportunity section-space" aria-labelledby="opportunity-title">
          <div className="section-shell opportunity-grid">
            <div className="section-marker light" data-reveal><span>04</span><span>Open channel</span></div>
            <SplitHeading as="h2" className="opportunity-title" >Interesting work often begins with a thoughtful conversation.</SplitHeading>
            <div className="opportunity-copy" data-reveal>
              <p>
                Open to relevant senior roles, advisory work, collaborations, projects, speaking, and other
                opportunities where this perspective may be useful.
              </p>
              <Link className="primary-link light-link focus-ring" href="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
