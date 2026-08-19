import type { Metadata } from "next";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/ibm-plex-sans";
import "./globals.css";
import { MotionController } from "@/components/motion-controller";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.ownerLabel} — ${site.territory}`,
    template: `%s — ${site.ownerLabel}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <MotionController />
        {children}
      </body>
    </html>
  );
}
