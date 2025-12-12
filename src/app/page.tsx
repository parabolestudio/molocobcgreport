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

  // console.log("Page: Current section", currentSection, "step", currentStep);

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

  // function isTexturedBackgroundVisible(
  //   currentSection: number,
  //   currentStep: number
  // ) {
  //   // Show textured background for all sections except Quadrant section
  //   if (currentSection === 2 && currentStep > 0) {
  //     return false;
  //   }
  //   return true;
  // }
  // const isTextureVisible = isTexturedBackgroundVisible(
  //   currentSection,
  //   currentStep
  // );

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
      <div
        ref={mainContainerRef}
        className="relative h-screen"
        style={{ zIndex: 10 }}
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
