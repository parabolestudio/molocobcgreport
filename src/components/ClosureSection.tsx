"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useCopy } from "@/contexts/CopyContext";
import { fadeOut, fadeIn } from "@/helpers/scroll";
import { basePath, isMobile } from "@/helpers/general";

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
  const previousActiveRef = useRef(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const screenRefs = [screen1Ref, screen2Ref];
  const [mobile, setMobile] = useState(false);

  // Set initial visibility based on currentStep
  useEffect(() => {
    if (currentStep === 0) {
      gsap.set(screen1Ref.current, {
        autoAlpha: 1,
        xPercent: -50,
        yPercent: -50,
      });
      gsap.set(screen2Ref.current, {
        autoAlpha: 0,
        xPercent: -50,
        yPercent: -50,
      });
    } else if (currentStep === 1) {
      gsap.set(screen1Ref.current, {
        autoAlpha: 0,
        xPercent: -50,
        yPercent: -50,
      });
      gsap.set(screen2Ref.current, {
        autoAlpha: 1,
        xPercent: -50,
        yPercent: -50,
      });
    }
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
      // Reset states when leaving the section
      setMobileCardContentShown(null);
      setExpandedCardIndex(null);
      setShowMethodTooltip(false);
      previousActiveRef.current = false;
      return;
    }

    // Check if section just became active
    const justActivated = !previousActiveRef.current && isActive;
    previousActiveRef.current = isActive;

    // Run effect if: step changed OR section just became active on step 1
    const shouldRun =
      currentStep !== previousStepRef.current ||
      (justActivated && currentStep === 1);

    if (!shouldRun) return;

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
        gsap.set(screen, { autoAlpha: 0, xPercent: -50, yPercent: -50 });
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
        // Determine which cards to animate based on mobile state
        const startIndex = mobile ? 3 : 0;
        const endIndex = mobile ? 6 : 3;

        // Reset cards first
        for (let i = startIndex; i < endIndex; i++) {
          const card = cardsRef.current[i];
          if (card) {
            gsap.set(card, { autoAlpha: 0, y: 30 });
          }
        }

        // Then animate them in with stagger
        for (let i = startIndex; i < endIndex; i++) {
          const card = cardsRef.current[i];
          const relativeIndex = i - startIndex;
          if (card) {
            gsap.to(card, {
              autoAlpha: 1,
              y: 0,
              duration: 0.4,
              delay: 0.6 + relativeIndex * 0.3,
              ease: "power2.inout",
              overwrite: true,
              onComplete: () => {
                // After the last card animates in on mobile, show first card content
                if (mobile && relativeIndex === 2) {
                  setTimeout(() => {
                    setMobileCardContentShown(1);
                  }, 200);
                }
              },
            });
          }
        }
      }
    }

    previousStepRef.current = currentStep;
  }, [isActive, currentStep, mobile]);

  // Detect mobile after hydration to avoid SSR mismatch
  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => setMobile(isMobile());
    // run once after hydration
    update();
    // update on resize/orientation changes
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const [showMethodTooltip, setShowMethodTooltip] = useState<boolean>(false);
  const tooltipText = useCopy("context_button_method_tooltip");

  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );
  const [mobileCardContentShown, setMobileCardContentShown] = useState<
    number | null
  >(null);

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
          className="absolute left-1/2 top-1/2 w-full md:max-w-[1000px] px-8 h-full max-h-[1100px] py-8 opacity-0 invisible flex flex-col gap-16 justify-center items-center"
        >
          <h3 className="text-[40px] md:text-[96px] text-grey-text text-center font-museo-moderno font-light leading-[114%]">
            {useCopy("closure_title")}
          </h3>
          <p className="text-[18px] md:text-[32px] text-center text-pretty">
            {useCopy("closure_paragraph_1")}
          </p>
        </div>
        <div
          ref={screen2Ref}
          className="absolute left-1/2 top-1/2 w-full md:max-w-[90%] md:px-0 px-5  h-full md:max-h-[90%] py-8 opacity-0 invisible"
        >
          <div className="relative flex flex-col items-start h-full w-full gap-4">
            <div className="text-[24px] md:text-[32px] max-w-[1000px] font-museo-moderno mb-0 md:mb-6">
              {useCopy("closure_paragraph_2")}
            </div>
            <div className="hidden md:flex flex-row gap-8 items-start overflow-visible">
              <Card
                cardIndex={1}
                ref={(el) => {
                  cardsRef.current[0] = el;
                }}
                setExpandedCardIndex={setExpandedCardIndex}
                onMobileCardCardContentShownChange={() => {}}
                expandedCardIndex={expandedCardIndex}
                copy={{
                  title: useCopy("closure_card_1_title"),
                  text: useCopy("closure_card_1_text"),
                  summary: useCopy("closure_card_1_summary"),
                }}
              />
              <Card
                cardIndex={2}
                ref={(el) => {
                  cardsRef.current[1] = el;
                }}
                setExpandedCardIndex={setExpandedCardIndex}
                onMobileCardCardContentShownChange={() => {}}
                expandedCardIndex={expandedCardIndex}
                copy={{
                  title: useCopy("closure_card_2_title"),
                  text: useCopy("closure_card_2_text"),
                  summary: useCopy("closure_card_2_summary"),
                }}
              />
              <Card
                cardIndex={3}
                ref={(el) => {
                  cardsRef.current[2] = el;
                }}
                setExpandedCardIndex={setExpandedCardIndex}
                onMobileCardCardContentShownChange={() => {}}
                expandedCardIndex={expandedCardIndex}
                copy={{
                  title: useCopy("closure_card_3_title"),
                  text: useCopy("closure_card_3_text"),
                  summary: useCopy("closure_card_3_summary"),
                }}
              />
            </div>
            <div className="md:hidden h-full w-full flex-1 overflow-hidden flex flex-col gap-4">
              <Card
                cardIndex={1}
                ref={(el) => {
                  cardsRef.current[3] = el;
                }}
                onMobileCardCardContentShownChange={() =>
                  setMobileCardContentShown(1)
                }
                setExpandedCardIndex={setExpandedCardIndex}
                expandedCardIndex={expandedCardIndex}
                mobile={mobile}
                mobileCardContentShown={mobileCardContentShown}
                copy={{
                  title: useCopy("closure_card_1_title"),
                  text: useCopy("closure_card_1_text"),
                  summary: useCopy("closure_card_1_summary"),
                }}
              />
              <Card
                cardIndex={2}
                ref={(el) => {
                  cardsRef.current[4] = el;
                }}
                setExpandedCardIndex={setExpandedCardIndex}
                onMobileCardCardContentShownChange={() =>
                  setMobileCardContentShown(2)
                }
                expandedCardIndex={expandedCardIndex}
                mobile={mobile}
                mobileCardContentShown={mobileCardContentShown}
                copy={{
                  title: useCopy("closure_card_2_title"),
                  text: useCopy("closure_card_2_text"),
                  summary: useCopy("closure_card_2_summary"),
                }}
              />
              <Card
                cardIndex={3}
                ref={(el) => {
                  cardsRef.current[5] = el;
                }}
                setExpandedCardIndex={setExpandedCardIndex}
                onMobileCardCardContentShownChange={() =>
                  setMobileCardContentShown(3)
                }
                expandedCardIndex={expandedCardIndex}
                mobile={mobile}
                mobileCardContentShown={mobileCardContentShown}
                copy={{
                  title: useCopy("closure_card_3_title"),
                  text: useCopy("closure_card_3_text"),
                  summary: useCopy("closure_card_3_summary"),
                }}
              />
            </div>
            <div className="md:hidden w-full">
              <CTAButtons
                showMethodTooltip={showMethodTooltip}
                setShowMethodTooltip={setShowMethodTooltip}
                tooltipText={tooltipText}
              />
              {/* Mobile tooltip */}
              {showMethodTooltip && (
                <div className="copy-text absolute bottom-[54px] mb-2 right-0 left-0 text-black-blue bg-grey-text text-[18px] w-auto p-4 rounded-[20px] pointer-events-none normal-case text-left leading-[100%]">
                  {tooltipText}
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:block absolute bottom-0 right-0  pb-0">
            <CTAButtons
              showMethodTooltip={showMethodTooltip}
              setShowMethodTooltip={setShowMethodTooltip}
              tooltipText={tooltipText}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CTAButtons({
  showMethodTooltip,
  setShowMethodTooltip,
  tooltipText,
}: {
  showMethodTooltip: boolean;
  setShowMethodTooltip: (value: boolean) => void;
  tooltipText: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center md:items-start gap-2 md:gap-4">
      <p className="text-[14px] font-bold">Explore:</p>
      <div className="flex gap-4 w-full">
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
          onClick={() => setShowMethodTooltip(!showMethodTooltip)}
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
              className={`${
                showMethodTooltip ? "stroke-black-blue" : "stroke-grey-text"
              } transition`}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.749 16.2501C14.1581 16.2501 13.5729 16.1337 13.0269 15.9076C12.481 15.6814 11.9849 15.35 11.567 14.9321C11.1492 14.5142 10.8177 14.0182 10.5916 13.4722C10.3654 12.9262 10.249 12.3411 10.249 11.7501C10.249 11.1592 10.3654 10.574 10.5916 10.028C10.8177 9.48208 11.1492 8.986 11.567 8.56814C11.9849 8.15028 12.481 7.81881 13.0269 7.59266C13.5729 7.36652 14.1581 7.25012 14.749 7.25012C15.9425 7.25012 17.0871 7.72423 17.931 8.56814C18.7749 9.41205 19.249 10.5566 19.249 11.7501C19.249 12.9436 18.7749 14.0882 17.931 14.9321C17.0871 15.776 15.9425 16.2501 14.749 16.2501Z"
              className={`${
                showMethodTooltip
                  ? "stroke-black-blue fill-black-blue"
                  : "stroke-grey-text fill-grey-text"
              } transition`}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* Desktop tooltip */}
          {showMethodTooltip && (
            <div className="copy-text hidden md:block absolute bottom-[54px] mb-2 -right-px text-black-blue bg-grey-text text-[18px] w-[600px] p-4 rounded-[20px] pointer-events-none normal-case text-left leading-[100%]">
              {tooltipText}
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

const Card = React.forwardRef<
  HTMLDivElement,
  {
    cardIndex: number;
    setExpandedCardIndex: (index: number | null) => void;
    onMobileCardCardContentShownChange?: (index: number | null) => void;
    expandedCardIndex: number | null;
    mobile?: boolean;
    mobileCardContentShown?: number | null;
    copy: {
      title: React.ReactNode;
      text: React.ReactNode;
      summary: React.ReactNode;
    };
  }
>(
  (
    {
      cardIndex,
      setExpandedCardIndex,
      onMobileCardCardContentShownChange,
      expandedCardIndex,
      mobile,
      mobileCardContentShown,
      copy,
    },
    ref
  ) => {
    const isExpanded = expandedCardIndex === cardIndex;
    const isShownOnMobile = mobile && mobileCardContentShown === cardIndex;
    return (
      <div
        ref={ref}
        className={`card flex flex-col ${
          !mobile && expandedCardIndex === null ? "h-full" : ""
        } ${mobile && expandedCardIndex === null ? "self-stretch" : ""} ${
          isExpanded ? "basis-[45%]" : "md:flex-1"
        } ${mobile && isShownOnMobile ? "flex-1 min-h-0 mt-6" : ""}`}
        onClick={() => {
          if (onMobileCardCardContentShownChange) {
            onMobileCardCardContentShownChange(cardIndex);
            if (expandedCardIndex !== cardIndex) {
              setExpandedCardIndex(null);
            }
          }
        }}
      >
        <div
          className={`relative flex flex-col md:flex-1 md:min-h-0 ${
            isShownOnMobile ? "flex-1 min-h-0" : ""
          } ${
            isExpanded ? "bg-grey-text max-h-full" : "bg-bright-green"
          } rounded-[20px] md:rounded-bl-none px-5 md:px-[30px] pb-5 md:pb-[30px] ${
            isShownOnMobile ? "pt-7" : "pt-5"
          } md:pt-10 transition-colors`}
        >
          <div
            className={`text-[24px] md:text-[32px] font-bold font-museo-moderno leading-[108%] ${
              mobileCardContentShown === cardIndex ? "mb-2" : ""
            } md:mb-5 shrink-0`}
            style={{ color: "var(--black-blue)" }}
          >
            {copy.title}
          </div>
          <div
            className={`overflow-y-auto md:flex-1 md:min-h-0 ${
              isShownOnMobile ? "flex-1 min-h-0" : ""
            }`}
          >
            {(!mobile && !isExpanded) ||
            (mobile && mobileCardContentShown === cardIndex && !isExpanded) ? (
              <p
                className="text-[14px] md:text-[18px]"
                style={{ color: "var(--black-blue)" }}
              >
                {copy.summary}
              </p>
            ) : null}
            {(!mobile && isExpanded) ||
            (mobile && mobileCardContentShown === cardIndex && isExpanded) ? (
              <div
                className="text-[14px] md:text-[18px] copy-text overflow-y-auto flex-1 pr-2"
                style={{ color: "var(--black-blue)" }}
              >
                {copy.text}
              </div>
            ) : null}
          </div>

          {!mobile || (mobile && mobileCardContentShown === cardIndex) ? (
            <div
              className={`absolute rounded-[50%] ${
                isExpanded
                  ? "bg-bright-green text-black-blue"
                  : "bg-black-blue text-bright-green"
              } font-museo-moderno text-[24px] font-bold top-[calc(-43px/2)] left-1/2 -translate-x-1/2 w-[43px] h-[43px] flex items-center justify-center`}
            >
              0{cardIndex}
            </div>
          ) : null}
        </div>
        {!mobile || (mobile && mobileCardContentShown === cardIndex) ? (
          <div
            className={`uppercase md:self-start self-center ${
              isExpanded
                ? "bg-bright-green text-black-blue"
                : "bg-black-blue text-grey-text"
            } rounded-bl-[5px] md:rounded-bl-xl rounded-br-[5px] md:rounded-br-xl py-1 md:py-4 px-2 md:px-8 flex gap-2 items-center justify-between font-semibold text-[12px] md:text-[14px] cursor-pointer`}
            onClick={
              isExpanded
                ? () => setExpandedCardIndex(null)
                : (e) => {
                    e.stopPropagation();
                    setExpandedCardIndex(cardIndex);
                  }
            }
          >
            <span>
              {isExpanded
                ? useCopy("qu_panel_button_summary")
                : useCopy("qu_panel_button_details")}
            </span>
            {isExpanded ? (
              <img
                src={`${basePath}/icons/minus.svg`}
                alt="minus icon"
                height={2}
                className="w-2.5 md:w-3.5"
              />
            ) : (
              <img
                src={`${basePath}/icons/plus.svg`}
                alt="plus icon"
                className="w-2.5 md:w-3.5 h-2.5 md:h-3.5"
              />
            )}
          </div>
        ) : null}
      </div>
    );
  }
);

Card.displayName = "Card";
