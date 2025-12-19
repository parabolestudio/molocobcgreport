"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { basePath } from "@/helpers/general";
import { useCopy } from "@/contexts/CopyContext";
import { fadeOut, fadeIn } from "@/helpers/scroll";

export default function HookSection({
  isActive,
  currentStep,
  scrollToSection,
}: {
  isActive: boolean;
  currentStep: number;
  scrollToSection: (sectionIndex: number, localStep?: number) => void;
}) {
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const previousStepRef = useRef(-1);

  const textRefs = [text1Ref, text2Ref, titleRef];

  // Set initial visibility
  useEffect(() => {
    if (text1Ref.current) {
      gsap.set(text1Ref.current, { opacity: 1, visibility: "visible" });
    }
    if (text2Ref.current) {
      gsap.set(text2Ref.current, { opacity: 0, visibility: "hidden" });
    }
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, visibility: "hidden" });
    }
  }, []);

  // Handle step transitions
  useEffect(() => {
    if (!isActive) return; // Only animate when this section is active
    if (currentStep === previousStepRef.current) return;

    const texts = textRefs.map((ref) => ref.current).filter(Boolean);
    if (texts.length === 0 || currentStep < 0) return;

    const previousStep = previousStepRef.current;

    // Kill all ongoing animations first
    texts.forEach((text) => gsap.killTweensOf(text));

    // Hide all texts immediately except current and previous
    texts.forEach((text, i) => {
      if (i !== currentStep && i !== previousStep) {
        gsap.set(text, { opacity: 0, visibility: "hidden" });
      }
    });

    // Fade out previous text
    if (previousStep >= 0 && previousStep !== currentStep) {
      const previousText = texts[previousStep];
      if (previousText) fadeOut(previousText);
    }

    // Fade in current text
    const currentText = texts[currentStep];
    if (currentText) fadeIn(currentText);

    previousStepRef.current = currentStep;
  }, [isActive, currentStep]);

  return (
    <div
      className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
        isActive
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      data-section="hook"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          ref={text1Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[960px] px-16 md:px-8 text-center flex flex-col items-center justify-between gap-20"
          style={{ height: "calc(var(--vh, 1vh) * 80)" }}
        >
          <button className="bg-grey-blue flex items-center justify-center gap-2 opacity-0"></button>
          <p className="text-[18px] md:text-[32px] leading-[125%] font-normal font-montserrat">
            {useCopy("hooks_1_text")}
          </p>
          <button
            className="bg-grey-blue flex items-center justify-center gap-2 hover:bg-[#9494AA] transition"
            onClick={() => scrollToSection(0, 1)}
          >
            <span>scroll</span>
            <img
              src={`${basePath}/icons/arrow.svg`}
              alt="arrow"
              width={16}
              height={13}
              style={{ transform: "rotate(-90deg)" }}
            />
          </button>
        </div>
        <div
          ref={text2Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[960px] px-16 md:px-8 text-center flex flex-col items-center justify-center gap-20"
          style={{ opacity: 0, visibility: "hidden" }}
        >
          <p className="text-[18px] md:text-[32px] leading-[125%] font-normal font-montserrat">
            {useCopy("hooks_2_text")}
          </p>
        </div>

        <div
          ref={titleRef}
          className="absolute inset-0 w-full h-full px-8 text-center flex flex-col items-center justify-center gap-32 md:gap-32 py-8 overflow-y-auto"
          style={{ opacity: 0, visibility: "hidden" }}
        >
          <h1 className="text-[40px] md:text-[128px] leading-[115%] max-w-[1700px] text-balance text-bright-green font-museo-moderno uppercase leading-[0.99] font-extralight">
            {useCopy("hooks_title")}
          </h1>
          <div className="shrink-0">
            <p className="text-[18px] md:text-[24px] leading-[125%] font-normal">
              {useCopy("hooks_subline")}
            </p>
            <div className="mt-4">
              <img
                src={`${basePath}/logos/moloco_bcg.svg`}
                alt="Moloco logo and BCG logo"
                width={291}
                height={51}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
