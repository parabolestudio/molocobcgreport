"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { basePath } from "@/helpers/general";
import { useCopy } from "@/contexts/CopyContext";
import {
  useScrollTrigger,
  setInitialVisibility,
} from "@/hooks/useScrollTrigger";
import { fadeOut, fadeIn } from "@/helpers/scroll";

const STEPS = 3;

export default function HookSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const previousStepRef = useRef(0);

  const textRefs = [text1Ref, text2Ref, titleRef];

  // Set initial visibility
  useEffect(() => {
    setInitialVisibility(textRefs, { visible: [0], hidden: [1, 2] });
  }, []);

  // Handle step transitions
  useEffect(() => {
    const texts = textRefs.map((ref) => ref.current).filter(Boolean);
    if (texts.length === 0 || currentStep < 0) return;

    const previousStep = previousStepRef.current;

    // Kill all ongoing animations first
    texts.forEach((text) => gsap.killTweensOf(text));

    // Hide all texts immediately except current and previous
    texts.forEach((text, i) => {
      if (i !== currentStep && i !== previousStep) {
        gsap.set(text, { autoAlpha: 0 });
      }
    });

    // Fade out previous text
    const previousText = texts[previousStep];
    if (previousText && previousStep !== currentStep) {
      fadeOut(previousText);
    }

    // Fade in current text
    const currentText = texts[currentStep];
    if (currentText) fadeIn(currentText);

    previousStepRef.current = currentStep;
  }, [currentStep]);

  // Set up ScrollTrigger
  useScrollTrigger({
    sectionRef,
    steps: STEPS,
    onStepChange: setCurrentStep,
  });

  function scrollToNext() {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      // ScrollTrigger end is "+=300%" which means 3x viewport height
      // To get to the second section (33% progress), we need to scroll to sectionTop + (3 * vh * 0.33)
      const scrollTarget = sectionTop + window.innerHeight * 3 * 0.4;
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: scrollTarget },
        ease: "power2.inOut",
      });
    }
  }

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen"
      data-section="hook"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          ref={text1Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[960px] px-8 text-center flex flex-col items-center justify-between gap-20 h-[80vh]"
        >
          <button className="bg-grey-blue flex items-center justify-center gap-2 opacity-0"></button>
          <p className="hook-p">{useCopy("hooks_1_text")}</p>
          <button
            className="bg-grey-blue flex items-center justify-center gap-2 hover:bg-[#9494AA] transition"
            onClick={scrollToNext}
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
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[960px] px-8 text-center flex flex-col items-center justify-center gap-20"
          style={{ opacity: 0, visibility: "hidden" }}
        >
          <p className="hook-p">{useCopy("hooks_2_text")}</p>
        </div>

        <div
          ref={titleRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90%] px-8 text-center flex flex-col items-center justify-center gap-32"
          style={{ opacity: 0, visibility: "hidden" }}
        >
          <h1 className="text-[128px] text-bright-green font-museo-moderno uppercase leading-[0.99] font-extralight text-balance">
            {useCopy("hooks_title")}
          </h1>
          <div>
            <p className="hook-p">{useCopy("hooks_subline")}</p>
            <div className="flex gap-12 mt-4">
              <img
                src={`${basePath}/logos/moloco.svg`}
                alt="Moloco logo"
                width={150}
                height={40}
              />
              <img
                src={`${basePath}/logos/bcg.svg`}
                alt="BCG logo"
                width={92}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
