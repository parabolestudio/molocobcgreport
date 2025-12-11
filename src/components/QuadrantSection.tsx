"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Chart from "./Chart";
import ChartPanel from "./ChartPanel";
import type { ChartMode } from "@/helpers/chart";
import { useCopy } from "@/contexts/CopyContext";
import { fadeOut, fadeIn } from "@/helpers/scroll";

export default function QuadrantSection({
  isActive,
  currentStep,
  scrollToSection,
}: {
  isActive: boolean;
  currentStep: number;
  scrollToSection: (sectionIndex: number, localStep?: number) => void;
}) {
  const introTextRef = useRef<HTMLDivElement>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartPanelRef = useRef<HTMLDivElement>(null);
  const [selectedVertical, setSelectedVertical] = useState<string | null>(null);
  const previousStepRef = useRef(-1);

  const chartModes: ChartMode[] = [
    "expl-y-axis",
    "expl-x-axis",
    "expl-quadrant-bottom-left",
    "expl-quadrant-top-left",
    "expl-quadrant-bottom-right",
    "expl-quadrant-top-right",
    "data-filled",
  ];

  // Determine chart mode based on current step
  // Step 0: intro text visible, charts hidden
  // Steps 1-7: chart modes 0-6
  const chartMode: ChartMode =
    currentStep === 0 ? chartModes[0] : chartModes[currentStep - 1];

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

  // Set initial visibility
  useEffect(() => {
    const introText = introTextRef.current;
    const chartContainer = chartContainerRef.current;

    if (!introText || !chartContainer) return;

    // Initial state - intro text visible, charts hidden on step 0
    if (currentStep === 0) {
      gsap.set(introText, { autoAlpha: 1, y: 0 });
      gsap.set(chartContainer, { autoAlpha: 0, y: 30 });
    } else {
      gsap.set(introText, { autoAlpha: 0, y: -30 });
      gsap.set(chartContainer, { autoAlpha: 1, y: 0 });
    }
  }, []);

  // Handle transitions between intro and chart
  useEffect(() => {
    if (!isActive) return;
    if (currentStep === previousStepRef.current) return;

    const introText = introTextRef.current;
    const chartContainer = chartContainerRef.current;

    if (!introText || !chartContainer) return;

    const previousStep = previousStepRef.current;

    if (currentStep === 0) {
      // Step 0: Show intro text, hide charts
      // Immediately set final states for non-transitioning element
      gsap.set(chartContainer, { autoAlpha: 0 });

      // Fade in intro text with overwrite to cancel any ongoing animations
      gsap.killTweensOf(introText);
      gsap.fromTo(
        introText,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.4,
          overwrite: true,
        }
      );
    } else {
      // Steps 1-7: Hide intro text, show charts (charts stay visible, only mode changes)
      // Immediately set final states for intro
      gsap.set(introText, { autoAlpha: 0 });

      // Only fade in chart when transitioning from step 0 or initial load
      if (previousStep === 0 || previousStep === -1) {
        gsap.killTweensOf(chartContainer);
        gsap.fromTo(
          chartContainer,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            delay: 0.4,
            overwrite: true,
          }
        );
      } else {
        // Between steps 1-7, ensure chart stays visible
        gsap.set(chartContainer, { autoAlpha: 1, y: 0 });
      }
    }

    previousStepRef.current = currentStep;
  }, [isActive, currentStep]);

  return (
    <div
      className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
        isActive
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      data-section="quadrant"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Intro text - only visible on step 0 */}
        <div
          ref={introTextRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90%] px-8 h-full max-h-[1000px] flex flex-col justify-between gap-12"
        >
          <h2 className="font-museo-moderno text-bright-green text-[96px] leading-[100%] max-w-[800px] font-extralight">
            {useCopy("climax_1_title")}
          </h2>
          <p className="text-[32px] max-w-[615px] self-end">
            {useCopy("climax_1_paragraph")}
          </p>
        </div>

        {/* Chart components - visible from step 1 onwards */}
        <div
          ref={chartContainerRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1728px] px-10"
          style={{ height: "calc(100% - 80px)", top: "50%", marginTop: "0" }}
        >
          <div className="h-full grid grid-cols-[0.3fr_0.7fr] gap-8">
            <div ref={chartPanelRef} className="h-full overflow-hidden">
              <ChartPanel
                mode={chartMode}
                selectedVertical={selectedVertical}
                selectVertical={(vertical) => setSelectedVertical(vertical)}
                scrollNext={() => {
                  // QuadrantSection is section 2, advance to next step
                  const nextStep = currentStep + 1;
                  if (nextStep <= 7) {
                    scrollToSection(2, nextStep);
                  }
                }}
                scrollBack={() => {
                  // Go to previous step
                  const prevStep = currentStep - 1;
                  if (prevStep >= 0) {
                    scrollToSection(2, prevStep);
                  }
                }}
                scrollToDataMode={() => {
                  // Jump to data-filled mode (step 7)
                  scrollToSection(2, 7);
                }}
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
