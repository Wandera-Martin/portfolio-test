import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SplitHeading } from "@/components/split-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "A clear path to begin a relevant professional conversation.",
};

const opportunities = ["Senior roles", "Advisory work", "Collaborations", "Projects", "Speaking", "Other relevant opportunities"];

export default function ContactPage() {
  return (
    <>
      <main id="main-content" className="contact-page" tabIndex={-1}>
        <section className="contact-hero section-shell">
          <div className="page-hero-meta" data-intro-item>
            <p className="micro">Open channel</p>
            <p className="micro">{site.location}</p>
          </div>
          <SplitHeading as="h1" className="contact-title" intro>Let&apos;s talk.</SplitHeading>
          <div className="contact-intro" data-intro-item>
            <p>
              Open to thoughtful conversations around roles, advisory work, collaborations, projects, speaking, and
              other opportunities where this perspective may be useful.
            </p>
            <div className="contact-status" role="note">
              <span className="status-dot" aria-hidden="true" />
              <p>Verified email and professional links to be added before launch.</p>
            </div>
          </div>
          <div className="signal-rule" data-hero-line />
        </section>

        <section className="contact-options section-shell section-space">
          <div className="section-marker" data-reveal><span>01</span><span>Relevant conversations</span></div>
          <div className="opportunity-list" data-reveal>
            {opportunities.map((opportunity, index) => (
              <div className="opportunity-row" key={opportunity}>
                <span>0{index + 1}</span><p>{opportunity}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-prompt section-shell section-space">
          <div data-reveal>
            <p className="micro">A useful first note might include</p>
            <h2>What you are exploring, why it matters, and why this perspective came to mind.</h2>
          </div>
          <div className="contact-placeholder" data-reveal>
            <p className="micro">Contact channel</p>
            <p>Verified contact details to be added.</p>
            <Link className="text-link focus-ring" href="/work">Explore the work in the meantime <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
