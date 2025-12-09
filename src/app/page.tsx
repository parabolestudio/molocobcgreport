"use client";

import { useRef, useState } from "react";
import HookSection from "@/components/HookSection";
import JourneySection from "@/components/JourneySection";
import QuadrantSection from "@/components/QuadrantSection";
import ClosureSection from "@/components/ClosureSection";
import CTASection from "@/components/CTASection";
import P5Background from "@/components/P5Background";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { basePath } from "@/helpers/general";
import { useGlobalScrollTrigger } from "@/hooks/useGlobalScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  // Define steps for each section
  const SECTION_STEPS = [
    3, // HookSection: 3 steps
    5, // JourneySection: 5 steps (1 intro + 4 stats)
    8, // QuadrantSection: 8 steps (1 intro + 7 chart modes)
    3, // ClosureSection: 3 steps
    1, // CTASection: 1 step (static)
  ];

  const SECTION_NAMES = ["hook", "journey", "quadrant", "closure", "cta"];

  // Single ScrollTrigger for entire page
  useGlobalScrollTrigger({
    containerRef: mainContainerRef,
    sectionSteps: SECTION_STEPS,
    sectionNames: SECTION_NAMES,
    onSectionChange: (sectionIndex, localStep) => {
      console.log("Page: Section changed to", sectionIndex, "step", localStep);
      setCurrentSection(sectionIndex);
      setCurrentStep(localStep);
    },
  });

  console.log("Page: Current section", currentSection, "step", currentStep);

  return (
    <main className="relative">
      <P5Background
        activeSection={currentSection}
        currentStep={currentStep}
        sectionName={SECTION_NAMES[currentSection] as any}
      />
      <div
        className="fixed top-0 bottom-0 left-0 right-0 "
        style={{
          backgroundImage: `url(${basePath}/background/texture.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          mixBlendMode: "luminosity",
          zIndex: 1,
        }}
      ></div>
      <div
        ref={mainContainerRef}
        className="relative h-screen"
        style={{ zIndex: 10 }}
      >
        <HookSection
          isActive={currentSection === 0}
          currentStep={currentStep}
        />
        <JourneySection
          isActive={currentSection === 1}
          currentStep={currentStep}
        />
        <QuadrantSection
          isActive={currentSection === 2}
          currentStep={currentStep}
        />
        <ClosureSection
          isActive={currentSection === 3}
          currentStep={currentStep}
        />
        <CTASection isActive={currentSection === 4} />
      </div>
    </main>
  );
}
