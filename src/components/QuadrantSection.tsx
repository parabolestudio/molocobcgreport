"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Chart from "./Chart";

gsap.registerPlugin(ScrollTrigger);

type ChartMode =
  | "y-axis"
  | "x-axis"
  | "quadrant-1"
  | "quadrant-2"
  | "quadrant-3"
  | "quadrant-4"
  | "data-filled";

export default function QuadrantSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const [chartMode, setChartMode] = useState<ChartMode>("y-axis");

  useEffect(() => {
    const section = sectionRef.current;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;

    if (!section || !text1 || !text2) return;

    // Initial state - all text hidden except first
    gsap.set(text2, { autoAlpha: 0, y: 30 });
    gsap.set(text1, { autoAlpha: 1, y: 0 });

    let currentIndex = 0;
    const texts = [text1, text2];

    const chartModes: ChartMode[] = [
      "y-axis",
      "x-axis",
      "quadrant-1",
      "quadrant-2",
      "quadrant-3",
      "quadrant-4",
      "data-filled",
    ];

    const showText = (index: number) => {
      if (currentIndex === index) return;

      // Kill all ongoing animations first
      texts.forEach((text) => gsap.killTweensOf(text));

      const oldText = texts[currentIndex];
      const newText = texts[index];

      // Hide all texts immediately except the ones transitioning
      texts.forEach((text, i) => {
        if (i !== currentIndex && i !== index) {
          gsap.set(text, { autoAlpha: 0 });
        }
      });

      // Fade out and move up the old text
      gsap.to(oldText, {
        autoAlpha: 0,
        y: -30,
        duration: 0.4,
        ease: "power2.in",
      });

      // Fade in and move up the new text
      gsap.fromTo(
        newText,
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
      end: "+=800%", // Increased scroll distance for slower transitions
      pin: true,
      snap: {
        snapTo: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1], // Snap point for each mode
        duration: 0.3,
        ease: "power1.inOut",
      },
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress < 0.125) {
          if (currentIndex !== 0) showText(0);
        } else {
          if (currentIndex !== 1) showText(1);

          // Loop through chart modes during text2 phase (0.125 to 1.0)
          const text2Progress = (progress - 0.125) / 0.875; // Normalize to 0-1 for text2 phase
          const modeIndex = Math.floor(text2Progress * chartModes.length);
          const clampedIndex = Math.min(modeIndex, chartModes.length - 1);
          setChartMode(chartModes[clampedIndex]);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          ref={text1Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-8 text-center opacity-0 invisible"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Quadrant Section - Part 1
          </h2>
          <p className="text-xl text-emerald-100">
            This is the first text part of the Quadrant Section. Scroll down to
            see the final part.
          </p>
        </div>

        <div
          ref={text2Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-8 text-center opacity-0 invisible"
        >
          <div className="bg-panel-background rounded-[20px]">
            <h3 className="text-grey-text font-museo-moderno">
              The <span className="font-bold">AI Disruption Index</span>
            </h3>
          </div>
          <Chart mode={chartMode} />
        </div>
      </div>
    </div>
  );
}
