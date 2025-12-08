"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Chart from "./Chart";
import ChartPanel from "./ChartPanel";
import type { ChartMode } from "@/helpers/chart";
import { useCopy } from "@/contexts/CopyContext";
import {
  calculateScrollEnd,
  generateSnapPoints,
  fadeOut,
  fadeIn,
  SCROLL_CONFIG,
} from "@/helpers/scroll";

export default function QuadrantSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const screen1Ref = useRef<HTMLDivElement>(null);
  const screen2Ref = useRef<HTMLDivElement>(null);
  const chartPanelRef = useRef<HTMLDivElement>(null);
  const [chartMode, setChartMode] = useState<ChartMode>("expl-y-axis");
  const [selectedVertical, setSelectedVertical] = useState<string | null>(null);

  const TOTAL_STEPS = 8; // 1 intro + 7 chart modes
  const snapPoints = generateSnapPoints(TOTAL_STEPS);

  // Handle clicking outside to deselect vertical
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Check if click is on a verticalGroup (including SVG elements)
      let element: HTMLElement | SVGElement | null = target;
      while (element) {
        if (element.classList?.contains("verticalGroup")) {
          return;
        }
        element = element.parentElement;
      }

      // Check if click is on ChartPanel
      if (chartPanelRef.current?.contains(target)) {
        return;
      }

      // Clear selection
      setSelectedVertical(null);
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // Reset selected vertical when mode changes
  useEffect(() => {
    setSelectedVertical(null);
  }, [chartMode]);

  // scroll handling with GSAP ScrollTrigger
  useEffect(() => {
    const section = sectionRef.current;
    const screen1 = screen1Ref.current;
    const screen2 = screen2Ref.current;

    if (!section || !screen1 || !screen2) return;

    // Initial state - all screen hidden except first
    gsap.set(screen2, { autoAlpha: 0, y: 30 });
    gsap.set(screen1, { autoAlpha: 1, y: 0 });

    let currentIndex = 0;
    const screens = [screen1, screen2];

    const chartModes: ChartMode[] = [
      "expl-y-axis",
      "expl-x-axis",
      "expl-quadrant-bottom-left",
      "expl-quadrant-top-left",
      "expl-quadrant-bottom-right",
      "expl-quadrant-top-right",
      "data-filled",
    ];

    const showScreen = (index: number) => {
      if (currentIndex === index) return;

      // Kill all ongoing animations first
      screens.forEach((screen) => gsap.killTweensOf(screen));

      const oldScreen = screens[currentIndex];
      const newScreen = screens[index];

      // Hide all screens immediately except the ones transitioning
      screens.forEach((screen, i) => {
        if (i !== currentIndex && i !== index) {
          gsap.set(screen, { autoAlpha: 0 });
        }
      });

      // Use shared animation functions
      fadeOut(oldScreen);
      fadeIn(newScreen);

      currentIndex = index;
    };

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: calculateScrollEnd(TOTAL_STEPS),
      pin: true,
      snap: {
        snapTo: snapPoints,
        duration: SCROLL_CONFIG.SNAP_DURATION,
        ease: SCROLL_CONFIG.SNAP_EASE,
      },
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress < 0.125) {
          if (currentIndex !== 0) showScreen(0);
        } else {
          if (currentIndex !== 1) showScreen(1);

          // Loop through chart modes during screen2 phase (0.125 to 1.0)
          const screen2Progress = (progress - 0.125) / 0.875; // Normalize to 0-1 for screen2 phase

          // Equal distribution: each mode gets 1/7th of the screen2 phase
          if (screen2Progress < 1 / 7) {
            setChartMode(chartModes[0]);
          } else if (screen2Progress < 2 / 7) {
            setChartMode(chartModes[1]);
          } else if (screen2Progress < 3 / 7) {
            setChartMode(chartModes[2]);
          } else if (screen2Progress < 4 / 7) {
            setChartMode(chartModes[3]);
          } else if (screen2Progress < 5 / 7) {
            setChartMode(chartModes[4]);
          } else if (screen2Progress < 6 / 7) {
            setChartMode(chartModes[5]);
          } else {
            setChartMode(chartModes[6]);
          }
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToSnapPoint = (direction: "next" | "prev" | number) => {
    const allTriggers = ScrollTrigger.getAll();
    const ourTrigger = allTriggers.find(
      (t) => t.trigger === sectionRef.current
    );

    if (!ourTrigger) return;

    let targetSnapPoint: number | undefined;

    if (typeof direction === "number") {
      targetSnapPoint = direction;
    } else {
      const currentProgress = ourTrigger.progress;
      targetSnapPoint =
        direction === "next"
          ? snapPoints.find((point) => point > currentProgress + 0.01)
          : snapPoints
              .slice()
              .reverse()
              .find((point) => point < currentProgress - 0.01);
    }

    if (targetSnapPoint !== undefined) {
      const scrollPosition =
        ourTrigger.start +
        (ourTrigger.end - ourTrigger.start) * targetSnapPoint;
      gsap.to(window, {
        scrollTo: scrollPosition,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div ref={sectionRef} className="w-full h-screen">
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          ref={screen1Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90%] px-8 opacity-0 invisible flex flex-col  gap-12"
        >
          <h2 className="font-museo-moderno text-bright-green text-[96px] leading-[100%] max-w-[800px] font-extralight">
            {useCopy("climax_1_title")}
          </h2>
          <p className="text-[32px] leading-[100%] max-w-[615px] self-end">
            {useCopy("climax_1_paragraph")}
          </p>
        </div>

        <div
          ref={screen2Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1728px] px-10 opacity-0 invisible"
          style={{ height: "calc(100% - 80px)", top: "50%", marginTop: "0" }}
        >
          <div className="h-full grid grid-cols-[0.3fr_0.7fr] gap-8">
            <div ref={chartPanelRef} className="h-full overflow-hidden">
              <ChartPanel
                mode={chartMode}
                selectedVertical={selectedVertical}
                selectVertical={(vertical) => setSelectedVertical(vertical)}
                scrollNext={() => scrollToSnapPoint("next")}
                scrollBack={() => scrollToSnapPoint("prev")}
                scrollToDataMode={() => scrollToSnapPoint(1)}
              />
            </div>
            <Chart
              mode={chartMode}
              selectedVertical={selectedVertical}
              selectVertical={(vertical) => setSelectedVertical(vertical)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
