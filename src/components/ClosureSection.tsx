"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useCopy } from "@/contexts/CopyContext";
import { fadeOut, fadeIn, SCROLL_CONFIG } from "@/helpers/scroll";
import { basePath } from "@/helpers/general";

export default function ClosureSection({
  isActive,
  currentStep,
}: {
  isActive: boolean;
  currentStep: number;
}) {
  const screen1Ref = useRef<HTMLDivElement>(null);
  const screen2Ref = useRef<HTMLDivElement>(null);
  const previousStepRef = useRef(-1);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const screenRefs = [screen1Ref, screen2Ref];

  // Set initial visibility
  useEffect(() => {
    // Set step 0 (text1) visible, others hidden
    gsap.set(screen1Ref.current, { autoAlpha: 1 });
    gsap.set(screen2Ref.current, { autoAlpha: 0 });
    // Set cards initial state
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.set(card, { autoAlpha: 0, y: 30 });
      }
    });
  }, []);

  // Handle step transitions
  useEffect(() => {
    if (!isActive) {
      // Fade out cards smoothly when leaving the section
      cardsRef.current.forEach((card) => {
        if (card) {
          fadeOut(card);
        }
      });
      return;
    }

    if (currentStep === previousStepRef.current) return;

    const screens = screenRefs.map((ref) => ref.current).filter(Boolean);
    if (screens.length === 0 || currentStep < 0) return;

    const previousStep = previousStepRef.current;

    // Kill all ongoing animations first
    screens.forEach((screen) => gsap.killTweensOf(screen));
    cardsRef.current.forEach((card) => {
      if (card) gsap.killTweensOf(card);
    });

    // Hide all screens immediately except current and previous
    screens.forEach((screen, i) => {
      if (i !== currentStep && i !== previousStep) {
        gsap.set(screen, { autoAlpha: 0 });
      }
    });

    // Fade out previous screen
    if (previousStep >= 0 && previousStep !== currentStep) {
      const previousScreen = screens[previousStep];
      if (previousScreen) fadeOut(previousScreen);

      // Fade out cards when leaving screen2
      if (previousStep === 1) {
        cardsRef.current.forEach((card) => {
          if (card) {
            fadeOut(card);
          }
        });
      }
    }

    // Fade in current screen
    const currentScreen = screens[currentStep];
    if (currentScreen) {
      fadeIn(currentScreen);

      // If transitioning to screen2 (step 1), animate cards
      if (currentStep === 1) {
        // Reset cards first
        cardsRef.current.forEach((card) => {
          if (card) {
            gsap.set(card, { autoAlpha: 0, y: 30 });
          }
        });

        // Then animate them in
        cardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.to(card, {
              autoAlpha: 1,
              y: 0,
              duration: 0.4,
              delay: 0.6 + index * 0.3,
              ease: "power2.inout",
            });
          }
        });
      }
    }

    previousStepRef.current = currentStep;
  }, [isActive, currentStep]);

  const [showMethodTooltip, setShowMethodTooltip] = useState<boolean>(false);
  const tooltipText = useCopy("context_button_method_tooltip");

  return (
    <div
      className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
        isActive
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      data-section="closure"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          ref={screen1Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90%] px-8 h-full max-h-[1100px] py-8 opacity-0 invisible"
        >
          <div className="relative flex flex-col justify-start items-start h-full w-full gap-16">
            <p className="text-[32px] max-w-[900px]">
              {useCopy("closure_paragraph_1")}
            </p>
            <h3 className="text-[32px] max-w-[900px] text-grey-text text-balance">
              {useCopy("closure_title")}
            </h3>
          </div>
        </div>
        <div
          ref={screen2Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90%] px-8 h-full max-h-[1100px] py-8 opacity-0 invisible"
          style={{ opacity: 0, visibility: "hidden" }}
        >
          <div className="relative flex flex-col justify-between items-start h-full w-full gap-4">
            <p className="text-[24px] max-w-[940px]">
              {useCopy("closure_paragraph_2")}
            </p>
            <div className="flex flex-col gap-8">
              <p className="text-[24px] max-w-[940px]">
                {useCopy("closure_paragraph_3")}
              </p>

              <div className="max-w-[940px] flex flex-col gap-8">
                <Card
                  cardIndex={1}
                  ref={(el) => {
                    cardsRef.current[0] = el;
                  }}
                />
                <Card
                  cardIndex={2}
                  ref={(el) => {
                    cardsRef.current[1] = el;
                  }}
                />
                <Card
                  cardIndex={3}
                  ref={(el) => {
                    cardsRef.current[2] = el;
                  }}
                />
              </div>
            </div>

            <div className="absolute bottom-0 right-0 flex flex-col items-start gap-4">
              <p className="text-[14px] font-bold">To learn more</p>
              <button
                className="flex-1 bg-grey-text flex items-center justify-between gap-2 hover:bg-bright-green/80 transition text-black-blue"
                onClick={() => {
                  // link to external URL, TODO: replace with actual URL
                  window.open(" https://www.moloco.com/", "_blank");
                }}
              >
                <span>{useCopy("cta_text_button_1")}</span>
                <img
                  src={`${basePath}/icons/document.svg`}
                  alt="document"
                  width={19}
                  height={19}
                />
              </button>
              <button
                className="flex-1 button-grey-text-hover border border-grey-text flex items-center justify-between gap-2 hover:bg-grey-text transition text-grey-text hover:text-black-blue relative"
                onMouseEnter={() => setShowMethodTooltip(true)}
                onMouseLeave={() => setShowMethodTooltip(false)}
              >
                <span>{useCopy("cta_text_button_2")}</span>
                <svg
                  width="30"
                  height="18"
                  viewBox="0 0 30 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 10.25C6.65 -1.75 22.85 -1.75 28.25 10.25"
                    strokeWidth="2.5"
                    className="stroke-grey-text no-fill transition"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.749 16.2501C14.1581 16.2501 13.5729 16.1337 13.0269 15.9076C12.481 15.6814 11.9849 15.35 11.567 14.9321C11.1492 14.5142 10.8177 14.0182 10.5916 13.4722C10.3654 12.9262 10.249 12.3411 10.249 11.7501C10.249 11.1592 10.3654 10.574 10.5916 10.028C10.8177 9.48208 11.1492 8.986 11.567 8.56814C11.9849 8.15028 12.481 7.81881 13.0269 7.59266C13.5729 7.36652 14.1581 7.25012 14.749 7.25012C15.9425 7.25012 17.0871 7.72423 17.931 8.56814C18.7749 9.41205 19.249 10.5566 19.249 11.7501C19.249 12.9436 18.7749 14.0882 17.931 14.9321C17.0871 15.776 15.9425 16.2501 14.749 16.2501Z"
                    className="stroke-grey-text fill-grey-text with-fill transition"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {showMethodTooltip && (
                  <div className="copy-text absolute bottom-[54px] mb-2 -right-px text-black-blue bg-grey-text text-[18px] w-[600px] p-4 rounded-[20px] pointer-events-none normal-case text-left leading-[100%]">
                    {tooltipText}
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = React.forwardRef<HTMLDivElement, { cardIndex: number }>(
  ({ cardIndex }, ref) => {
    return (
      <div
        ref={ref}
        className="relative bg-bright-green rounded-[20px] pl-[60px] pr-[30px] py-[30px]"
      >
        <p
          className="text-[32px] font-bold font-museo-moderno leading-[108%]"
          style={{ color: "var(--black-blue)", marginBottom: "32px" }}
        >
          {useCopy("closure_card_" + cardIndex + "_title")}
        </p>
        <p className="text-[18px]" style={{ color: "var(--black-blue)" }}>
          {useCopy("closure_card_" + cardIndex + "_text")}
        </p>
        <div className="absolute rounded-[50%] bg-black-blue font-museo-moderno text-[24px] font-bold text-bright-green left-[calc(-42px/2)] top-1/2 -translate-y-1/2 w-[43px] h-[43px] flex items-center justify-center">
          0{cardIndex}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";
