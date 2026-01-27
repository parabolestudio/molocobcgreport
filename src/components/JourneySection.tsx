"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { isMobile } from "@/helpers/general";
import { useCopy } from "@/contexts/CopyContext";
import { ANIMATION_CONFIG } from "@/helpers/scroll";
import { mapLocaleToLanguage } from "@/contexts/LocaleProvider";
import { useSearchParams } from "next/navigation";
import { JourneyPathSVG_EN } from "./JourneyPath/JourneyPathSVG_EN";
import { JourneyPathSVG_ZH } from "./JourneyPath/JourneyPathSVG_ZH";
import { JourneyPathSVG_KO } from "./JourneyPath/JourneyPathSVG_KO";
import { JourneyPathSVG_JA } from "./JourneyPath/JourneyPathSVG_JA";

gsap.registerPlugin(MotionPathPlugin);

export default function JourneySection({
  isActive,
  currentStep,
}: {
  isActive: boolean;
  currentStep: number;
}) {
  const introRef = useRef<HTMLDivElement>(null);
  const journeyPathRef = useRef<HTMLDivElement>(null);
  const statRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const searchParams = useSearchParams();
  const language = mapLocaleToLanguage(searchParams?.get("locale"));

  // Refs for intro screen animated circles
  const introCirclesDesktopRef = useRef<SVGGElement>(null);
  const introCirclesMobileRef = useRef<SVGGElement>(null);

  const [mobile, setMobile] = useState(false);

  const [showMethodTooltip, setShowMethodTooltip] = useState<boolean>(false);
  const previousStepRef = useRef(-1);

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

  // Set initial visibility
  useEffect(() => {
    const intro = introRef.current;
    const journeyPath = journeyPathRef.current;
    const stats = statRefs.map((ref) => ref.current);

    if (!intro || !journeyPath || stats.some((s) => !s)) return;
    // Get all children of each stat container
    const allStatChildren = stats.map((stat) =>
      stat!.querySelectorAll(".stat-content"),
    );
    const flatStatChildren = allStatChildren.flat();

    // Initial state - all stats and journey path hidden, intro text visible
    gsap.set([journeyPath, ...flatStatChildren], { autoAlpha: 0, y: 30 });
    gsap.set(intro, { autoAlpha: 1, y: 0 });
  }, []);

  // Handle step transitions
  useEffect(() => {
    if (!isActive) return; // Only animate when this section is active
    if (currentStep === previousStepRef.current) return;

    const intro = introRef.current;
    const journeyPath = journeyPathRef.current;
    const stats = statRefs.map((ref) => ref.current);

    if (!intro || !journeyPath || stats.some((s) => !s)) return;
    const previousStep = previousStepRef.current;

    // Kill all ongoing animations first
    gsap.killTweensOf([intro, journeyPath]);

    // Handle journey path and visibility based on current step
    if (currentStep === 0) {
      // On intro screen

      // Hide journey path
      gsap.to(journeyPath, {
        autoAlpha: 0,
        y: 30,
        duration: ANIMATION_CONFIG.duration,
        ease: ANIMATION_CONFIG.fadeOut.ease,
      });

      // Hide all stats immediately
      stats.forEach((stat) => {
        if (stat) {
          const statContent = stat.querySelectorAll(".stat-content");
          gsap.killTweensOf(statContent);
          gsap.set(statContent, { autoAlpha: 0 });
        }
      });

      // Show intro text
      gsap.killTweensOf(intro);
      gsap.fromTo(
        intro,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          duration: ANIMATION_CONFIG.duration,
          ...ANIMATION_CONFIG.fadeIn,
        },
      );
    } else {
      // On a stat screen (steps 1-4)

      // Fade out intro text if coming from intro, otherwise hide immediately
      if (previousStep === 0) {
        gsap.to(intro, {
          autoAlpha: 0,
          duration: ANIMATION_CONFIG.duration,
          ...ANIMATION_CONFIG.fadeOut,
        });
      } else {
        gsap.set(intro, { autoAlpha: 0 });
      }

      // Ensure journey path is visible - kill animations first
      gsap.killTweensOf(journeyPath);

      if (previousStep === 0 || previousStep === -1) {
        // Coming from intro or initial load - fade in
        gsap.fromTo(
          journeyPath,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: ANIMATION_CONFIG.duration,
            ease: ANIMATION_CONFIG.fadeIn.ease,
            delay: ANIMATION_CONFIG.fadeIn.delay,
            overwrite: true,
          },
        );
      } else {
        // Already on stats - ensure it's visible immediately
        gsap.set(journeyPath, { autoAlpha: 1, y: 0 });
      }

      // Hide all stats, then show only the current one
      stats.forEach((stat, index) => {
        if (stat) {
          const statContent = stat.querySelectorAll(".stat-content");
          gsap.killTweensOf(statContent);

          const statIndex = index + 1; // Stats are 1-indexed

          if (statIndex === currentStep) {
            // Current stat - fade it in
            gsap.fromTo(
              statContent,
              { autoAlpha: 0, y: 30 },
              {
                autoAlpha: 1,
                duration: ANIMATION_CONFIG.duration,
                ...ANIMATION_CONFIG.fadeIn,
              },
            );
          } else {
            // Other stats - hide immediately
            gsap.set(statContent, { autoAlpha: 0 });
          }
        }
      });
    }

    previousStepRef.current = currentStep;
  }, [isActive, currentStep]);

  const tooltipText = useCopy("context_button_method_tooltip");

  const NUM_INTRO_CIRCLES = 9;
  const INTRO_CIRCLE_DURATION = mobile ? 25 : 50;

  // Animate circles along the intro screen paths
  useEffect(() => {
    if (!isActive || currentStep !== 0) return;

    // Animate desktop circles
    const desktopCirclesContainer = introCirclesDesktopRef.current;
    const desktopPath = document.querySelector(
      ".context_path_desktop",
    ) as SVGPathElement;

    if (!mobile && desktopCirclesContainer && desktopPath) {
      const desktopCircles =
        desktopCirclesContainer.querySelectorAll(".intro-circle");

      desktopCircles.forEach((circle, index) => {
        const delay = (index / NUM_INTRO_CIRCLES) * INTRO_CIRCLE_DURATION;

        gsap.to(circle, {
          motionPath: {
            path: desktopPath,
            align: desktopPath,
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: 0,
            end: 1,
          },
          duration: INTRO_CIRCLE_DURATION,
          ease: "none",
          repeat: -1,
          delay: -delay,
        });
      });
    }

    // Animate mobile circles
    const mobileCirclesContainer = introCirclesMobileRef.current;
    const mobilePath = document.querySelector(
      ".context_path_mobile",
    ) as SVGPathElement;

    if (mobile && mobileCirclesContainer && mobilePath) {
      const mobileCircles =
        mobileCirclesContainer.querySelectorAll(".intro-circle");

      mobileCircles.forEach((circle, index) => {
        const delay = (index / NUM_INTRO_CIRCLES) * INTRO_CIRCLE_DURATION;

        gsap.to(circle, {
          motionPath: {
            path: mobilePath,
            align: mobilePath,
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: 0,
            end: 1,
          },
          duration: INTRO_CIRCLE_DURATION,
          ease: "none",
          repeat: -1,
          delay: -delay,
        });
      });
    }

    return () => {
      if (desktopCirclesContainer && mobileCirclesContainer) {
        const allCircles = [
          ...desktopCirclesContainer.querySelectorAll(".intro-circle"),
          ...mobileCirclesContainer.querySelectorAll(".intro-circle"),
        ];
        gsap.killTweensOf(allCircles);
      }
    };
  }, [isActive, currentStep, mobile]);

  return (
    <div
      className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
        isActive
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      data-section="journey"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Intro screen - Outer wrapper for positioning (Tailwind), inner wrapper for animation (GSAP) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:max-w-[90%] px-8 h-full max-h-[90dvh] md:max-h-[1000px] pt-8 pb-0 md:py-8">
          <div
            ref={introRef}
            className="opacity-0 invisible flex flex-col justify-between items-start h-full"
          >
            {/* Desktop */}
            <div className="hidden md:flex relative flex-col justify-between items-start h-full w-full py-2">
              <div className="w-full">
                <div className="text-[18px] md:text-[32px] max-w-[900px] text-pretty">
                  {useCopy("context_intro")}
                </div>
              </div>
              <div className="w-full flex justify-between items-end gap-2">
                <div className="text-[18px] md:text-[32px] max-w-[900px] text-pretty">
                  {useCopy("context_buttons_text")}
                </div>
                <MethodologyButton
                  tooltipText={tooltipText}
                  setShowMethodTooltip={setShowMethodTooltip}
                  showMethodTooltip={showMethodTooltip}
                />
              </div>
              <div
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: "-8%", right: "-8%" }}
              >
                <svg
                  fill="none"
                  viewBox="0 0 1610 264"
                  style={{
                    width: "80%",
                    marginLeft: "-0.2%",
                    overflow: "visible",
                  }}
                >
                  <g>
                    {/* Animated circles in intro screen */}
                    <g ref={introCirclesDesktopRef}>
                      {!mobile &&
                        Array.from({ length: NUM_INTRO_CIRCLES }).map(
                          (_, i) => (
                            <circle
                              key={i}
                              className="intro-circle"
                              fill="#303061"
                              r={7}
                            />
                          ),
                        )}
                    </g>
                    <circle
                      cx="7"
                      cy="7"
                      r="7"
                      fill="#60E2B7"
                      transform="matrix(-1 0 0 1 1609.75 141.75)"
                    />
                    <path
                      stroke="#60E2B7"
                      strokeWidth="1.5"
                      d="M.75 172.65v-99.4c0-40 32.4-72.4 72.3-72.4s72.3 32.4 72.3 72.4v117.2c0 40.1 32.5 72.7 72.6 72.7 40.1 0 72.6-32.5 72.6-72.7V72.95c0-39.9 32.3-72.2 72.1-72.2s72.1 32.3 72.1 72.2v117.7c0 40 32.4 72.5 72.3 72.5s72.3-32.4 72.3-72.5V73.55c0-40.2 32.5-72.7 72.6-72.7 40.1 0 72.6 32.6 72.6 72.7v116.9c0 40.1 32.5 72.7 72.7 72.7s72.7-32.5 72.7-72.7V72.95c0-39.9 32.3-72.2 72.2-72.2 39.9 0 72.2 32.3 72.2 72.2v117.7c0 40 32.4 72.5 72.5 72.5s72.5-32.4 72.5-72.5V73.55c0-40.2 32.6-72.7 72.7-72.7s72.7 33 72.7 73.2 33 74.2 73.7 74.2h223.8"
                      className="context_path_desktop"
                    />
                  </g>
                </svg>
              </div>
            </div>
            {/* Mobile */}
            <div className="flex md:hidden relative flex-col justify-between items-start h-full w-full">
              <div className="w-full h-full flex flex-col justify-between items-start">
                <div className="flex flex-col gap-8">
                  <div className="text-[18px] md:text-[32px] max-w-[900px] text-pretty">
                    {useCopy("context_intro")}
                  </div>
                  <div className="text-[18px] md:text-[32px] max-w-[900px] text-pretty">
                    {useCopy("context_buttons_text")}
                  </div>
                </div>
                <div className="-ml-8 w-full my-2">
                  <svg
                    fill="none"
                    viewBox="0 0 379 109"
                    style={{ width: "110%", overflow: "visible" }}
                  >
                    <g>
                      {/* Animated circles */}
                      <g ref={introCirclesMobileRef}>
                        {mobile &&
                          Array.from({ length: NUM_INTRO_CIRCLES }).map(
                            (_, i) => (
                              <circle
                                key={i}
                                className="intro-circle"
                                fill="#303061"
                                r={3.8}
                              />
                            ),
                          )}
                      </g>
                      <circle
                        cx="3.8"
                        cy="3.8"
                        r="3.8"
                        fill="#60E2B7"
                        transform="matrix(-1 0 0 1 378.6 57.75)"
                      />
                      <path
                        stroke="#60E2B7"
                        strokeWidth="1.5"
                        d="M0 .79c16.415 0 29.718 13.294 29.718 29.646v47.669c0 16.352 13.304 29.645 29.76 29.645 16.455 0 29.76-13.253 29.76-29.645V30.19c0-16.27 13.221-29.441 29.554-29.441s29.554 13.171 29.554 29.441v47.995c0 16.311 13.263 29.564 29.678 29.564s29.677-13.212 29.677-29.564v-47.75c0-16.393 13.345-29.645 29.76-29.645 16.414 0 29.759 13.456 29.759 29.849 0 16.392 13.508 30.257 30.169 30.257H374.5"
                        className="context_path_mobile"
                      />
                    </g>
                  </svg>
                </div>
                <MethodologyButton
                  tooltipText={tooltipText}
                  setShowMethodTooltip={setShowMethodTooltip}
                  showMethodTooltip={showMethodTooltip}
                />
                {/* Mobile Tooltip */}
                {showMethodTooltip && (
                  <div className="method-tooltip block md:hidden absolute bottom-[54px] left-0 right-0 copy-text">
                    {tooltipText}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats screens with grid */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1600px] px-2 md:px-10 h-full max-h-[1200px] py-8 md:py-8 pointer-events-none">
          <div className="grid grid-cols-[auto] grid-rows-[1fr_auto] gap-6 md:gap-y-0 h-full w-full">
            <div
              ref={journeyPathRef}
              style={{ gridArea: "2 / 1 / 3 / 2" }}
              className="opacity-0 invisible px-6"
            >
              <JourneyPath step={currentStep} language={language} />
            </div>

            {[1, 2, 3, 4].map((step) => (
              <StatDisplay
                key={step}
                step={step}
                passRef={statRefs[step - 1]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MethodologyButton({
  showMethodTooltip,
  setShowMethodTooltip,
  tooltipText,
}: {
  showMethodTooltip: boolean;
  setShowMethodTooltip: (show: boolean) => void;
  tooltipText: React.ReactNode;
}) {
  return (
    <button
      className={`relative button-grey-text-hover bg-black-blue border-grey-text border rounded text-grey-text flex items-center justify-between gap-3 ${
        showMethodTooltip ? "bg-grey-text text-black-blue" : ""
      }  transition z-1`}
      onMouseEnter={() => setShowMethodTooltip(true)}
      onMouseLeave={() => setShowMethodTooltip(false)}
      onClick={() => setShowMethodTooltip(!showMethodTooltip)}
    >
      <span
        className={`${
          showMethodTooltip ? "text-black-blue" : "text-grey-text"
        }`}
      >
        {useCopy("context_button_method")}
      </span>
      <svg
        viewBox="0 0 30 18"
        className="w-[15px] h-2 md:w-[30px] md:h-[18px]"
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
      {/* Desktop Tooltip */}
      {showMethodTooltip && (
        <div className="method-tooltip hidden md:block absolute bottom-[54px] right-0 w-[380px] copy-text">
          {tooltipText}
        </div>
      )}
    </button>
  );
}

function StatDisplay({
  step,
  passRef,
}: {
  step: number;
  passRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={passRef} style={{ display: "contents" }}>
      <div
        className="stat-content flex flex-col px-2 gap-3 md:gap-0 justify-center md:justify-center opacity-0 invisible"
        style={{
          gridArea: "1 / 1 / 2 / 2",
        }}
      >
        <div className="text-bright-green text-[32px] md:text-[64px] text-center text-balance font-extralight mb-2 md:mb-10 leading-[115%] font-museo-moderno">
          {useCopy(`journey_${step}_stat_headline`)}
        </div>
        <div
          className={`flex flex-col md:flex-row gap-0 md:gap-10 justify-center items-center mx-auto max-w-[820px]`}
        >
          <div className="text-bright-green text-[80px] md:text-[96px] text-center font-semibold font-museo-moderno uppercase leading-[125%] shrink-0">
            {useCopy(`journey_${step}_stat_number`)}
          </div>
          <div
            className="text-bright-green text-[18px] md:text-[24px] text-center text-balance md:text-left leading-[100%]"
            style={{
              width:
                step === 1
                  ? "clamp(200px, 100%, 235px)"
                  : step === 2
                    ? "clamp(200px, 100%, 310px)"
                    : step === 3
                      ? "clamp(200px, 100%, 240px)"
                      : step === 4
                        ? "clamp(200px, 100%, 240px)"
                        : "clamp(200px, 100%, 380px)",
            }}
          >
            {useCopy(`journey_${step}_stat_text`)}
          </div>
          <div
            className={`md:hidden mt-4 text-[#9494AA] text-[12px] text-center text-balance leading-[100%] ${
              step === 4 ? "max-w-[700px] " : "max-w-[680px]"
            } mx-auto`}
          >
            {useCopy(`journey_${step}_stat_source`)}
          </div>
        </div>
        <div
          className={`hidden md:block text-[#9494AA] text-[14px] md:text-center text-balance leading-[100%] ${
            step === 4 ? "max-w-[700px] " : "max-w-[680px]"
          } mx-auto`}
        >
          {useCopy(`journey_${step}_stat_source`)}
        </div>
      </div>
    </div>
  );
}

function JourneyPath({ step, language }: { step: number; language: string }) {
  const circlesRef = useRef<SVGGElement>(null);
  const opacityChangePointRef = useRef<number>(0.5);

  // ===== CONFIGURATION FOR MOVING CIRCLES =====
  // You can adjust these values to customize the animation:

  const NUM_CIRCLES = 10; // Number of circles moving along the path
  const CIRCLE_RADIUS = 9.5; // Radius of each circle (matches the static circles in the SVG)
  const ANIMATION_DURATION = 50; // Duration in seconds for one complete loop along the path
  // Lower value = faster movement, Higher value = slower movement
  // Examples: 10 = fast, 20 = medium, 40 = slow
  const CIRCLE_OPACITY = 1; // Opacity of the moving circles (0 to 1)
  const OPACITY_AFTER_CHANGE = 0; // Opacity after reaching the change point
  // ============================================

  useEffect(() => {
    const changePoints = [0, 0.9, 0.65, 0.35, 0.1];
    const newChangePoint = changePoints[step];
    opacityChangePointRef.current = newChangePoint;
  }, [step]);

  // Animate circles along the path
  useEffect(() => {
    if (!circlesRef.current) return;

    const circles = circlesRef.current.querySelectorAll(".moving-circle");
    const path = document.querySelector("#whole_path") as SVGPathElement;

    if (!path || circles.length === 0) return;

    circles.forEach((circle, index) => {
      // Stagger the starting position of each circle
      const delay = (index / NUM_CIRCLES) * ANIMATION_DURATION;

      gsap.to(circle, {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: 1,
          end: 0,
        },
        duration: ANIMATION_DURATION,
        ease: "none",
        repeat: -1,
        delay: -delay, // Negative delay to distribute circles along path
        onUpdate: function () {
          // Get current progress (0 to 1)
          const progress = this.progress();

          // Since we're going from start:1 to end:0, we need to invert the progress
          const pathPosition = 1 - progress;

          // Change opacity when reaching the specified point
          if (pathPosition >= opacityChangePointRef.current) {
            gsap.set(circle, { opacity: CIRCLE_OPACITY });
          } else {
            gsap.set(circle, { opacity: OPACITY_AFTER_CHANGE });
          }
        },
      });
    });

    return () => {
      gsap.killTweensOf(circles);
    };
  }, [NUM_CIRCLES, ANIMATION_DURATION, CIRCLE_OPACITY, OPACITY_AFTER_CHANGE]);

  return (
    // Desktop
    <>
      <div
        className={`hidden md:block w-full journey-path current-step-${step}`}
      >
        <svg
          viewBox="0 0 1441 229"
          width="100%"
          height="100%"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          style={{
            maxHeight: "250px",
            maxWidth: "1438px",
          }}
          className="mx-auto"
        >
          {/* Moving circles along the path */}
          <g ref={circlesRef} className="moving-circles">
            {Array.from({ length: NUM_CIRCLES }).map((_, i) => (
              <circle
                key={i}
                className="moving-circle"
                r={CIRCLE_RADIUS}
                fill="#303061"
                opacity={CIRCLE_OPACITY}
              />
            ))}
          </g>
          {language === "English" && <JourneyPathSVG_EN device="desktop" />}
          {language === "Chinese" && <JourneyPathSVG_ZH device="desktop" />}
          {language === "Korean" && <JourneyPathSVG_KO device="desktop" />}
          {language === "Japanese" && <JourneyPathSVG_JA device="desktop" />}
        </svg>
      </div>
      {/* Mobile */}
      <div
        className={`block md:hidden w-full journey-path current-step-${step}`}
      >
        <svg
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 304 180"
          preserveAspectRatio="xMidYMid meet"
        >
          {language === "English" && <JourneyPathSVG_EN device="mobile" />}
          {language === "Chinese" && <JourneyPathSVG_ZH device="mobile" />}
          {language === "Korean" && <JourneyPathSVG_KO device="mobile" />}
          {language === "Japanese" && <JourneyPathSVG_JA device="mobile" />}
        </svg>
      </div>
    </>
  );
}
