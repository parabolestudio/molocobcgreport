"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Chart from "./Chart";
import ChartPanel from "./ChartPanel";
import type { ChartMode } from "@/types/chart";

gsap.registerPlugin(ScrollTrigger);

export default function QuadrantSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const screen1Ref = useRef<HTMLDivElement>(null);
  const screen2Ref = useRef<HTMLDivElement>(null);
  const [chartMode, setChartMode] = useState<ChartMode>("expl-y-axis");

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
      "expl-quadrant-1",
      "expl-quadrant-2",
      "expl-quadrant-3",
      "expl-quadrant-4",
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

      // Fade out and move up the old screen
      gsap.to(oldScreen, {
        autoAlpha: 0,
        y: -30,
        duration: 0.4,
        ease: "power2.in",
      });

      // Fade in and move up the new screen
      gsap.fromTo(
        newScreen,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.4,
        }
      );

      currentIndex = index;
    };

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=800%", // 8 screens (1 intro + 7 chart modes)
      pin: true,
      snap: {
        snapTo: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1], // Snap point for each mode
        duration: 0.3,
        ease: "power1.inOut",
      },
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress < 0.125) {
          if (currentIndex !== 0) showScreen(0);
        } else {
          if (currentIndex !== 1) showScreen(1);

          // Loop through chart modes during screen2 phase (0.125 to 1.0)
          const screen2Progress = (progress - 0.125) / 0.875; // Normalize to 0-1 for screen2 phase
          const modeIndex = Math.floor(screen2Progress * chartModes.length);
          const clampedIndex = Math.min(modeIndex, chartModes.length - 1);
          setChartMode(chartModes[clampedIndex]);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollNext = () => {
    // scroll to next chart mode
  };
  const scrollBack = () => {
    // scroll to previous chart mode
  };
  const scrollToDataMode = () => {
    // scroll to chart mode "data-filled"
  };

  return (
    <div ref={sectionRef} className="w-full h-screen">
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          ref={screen1Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-8 text-center opacity-0 invisible"
        >
          <p className="text-xl text-emerald-100">
            This is the first intro screen to the quadrant section.
          </p>
        </div>

        <div
          ref={screen2Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1728px] px-20 h-full py-20 opacity-0 invisible grid grid-cols-[0.3fr_0.7fr] gap-8"
        >
          <ChartPanel
            mode={chartMode}
            scrollNext={scrollNext}
            scrollBack={scrollBack}
            scrollToDataMode={scrollToDataMode}
          />
          <Chart mode={chartMode} />
        </div>
      </div>
    </div>
  );
}
