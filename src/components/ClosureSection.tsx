"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useCopy } from "@/contexts/CopyContext";
import {
  calculateScrollEnd,
  getSnapConfig,
  getActiveStep,
  fadeOut,
  fadeIn,
} from "@/helpers/scroll";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ClosureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const roundedDiv1Ref = useRef<HTMLDivElement>(null);
  const roundedDiv2Ref = useRef<HTMLDivElement>(null);
  const roundedDiv3Ref = useRef<HTMLDivElement>(null);
  const cardContent1Ref = useRef<HTMLDivElement>(null);
  const cardContent2Ref = useRef<HTMLDivElement>(null);
  const cardContent3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const paragraph1 = paragraph1Ref.current;
    const paragraph2 = paragraph2Ref.current;
    const roundedDivs = [
      roundedDiv1Ref.current,
      roundedDiv2Ref.current,
      roundedDiv3Ref.current,
    ];
    const cardContents = [
      cardContent1Ref.current,
      cardContent2Ref.current,
      cardContent3Ref.current,
    ];

    if (
      !section ||
      !title ||
      !paragraph1 ||
      !paragraph2 ||
      roundedDivs.some((d) => !d) ||
      cardContents.some((c) => !c)
    )
      return;

    const STEPS = 3;

    // Initial state - only title and paragraph1 visible
    gsap.set(title, { autoAlpha: 1, y: 0 });
    gsap.set(paragraph1, { autoAlpha: 1, y: 0 });
    gsap.set([paragraph2, ...roundedDivs, ...cardContents], {
      autoAlpha: 0,
      y: 30,
    });

    let currentIndex = 0;

    const showStep = (index: number) => {
      if (currentIndex === index) return;

      // Kill all ongoing animations first
      gsap.killTweensOf([
        title,
        paragraph1,
        paragraph2,
        ...roundedDivs,
        ...cardContents,
      ]);

      if (index === 0) {
        // Step 0: Show title and paragraph1, hide everything else
        fadeOut([paragraph2, ...roundedDivs, ...cardContents]);
        fadeIn([title, paragraph1]);
      } else if (index === 1) {
        // Step 1: Show paragraph2 and rounded divs, hide everything else
        fadeOut([title, paragraph1]);
        fadeOut([...cardContents]);
        fadeIn([paragraph2, ...roundedDivs]);
      } else if (index === 2) {
        // Step 2: Show paragraph2, rounded divs, and card contents
        fadeOut([title, paragraph1]);

        // Ensure these are visible
        gsap.to([paragraph2, ...roundedDivs], {
          autoAlpha: 1,
          y: 0,
          duration: 0.1,
        });

        fadeIn(cardContents);
      }

      currentIndex = index;
    };

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: calculateScrollEnd(STEPS),
      pin: true,
      snap: getSnapConfig(STEPS),
      onUpdate: (self) => {
        const activeStep = getActiveStep(self.progress, STEPS);
        if (currentIndex !== activeStep) {
          showStep(activeStep);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-screen bg-forest-green">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1728px] px-8 h-full py-12">
          <div
            className="w-full h-full grid"
            style={{
              gridTemplateColumns: "repeat(6, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
            }}
          >
            <h3
              ref={titleRef}
              className="text-[96px] font-museo-moderno leading-[100%]"
              style={{ gridArea: " 1 / 1 / 2 / 5", color: "var(--black-blue)" }}
            >
              {useCopy("closure_title")}
            </h3>
            <p
              ref={paragraph1Ref}
              className="text-[32px] self-end"
              style={{ gridArea: " 2 / 5 / 3 / 7" }}
            >
              {useCopy("closure_paragraph_1")}
            </p>
            <p
              ref={paragraph2Ref}
              className="text-[32px]"
              style={{ gridArea: "1 / 1 / 2 / 5" }}
            >
              {useCopy("closure_paragraph_2")}
            </p>
            <div
              className="p-4 flex items-center justify-center"
              style={{ gridArea: "2 / 1 / 3 / 3" }}
            >
              <div className="relative max-w-[327px]">
                <div
                  ref={cardContent1Ref}
                  className="text-black-blue bg-bright-green rounded-[20px] px-8 pt-8 pb-16"
                >
                  {useCopy("closure_card_1")}
                </div>
                <div
                  ref={roundedDiv1Ref}
                  className="h-10 w-10 bg-black-blue rounded-[50%] absolute bottom-0 right-0"
                ></div>
              </div>
            </div>
            <div
              className="p-4 flex items-start justify-center"
              style={{ gridArea: "2 / 3 / 3 / 5" }}
            >
              <div className="relative max-w-[327px]">
                <div
                  ref={cardContent2Ref}
                  className="text-black-blue bg-bright-green rounded-[20px] px-8 pt-8 pb-16"
                >
                  {useCopy("closure_card_2")}
                </div>
                <div
                  ref={roundedDiv2Ref}
                  className="h-10 w-10 bg-black-blue rounded-[50%] absolute bottom-0 right-0"
                ></div>
              </div>
            </div>
            <div
              className="p-4 flex items-end justify-center"
              style={{ gridArea: "2 / 5 / 3 / 7" }}
            >
              <div className="relative max-w-[327px]">
                <div
                  ref={cardContent3Ref}
                  className="text-black-blue bg-bright-green rounded-[20px] px-8 pt-8 pb-16"
                >
                  {useCopy("closure_card_3")}
                </div>
                <div
                  ref={roundedDiv3Ref}
                  className="h-10 w-10 bg-black-blue rounded-[50%] absolute bottom-0 right-0"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
