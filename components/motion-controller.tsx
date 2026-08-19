"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionController() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.85,
    });

    const onLenisScroll = () => ScrollTrigger.update();
    const onTick = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", onLenisScroll);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
      const heroWords = gsap.utils.toArray<HTMLElement>("[data-intro] .split-word > span");
      const introItems = gsap.utils.toArray<HTMLElement>("[data-intro-item]");
      const heroLine = document.querySelector<HTMLElement>("[data-hero-line]");
      const introTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (heroWords.length) {
        introTimeline.from(heroWords, { yPercent: 112, duration: 1.05, stagger: 0.045 });
      }
      if (introItems.length) {
        introTimeline.from(introItems, { y: 18, opacity: 0, duration: 0.7, stagger: 0.09 }, heroWords.length ? "-=0.58" : 0);
      }
      if (heroLine) {
        introTimeline.from(heroLine, { scaleX: 0, duration: 1.1 }, "-=0.75");
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 28,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-signal-line]").forEach((line) => {
        gsap.from(line, {
          scaleX: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: line, start: "top 92%", once: true },
        });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      context.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.ticker.remove(onTick);
      lenis.off("scroll", onLenisScroll);
      lenis.destroy();
    };
  }, []);

  return null;
}
