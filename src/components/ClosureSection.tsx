"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useCopy } from "@/contexts/CopyContext";
import { fadeOut, fadeIn } from "@/helpers/scroll";
import { basePath } from "@/helpers/general";

interface ClosureSectionProps {
  isActive: boolean;
  currentStep: number;
}

export default function ClosureSection({
  isActive,
  currentStep,
}: ClosureSectionProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const roundedDiv1Ref = useRef<HTMLDivElement>(null);
  const roundedDiv2Ref = useRef<HTMLDivElement>(null);
  const roundedDiv3Ref = useRef<HTMLDivElement>(null);
  const cardContent1Ref = useRef<HTMLDivElement>(null);
  const cardContent2Ref = useRef<HTMLDivElement>(null);
  const cardContent3Ref = useRef<HTMLDivElement>(null);
  const previousStepRef = useRef(-1);

  const roundedDivs = [roundedDiv1Ref, roundedDiv2Ref, roundedDiv3Ref];
  const cardContents = [cardContent1Ref, cardContent2Ref, cardContent3Ref];

  // Set initial visibility
  useEffect(() => {
    // Step 0: title and paragraph1 visible
    gsap.set(titleRef.current, { autoAlpha: 1 });
    gsap.set(paragraph1Ref.current, { autoAlpha: 1 });

    // Everything else hidden
    gsap.set(paragraph2Ref.current, { autoAlpha: 0 });
    roundedDivs.forEach((ref) => gsap.set(ref.current, { autoAlpha: 0 }));
    cardContents.forEach((ref) => gsap.set(ref.current, { autoAlpha: 0 }));
  }, []);

  // Handle step transitions
  useEffect(() => {
    if (!isActive) return; // Only animate when this section is active
    if (currentStep === previousStepRef.current) return;

    const title = titleRef.current;
    const paragraph1 = paragraph1Ref.current;
    const paragraph2 = paragraph2Ref.current;
    const roundedDivElements = roundedDivs
      .map((ref) => ref.current)
      .filter(Boolean);
    const cardContentElements = cardContents
      .map((ref) => ref.current)
      .filter(Boolean);

    if (!title || !paragraph1 || !paragraph2) return;
    if (roundedDivElements.length === 0 || cardContentElements.length === 0)
      return;

    // Kill all ongoing animations first
    gsap.killTweensOf([
      title,
      paragraph1,
      paragraph2,
      ...roundedDivElements,
      ...cardContentElements,
    ]);

    if (currentStep === 0) {
      // Step 0: Show title and paragraph1, hide everything else
      fadeOut([paragraph2, ...roundedDivElements, ...cardContentElements]);
      fadeIn([title, paragraph1]);
    } else if (currentStep === 1) {
      // Step 1: Show paragraph2 and rounded divs, hide everything else
      fadeOut([title, paragraph1]);
      fadeOut([...cardContentElements]);
      fadeIn([paragraph2, ...roundedDivElements]);
    } else if (currentStep === 2) {
      // Step 2: Show paragraph2, rounded divs, and card contents
      fadeOut([title, paragraph1]);

      // Ensure these are visible
      gsap.to([paragraph2, ...roundedDivElements], {
        autoAlpha: 1,
        y: 0,
        duration: 0.1,
      });

      fadeIn(cardContentElements);
    }

    previousStepRef.current = currentStep;
  }, [isActive, currentStep]);

  return (
    <div
      className={`absolute inset-0 w-full h-full bg-forest-green transition-opacity duration-300 ${
        isActive
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      data-section="closure"
    >
      <div
        className="fixed top-0 bottom-0 left-0 right-0 "
        style={{
          backgroundImage: `url(${basePath}/background/texture.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          mixBlendMode: "luminosity",
        }}
      ></div>
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
