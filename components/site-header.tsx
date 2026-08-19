"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const pageRegions = document.querySelectorAll<HTMLElement>("main, footer");
    pageRegions.forEach((region) => {
      region.inert = open;
    });

    if (open) {
      window.requestAnimationFrame(() => menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus());
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      pageRegions.forEach((region) => {
        region.inert = false;
      });
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="site-header" data-menu-open={open || undefined}>
      <Link className="wordmark focus-ring" href="/" aria-label="Portfolio index">
        <span className="wordmark-mark" aria-hidden="true" />
        {site.ownerLabel}
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              className="nav-link focus-ring"
              data-active={active || undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
        <Link className="nav-link nav-link-accent focus-ring" href="/contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>
      </nav>

      <button
        className="menu-toggle focus-ring"
        type="button"
        ref={menuButtonRef}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? "Close" : "Menu"}</span>
        <span className="menu-glyph" aria-hidden="true">{open ? "×" : "+"}</span>
      </button>

      <div className="mobile-menu" id="mobile-menu" ref={menuRef} data-open={open || undefined} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link
              className="mobile-nav-link focus-ring"
              href={item.href}
              key={item.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              <span className="micro">0{index + 1}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-meta">
          <p>{site.location}</p>
          <p>Technology · Strategy · Data · Institutions · Communication</p>
        </div>
      </div>
    </header>
  );
}
