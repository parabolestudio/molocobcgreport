"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useCopy } from "@/contexts/CopyContext";
import { fadeOut, fadeIn } from "@/helpers/scroll";
import { basePath, isMobile } from "@/helpers/general";

export default function ClosureSection({
  isActive,
  currentStep,
  scrollToSection,
}: {
  isActive: boolean;
  currentStep: number;
  scrollToSection: (sectionIndex: number, step?: number) => void;
}) {
  const screen1Ref = useRef<HTMLDivElement>(null);
  const screen2Ref = useRef<HTMLDivElement>(null);
  const previousStepRef = useRef(-1);
  const previousActiveRef = useRef(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const desktopCardsContainerRef = useRef<HTMLDivElement>(null);
  const mobileCardsContainerRef = useRef<HTMLDivElement>(null);

  const screenRefs = [screen1Ref, screen2Ref];
  const [mobile, setMobile] = useState(false);
  const [cardsAnimatedIn, setCardsAnimatedIn] = useState(false);

  // Call all useCopy hooks at the top level
  const closureTitle = useCopy("closure_title");
  const closureParagraph1 = useCopy("closure_paragraph_1");
  const closureParagraph2 = useCopy("closure_paragraph_2");
  const closureCard1Title = useCopy("closure_card_1_title");
  const closureCard1Text = useCopy("closure_card_1_text");
  const closureCard1Summary = useCopy("closure_card_1_summary");
  const closureCard2Title = useCopy("closure_card_2_title");
  const closureCard2Text = useCopy("closure_card_2_text");
  const closureCard2Summary = useCopy("closure_card_2_summary");
  const closureCard3Title = useCopy("closure_card_3_title");
  const closureCard3Text = useCopy("closure_card_3_text");
  const closureCard3Summary = useCopy("closure_card_3_summary");
  const quPanelButtonSummary = useCopy("qu_panel_button_summary");
  const quPanelButtonDetails = useCopy("qu_panel_button_details");

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
    } else if (currentStep >= 1) {
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
    // Set cards initial state - only show on step 2+
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.set(card, { autoAlpha: 0, y: 30 });
      }
    });
    // Set card containers to invisible initially
    gsap.set(
      [desktopCardsContainerRef.current, mobileCardsContainerRef.current],
      { opacity: 0 }
    );
  }, []);

  // Handle step transitions
  useEffect(() => {
    if (!isActive) {
      // Fade out cards smoothly when leaving the section
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.killTweensOf(card);
          fadeOut(card);
        }
      });
      // Reset states when leaving the section
      setMobileCardContentShown(null);
      setExpandedCardIndex(null);
      setCardsAnimatedIn(false);
      previousActiveRef.current = false;
      return;
    }

    // Check if section just became active
    const justActivated = !previousActiveRef.current && isActive;
    previousActiveRef.current = isActive;

    // Run effect if: step changed OR section just became active on step 1 or 2
    const shouldRun =
      currentStep !== previousStepRef.current ||
      (justActivated && currentStep >= 1);

    if (!shouldRun) return;

    const screens = screenRefs.map((ref) => ref.current).filter(Boolean);
    if (screens.length === 0 || currentStep < 0) return;

    const previousStep = previousStepRef.current;

    // Map steps to screen indices (step 0 -> screen 0, steps 1-5 -> screen 1)
    const getScreenIndex = (step: number) => (step === 0 ? 0 : 1);
    const currentScreenIndex = getScreenIndex(currentStep);
    const previousScreenIndex =
      previousStep >= 0 ? getScreenIndex(previousStep) : -1;

    // Kill all ongoing animations first and reset card states
    screens.forEach((screen) => gsap.killTweensOf(screen));
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.killTweensOf(card);
        // Ensure cards are in a known state after killing tweens
        if (!isActive || currentStep < 2) {
          gsap.set(card, { autoAlpha: 0, y: 30, clearProps: "all" });
        }
      }
    });

    // Ensure card containers are hidden when on step < 2
    if (currentStep < 2) {
      gsap.set(
        [desktopCardsContainerRef.current, mobileCardsContainerRef.current],
        { opacity: 0 }
      );
    }

    // Hide all screens immediately except current and previous
    screens.forEach((screen, i) => {
      if (i !== currentScreenIndex && i !== previousScreenIndex) {
        gsap.set(screen, { autoAlpha: 0, xPercent: -50, yPercent: -50 });
      }
    });

    // Fade out previous screen (only if it's different from current)
    if (
      previousScreenIndex >= 0 &&
      previousScreenIndex !== currentScreenIndex
    ) {
      const previousScreen = screens[previousScreenIndex];
      if (previousScreen) {
        gsap.killTweensOf(previousScreen);
        fadeOut(previousScreen);
      }

      // Fade out cards when leaving screen2
      if (previousStep >= 1) {
        cardsRef.current.forEach((card) => {
          if (card) {
            gsap.killTweensOf(card);
            fadeOut(card);
          }
        });
      }
    }

    // Fade in current screen
    const currentScreen = screens[currentScreenIndex];
    if (currentScreen) {
      // Kill any existing animations first
      gsap.killTweensOf(currentScreen);

      // Only fade in if transitioning from a different screen
      if (previousScreenIndex !== currentScreenIndex) {
        fadeIn(currentScreen);
      } else {
        // If we're staying on the same screen, ensure it's fully visible
        gsap.set(currentScreen, { autoAlpha: 1, xPercent: -50, yPercent: -50 });
      }

      // Animate cards when entering step 2 only
      // Only animate when transitioning from step 0 or 1, or when section just became active on step 2
      const shouldAnimateCards =
        (currentStep >= 2 && previousStep < 2) || // Scrolling forward to step 2
        (justActivated && currentStep >= 2); // Section just became active on step 2

      if (shouldAnimateCards) {
        // Determine which cards to animate based on mobile state
        const startIndex = mobile ? 3 : 0;
        const endIndex = mobile ? 6 : 3;
        const cardsToAnimate = [];

        // Show the appropriate container
        const containerToShow = mobile
          ? mobileCardsContainerRef.current
          : desktopCardsContainerRef.current;
        if (containerToShow) {
          gsap.set(containerToShow, { opacity: 1 });
        }

        // Reset cards first to ensure clean state
        for (let i = startIndex; i < endIndex; i++) {
          const card = cardsRef.current[i];
          if (card) {
            gsap.killTweensOf(card);
            gsap.set(card, { autoAlpha: 0, y: 30 });
            cardsToAnimate.push(card);
          }
        }

        // Then animate them in with stagger using gsap's built-in stagger
        if (cardsToAnimate.length > 0) {
          gsap.to(cardsToAnimate, {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
            delay: 0.6,
            stagger: {
              each: 0.3,
              from: "start",
            },
            ease: "power2.inout",
            overwrite: "auto",
            force3D: true,
            onComplete: () => {
              // Mark cards as animated in
              setCardsAnimatedIn(true);
            },
          });
        }
      } else if (currentStep >= 2) {
        // If we're on step 2+ but not animating cards (e.g., scrolling between steps 2-5),
        // mark cards as already animated in and show containers
        setCardsAnimatedIn(true);
        const containerToShow = mobile
          ? mobileCardsContainerRef.current
          : desktopCardsContainerRef.current;
        if (containerToShow) {
          gsap.set(containerToShow, { opacity: 1 });
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

  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );
  const [mobileCardContentShown, setMobileCardContentShown] = useState<
    number | null
  >(null);

  // Auto-expand cards based on step index
  useEffect(() => {
    if (!isActive) return;

    // If we're on step 2+, cards should be visible
    // Only auto-expand if cards have animated in, OR if we're scrolling backwards (previousStepRef > currentStep)
    const isScrollingBackwards = previousStepRef.current > currentStep;
    const shouldAutoExpand = cardsAnimatedIn || isScrollingBackwards;

    if (!shouldAutoExpand && currentStep >= 2) {
      // Cards are animating, wait for them to finish
      return;
    }

    if (currentStep >= 2) {
      if (!mobile) {
        currentStep === 2 ? setExpandedCardIndex(null) : null;
        setExpandedCardIndex(currentStep - 2);
      } else {
        currentStep === 2 ? setMobileCardContentShown(null) : null;
        setMobileCardContentShown(currentStep - 2);
      }
    }
  }, [currentStep, isActive, cardsAnimatedIn]);

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
            {closureTitle}
          </h3>
          <p className="text-[18px] md:text-[32px] text-center text-pretty">
            {closureParagraph1}
          </p>
        </div>
        <div
          ref={screen2Ref}
          className="absolute left-1/2 top-1/2 w-full md:max-w-[calc(min(90%,1728px))] md:px-0 px-5  h-full md:max-h-[95%] py-8 opacity-0 invisible"
        >
          <div
            className={`relative flex flex-col items-start h-full w-full gap-4 ${
              currentStep === 1 ? "justify-center" : "justify-start"
            }`}
          >
            {currentStep === 1 && (
              <div
                className={`text-[24px] md:text-balance md:text-center font-extralight font-museo-moderno mb-0 md:text-[96px]`}
              >
                {closureParagraph2}
              </div>
            )}
            {currentStep >= 2 && (
              <div
                className={`text-[24px] md:text-[40px] max-w-[900px] mx-auto leading-[115%] md:text-balance md:text-center font-museo-moderno mb-0 md:mb-4 `}
              >
                {closureParagraph2}
              </div>
            )}
            <div
              ref={desktopCardsContainerRef}
              className={`hidden flex-col gap-8 items-start overflow-visible w-full ${
                currentStep < 2 ? "md:hidden" : "md:flex"
              }`}
            >
              <Card
                cardIndex={1}
                ref={(el) => {
                  cardsRef.current[0] = el;
                }}
                setExpandedCardIndex={setExpandedCardIndex}
                onMobileCardCardContentShownChange={() => {}}
                expandedCardIndex={expandedCardIndex}
                copy={{
                  title: closureCard1Title,
                  text: closureCard1Text,
                  summary: closureCard1Summary,
                }}
                buttonCopy={{
                  summary: quPanelButtonSummary,
                  details: quPanelButtonDetails,
                }}
                scrollToSection={scrollToSection}
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
                  title: closureCard2Title,
                  text: closureCard2Text,
                  summary: closureCard2Summary,
                }}
                buttonCopy={{
                  summary: quPanelButtonSummary,
                  details: quPanelButtonDetails,
                }}
                scrollToSection={scrollToSection}
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
                  title: closureCard3Title,
                  text: closureCard3Text,
                  summary: closureCard3Summary,
                }}
                buttonCopy={{
                  summary: quPanelButtonSummary,
                  details: quPanelButtonDetails,
                }}
                scrollToSection={scrollToSection}
              />
            </div>
            <div
              ref={mobileCardsContainerRef}
              className={`h-full w-full flex-1 overflow-hidden flex flex-col gap-4 ${
                currentStep < 2 ? "hidden" : "md:hidden"
              }`}
            >
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
                  title: closureCard1Title,
                  text: closureCard1Text,
                  summary: closureCard1Summary,
                }}
                buttonCopy={{
                  summary: quPanelButtonSummary,
                  details: quPanelButtonDetails,
                }}
                scrollToSection={scrollToSection}
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
                  title: closureCard2Title,
                  text: closureCard2Text,
                  summary: closureCard2Summary,
                }}
                buttonCopy={{
                  summary: quPanelButtonSummary,
                  details: quPanelButtonDetails,
                }}
                scrollToSection={scrollToSection}
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
                  title: closureCard3Title,
                  text: closureCard3Text,
                  summary: closureCard3Summary,
                }}
                buttonCopy={{
                  summary: quPanelButtonSummary,
                  details: quPanelButtonDetails,
                }}
                scrollToSection={scrollToSection}
              />
            </div>
          </div>
        </div>
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
    buttonCopy: {
      summary: React.ReactNode;
      details: React.ReactNode;
    };
    scrollToSection: (sectionIndex: number, step?: number) => void;
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
      buttonCopy,
      scrollToSection,
    },
    ref
  ) => {
    const isExpanded = expandedCardIndex === cardIndex;
    const isShownOnMobile = mobile && mobileCardContentShown === cardIndex;
    return (
      <div
        ref={ref}
        className={`card flex flex-col md:w-full cursor-pointer
          ${!mobile && expandedCardIndex === null ? "h-full" : ""} 
          ${mobile && expandedCardIndex === null ? "self-stretch" : ""} 
          ${isExpanded ? "" : ""}
          ${mobile && isShownOnMobile ? "flex-1 min-h-0 mt-6" : ""} `}
        onClick={() => {
          if (onMobileCardCardContentShownChange) {
            onMobileCardCardContentShownChange(cardIndex);
            scrollToSection(3, cardIndex + 2);
            if (expandedCardIndex !== cardIndex) {
              setExpandedCardIndex(null);
            }
          }
          if (!mobile) {
            if (isExpanded) {
              // setExpandedCardIndex(null);
            } else {
              setExpandedCardIndex(cardIndex);
              scrollToSection(3, cardIndex + 2);
            }
          }
        }}
      >
        <div
          className={`relative flex flex-col md:flex-1 md:min-h-0 md:w-full ${
            isShownOnMobile ? "flex-1 min-h-0" : ""
          } ${
            isExpanded ? "bg-grey-text max-h-full" : "bg-bright-green"
          } rounded-[20px] px-5 md:px-10 pb-5 md:py-6 ${
            isShownOnMobile ? "pt-7" : "pt-5"
          }  transition-colors`}
        >
          <div
            className={`text-[24px] md:text-[32px] font-bold font-museo-moderno leading-[108%] ${
              mobileCardContentShown === cardIndex ? "mb-2 md:mb-2" : ""
            }  shrink-0`}
            style={{ color: "var(--black-blue)" }}
          >
            {copy.title}
          </div>
          <div
            className={`overflow-y-auto md:flex ${
              !mobile && isExpanded ? "md:mt-3" : ""
            } `}
            style={{
              overscrollBehavior: "contain",
            }}
          >
            {(!mobile && isExpanded) ||
            (mobile && mobileCardContentShown === cardIndex && !isExpanded) ? (
              <p
                className="text-[14px] md:text-[18px] md:flex-1 md:border-r border-black-blue border-dashed md:pr-6"
                style={{ color: "var(--black-blue)" }}
              >
                {copy.summary}
              </p>
            ) : null}
            {(!mobile && isExpanded) ||
            (mobile && mobileCardContentShown === cardIndex && isExpanded) ? (
              <div
                className="text-[14px] md:text-[18px] copy-text overflow-y-auto pr-2 md:flex-1 md:pl-6"
                style={{
                  color: "var(--black-blue)",
                  overscrollBehavior: "contain",
                }}
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
              } font-museo-moderno text-[24px] font-bold
              w-[43px] h-[43px] flex items-center justify-center
              top-[calc(-43px/2)] left-1/2 -translate-x-1/2 
              md:left-[calc(-43px/2)] md:translate-x-0 md:top-1/2 md:-translate-y-1/2
              `}
            >
              0{cardIndex}
            </div>
          ) : null}
        </div>
        {mobile && mobile && mobileCardContentShown === cardIndex ? (
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
            <span>{isExpanded ? buttonCopy.summary : buttonCopy.details}</span>
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
