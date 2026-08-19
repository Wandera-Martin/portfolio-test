import Link from "next/link";
import { navigation, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer section-shell">
      <div className="signal-rule" data-signal-line />
      <div className="footer-grid">
        <div>
          <p className="micro">Signals · Systems · Stories</p>
          <p className="footer-statement">Complexity, made more legible.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link className="text-link focus-ring" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-meta">
          <p>{site.location}</p>
          <p>Contact details to be verified before launch.</p>
        </div>
      </div>
    </footer>
  );
}
