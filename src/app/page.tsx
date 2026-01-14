"use client";

import { useRef, useState, useEffect } from "react";
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
import { SECTION_NAMES, SECTION_STEPS } from "@/helpers/scroll";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  // Single ScrollTrigger for entire page
  const { scrollToSection } = useGlobalScrollTrigger({
    containerRef: mainContainerRef,
    sectionSteps: Object.values(SECTION_STEPS),
    sectionNames: [...SECTION_NAMES],
    onSectionChange: (sectionIndex, localStep) => {
      console.log("Page: Section changed to", sectionIndex, "step", localStep);
      setCurrentSection(sectionIndex);
      setCurrentStep(localStep);
    },
  });

  function getBackgroundColorClass(
    currentSection: number,
    currentStep: number
  ) {
    if (currentSection === 3) {
      return "bg-forest-green";
    } else if (currentSection === 2 && currentStep >= 0) {
      return "bg-dark-background";
    } else {
      return "bg-black-blue";
    }
  }
  const bgClass = getBackgroundColorClass(currentSection, currentStep);

  return (
    <main className={`relative ${bgClass} transition-background`}>
      <P5Background
        activeSection={currentSection}
        currentStep={currentStep}
        sectionName={SECTION_NAMES[currentSection] as any}
      />
      <div
        className="fixed top-0 bottom-0 left-0 right-0 transition-opacity pointer-events-none"
        style={{
          backgroundImage: `url(${basePath}/background/texture.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          mixBlendMode: "luminosity",
          zIndex: 1,
        }}
      ></div>
      <img
        className={`fixed top-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:top-20 md:right-20 pointer-events-none transition-opacity ${
          (currentSection === 0 && currentStep === 0) ||
          (currentSection === 0 && currentStep === 1)
            ? "opacity-50"
            : "opacity-0"
        } w-[181px] h-[32px] md:w-[211px] md:h-[36px]`}
        src={`${basePath}/logos/moloco_bcg.svg`}
        alt="Moloco logo and BCG logo"
      />
      <img
        className={`fixed top-10 md:top-20 right-5 md:right-20 pointer-events-none transition-opacity ${
          currentSection === 1 ||
          currentSection === 3 ||
          (currentSection === 2 && currentStep === 0)
            ? "opacity-50"
            : "opacity-0"
        } w-7 h-[26px] md:w-[34px] md:h-[31px]`}
        src={`${basePath}/logos/moloco_small_without_border.svg`}
        alt="Moloco small logo without border"
      />
      <div
        ref={mainContainerRef}
        className="relative h-dvh z-10" //  height: "100dvh",  Dynamic viewport height (accounts for mobile toolbar)
      >
        <HookSection
          isActive={currentSection === 0}
          currentStep={currentStep}
          scrollToSection={scrollToSection}
        />
        <JourneySection
          isActive={currentSection === 1}
          currentStep={currentStep}
        />
        <QuadrantSection
          isActive={currentSection === 2}
          currentStep={currentStep}
          scrollToSection={scrollToSection}
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
