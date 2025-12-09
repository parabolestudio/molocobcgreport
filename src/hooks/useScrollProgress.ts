"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface SectionProgress {
  activeSection: number;
  sectionProgress: number; // 0-1 within current section
  totalProgress: number; // 0-1 for entire page
}

export const SECTION_NAMES = [
  "hook",
  "journey",
  "quadrant",
  "closure",
  "cta",
] as const;

export type SectionName = (typeof SECTION_NAMES)[number];

// Number of scroll steps for each section (matches STEPS in each section component)
export const SECTION_STEPS: Record<SectionName, number> = {
  hook: 3,
  journey: 5,
  quadrant: 8,
  closure: 3,
  cta: 1,
};

export function useScrollProgress() {
  const [progress, setProgress] = useState<SectionProgress>({
    activeSection: 0,
    sectionProgress: 0,
    totalProgress: 0,
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray<HTMLElement>("[data-section]");
    if (sections.length === 0) return;

    const initialFirstSectionTop = sections[0].offsetTop;
    const totalScrollHeight = sections.reduce((sum, section) => {
      const sectionName = section.getAttribute("data-section") as SectionName;
      const steps = SECTION_STEPS[sectionName] || 1;
      return sum + steps * window.innerHeight;
    }, 0);

    let rafId: number | null = null;

    const findActiveSectionAndProgress = (
      scrollPos: number,
      triggers: gsap.plugins.ScrollTriggerInstance[]
    ): { activeIndex: number; sectionProgress: number } => {
      for (let i = 0; i < sections.length; i++) {
        const trigger = triggers.find((t) => t.trigger === sections[i]);
        if (!trigger) continue;

        if (trigger.isActive) {
          return { activeIndex: i, sectionProgress: trigger.progress };
        }

        if (scrollPos < trigger.start) {
          const prevIndex = Math.max(0, i - 1);
          const prevTrigger = triggers.find(
            (t) => t.trigger === sections[prevIndex]
          );
          return {
            activeIndex: prevIndex,
            sectionProgress: prevTrigger?.progress ?? 1,
          };
        }
      }

      // Check if past all sections
      const lastTrigger = triggers.find(
        (t) => t.trigger === sections[sections.length - 1]
      );
      if (lastTrigger && scrollPos >= lastTrigger.end) {
        return { activeIndex: sections.length - 1, sectionProgress: 1 };
      }

      return { activeIndex: 0, sectionProgress: 0 };
    };

    const updateActiveSection = () => {
      const scrollPos = window.scrollY;
      const viewportMiddle = scrollPos + window.innerHeight / 2;
      const triggers = ScrollTrigger.getAll();

      const { activeIndex, sectionProgress } = findActiveSectionAndProgress(
        scrollPos,
        triggers
      );

      const totalProgress = Math.max(
        0,
        Math.min(
          1,
          (viewportMiddle - initialFirstSectionTop) / totalScrollHeight
        )
      );

      setProgress((prev) => {
        if (prev.activeSection !== activeIndex) {
          console.log(
            `✅ Section changed to ${activeIndex}: ${sections[
              activeIndex
            ].getAttribute("data-section")}`
          );
        }
        return { activeSection: activeIndex, sectionProgress, totalProgress };
      });
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    ...progress,
    sectionName: SECTION_NAMES[progress.activeSection] || "hook",
  };
}
