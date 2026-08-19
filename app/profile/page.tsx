import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SplitHeading } from "@/components/split-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Profile",
  description: "Professional perspective and verified biography structure.",
};

export default function ProfilePage() {
  return (
    <>
      <main id="main-content" className="inner-page" tabIndex={-1}>
        <header className="page-hero profile-hero section-shell">
          <div className="page-hero-meta" data-intro-item>
            <p className="micro">Profile & perspective</p>
            <p className="micro">{site.location}</p>
          </div>
          <SplitHeading as="h1" className="page-title" intro>Multidisciplinary by design.</SplitHeading>
          <p className="page-deck" data-intro-item>
            A professional territory connecting technology, strategy, data, institutions, and communication in African
            transformation contexts.
          </p>
          <div className="signal-rule" data-hero-line />
        </header>

        <section className="profile-body section-shell section-space">
          <aside className="portrait-placeholder profile-portrait" role="img" aria-label="Portrait area reserved for a verified photograph of the portfolio owner" data-reveal>
            <span className="micro">Verified portrait to be added</span>
            <span className="portrait-orbit" aria-hidden="true" />
          </aside>
          <div className="profile-story" data-reveal>
            <p className="profile-lead">
              The work is grounded in a simple observation: consequential technology decisions are also institutional,
              strategic, and communicative decisions.
            </p>
            <p>
              Verified biography, career history, responsibilities, credentials, and geographic experience will be
              added here. The prototype deliberately avoids inventing a professional record.
            </p>
            <p>
              The finished profile should explain how this interdisciplinary perspective developed, what kinds of
              environments shaped it, and where it can contribute to larger leadership responsibilities.
            </p>
            <div className="profile-facts">
              <div><span className="micro">Based</span><p>{site.location}</p></div>
              <div><span className="micro">Territory</span><p>African digital transformation</p></div>
              <div><span className="micro">Experience</span><p>Verified details to be added</p></div>
            </div>
          </div>
        </section>

        <section className="principles section-shell section-space">
          <div className="section-marker" data-reveal><span>01</span><span>Working perspective</span></div>
          <div className="principle-list">
            {[
              "Read the context before prescribing the system.",
              "Treat data as a decision material, not an ornamental output.",
              "Design institutional alignment alongside technical delivery.",
              "Consider communication and adoption from the beginning.",
            ].map((principle, index) => (
              <div className="principle" key={principle} data-reveal>
                <span>0{index + 1}</span><p>{principle}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="profile-contact section-shell section-space">
          <p className="micro" data-reveal>Next conversation</p>
          <SplitHeading as="h2" className="section-title">A perspective for consequential, cross-disciplinary work.</SplitHeading>
          <Link className="primary-link focus-ring" href="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
