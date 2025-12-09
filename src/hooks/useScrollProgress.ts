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

export function useScrollProgress() {
  const [progress, setProgress] = useState<SectionProgress>({
    activeSection: 0,
    sectionProgress: 0,
    totalProgress: 0,
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Track each section
    const sections = gsap.utils.toArray<HTMLElement>("[data-section]");

    console.log(
      "Found sections:",
      sections.length,
      sections.map((s) => s.getAttribute("data-section"))
    );

    if (sections.length === 0) {
      console.warn("No sections found with data-section attribute");
      return;
    }

    // Use a single scroll event to determine active section
    let rafId: number | null = null;

    const updateActiveSection = () => {
      const scrollPos = window.scrollY;
      const viewportMiddle = scrollPos + window.innerHeight / 2;

      let activeIndex = 0;
      let closestDistance = Infinity;

      console.log("=== Scroll Update ===");
      console.log("ScrollY:", scrollPos, "ViewportMiddle:", viewportMiddle);

      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = scrollPos + rect.top;
        const sectionMiddle = sectionTop + rect.height / 2;

        // Calculate distance from viewport middle to section middle
        const distance = Math.abs(viewportMiddle - sectionMiddle);

        console.log(`Section ${i} (${section.getAttribute("data-section")}):`, {
          distance: distance.toFixed(0),
          height: rect.height.toFixed(0),
          top: rect.top.toFixed(0),
        });

        // The section with its middle closest to viewport middle is active
        if (distance < closestDistance) {
          closestDistance = distance;
          activeIndex = i;
        }
      });

      console.log("Active index:", activeIndex);

      // Calculate section progress (0-1 within the active section)
      const activeSection = sections[activeIndex];
      const rect = activeSection.getBoundingClientRect();
      const sectionTop = scrollPos + rect.top;
      const sectionHeight = rect.height;
      const scrollInSection = viewportMiddle - sectionTop;
      const sectionProgress = Math.max(
        0,
        Math.min(1, scrollInSection / sectionHeight)
      );

      // Calculate total progress independently based on absolute scroll position
      // Get absolute positions of all sections
      const sectionPositions = sections.map((section) => {
        const rect = section.getBoundingClientRect();
        return {
          top: scrollPos + rect.top,
          height: rect.height,
        };
      });

      const firstSectionTop = sectionPositions[0].top;
      const lastSectionBottom =
        sectionPositions[sectionPositions.length - 1].top +
        sectionPositions[sectionPositions.length - 1].height;
      const totalHeight = lastSectionBottom - firstSectionTop;

      // Calculate how far we've scrolled from the start of the first section
      const scrolledFromStart = viewportMiddle - firstSectionTop;
      const totalProgress = Math.max(
        0,
        Math.min(1, scrolledFromStart / totalHeight)
      );

      console.log("Section progress:", sectionProgress.toFixed(3));
      console.log(
        "Total progress:",
        totalProgress.toFixed(3),
        "Total height:",
        totalHeight.toFixed(0)
      );

      setProgress((prev) => {
        if (prev.activeSection !== activeIndex) {
          console.log(
            `✅ Section changed to ${activeIndex}: ${sections[
              activeIndex
            ].getAttribute("data-section")}`
          );
        }
        return {
          ...prev,
          activeSection: activeIndex,
          sectionProgress,
          totalProgress,
        };
      });
    };

    // Initial check
    updateActiveSection();

    // Use native scroll event with requestAnimationFrame for smooth updates
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    ...progress,
    sectionName: SECTION_NAMES[progress.activeSection] || "hook",
  };
}
