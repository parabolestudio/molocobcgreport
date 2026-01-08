"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { isMobile } from "@/helpers/general";
import { useCopy } from "@/contexts/CopyContext";
import { ANIMATION_CONFIG } from "@/helpers/scroll";

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
      stat!.querySelectorAll(".stat-content")
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
        }
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
          }
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
              }
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
      ".context_path_desktop"
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
      ".context_path_mobile"
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
                          )
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
                            )
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
              <JourneyPath step={currentStep} />
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
        className="stat-content flex flex-col px-2 gap-3 md:gap-10 justify-center md:justify-center opacity-0 invisible"
        style={{
          gridArea: "1 / 1 / 2 / 2",
        }}
      >
        <div className="text-bright-green text-[32px] md:text-[64px] text-center text-balance font-extralight mb-2 md:mb-0 leading-[115%] font-museo-moderno">
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

function JourneyPath({ step }: { step: number }) {
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
          <g className="Frame 1171277044">
            <g className="Group 2442">
              <g className="elements">
                <circle
                  cx="9.5"
                  cy="207.664"
                  r="9"
                  fill="#60E2B7"
                  stroke="#60E2B7"
                  className="Ellipse 22"
                />
                <path
                  stroke="#60E2B7"
                  strokeWidth="1.5"
                  d="M1432 21.822h-7.44c-35.73 0-64.81 24.79-64.81 55.369v73.282c.21 30.623-28.32 55.618-63.91 55.876-35.86.258-65.1-24.686-65.1-55.549V77.32c0-30.649-28.88-55.498-64.5-55.498-35.63 0-64.51 24.85-64.51 55.498v74.211c0 30.528-28.76 55.283-64.25 55.283-35.49 0-64.256-24.755-64.256-55.283v-74.28c0-30.614-28.771-55.429-64.253-55.429s-64.254 24.815-64.254 55.429v74.358c0 30.493-28.652 55.213-64.004 55.213-35.352 0-64.003-24.72-64.003-55.213V76.821c0-30.373-28.542-54.999-63.754-54.999-35.212 0-63.753 24.626-63.753 54.999v74.607c0 30.588-28.882 55.394-64.504 55.394s-64.504-24.797-64.504-55.394V77.001c0-30.476-28.761-55.17-64.253-55.17-35.492 0-64.134 24.703-64.134 55.17v73.481c.21 30.622-28.432 55.618-64.024 55.876-35.862.258-65.103-24.686-65.103-55.549v-73.48c0-30.658-28.882-55.507-64.504-55.507S73.674 46.672 73.674 77.32v74.71c0 30.253-28.512 54.784-63.674 54.784"
                  id="whole_path"
                />
                <circle
                  cx="1431.42"
                  cy="21.91"
                  r="9"
                  fill="#60E2B7"
                  stroke="#60E2B7"
                  className="Ellipse 23"
                />
              </g>
              <g className="step_1 active">
                <g className="Group 2441">
                  <path
                    fill="#fff"
                    d="M115.651 24.822c0-13.255 10.746-24 24-24h204.533c13.254 0 24 10.745 24 24s-10.746 24-24 24H139.651c-13.254 0-24-10.745-24-24Z"
                    className="Rectangle 1188"
                  />
                  <path
                    fill="#04033A"
                    d="M181.204 33.068v-1.536h3.336V17.804h-3.336v-1.536h8.4v1.536h-3.336v13.728h3.336v1.536h-8.4Zm22.754.312c-.832 0-1.576-.192-2.232-.576a4.235 4.235 0 0 1-1.536-1.608c-.368-.688-.552-1.464-.552-2.328v-8.664c0-.512-.12-.968-.36-1.368a2.515 2.515 0 0 0-.96-.96 2.395 2.395 0 0 0-1.296-.36c-.48 0-.92.12-1.32.36-.4.224-.72.544-.96.96-.24.4-.36.856-.36 1.368v12.864h-1.728v-12.6c0-.88.184-1.656.552-2.328.368-.672.88-1.2 1.536-1.584.656-.4 1.416-.6 2.28-.6.848 0 1.6.2 2.256.6a4.061 4.061 0 0 1 1.536 1.584c.384.672.576 1.448.576 2.328v8.664c0 .528.12.992.36 1.392.24.4.552.72.936.96.384.224.808.336 1.272.336.464 0 .888-.112 1.272-.336.384-.24.688-.56.912-.96.224-.4.336-.864.336-1.392V16.268h1.728v12.6c0 .864-.176 1.64-.528 2.328a4.113 4.113 0 0 1-1.488 1.608c-.64.384-1.384.576-2.232.576Zm7.821-.312v-1.536h7.32c.656 0 1.216-.152 1.68-.456.48-.304.84-.696 1.08-1.176.24-.496.36-1.008.36-1.536s-.12-1.024-.36-1.488a2.688 2.688 0 0 0-1.032-1.128c-.448-.288-.992-.432-1.632-.432h-3.36c-.96 0-1.792-.192-2.496-.576a4.308 4.308 0 0 1-1.608-1.608c-.368-.672-.552-1.424-.552-2.256 0-.832.184-1.592.552-2.28a4.383 4.383 0 0 1 1.608-1.68c.704-.432 1.536-.648 2.496-.648h7.032v1.536h-6.912c-.624 0-1.168.144-1.632.432-.448.288-.8.664-1.056 1.128-.24.448-.36.92-.36 1.416 0 .496.112.968.336 1.416.24.448.576.816 1.008 1.104.448.272.992.408 1.632.408h3.384c1.008 0 1.856.2 2.544.6.704.4 1.232.944 1.584 1.632a4.57 4.57 0 0 1 .552 2.232c0 .912-.192 1.744-.576 2.496a4.245 4.245 0 0 1-1.608 1.752c-.688.432-1.52.648-2.496.648h-7.488Zm15.19 0v-16.8h7.104c1.024 0 1.96.232 2.808.696a5.23 5.23 0 0 1 2.016 1.944c.512.816.768 1.768.768 2.856 0 1.056-.248 2-.744 2.832a5.019 5.019 0 0 1-2.016 1.944c-.848.464-1.824.696-2.928.696h-5.28v5.832h-1.728Zm1.728-7.368h5.088c.768 0 1.464-.152 2.088-.456a3.774 3.774 0 0 0 1.488-1.344c.384-.592.576-1.304.576-2.136 0-.832-.192-1.536-.576-2.112a3.716 3.716 0 0 0-1.488-1.368 4.261 4.261 0 0 0-2.016-.48h-5.16V25.7Zm13.327 7.368v-1.536h3.336V17.804h-3.336v-1.536h8.4v1.536h-3.336v13.728h3.336v1.536h-8.4Zm11.547 0v-16.8h7.296c1.024 0 1.96.224 2.808.672a5.165 5.165 0 0 1 2.016 1.872c.512.8.768 1.728.768 2.784 0 1.136-.296 2.128-.888 2.976a5.2 5.2 0 0 1-2.376 1.872l1.896 4.104c.16.336.336.584.528.744.192.144.456.216.792.216h1.008v1.56h-1.248c-.608 0-1.128-.152-1.56-.456-.432-.304-.792-.736-1.08-1.296l-2.064-4.464-.6.048a6.933 6.933 0 0 1-.576.024h-4.992v6.144h-1.728Zm1.728-7.68h5.28c.768 0 1.464-.144 2.088-.432a3.661 3.661 0 0 0 1.488-1.296c.384-.576.576-1.264.576-2.064 0-.784-.192-1.464-.576-2.04a3.44 3.44 0 0 0-1.488-1.296 4.444 4.444 0 0 0-2.016-.456h-5.352v7.584Zm12.526 7.68 5.856-15.336c.24-.624.544-1.072.912-1.344a2.178 2.178 0 0 1 1.344-.432c.528 0 .984.136 1.368.408.384.272.688.72.912 1.344l5.904 15.36h-1.896l-1.68-4.416h-9.216l-1.68 4.416h-1.824Zm4.032-5.952h8.16l-3.264-8.808a1.908 1.908 0 0 0-.336-.6.547.547 0 0 0-.456-.216c-.208 0-.368.072-.48.216-.096.144-.2.344-.312.6l-3.312 8.808Zm20.063 5.952c-.848 0-1.584-.176-2.208-.528a3.743 3.743 0 0 1-1.44-1.512c-.336-.64-.504-1.368-.504-2.184v-11.04h-5.328v-1.536h12.384v1.536h-5.328v11.28c0 .704.216 1.288.648 1.752.448.464 1.048.696 1.8.696H293v1.536h-1.08Zm4.807 0v-1.536h3.336V17.804h-3.336v-1.536h8.4v1.536h-3.336v13.728h3.336v1.536h-8.4Zm19.491.312c-1.312 0-2.504-.224-3.576-.672a8.11 8.11 0 0 1-2.76-1.872 8.65 8.65 0 0 1-1.752-2.784 9.473 9.473 0 0 1-.6-3.384c0-1.2.2-2.328.6-3.384a8.65 8.65 0 0 1 1.752-2.784 8.11 8.11 0 0 1 2.76-1.872c1.072-.448 2.264-.672 3.576-.672 1.328 0 2.52.224 3.576.672a7.861 7.861 0 0 1 2.736 1.872 8.138 8.138 0 0 1 1.752 2.784 9.149 9.149 0 0 1 .624 3.384c0 1.2-.208 2.328-.624 3.384a8.138 8.138 0 0 1-1.752 2.784 7.861 7.861 0 0 1-2.736 1.872c-1.056.448-2.248.672-3.576.672Zm0-1.56c1.008 0 1.936-.176 2.784-.528a6.56 6.56 0 0 0 2.208-1.488 6.903 6.903 0 0 0 1.44-2.28 7.62 7.62 0 0 0 .528-2.856c0-1.04-.176-1.992-.528-2.856a6.64 6.64 0 0 0-1.44-2.256 6.396 6.396 0 0 0-2.208-1.512c-.848-.368-1.776-.552-2.784-.552-.992 0-1.912.184-2.76.552a6.646 6.646 0 0 0-2.232 1.512 6.891 6.891 0 0 0-1.464 2.28c-.336.864-.504 1.808-.504 2.832a7.94 7.94 0 0 0 .504 2.856c.352.864.84 1.624 1.464 2.28a6.823 6.823 0 0 0 2.232 1.488 7.128 7.128 0 0 0 2.76.528Zm22.951 1.56c-.832 0-1.576-.192-2.232-.576a4.235 4.235 0 0 1-1.536-1.608c-.368-.688-.552-1.464-.552-2.328v-8.664c0-.512-.12-.968-.36-1.368a2.515 2.515 0 0 0-.96-.96 2.395 2.395 0 0 0-1.296-.36c-.48 0-.92.12-1.32.36-.4.224-.72.544-.96.96-.24.4-.36.856-.36 1.368v12.864h-1.728v-12.6c0-.88.184-1.656.552-2.328.368-.672.88-1.2 1.536-1.584.656-.4 1.416-.6 2.28-.6.848 0 1.6.2 2.256.6a4.061 4.061 0 0 1 1.536 1.584c.384.672.576 1.448.576 2.328v8.664c0 .528.12.992.36 1.392.24.4.552.72.936.96.384.224.808.336 1.272.336.464 0 .888-.112 1.272-.336.384-.24.688-.56.912-.96.224-.4.336-.864.336-1.392V16.268h1.728v12.6c0 .864-.176 1.64-.528 2.328a4.113 4.113 0 0 1-1.488 1.608c-.64.384-1.384.576-2.232.576Z"
                    className="INspiration"
                  />
                </g>
                <g className="Group 2257">
                  <rect
                    width="48"
                    height="48"
                    x="115.652"
                    y=".822"
                    fill="#60E2B7"
                    className="Rectangle 1111"
                    rx="24"
                  />
                  <path
                    fill="#04033A"
                    d="M135.653 33.453v-1.536h3.48V18.19h-3.408v-1.536h5.16v15.264h3.144v1.536h-8.376Z"
                    className="1"
                  />
                </g>
              </g>
              <g className="step_2 active">
                <g className="Group 2441">
                  <path
                    fill="#fff"
                    d="M490 203.822c0-13.255 10.745-24 24-24h175.318c13.255 0 24 10.745 24 24s-10.745 24-24 24H514c-13.255 0-24-10.745-24-24Z"
                    className="Rectangle 1188"
                  />
                  <path
                    fill="#04033A"
                    d="M556.201 212.068v-16.8h5.256c1.76 0 3.296.36 4.608 1.08 1.312.72 2.328 1.712 3.048 2.976.72 1.248 1.08 2.688 1.08 4.32 0 1.632-.36 3.088-1.08 4.368-.72 1.264-1.736 2.256-3.048 2.976-1.312.72-2.848 1.08-4.608 1.08h-5.256Zm1.728-1.536h3.552c1.328 0 2.52-.272 3.576-.816a6.096 6.096 0 0 0 2.472-2.376c.608-1.04.912-2.272.912-3.696 0-1.408-.304-2.624-.912-3.648a5.939 5.939 0 0 0-2.472-2.352c-1.056-.56-2.248-.84-3.576-.84h-3.552v13.728Zm14.663 1.536v-1.536h3.336v-13.728h-3.336v-1.536h8.4v1.536h-3.336v13.728h3.336v1.536h-8.4Zm11.426 0v-1.536h7.32c.656 0 1.216-.152 1.68-.456.48-.304.84-.696 1.08-1.176.24-.496.36-1.008.36-1.536s-.12-1.024-.36-1.488a2.688 2.688 0 0 0-1.032-1.128c-.448-.288-.992-.432-1.632-.432h-3.36c-.96 0-1.792-.192-2.496-.576a4.308 4.308 0 0 1-1.608-1.608c-.368-.672-.552-1.424-.552-2.256 0-.832.184-1.592.552-2.28a4.383 4.383 0 0 1 1.608-1.68c.704-.432 1.536-.648 2.496-.648h7.032v1.536h-6.912c-.624 0-1.168.144-1.632.432-.448.288-.8.664-1.056 1.128-.24.448-.36.92-.36 1.416 0 .496.112.968.336 1.416.24.448.576.816 1.008 1.104.448.272.992.408 1.632.408h3.384c1.008 0 1.856.2 2.544.6.704.4 1.232.944 1.584 1.632a4.57 4.57 0 0 1 .552 2.232c0 .912-.192 1.744-.576 2.496a4.245 4.245 0 0 1-1.608 1.752c-.688.432-1.52.648-2.496.648h-7.488Zm22.607 0c-1.28 0-2.448-.216-3.504-.648a8.61 8.61 0 0 1-2.712-1.824 8.574 8.574 0 0 1-1.752-2.688 8.589 8.589 0 0 1-.624-3.264c0-1.152.208-2.232.624-3.24a8.29 8.29 0 0 1 1.752-2.664 8.286 8.286 0 0 1 2.712-1.8c1.056-.448 2.224-.672 3.504-.672h1.944v1.536h-1.872c-.976 0-1.888.176-2.736.528-.832.352-1.56.84-2.184 1.464a6.537 6.537 0 0 0-1.465 2.16 7.13 7.13 0 0 0-.503 2.688c0 .992.168 1.904.503 2.736a6.81 6.81 0 0 0 1.465 2.184 7.011 7.011 0 0 0 2.184 1.44 7.36 7.36 0 0 0 2.736.504h1.872v1.56h-1.944Zm12.598.312c-1.312 0-2.504-.224-3.576-.672a8.11 8.11 0 0 1-2.76-1.872 8.65 8.65 0 0 1-1.752-2.784 9.473 9.473 0 0 1-.6-3.384c0-1.2.2-2.328.6-3.384a8.65 8.65 0 0 1 1.752-2.784 8.11 8.11 0 0 1 2.76-1.872c1.072-.448 2.264-.672 3.576-.672 1.328 0 2.52.224 3.576.672a7.861 7.861 0 0 1 2.736 1.872 8.138 8.138 0 0 1 1.752 2.784 9.149 9.149 0 0 1 .624 3.384c0 1.2-.208 2.328-.624 3.384a8.138 8.138 0 0 1-1.752 2.784 7.861 7.861 0 0 1-2.736 1.872c-1.056.448-2.248.672-3.576.672Zm0-1.56c1.008 0 1.936-.176 2.784-.528a6.56 6.56 0 0 0 2.208-1.488 6.903 6.903 0 0 0 1.44-2.28 7.62 7.62 0 0 0 .528-2.856c0-1.04-.176-1.992-.528-2.856a6.64 6.64 0 0 0-1.44-2.256 6.396 6.396 0 0 0-2.208-1.512c-.848-.368-1.776-.552-2.784-.552-.992 0-1.912.184-2.76.552a6.646 6.646 0 0 0-2.232 1.512 6.891 6.891 0 0 0-1.464 2.28c-.336.864-.504 1.808-.504 2.832a7.94 7.94 0 0 0 .504 2.856c.352.864.84 1.624 1.464 2.28a6.823 6.823 0 0 0 2.232 1.488 7.128 7.128 0 0 0 2.76.528Zm17.863 1.56c-.48 0-.904-.136-1.272-.408-.368-.272-.672-.728-.912-1.368l-5.76-15.336h1.896l5.28 14.64c.128.336.24.56.336.672a.585.585 0 0 0 .432.168c.16 0 .296-.056.408-.168.112-.112.232-.336.36-.672l5.376-14.64h1.824l-5.784 15.336c-.24.624-.544 1.08-.912 1.368a2.083 2.083 0 0 1-1.272.408Zm13.847-.312c-.928 0-1.736-.216-2.424-.648a4.564 4.564 0 0 1-1.608-1.704 4.943 4.943 0 0 1-.552-2.28c0-.8.2-1.552.6-2.256a3.969 3.969 0 0 1 1.8-1.632c-.784-.4-1.368-.928-1.752-1.584a4.337 4.337 0 0 1-.552-2.112c0-.848.2-1.616.6-2.304.4-.688.936-1.232 1.608-1.632a4.2 4.2 0 0 1 2.256-.624h6.504v1.536h-6.312c-.56 0-1.064.136-1.512.408a2.795 2.795 0 0 0-1.032 1.08 3.126 3.126 0 0 0-.384 1.536c0 .512.136.992.408 1.44a3.17 3.17 0 0 0 1.08 1.08c.448.256.96.384 1.536.384h5.328v1.536h-5.184c-.688 0-1.28.152-1.776.456-.48.304-.848.696-1.104 1.176-.24.48-.36.992-.36 1.536 0 .528.12 1.024.36 1.488.24.464.592.848 1.056 1.152.464.288 1.024.432 1.68.432h6.216v1.536h-6.48Zm9.471 0v-16.8h7.296c1.024 0 1.96.224 2.808.672a5.165 5.165 0 0 1 2.016 1.872c.512.8.768 1.728.768 2.784 0 1.136-.296 2.128-.888 2.976a5.2 5.2 0 0 1-2.376 1.872l1.896 4.104c.16.336.336.584.528.744.192.144.456.216.792.216h1.008v1.56h-1.248c-.608 0-1.128-.152-1.56-.456-.432-.304-.792-.736-1.08-1.296l-2.064-4.464-.6.048a6.933 6.933 0 0 1-.576.024h-4.992v6.144h-1.728Zm1.728-7.68h5.28c.768 0 1.464-.144 2.088-.432a3.661 3.661 0 0 0 1.488-1.296c.384-.576.576-1.264.576-2.064 0-.784-.192-1.464-.576-2.04a3.44 3.44 0 0 0-1.488-1.296 4.444 4.444 0 0 0-2.016-.456h-5.352v7.584Zm19.309 7.68V207.1c-1.216-.128-2.248-.496-3.096-1.104a5.96 5.96 0 0 1-1.896-2.4c-.416-.976-.624-2.048-.624-3.216v-5.088h1.728v5.256a5.7 5.7 0 0 0 .552 2.496 4.608 4.608 0 0 0 1.632 1.872c.72.464 1.584.696 2.592.696 1.024 0 1.888-.232 2.592-.696a4.67 4.67 0 0 0 1.608-1.872c.384-.768.576-1.6.576-2.496v-5.256h1.728v5.088c0 1.168-.216 2.24-.648 3.216a5.882 5.882 0 0 1-1.92 2.4c-.832.624-1.864.992-3.096 1.104v4.968h-1.728Z"
                    className="Discovery"
                  />
                </g>
                <g className="Group 2257">
                  <rect
                    width="48"
                    height="48"
                    x="490"
                    y="179.822"
                    fill="#60E2B7"
                    className="Rectangle 1111"
                    rx="24"
                  />
                  <path
                    fill="#04033A"
                    d="M511.183 212.453c-.56 0-1.048-.112-1.464-.336a2.442 2.442 0 0 1-.936-.912 2.579 2.579 0 0 1-.312-1.248c0-.432.112-.864.336-1.296.24-.432.568-.8.984-1.104l5.616-3.984c.64-.448 1.12-.96 1.44-1.536.32-.576.48-1.152.48-1.728 0-.576-.144-1.096-.432-1.56-.288-.48-.712-.856-1.272-1.128-.56-.288-1.256-.432-2.088-.432h-4.248v-1.536h4.44c1.136 0 2.096.216 2.88.648.8.416 1.4.976 1.8 1.68.416.704.624 1.472.624 2.304 0 .864-.208 1.68-.624 2.448-.416.768-1.056 1.456-1.92 2.064l-5.616 3.912c-.208.16-.376.344-.504.552a1.174 1.174 0 0 0-.168.6c0 .288.112.536.336.744.224.208.544.312.96.312h7.896v1.536h-8.208Z"
                    className="2"
                  />
                </g>
              </g>
              <g className="step_3 active">
                <g className="Group 2441">
                  <path
                    fill="#fff"
                    d="M882 28.822c0-13.255 10.745-24 24-24h240.53c13.25 0 24 10.745 24 24s-10.75 24-24 24H906c-13.255 0-24-10.745-24-24Z"
                    className="Rectangle 1188"
                  />
                  <path
                    fill="#04033A"
                    d="M955.617 37.068c-1.28 0-2.448-.216-3.504-.648a8.61 8.61 0 0 1-2.712-1.824 8.574 8.574 0 0 1-1.752-2.688 8.589 8.589 0 0 1-.624-3.264c0-1.152.208-2.232.624-3.24a8.29 8.29 0 0 1 1.752-2.664 8.286 8.286 0 0 1 2.712-1.8c1.056-.448 2.224-.672 3.504-.672h1.944v1.536h-1.872c-.976 0-1.888.176-2.736.528-.832.352-1.56.84-2.184 1.464a6.535 6.535 0 0 0-1.464 2.16 7.11 7.11 0 0 0-.504 2.688c0 .992.168 1.904.504 2.736.352.832.84 1.56 1.464 2.184a7.011 7.011 0 0 0 2.184 1.44 7.36 7.36 0 0 0 2.736.504h1.872v1.56h-1.944Zm12.598.312c-1.312 0-2.504-.224-3.576-.672a8.11 8.11 0 0 1-2.76-1.872 8.65 8.65 0 0 1-1.752-2.784 9.473 9.473 0 0 1-.6-3.384c0-1.2.2-2.328.6-3.384a8.65 8.65 0 0 1 1.752-2.784 8.11 8.11 0 0 1 2.76-1.872c1.072-.448 2.264-.672 3.576-.672 1.328 0 2.52.224 3.576.672a7.861 7.861 0 0 1 2.736 1.872 8.138 8.138 0 0 1 1.752 2.784 9.149 9.149 0 0 1 .624 3.384c0 1.2-.208 2.328-.624 3.384a8.138 8.138 0 0 1-1.752 2.784 7.861 7.861 0 0 1-2.736 1.872c-1.056.448-2.248.672-3.576.672Zm0-1.56c1.008 0 1.936-.176 2.784-.528a6.56 6.56 0 0 0 2.208-1.488 6.903 6.903 0 0 0 1.44-2.28 7.62 7.62 0 0 0 .528-2.856c0-1.04-.176-1.992-.528-2.856a6.64 6.64 0 0 0-1.44-2.256 6.396 6.396 0 0 0-2.208-1.512c-.848-.368-1.776-.552-2.784-.552-.992 0-1.912.184-2.76.552a6.646 6.646 0 0 0-2.232 1.512 6.891 6.891 0 0 0-1.464 2.28c-.336.864-.504 1.808-.504 2.832a7.94 7.94 0 0 0 .504 2.856c.352.864.84 1.624 1.464 2.28a6.823 6.823 0 0 0 2.232 1.488 7.128 7.128 0 0 0 2.76.528Zm22.952 1.56c-.832 0-1.576-.192-2.232-.576a4.235 4.235 0 0 1-1.536-1.608c-.368-.688-.552-1.464-.552-2.328v-8.664c0-.512-.12-.968-.36-1.368a2.515 2.515 0 0 0-.96-.96 2.396 2.396 0 0 0-1.297-.36c-.479 0-.919.12-1.319.36-.4.224-.72.544-.96.96-.24.4-.361.856-.361 1.368v12.864h-1.727v-12.6c0-.88.184-1.656.552-2.328.368-.672.88-1.2 1.536-1.584.656-.4 1.416-.6 2.279-.6.849 0 1.601.2 2.257.6a4.061 4.061 0 0 1 1.536 1.584c.384.672.576 1.448.576 2.328v8.664c0 .528.12.992.36 1.392.24.4.552.72.936.96.384.224.808.336 1.272.336.464 0 .888-.112 1.272-.336.384-.24.688-.56.912-.96.224-.4.336-.864.336-1.392V20.268h1.728v12.6c0 .864-.176 1.64-.528 2.328a4.113 4.113 0 0 1-1.488 1.608c-.64.384-1.384.576-2.232.576Zm7.82-.312v-1.536h7.323c.65 0 1.21-.152 1.68-.456.48-.304.84-.696 1.08-1.176.24-.496.36-1.008.36-1.536s-.12-1.024-.36-1.488c-.23-.464-.57-.84-1.04-1.128-.44-.288-.99-.432-1.63-.432h-3.36c-.96 0-1.79-.192-2.49-.576a4.295 4.295 0 0 1-1.611-1.608c-.368-.672-.552-1.424-.552-2.256 0-.832.184-1.592.552-2.28a4.37 4.37 0 0 1 1.611-1.68c.7-.432 1.53-.648 2.49-.648h7.03v1.536h-6.91c-.62 0-1.17.144-1.63.432-.45.288-.8.664-1.06 1.128-.24.448-.36.92-.36 1.416 0 .496.12.968.34 1.416.24.448.58.816 1.01 1.104.45.272.99.408 1.63.408h3.38c1.01 0 1.86.2 2.55.6.7.4 1.23.944 1.58 1.632.37.672.55 1.416.55 2.232 0 .912-.19 1.744-.57 2.496a4.29 4.29 0 0 1-1.61 1.752c-.69.432-1.52.648-2.5.648h-7.483Zm14.543 0v-1.536h3.34V21.804h-3.34v-1.536h8.4v1.536h-3.34v13.728h3.34v1.536h-8.4Zm11.55 0v-16.8h5.25c1.76 0 3.3.36 4.61 1.08 1.31.72 2.33 1.712 3.05 2.976.72 1.248 1.08 2.688 1.08 4.32 0 1.632-.36 3.088-1.08 4.368-.72 1.264-1.74 2.256-3.05 2.976-1.31.72-2.85 1.08-4.61 1.08h-5.25Zm1.72-1.536h3.56c1.32 0 2.52-.272 3.57-.816a6.054 6.054 0 0 0 2.47-2.376c.61-1.04.92-2.272.92-3.696 0-1.408-.31-2.624-.92-3.648a5.899 5.899 0 0 0-2.47-2.352c-1.05-.56-2.25-.84-3.57-.84h-3.56v13.728Zm19.23 1.536c-.93 0-1.74-.216-2.43-.648a4.6 4.6 0 0 1-1.61-1.704c-.36-.72-.55-1.48-.55-2.28 0-.8.2-1.552.6-2.256a4.01 4.01 0 0 1 1.8-1.632c-.78-.4-1.37-.928-1.75-1.584a4.313 4.313 0 0 1-.55-2.112c0-.848.2-1.616.6-2.304.4-.688.93-1.232 1.61-1.632a4.179 4.179 0 0 1 2.25-.624h6.51v1.536h-6.32a2.834 2.834 0 0 0-2.54 1.488 3.08 3.08 0 0 0-.38 1.536c0 .512.13.992.4 1.44.28.448.64.808 1.08 1.08.45.256.96.384 1.54.384h5.33v1.536h-5.19c-.68 0-1.28.152-1.77.456-.48.304-.85.696-1.11 1.176-.24.48-.36.992-.36 1.536 0 .528.12 1.024.36 1.488.24.464.6.848 1.06 1.152.46.288 1.02.432 1.68.432h6.22v1.536h-6.48Zm9.47 0v-16.8h7.29c1.03 0 1.96.224 2.81.672a5.19 5.19 0 0 1 2.02 1.872c.51.8.77 1.728.77 2.784 0 1.136-.3 2.128-.89 2.976-.59.848-1.39 1.472-2.38 1.872l1.9 4.104c.16.336.33.584.53.744.19.144.45.216.79.216h1.01v1.56h-1.25c-.61 0-1.13-.152-1.56-.456-.43-.304-.79-.736-1.08-1.296l-2.07-4.464-.6.048a6.79 6.79 0 0 1-.57.024h-4.99v6.144h-1.73Zm1.73-7.68h5.28c.76 0 1.46-.144 2.08-.432a3.641 3.641 0 0 0 1.49-1.296c.39-.576.58-1.264.58-2.064 0-.784-.19-1.464-.58-2.04a3.424 3.424 0 0 0-1.49-1.296 4.413 4.413 0 0 0-2.01-.456h-5.35v7.584Zm12.52 7.68 5.86-15.336c.24-.624.54-1.072.91-1.344.38-.288.83-.432 1.34-.432.53 0 .99.136 1.37.408.39.272.69.72.91 1.344l5.91 15.36h-1.9l-1.68-4.416h-9.21l-1.68 4.416h-1.83Zm4.03-5.952h8.16l-3.26-8.808c-.1-.256-.21-.456-.34-.6a.536.536 0 0 0-.45-.216c-.21 0-.37.072-.48.216-.1.144-.2.344-.31.6l-3.32 8.808Zm20.07 5.952c-.85 0-1.59-.176-2.21-.528a3.666 3.666 0 0 1-1.44-1.512c-.34-.64-.51-1.368-.51-2.184v-11.04h-5.32v-1.536h12.38v1.536h-5.33v11.28c0 .704.22 1.288.65 1.752.45.464 1.05.696 1.8.696h1.06v1.536h-1.08Zm4.8 0v-1.536h3.34V21.804h-3.34v-1.536h8.4v1.536h-3.33v13.728h3.33v1.536h-8.4Zm19.49.312c-1.31 0-2.5-.224-3.57-.672a8.15 8.15 0 0 1-2.76-1.872 8.578 8.578 0 0 1-1.75-2.784 9.473 9.473 0 0 1-.6-3.384c0-1.2.2-2.328.6-3.384.41-1.056 1-1.984 1.75-2.784a8.15 8.15 0 0 1 2.76-1.872c1.07-.448 2.26-.672 3.57-.672 1.33 0 2.52.224 3.58.672a7.971 7.971 0 0 1 2.74 1.872c.76.8 1.35 1.728 1.75 2.784a9.27 9.27 0 0 1 .62 3.384c0 1.2-.21 2.328-.62 3.384a8.255 8.255 0 0 1-1.75 2.784c-.76.8-1.67 1.424-2.74 1.872-1.06.448-2.25.672-3.58.672Zm0-1.56c1.01 0 1.94-.176 2.79-.528a6.608 6.608 0 0 0 2.21-1.488 7.034 7.034 0 0 0 1.44-2.28c.35-.88.52-1.832.52-2.856 0-1.04-.17-1.992-.52-2.856a6.763 6.763 0 0 0-1.44-2.256 6.442 6.442 0 0 0-2.21-1.512c-.85-.368-1.78-.552-2.79-.552-.99 0-1.91.184-2.76.552-.84.352-1.59.856-2.23 1.512-.62.64-1.11 1.4-1.46 2.28-.34.864-.51 1.808-.51 2.832 0 1.024.17 1.976.51 2.856a7.26 7.26 0 0 0 1.46 2.28 6.9 6.9 0 0 0 2.23 1.488c.85.352 1.77.528 2.76.528Zm22.96 1.56c-.84 0-1.58-.192-2.24-.576a4.28 4.28 0 0 1-1.53-1.608c-.37-.688-.55-1.464-.55-2.328v-8.664c0-.512-.12-.968-.36-1.368a2.515 2.515 0 0 0-.96-.96c-.39-.24-.82-.36-1.3-.36-.48 0-.92.12-1.32.36-.4.224-.72.544-.96.96-.24.4-.36.856-.36 1.368v12.864h-1.73v-12.6c0-.88.19-1.656.55-2.328.37-.672.88-1.2 1.54-1.584.66-.4 1.42-.6 2.28-.6.85 0 1.6.2 2.26.6.65.384 1.16.912 1.53 1.584.39.672.58 1.448.58 2.328v8.664c0 .528.12.992.36 1.392.24.4.55.72.93.96.39.224.81.336 1.28.336.46 0 .88-.112 1.27-.336.38-.24.69-.56.91-.96.22-.4.34-.864.34-1.392V20.268h1.72v12.6c0 .864-.17 1.64-.52 2.328a4.178 4.178 0 0 1-1.49 1.608c-.64.384-1.39.576-2.23.576Z"
                    className="Consideration"
                  />
                </g>
                <g className="Group 2257">
                  <rect
                    width="48"
                    height="48"
                    x="882"
                    y="4.822"
                    fill="#60E2B7"
                    className="Rectangle 1111"
                    rx="24"
                  />
                  <path
                    fill="#04033A"
                    d="M900.783 37.453v-1.536h5.568c.656 0 1.216-.144 1.68-.432a2.982 2.982 0 0 0 1.056-1.176c.24-.48.36-.984.36-1.512 0-.544-.128-1.056-.384-1.536a3.061 3.061 0 0 0-1.104-1.2c-.48-.304-1.072-.456-1.776-.456h-4.488V28.07h4.632c.688 0 1.256-.136 1.704-.408a2.905 2.905 0 0 0 1.056-1.104 2.812 2.812 0 0 0 0-2.832 2.905 2.905 0 0 0-1.056-1.104c-.464-.288-1.032-.432-1.704-.432h-5.544v-1.536h5.832c.928 0 1.728.216 2.4.648.688.416 1.216.96 1.584 1.632.384.656.576 1.376.576 2.16 0 .88-.232 1.656-.696 2.328-.448.656-1.08 1.144-1.896 1.464a3.943 3.943 0 0 1 1.44.936c.384.4.672.856.864 1.368.192.512.288 1.04.288 1.584 0 .816-.184 1.584-.552 2.304a4.556 4.556 0 0 1-1.584 1.728c-.688.432-1.496.648-2.424.648h-5.832Z"
                    className="3"
                  />
                </g>
              </g>
              <g className="step_4 active">
                <g className="Group 2441">
                  <path
                    fill="#fff"
                    d="M1074 198.822c0-13.255 10.75-24 24-24h199.15c13.25 0 24 10.745 24 24s-10.75 24-24 24H1098c-13.25 0-24-10.745-24-24Z"
                    className="Rectangle 1188"
                  />
                  <path
                    fill="#04033A"
                    d="M1102.77 207.068c-1.28 0-2.45-.216-3.5-.648a8.51 8.51 0 0 1-2.71-1.824 8.528 8.528 0 0 1-1.76-2.688 8.702 8.702 0 0 1-.62-3.264c0-1.152.21-2.232.62-3.24.42-1.008 1-1.896 1.76-2.664a8.195 8.195 0 0 1 2.71-1.8c1.05-.448 2.22-.672 3.5-.672h1.95v1.536h-1.88c-.97 0-1.88.176-2.73.528-.83.352-1.56.84-2.19 1.464a6.554 6.554 0 0 0-1.46 2.16c-.34.832-.5 1.728-.5 2.688 0 .992.16 1.904.5 2.736.35.832.84 1.56 1.46 2.184a7.133 7.133 0 0 0 2.19 1.44c.85.336 1.76.504 2.73.504h1.88v1.56h-1.95Zm12.6.312c-1.31 0-2.5-.224-3.58-.672a8.15 8.15 0 0 1-2.76-1.872 8.75 8.75 0 0 1-1.75-2.784 9.473 9.473 0 0 1-.6-3.384c0-1.2.2-2.328.6-3.384a8.75 8.75 0 0 1 1.75-2.784 8.15 8.15 0 0 1 2.76-1.872c1.08-.448 2.27-.672 3.58-.672 1.33 0 2.52.224 3.58.672a7.837 7.837 0 0 1 2.73 1.872c.77.8 1.35 1.728 1.75 2.784.42 1.056.63 2.184.63 3.384 0 1.2-.21 2.328-.63 3.384a8.103 8.103 0 0 1-1.75 2.784c-.75.8-1.66 1.424-2.73 1.872-1.06.448-2.25.672-3.58.672Zm0-1.56c1.01 0 1.94-.176 2.78-.528a6.51 6.51 0 0 0 2.21-1.488 6.715 6.715 0 0 0 1.44-2.28c.35-.88.53-1.832.53-2.856 0-1.04-.18-1.992-.53-2.856a6.464 6.464 0 0 0-1.44-2.256 6.348 6.348 0 0 0-2.21-1.512c-.84-.368-1.77-.552-2.78-.552-.99 0-1.91.184-2.76.552-.85.352-1.59.856-2.23 1.512-.63.64-1.11 1.4-1.47 2.28-.33.864-.5 1.808-.5 2.832 0 1.024.17 1.976.5 2.856.36.864.84 1.624 1.47 2.28.64.64 1.38 1.136 2.23 1.488.85.352 1.77.528 2.76.528Zm22.95 1.56c-.83 0-1.57-.192-2.23-.576a4.23 4.23 0 0 1-1.54-1.608c-.36-.688-.55-1.464-.55-2.328v-8.664c0-.512-.12-.968-.36-1.368a2.515 2.515 0 0 0-.96-.96c-.38-.24-.81-.36-1.29-.36s-.92.12-1.32.36c-.4.224-.72.544-.96.96-.24.4-.36.856-.36 1.368v12.864h-1.73v-12.6c0-.88.18-1.656.55-2.328.37-.672.88-1.2 1.54-1.584.65-.4 1.41-.6 2.28-.6.84 0 1.6.2 2.25.6.66.384 1.17.912 1.54 1.584.38.672.57 1.448.57 2.328v8.664c0 .528.12.992.36 1.392.24.4.56.72.94.96.38.224.81.336 1.27.336.47 0 .89-.112 1.27-.336.39-.24.69-.56.92-.96.22-.4.33-.864.33-1.392v-12.864h1.73v12.6c0 .864-.18 1.64-.53 2.328a4.104 4.104 0 0 1-1.49 1.608c-.64.384-1.38.576-2.23.576Zm14.06 0c-.48 0-.9-.136-1.27-.408-.37-.272-.67-.728-.91-1.368l-5.76-15.336h1.89l5.28 14.64c.13.336.24.56.34.672.11.112.26.168.43.168.16 0 .3-.056.41-.168.11-.112.23-.336.36-.672l5.38-14.64h1.82l-5.78 15.336c-.24.624-.55 1.08-.92 1.368a2.06 2.06 0 0 1-1.27.408Zm13.85-.312c-.93 0-1.74-.216-2.43-.648-.68-.432-1.22-1-1.6-1.704-.37-.72-.56-1.48-.56-2.28 0-.8.2-1.552.6-2.256a4.01 4.01 0 0 1 1.8-1.632c-.78-.4-1.36-.928-1.75-1.584a4.313 4.313 0 0 1-.55-2.112c0-.848.2-1.616.6-2.304.4-.688.94-1.232 1.61-1.632a4.179 4.179 0 0 1 2.25-.624h6.51v1.536h-6.31a2.834 2.834 0 0 0-2.55 1.488 3.19 3.19 0 0 0-.38 1.536c0 .512.13.992.41 1.44.27.448.63.808 1.08 1.08.44.256.96.384 1.53.384h5.33v1.536h-5.18c-.69 0-1.28.152-1.78.456-.48.304-.85.696-1.1 1.176-.24.48-.36.992-.36 1.536 0 .528.12 1.024.36 1.488.24.464.59.848 1.05 1.152.47.288 1.03.432 1.68.432h6.22v1.536h-6.48Zm9.47 0v-16.8h7.3c1.02 0 1.96.224 2.8.672a5.19 5.19 0 0 1 2.02 1.872c.51.8.77 1.728.77 2.784 0 1.136-.3 2.128-.89 2.976-.59.848-1.38 1.472-2.38 1.872l1.9 4.104c.16.336.34.584.53.744.19.144.45.216.79.216h1.01v1.56h-1.25c-.61 0-1.13-.152-1.56-.456-.43-.304-.79-.736-1.08-1.296l-2.06-4.464-.6.048c-.2.016-.39.024-.58.024h-4.99v6.144h-1.73Zm1.73-7.68h5.28c.77 0 1.46-.144 2.09-.432a3.613 3.613 0 0 0 1.48-1.296c.39-.576.58-1.264.58-2.064 0-.784-.19-1.464-.58-2.04a3.398 3.398 0 0 0-1.48-1.296 4.455 4.455 0 0 0-2.02-.456h-5.35v7.584Zm14.35 7.68v-1.536h7.32c.65 0 1.21-.152 1.68-.456.48-.304.84-.696 1.08-1.176.24-.496.36-1.008.36-1.536s-.12-1.024-.36-1.488c-.23-.464-.57-.84-1.04-1.128-.44-.288-.99-.432-1.63-.432h-3.36c-.96 0-1.79-.192-2.49-.576a4.27 4.27 0 0 1-1.61-1.608c-.37-.672-.55-1.424-.55-2.256 0-.832.18-1.592.55-2.28.38-.704.92-1.264 1.61-1.68.7-.432 1.53-.648 2.49-.648h7.03v1.536h-6.91c-.62 0-1.17.144-1.63.432-.45.288-.8.664-1.06 1.128-.24.448-.36.92-.36 1.416 0 .496.12.968.34 1.416.24.448.58.816 1.01 1.104.45.272.99.408 1.63.408h3.38c1.01 0 1.86.2 2.55.6.7.4 1.23.944 1.58 1.632.37.672.55 1.416.55 2.232 0 .912-.19 1.744-.57 2.496a4.29 4.29 0 0 1-1.61 1.752c-.69.432-1.52.648-2.5.648h-7.48Zm14.54 0v-1.536h3.33v-13.728h-3.33v-1.536h8.4v1.536h-3.34v13.728h3.34v1.536h-8.4Zm19.49.312c-1.31 0-2.51-.224-3.58-.672a8.15 8.15 0 0 1-2.76-1.872 8.75 8.75 0 0 1-1.75-2.784 9.473 9.473 0 0 1-.6-3.384c0-1.2.2-2.328.6-3.384a8.75 8.75 0 0 1 1.75-2.784 8.15 8.15 0 0 1 2.76-1.872c1.07-.448 2.27-.672 3.58-.672 1.33 0 2.52.224 3.57.672a7.786 7.786 0 0 1 2.74 1.872c.77.8 1.35 1.728 1.75 2.784.42 1.056.63 2.184.63 3.384 0 1.2-.21 2.328-.63 3.384a8.103 8.103 0 0 1-1.75 2.784c-.75.8-1.66 1.424-2.74 1.872-1.05.448-2.24.672-3.57.672Zm0-1.56c1.01 0 1.93-.176 2.78-.528a6.51 6.51 0 0 0 2.21-1.488 7.034 7.034 0 0 0 1.44-2.28c.35-.88.53-1.832.53-2.856 0-1.04-.18-1.992-.53-2.856a6.763 6.763 0 0 0-1.44-2.256 6.348 6.348 0 0 0-2.21-1.512c-.85-.368-1.77-.552-2.78-.552-.99 0-1.91.184-2.76.552a6.781 6.781 0 0 0-3.7 3.792c-.33.864-.5 1.808-.5 2.832 0 1.024.17 1.976.5 2.856.35.864.84 1.624 1.47 2.28.64.64 1.38 1.136 2.23 1.488.85.352 1.77.528 2.76.528Zm22.95 1.56c-.83 0-1.58-.192-2.23-.576a4.23 4.23 0 0 1-1.54-1.608c-.37-.688-.55-1.464-.55-2.328v-8.664c0-.512-.12-.968-.36-1.368a2.515 2.515 0 0 0-.96-.96c-.38-.24-.82-.36-1.3-.36-.48 0-.92.12-1.32.36-.4.224-.72.544-.96.96-.24.4-.36.856-.36 1.368v12.864h-1.72v-12.6c0-.88.18-1.656.55-2.328.37-.672.88-1.2 1.53-1.584.66-.4 1.42-.6 2.28-.6.85 0 1.6.2 2.26.6.66.384 1.17.912 1.54 1.584.38.672.57 1.448.57 2.328v8.664c0 .528.12.992.36 1.392.24.4.55.72.94.96.38.224.81.336 1.27.336.46 0 .89-.112 1.27-.336.39-.24.69-.56.91-.96.23-.4.34-.864.34-1.392v-12.864h1.73v12.6c0 .864-.18 1.64-.53 2.328a4.104 4.104 0 0 1-1.49 1.608c-.64.384-1.38.576-2.23.576Z"
                    className="Conversion"
                  />
                </g>
                <g className="Group 2257">
                  <rect
                    width="48"
                    height="48"
                    x="1273.15"
                    y="174.822"
                    fill="#60E2B7"
                    className="Rectangle 1111"
                    rx="24"
                  />
                  <path
                    fill="#04033A"
                    d="M1299.5 207.453v-3.96h-6.15c-.53 0-.99-.12-1.39-.36-.4-.256-.71-.584-.94-.984a2.784 2.784 0 0 1-.33-1.32c0-.272.03-.544.09-.816.07-.272.16-.52.29-.744l4.85-8.616h1.94l-5.2 9.192c-.08.144-.15.288-.2.432-.03.144-.04.304-.04.48 0 .304.09.584.28.84.21.24.5.36.87.36h5.93v-6.288h1.75v6.288h2.37v1.536h-2.37v3.96h-1.75Z"
                    className="4"
                  />
                </g>
              </g>
              <g className="step_1 inactive">
                <g className="Group 2263">
                  <g className="Group 2258">
                    <rect
                      width="213.878"
                      height="48"
                      x="140.122"
                      y=".822"
                      fill="#0E457A"
                      className="Rectangle 1188"
                      rx="10"
                    />
                  </g>
                  <g className="Group 2258">
                    <path
                      fill="#04033A"
                      d="M177.462 34.889v-1.536h3.336V19.625h-3.336v-1.536h8.4v1.536h-3.336v13.728h3.336v1.536h-8.4Zm22.754.312c-.832 0-1.576-.192-2.232-.576a4.235 4.235 0 0 1-1.536-1.608c-.368-.688-.552-1.464-.552-2.328v-8.664c0-.512-.12-.968-.36-1.368a2.515 2.515 0 0 0-.96-.96 2.395 2.395 0 0 0-1.296-.36c-.48 0-.92.12-1.32.36-.4.224-.72.544-.96.96-.24.4-.36.856-.36 1.368v12.864h-1.728v-12.6c0-.88.184-1.656.552-2.328.368-.672.88-1.2 1.536-1.584.656-.4 1.416-.6 2.28-.6.848 0 1.6.2 2.256.6a4.061 4.061 0 0 1 1.536 1.584c.384.672.576 1.448.576 2.328v8.664c0 .528.12.992.36 1.392.24.4.552.72.936.96.384.224.808.336 1.272.336.464 0 .888-.112 1.272-.336.384-.24.688-.56.912-.96.224-.4.336-.864.336-1.392V18.089h1.728v12.6c0 .864-.176 1.64-.528 2.328a4.113 4.113 0 0 1-1.488 1.608c-.64.384-1.384.576-2.232.576Zm7.821-.312v-1.536h7.32c.656 0 1.216-.152 1.68-.456.48-.304.84-.696 1.08-1.176.24-.496.36-1.008.36-1.536s-.12-1.024-.36-1.488a2.688 2.688 0 0 0-1.032-1.128c-.448-.288-.992-.432-1.632-.432h-3.36c-.96 0-1.792-.192-2.496-.576a4.308 4.308 0 0 1-1.608-1.608c-.368-.672-.552-1.424-.552-2.256 0-.832.184-1.592.552-2.28a4.383 4.383 0 0 1 1.608-1.68c.704-.432 1.536-.648 2.496-.648h7.032v1.536h-6.912c-.624 0-1.168.144-1.632.432-.448.288-.8.664-1.056 1.128-.24.448-.36.92-.36 1.416 0 .496.112.968.336 1.416.24.448.576.816 1.008 1.104.448.272.992.408 1.632.408h3.384c1.008 0 1.856.2 2.544.6.704.4 1.232.944 1.584 1.632a4.57 4.57 0 0 1 .552 2.232c0 .912-.192 1.744-.576 2.496a4.245 4.245 0 0 1-1.608 1.752c-.688.432-1.52.648-2.496.648h-7.488Zm15.19 0v-16.8h7.104c1.024 0 1.96.232 2.808.696a5.23 5.23 0 0 1 2.016 1.944c.512.816.768 1.768.768 2.856 0 1.056-.248 2-.744 2.832a5.019 5.019 0 0 1-2.016 1.944c-.848.464-1.824.696-2.928.696h-5.28v5.832h-1.728Zm1.728-7.368h5.088c.768 0 1.464-.152 2.088-.456a3.774 3.774 0 0 0 1.488-1.344c.384-.592.576-1.304.576-2.136 0-.832-.192-1.536-.576-2.112a3.716 3.716 0 0 0-1.488-1.368 4.261 4.261 0 0 0-2.016-.48h-5.16v7.896Zm13.327 7.368v-1.536h3.336V19.625h-3.336v-1.536h8.4v1.536h-3.336v13.728h3.336v1.536h-8.4Zm11.546 0v-16.8h7.296c1.024 0 1.96.224 2.808.672a5.165 5.165 0 0 1 2.016 1.872c.512.8.768 1.728.768 2.784 0 1.136-.296 2.128-.888 2.976a5.2 5.2 0 0 1-2.376 1.872l1.896 4.104c.16.336.336.584.528.744.192.144.456.216.792.216h1.008v1.56h-1.248c-.608 0-1.128-.152-1.56-.456-.432-.304-.792-.736-1.08-1.296l-2.064-4.464-.6.048a6.933 6.933 0 0 1-.576.024h-4.992v6.144h-1.728Zm1.728-7.68h5.28c.768 0 1.464-.144 2.088-.432a3.661 3.661 0 0 0 1.488-1.296c.384-.576.576-1.264.576-2.064 0-.784-.192-1.464-.576-2.04a3.44 3.44 0 0 0-1.488-1.296 4.444 4.444 0 0 0-2.016-.456h-5.352v7.584Zm12.527 7.68 5.856-15.336c.24-.624.544-1.072.912-1.344a2.178 2.178 0 0 1 1.344-.432c.528 0 .984.136 1.368.408.384.272.688.72.912 1.344l5.904 15.36h-1.896l-1.68-4.416h-9.216l-1.68 4.416h-1.824Zm4.032-5.952h8.16l-3.264-8.808a1.908 1.908 0 0 0-.336-.6.547.547 0 0 0-.456-.216c-.208 0-.368.072-.48.216-.096.144-.2.344-.312.6l-3.312 8.808Zm20.063 5.952c-.848 0-1.584-.176-2.208-.528a3.743 3.743 0 0 1-1.44-1.512c-.336-.64-.504-1.368-.504-2.184v-11.04h-5.328v-1.536h12.384v1.536h-5.328v11.28c0 .704.216 1.288.648 1.752.448.464 1.048.696 1.8.696h1.056v1.536h-1.08Zm4.807 0v-1.536h3.336V19.625h-3.336v-1.536h8.4v1.536h-3.336v13.728h3.336v1.536h-8.4Zm19.491.312c-1.312 0-2.504-.224-3.576-.672a8.11 8.11 0 0 1-2.76-1.872 8.65 8.65 0 0 1-1.752-2.784 9.473 9.473 0 0 1-.6-3.384c0-1.2.2-2.328.6-3.384a8.65 8.65 0 0 1 1.752-2.784 8.11 8.11 0 0 1 2.76-1.872c1.072-.448 2.264-.672 3.576-.672 1.328 0 2.52.224 3.576.672a7.861 7.861 0 0 1 2.736 1.872 8.138 8.138 0 0 1 1.752 2.784 9.149 9.149 0 0 1 .624 3.384c0 1.2-.208 2.328-.624 3.384a8.138 8.138 0 0 1-1.752 2.784 7.861 7.861 0 0 1-2.736 1.872c-1.056.448-2.248.672-3.576.672Zm0-1.56c1.008 0 1.936-.176 2.784-.528a6.56 6.56 0 0 0 2.208-1.488 6.903 6.903 0 0 0 1.44-2.28 7.62 7.62 0 0 0 .528-2.856c0-1.04-.176-1.992-.528-2.856a6.64 6.64 0 0 0-1.44-2.256 6.396 6.396 0 0 0-2.208-1.512c-.848-.368-1.776-.552-2.784-.552-.992 0-1.912.184-2.76.552a6.646 6.646 0 0 0-2.232 1.512 6.891 6.891 0 0 0-1.464 2.28c-.336.864-.504 1.808-.504 2.832a7.94 7.94 0 0 0 .504 2.856c.352.864.84 1.624 1.464 2.28a6.823 6.823 0 0 0 2.232 1.488 7.128 7.128 0 0 0 2.76.528Zm22.951 1.56c-.832 0-1.576-.192-2.232-.576a4.235 4.235 0 0 1-1.536-1.608c-.368-.688-.552-1.464-.552-2.328v-8.664c0-.512-.12-.968-.36-1.368a2.515 2.515 0 0 0-.96-.96 2.395 2.395 0 0 0-1.296-.36c-.48 0-.92.12-1.32.36-.4.224-.72.544-.96.96-.24.4-.36.856-.36 1.368v12.864h-1.728v-12.6c0-.88.184-1.656.552-2.328.368-.672.88-1.2 1.536-1.584.656-.4 1.416-.6 2.28-.6.848 0 1.6.2 2.256.6a4.061 4.061 0 0 1 1.536 1.584c.384.672.576 1.448.576 2.328v8.664c0 .528.12.992.36 1.392.24.4.552.72.936.96.384.224.808.336 1.272.336.464 0 .888-.112 1.272-.336.384-.24.688-.56.912-.96.224-.4.336-.864.336-1.392V18.089h1.728v12.6c0 .864-.176 1.64-.528 2.328a4.113 4.113 0 0 1-1.488 1.608c-.64.384-1.384.576-2.232.576Z"
                      className="inspiration"
                    />
                  </g>
                </g>
                <g className="Group 2240">
                  <rect
                    width="48.98"
                    height="48.736"
                    x="115.589"
                    y=".411"
                    fill="#0E457A"
                    stroke="#04033A"
                    strokeWidth=".822"
                    className="Rectangle 1111"
                    rx="10.411"
                  />
                  <path
                    fill="#04033A"
                    d="M136.08 33.445V31.91h3.48V18.181h-3.408v-1.536h5.16V31.91h3.144v1.536h-8.376Z"
                    className="1"
                  />
                </g>
              </g>
              <g className="step_2 inactive">
                <g className="Group 2263">
                  <g className="Group 2258">
                    <rect
                      width="190.281"
                      height="48"
                      x="514.044"
                      y="179.822"
                      fill="#0E457A"
                      className="Rectangle 1188"
                      rx="10"
                    />
                  </g>
                  <g className="Group 2258">
                    <path
                      fill="#04033A"
                      d="M554.252 213.889v-16.8h5.256c1.76 0 3.296.36 4.608 1.08 1.312.72 2.328 1.712 3.048 2.976.72 1.248 1.08 2.688 1.08 4.32 0 1.632-.36 3.088-1.08 4.368-.72 1.264-1.736 2.256-3.048 2.976-1.312.72-2.848 1.08-4.608 1.08h-5.256Zm1.728-1.536h3.552c1.328 0 2.52-.272 3.576-.816a6.096 6.096 0 0 0 2.472-2.376c.608-1.04.912-2.272.912-3.696 0-1.408-.304-2.624-.912-3.648a5.939 5.939 0 0 0-2.472-2.352c-1.056-.56-2.248-.84-3.576-.84h-3.552v13.728Zm14.664 1.536v-1.536h3.336v-13.728h-3.336v-1.536h8.4v1.536h-3.336v13.728h3.336v1.536h-8.4Zm11.426 0v-1.536h7.32c.656 0 1.216-.152 1.68-.456.48-.304.84-.696 1.08-1.176.24-.496.36-1.008.36-1.536s-.12-1.024-.36-1.488a2.688 2.688 0 0 0-1.032-1.128c-.448-.288-.992-.432-1.632-.432h-3.36c-.96 0-1.792-.192-2.496-.576a4.308 4.308 0 0 1-1.608-1.608c-.368-.672-.552-1.424-.552-2.256 0-.832.184-1.592.552-2.28a4.383 4.383 0 0 1 1.608-1.68c.704-.432 1.536-.648 2.496-.648h7.032v1.536h-6.912c-.624 0-1.168.144-1.632.432-.448.288-.8.664-1.056 1.128-.24.448-.36.92-.36 1.416 0 .496.112.968.336 1.416.24.448.576.816 1.008 1.104.448.272.992.408 1.632.408h3.384c1.008 0 1.856.2 2.544.6.704.4 1.232.944 1.584 1.632a4.57 4.57 0 0 1 .552 2.232c0 .912-.192 1.744-.576 2.496a4.245 4.245 0 0 1-1.608 1.752c-.688.432-1.52.648-2.496.648h-7.488Zm22.606 0c-1.28 0-2.448-.216-3.504-.648a8.61 8.61 0 0 1-2.712-1.824 8.574 8.574 0 0 1-1.752-2.688 8.589 8.589 0 0 1-.624-3.264c0-1.152.208-2.232.624-3.24a8.29 8.29 0 0 1 1.752-2.664 8.286 8.286 0 0 1 2.712-1.8c1.056-.448 2.224-.672 3.504-.672h1.944v1.536h-1.872c-.976 0-1.888.176-2.736.528-.832.352-1.56.84-2.184 1.464a6.535 6.535 0 0 0-1.464 2.16 7.11 7.11 0 0 0-.504 2.688c0 .992.168 1.904.504 2.736.352.832.84 1.56 1.464 2.184a7.011 7.011 0 0 0 2.184 1.44 7.36 7.36 0 0 0 2.736.504h1.872v1.56h-1.944Zm12.599.312c-1.312 0-2.504-.224-3.576-.672a8.11 8.11 0 0 1-2.76-1.872 8.65 8.65 0 0 1-1.752-2.784 9.473 9.473 0 0 1-.6-3.384c0-1.2.2-2.328.6-3.384a8.65 8.65 0 0 1 1.752-2.784 8.11 8.11 0 0 1 2.76-1.872c1.072-.448 2.264-.672 3.576-.672 1.328 0 2.52.224 3.576.672a7.861 7.861 0 0 1 2.736 1.872 8.138 8.138 0 0 1 1.752 2.784 9.149 9.149 0 0 1 .624 3.384c0 1.2-.208 2.328-.624 3.384a8.138 8.138 0 0 1-1.752 2.784 7.861 7.861 0 0 1-2.736 1.872c-1.056.448-2.248.672-3.576.672Zm0-1.56c1.008 0 1.936-.176 2.784-.528a6.56 6.56 0 0 0 2.208-1.488 6.903 6.903 0 0 0 1.44-2.28 7.62 7.62 0 0 0 .528-2.856c0-1.04-.176-1.992-.528-2.856a6.64 6.64 0 0 0-1.44-2.256 6.396 6.396 0 0 0-2.208-1.512c-.848-.368-1.776-.552-2.784-.552-.992 0-1.912.184-2.76.552a6.646 6.646 0 0 0-2.232 1.512 6.891 6.891 0 0 0-1.464 2.28c-.336.864-.504 1.808-.504 2.832a7.94 7.94 0 0 0 .504 2.856c.352.864.84 1.624 1.464 2.28a6.823 6.823 0 0 0 2.232 1.488 7.128 7.128 0 0 0 2.76.528Zm17.863 1.56c-.48 0-.904-.136-1.272-.408-.368-.272-.672-.728-.912-1.368l-5.76-15.336h1.896l5.28 14.64c.128.336.24.56.336.672a.585.585 0 0 0 .432.168c.16 0 .296-.056.408-.168.112-.112.232-.336.36-.672l5.376-14.64h1.824l-5.784 15.336c-.24.624-.544 1.08-.912 1.368a2.083 2.083 0 0 1-1.272.408Zm13.847-.312c-.928 0-1.736-.216-2.424-.648a4.564 4.564 0 0 1-1.608-1.704 4.943 4.943 0 0 1-.552-2.28c0-.8.2-1.552.6-2.256a3.969 3.969 0 0 1 1.8-1.632c-.784-.4-1.368-.928-1.752-1.584a4.337 4.337 0 0 1-.552-2.112c0-.848.2-1.616.6-2.304.4-.688.936-1.232 1.608-1.632a4.2 4.2 0 0 1 2.256-.624h6.504v1.536h-6.312c-.56 0-1.064.136-1.512.408a2.795 2.795 0 0 0-1.032 1.08 3.126 3.126 0 0 0-.384 1.536c0 .512.136.992.408 1.44a3.17 3.17 0 0 0 1.08 1.08c.448.256.96.384 1.536.384h5.328v1.536h-5.184c-.688 0-1.28.152-1.776.456-.48.304-.848.696-1.104 1.176-.24.48-.36.992-.36 1.536 0 .528.12 1.024.36 1.488.24.464.592.848 1.056 1.152.464.288 1.024.432 1.68.432h6.216v1.536h-6.48Zm9.471 0v-16.8h7.296c1.024 0 1.96.224 2.808.672a5.165 5.165 0 0 1 2.016 1.872c.512.8.768 1.728.768 2.784 0 1.136-.296 2.128-.888 2.976a5.2 5.2 0 0 1-2.376 1.872l1.896 4.104c.16.336.336.584.528.744.192.144.456.216.792.216h1.008v1.56h-1.248c-.608 0-1.128-.152-1.56-.456-.432-.304-.792-.736-1.08-1.296l-2.064-4.464-.6.048a6.933 6.933 0 0 1-.576.024h-4.992v6.144h-1.728Zm1.728-7.68h5.28c.768 0 1.464-.144 2.088-.432a3.661 3.661 0 0 0 1.488-1.296c.384-.576.576-1.264.576-2.064 0-.784-.192-1.464-.576-2.04a3.44 3.44 0 0 0-1.488-1.296 4.444 4.444 0 0 0-2.016-.456h-5.352v7.584Zm19.308 7.68v-4.968c-1.216-.128-2.248-.496-3.096-1.104a5.96 5.96 0 0 1-1.896-2.4c-.416-.976-.624-2.048-.624-3.216v-5.088h1.728v5.256a5.7 5.7 0 0 0 .552 2.496 4.608 4.608 0 0 0 1.632 1.872c.72.464 1.584.696 2.592.696 1.024 0 1.888-.232 2.592-.696a4.67 4.67 0 0 0 1.608-1.872c.384-.768.576-1.6.576-2.496v-5.256h1.728v5.088c0 1.168-.216 2.24-.648 3.216a5.882 5.882 0 0 1-1.92 2.4c-.832.624-1.864.992-3.096 1.104v4.968h-1.728Z"
                      className="discovery"
                    />
                  </g>
                </g>
                <g className="Group 2240">
                  <rect
                    width="48.98"
                    height="48.736"
                    x="489.511"
                    y="179.411"
                    fill="#0E457A"
                    stroke="#04033A"
                    strokeWidth=".822"
                    className="Rectangle 1111"
                    rx="10.411"
                  />
                  <path
                    fill="#04033A"
                    d="M511.183 212.445c-.56 0-1.048-.112-1.464-.336a2.442 2.442 0 0 1-.936-.912 2.579 2.579 0 0 1-.312-1.248c0-.432.112-.864.336-1.296.24-.432.568-.8.984-1.104l5.616-3.984c.64-.448 1.12-.96 1.44-1.536.32-.576.48-1.152.48-1.728 0-.576-.144-1.096-.432-1.56-.288-.48-.712-.856-1.272-1.128-.56-.288-1.256-.432-2.088-.432h-4.248v-1.536h4.44c1.136 0 2.096.216 2.88.648.8.416 1.4.976 1.8 1.68.416.704.624 1.472.624 2.304 0 .864-.208 1.68-.624 2.448-.416.768-1.056 1.456-1.92 2.064l-5.616 3.912c-.208.16-.376.344-.504.552a1.174 1.174 0 0 0-.168.6c0 .288.112.536.336.744.224.208.544.312.96.312h7.896v1.536h-8.208Z"
                    className="2"
                  />
                </g>
              </g>
              <g className="step_3 inactive">
                <g className="Group 2264">
                  <g className="Group 2258">
                    <rect
                      width="256.25"
                      height="48"
                      x="906.044"
                      y="4.822"
                      fill="#0E457A"
                      className="Rectangle 1188"
                      rx="10"
                    />
                  </g>
                  <g className="Group 2258">
                    <path
                      fill="#04033A"
                      d="M953.961 38.889c-1.28 0-2.448-.216-3.504-.648a8.61 8.61 0 0 1-2.712-1.824 8.574 8.574 0 0 1-1.752-2.688 8.589 8.589 0 0 1-.624-3.264c0-1.152.208-2.232.624-3.24a8.29 8.29 0 0 1 1.752-2.664 8.286 8.286 0 0 1 2.712-1.8c1.056-.448 2.224-.672 3.504-.672h1.944v1.536h-1.872c-.976 0-1.888.176-2.736.528-.832.352-1.56.84-2.184 1.464a6.535 6.535 0 0 0-1.464 2.16 7.11 7.11 0 0 0-.504 2.688c0 .992.168 1.904.504 2.736.352.832.84 1.56 1.464 2.184a7.011 7.011 0 0 0 2.184 1.44 7.36 7.36 0 0 0 2.736.504h1.872v1.56h-1.944Zm12.599.312c-1.312 0-2.504-.224-3.576-.672a8.11 8.11 0 0 1-2.76-1.872 8.65 8.65 0 0 1-1.752-2.784 9.473 9.473 0 0 1-.6-3.384c0-1.2.2-2.328.6-3.384a8.65 8.65 0 0 1 1.752-2.784 8.11 8.11 0 0 1 2.76-1.872c1.072-.448 2.264-.672 3.576-.672 1.328 0 2.52.224 3.576.672a7.861 7.861 0 0 1 2.736 1.872 8.138 8.138 0 0 1 1.752 2.784 9.149 9.149 0 0 1 .624 3.384c0 1.2-.208 2.328-.624 3.384a8.138 8.138 0 0 1-1.752 2.784 7.861 7.861 0 0 1-2.736 1.872c-1.056.448-2.248.672-3.576.672Zm0-1.56c1.008 0 1.936-.176 2.784-.528a6.56 6.56 0 0 0 2.208-1.488 6.903 6.903 0 0 0 1.44-2.28 7.62 7.62 0 0 0 .528-2.856c0-1.04-.176-1.992-.528-2.856a6.64 6.64 0 0 0-1.44-2.256 6.396 6.396 0 0 0-2.208-1.512c-.848-.368-1.776-.552-2.784-.552-.992 0-1.912.184-2.76.552a6.646 6.646 0 0 0-2.232 1.512 6.891 6.891 0 0 0-1.464 2.28c-.336.864-.504 1.808-.504 2.832a7.94 7.94 0 0 0 .504 2.856c.352.864.84 1.624 1.464 2.28a6.823 6.823 0 0 0 2.232 1.488 7.128 7.128 0 0 0 2.76.528Zm22.951 1.56c-.832 0-1.576-.192-2.232-.576a4.235 4.235 0 0 1-1.536-1.608c-.368-.688-.552-1.464-.552-2.328v-8.664c0-.512-.12-.968-.36-1.368a2.515 2.515 0 0 0-.96-.96 2.395 2.395 0 0 0-1.296-.36c-.48 0-.92.12-1.32.36-.4.224-.72.544-.96.96-.24.4-.36.856-.36 1.368v12.864h-1.728v-12.6c0-.88.184-1.656.552-2.328.368-.672.88-1.2 1.536-1.584.656-.4 1.416-.6 2.28-.6.848 0 1.6.2 2.256.6a4.061 4.061 0 0 1 1.536 1.584c.384.672.576 1.448.576 2.328v8.664c0 .528.12.992.36 1.392.24.4.552.72.936.96.384.224.808.336 1.272.336.464 0 .888-.112 1.272-.336.384-.24.688-.56.912-.96.224-.4.336-.864.336-1.392V22.089h1.728v12.6c0 .864-.176 1.64-.528 2.328a4.113 4.113 0 0 1-1.488 1.608c-.64.384-1.384.576-2.232.576Zm7.821-.312v-1.536h7.318c.66 0 1.22-.152 1.68-.456.48-.304.84-.696 1.08-1.176.24-.496.36-1.008.36-1.536s-.12-1.024-.36-1.488c-.22-.464-.57-.84-1.03-1.128-.45-.288-.99-.432-1.63-.432h-3.36c-.96 0-1.794-.192-2.498-.576a4.308 4.308 0 0 1-1.608-1.608c-.368-.672-.552-1.424-.552-2.256 0-.832.184-1.592.552-2.28a4.383 4.383 0 0 1 1.608-1.68c.704-.432 1.538-.648 2.498-.648h7.03v1.536h-6.91c-.63 0-1.17.144-1.634.432-.448.288-.8.664-1.056 1.128-.24.448-.36.92-.36 1.416 0 .496.112.968.336 1.416.24.448.576.816 1.008 1.104.446.272.996.408 1.636.408h3.38c1.01 0 1.86.2 2.54.6.71.4 1.24.944 1.59 1.632.37.672.55 1.416.55 2.232 0 .912-.19 1.744-.58 2.496a4.2 4.2 0 0 1-1.6 1.752c-.69.432-1.52.648-2.5.648h-7.488Zm14.538 0v-1.536h3.34V23.625h-3.34v-1.536h8.4v1.536h-3.33v13.728h3.33v1.536h-8.4Zm11.55 0v-16.8h5.26c1.76 0 3.29.36 4.6 1.08 1.32.72 2.33 1.712 3.05 2.976.72 1.248 1.08 2.688 1.08 4.32 0 1.632-.36 3.088-1.08 4.368-.72 1.264-1.73 2.256-3.05 2.976-1.31.72-2.84 1.08-4.6 1.08h-5.26Zm1.73-1.536h3.55c1.33 0 2.52-.272 3.58-.816a6.116 6.116 0 0 0 2.47-2.376c.61-1.04.91-2.272.91-3.696 0-1.408-.3-2.624-.91-3.648a5.957 5.957 0 0 0-2.47-2.352c-1.06-.56-2.25-.84-3.58-.84h-3.55v13.728Zm19.22 1.536c-.93 0-1.73-.216-2.42-.648-.69-.432-1.23-1-1.61-1.704-.37-.72-.55-1.48-.55-2.28 0-.8.2-1.552.6-2.256.41-.72 1.01-1.264 1.8-1.632-.79-.4-1.37-.928-1.75-1.584a4.324 4.324 0 0 1-.56-2.112c0-.848.2-1.616.6-2.304.4-.688.94-1.232 1.61-1.632a4.213 4.213 0 0 1 2.26-.624h6.5v1.536h-6.31c-.56 0-1.06.136-1.51.408-.43.256-.78.616-1.03 1.08-.26.464-.39.976-.39 1.536 0 .512.14.992.41 1.44.27.448.63.808 1.08 1.08.45.256.96.384 1.54.384h5.32v1.536h-5.18c-.69 0-1.28.152-1.78.456a3.13 3.13 0 0 0-1.1 1.176c-.24.48-.36.992-.36 1.536 0 .528.12 1.024.36 1.488.24.464.59.848 1.06 1.152.46.288 1.02.432 1.68.432h6.21v1.536h-6.48Zm9.47 0v-16.8h7.3c1.02 0 1.96.224 2.81.672a5.162 5.162 0 0 1 2.01 1.872c.51.8.77 1.728.77 2.784 0 1.136-.3 2.128-.89 2.976a5.184 5.184 0 0 1-2.37 1.872l1.89 4.104c.16.336.34.584.53.744.19.144.46.216.79.216h1.01v1.56h-1.25c-.61 0-1.13-.152-1.56-.456-.43-.304-.79-.736-1.08-1.296l-2.06-4.464-.6.048a7.03 7.03 0 0 1-.58.024h-4.99v6.144h-1.73Zm1.73-7.68h5.28c.77 0 1.46-.144 2.09-.432a3.706 3.706 0 0 0 1.49-1.296c.38-.576.57-1.264.57-2.064 0-.784-.19-1.464-.57-2.04a3.48 3.48 0 0 0-1.49-1.296 4.455 4.455 0 0 0-2.02-.456h-5.35v7.584Zm12.53 7.68 5.85-15.336c.24-.624.55-1.072.91-1.344.39-.288.84-.432 1.35-.432.53 0 .98.136 1.37.408.38.272.68.72.91 1.344l5.9 15.36h-1.89l-1.68-4.416h-9.22l-1.68 4.416h-1.82Zm4.03-5.952h8.16l-3.27-8.808a1.76 1.76 0 0 0-.33-.6.554.554 0 0 0-.46-.216c-.21 0-.37.072-.48.216-.09.144-.2.344-.31.6l-3.31 8.808Zm20.06 5.952c-.85 0-1.58-.176-2.21-.528a3.796 3.796 0 0 1-1.44-1.512c-.33-.64-.5-1.368-.5-2.184v-11.04h-5.33v-1.536h12.39v1.536h-5.33v11.28c0 .704.21 1.288.65 1.752.44.464 1.04.696 1.8.696h1.05v1.536h-1.08Zm4.81 0v-1.536h3.33V23.625H1097v-1.536h8.4v1.536h-3.34v13.728h3.34v1.536h-8.4Zm19.49.312c-1.31 0-2.5-.224-3.58-.672a8.15 8.15 0 0 1-2.76-1.872 8.75 8.75 0 0 1-1.75-2.784 9.473 9.473 0 0 1-.6-3.384c0-1.2.2-2.328.6-3.384a8.75 8.75 0 0 1 1.75-2.784 8.15 8.15 0 0 1 2.76-1.872c1.08-.448 2.27-.672 3.58-.672 1.33 0 2.52.224 3.58.672a7.837 7.837 0 0 1 2.73 1.872c.77.8 1.35 1.728 1.75 2.784.42 1.056.63 2.184.63 3.384 0 1.2-.21 2.328-.63 3.384a8.103 8.103 0 0 1-1.75 2.784c-.75.8-1.66 1.424-2.73 1.872-1.06.448-2.25.672-3.58.672Zm0-1.56c1.01 0 1.94-.176 2.78-.528a6.51 6.51 0 0 0 2.21-1.488 6.715 6.715 0 0 0 1.44-2.28c.35-.88.53-1.832.53-2.856 0-1.04-.18-1.992-.53-2.856a6.464 6.464 0 0 0-1.44-2.256 6.348 6.348 0 0 0-2.21-1.512c-.84-.368-1.77-.552-2.78-.552-.99 0-1.91.184-2.76.552-.85.352-1.59.856-2.23 1.512-.63.64-1.11 1.4-1.47 2.28-.33.864-.5 1.808-.5 2.832 0 1.024.17 1.976.5 2.856.36.864.84 1.624 1.47 2.28.64.64 1.38 1.136 2.23 1.488.85.352 1.77.528 2.76.528Zm22.95 1.56c-.83 0-1.58-.192-2.23-.576a4.23 4.23 0 0 1-1.54-1.608c-.37-.688-.55-1.464-.55-2.328v-8.664c0-.512-.12-.968-.36-1.368a2.515 2.515 0 0 0-.96-.96c-.38-.24-.82-.36-1.3-.36-.48 0-.92.12-1.32.36-.4.224-.72.544-.96.96-.24.4-.36.856-.36 1.368v12.864h-1.72v-12.6c0-.88.18-1.656.55-2.328.37-.672.88-1.2 1.53-1.584.66-.4 1.42-.6 2.28-.6.85 0 1.6.2 2.26.6.66.384 1.17.912 1.54 1.584.38.672.57 1.448.57 2.328v8.664c0 .528.12.992.36 1.392.24.4.55.72.94.96.38.224.81.336 1.27.336.46 0 .89-.112 1.27-.336.39-.24.69-.56.91-.96.23-.4.34-.864.34-1.392V22.089h1.73v12.6c0 .864-.18 1.64-.53 2.328a4.104 4.104 0 0 1-1.49 1.608c-.64.384-1.38.576-2.23.576Z"
                      className="consideration"
                    />
                  </g>
                </g>
                <g className="Group 2265">
                  <rect
                    width="48.98"
                    height="48.736"
                    x="881.511"
                    y="4.411"
                    fill="#0E457A"
                    stroke="#04033A"
                    strokeWidth=".822"
                    className="Rectangle 1111"
                    rx="10.411"
                  />
                  <path
                    fill="#04033A"
                    d="M900.783 37.445V35.91h5.568c.656 0 1.216-.144 1.68-.432a2.982 2.982 0 0 0 1.056-1.176c.24-.48.36-.984.36-1.512 0-.544-.128-1.056-.384-1.536a3.061 3.061 0 0 0-1.104-1.2c-.48-.304-1.072-.456-1.776-.456h-4.488v-1.536h4.632c.688 0 1.256-.136 1.704-.408a2.905 2.905 0 0 0 1.056-1.104 2.812 2.812 0 0 0 0-2.832 2.905 2.905 0 0 0-1.056-1.104c-.464-.288-1.032-.432-1.704-.432h-5.544v-1.536h5.832c.928 0 1.728.216 2.4.648.688.416 1.216.96 1.584 1.632.384.656.576 1.376.576 2.16 0 .88-.232 1.656-.696 2.328-.448.656-1.08 1.144-1.896 1.464a3.943 3.943 0 0 1 1.44.936c.384.4.672.856.864 1.368.192.512.288 1.04.288 1.584 0 .816-.184 1.584-.552 2.304a4.556 4.556 0 0 1-1.584 1.728c-.688.432-1.496.648-2.424.648h-5.832Z"
                    className="3"
                  />
                </g>
              </g>
              <g className="step_4 inactive">
                <g className="Group 2266">
                  <g className="Group 2258">
                    <rect
                      width="222.705"
                      height="47.843"
                      x="1081.22"
                      y="174.822"
                      fill="#0E457A"
                      className="Rectangle 1188"
                      rx="10"
                    />
                  </g>
                  <g className="Group 2258">
                    <path
                      fill="#04033A"
                      d="M1105.96 208.908c-1.28 0-2.45-.216-3.5-.648a8.668 8.668 0 0 1-2.72-1.824 8.674 8.674 0 0 1-1.75-2.688 8.702 8.702 0 0 1-.62-3.264c0-1.152.21-2.232.62-3.24.42-1.008 1-1.896 1.75-2.664a8.342 8.342 0 0 1 2.72-1.8c1.05-.448 2.22-.672 3.5-.672h1.94v1.536h-1.87c-.97 0-1.89.176-2.73.528-.84.352-1.56.84-2.19 1.464a6.554 6.554 0 0 0-1.46 2.16 7.037 7.037 0 0 0-.51 2.688c0 .992.17 1.904.51 2.736.35.832.84 1.56 1.46 2.184a7.015 7.015 0 0 0 2.19 1.44 7.32 7.32 0 0 0 2.73.504h1.87v1.56h-1.94Zm12.6.312c-1.31 0-2.51-.224-3.58-.672a8.15 8.15 0 0 1-2.76-1.872 8.75 8.75 0 0 1-1.75-2.784 9.473 9.473 0 0 1-.6-3.384c0-1.2.2-2.328.6-3.384a8.75 8.75 0 0 1 1.75-2.784 8.15 8.15 0 0 1 2.76-1.872c1.07-.448 2.27-.672 3.58-.672 1.33 0 2.52.224 3.57.672a7.786 7.786 0 0 1 2.74 1.872c.77.8 1.35 1.728 1.75 2.784.42 1.056.63 2.184.63 3.384 0 1.2-.21 2.328-.63 3.384a8.103 8.103 0 0 1-1.75 2.784c-.75.8-1.66 1.424-2.74 1.872-1.05.448-2.24.672-3.57.672Zm0-1.56c1.01 0 1.93-.176 2.78-.528a6.51 6.51 0 0 0 2.21-1.488 7.034 7.034 0 0 0 1.44-2.28c.35-.88.53-1.832.53-2.856 0-1.04-.18-1.992-.53-2.856a6.763 6.763 0 0 0-1.44-2.256 6.348 6.348 0 0 0-2.21-1.512c-.85-.368-1.77-.552-2.78-.552-.99 0-1.91.184-2.76.552a6.781 6.781 0 0 0-3.7 3.792c-.33.864-.5 1.808-.5 2.832 0 1.024.17 1.976.5 2.856.35.864.84 1.624 1.47 2.28.64.64 1.38 1.136 2.23 1.488.85.352 1.77.528 2.76.528Zm22.95 1.56c-.83 0-1.58-.192-2.23-.576a4.23 4.23 0 0 1-1.54-1.608c-.37-.688-.55-1.464-.55-2.328v-8.664c0-.512-.12-.968-.36-1.368a2.515 2.515 0 0 0-.96-.96c-.38-.24-.82-.36-1.3-.36-.48 0-.92.12-1.32.36-.4.224-.72.544-.96.96-.24.4-.36.856-.36 1.368v12.864h-1.72v-12.6c0-.88.18-1.656.55-2.328.37-.672.88-1.2 1.53-1.584.66-.4 1.42-.6 2.28-.6.85 0 1.6.2 2.26.6.66.384 1.17.912 1.54 1.584.38.672.57 1.448.57 2.328v8.664c0 .528.12.992.36 1.392.24.4.55.72.94.96.38.224.81.336 1.27.336.46 0 .89-.112 1.27-.336.39-.24.69-.56.91-.96.23-.4.34-.864.34-1.392v-12.864h1.73v12.6c0 .864-.18 1.64-.53 2.328a4.104 4.104 0 0 1-1.49 1.608c-.64.384-1.38.576-2.23.576Zm14.06 0c-.48 0-.9-.136-1.27-.408-.37-.272-.67-.728-.91-1.368l-5.76-15.336h1.89l5.28 14.64c.13.336.24.56.34.672a.57.57 0 0 0 .43.168c.16 0 .3-.056.41-.168.11-.112.23-.336.36-.672l5.37-14.64h1.83l-5.79 15.336c-.24.624-.54 1.08-.91 1.368-.37.272-.79.408-1.27.408Zm13.85-.312c-.93 0-1.74-.216-2.43-.648-.68-.432-1.22-1-1.6-1.704-.37-.72-.56-1.48-.56-2.28 0-.8.2-1.552.6-2.256a4.01 4.01 0 0 1 1.8-1.632c-.78-.4-1.36-.928-1.75-1.584a4.313 4.313 0 0 1-.55-2.112c0-.848.2-1.616.6-2.304.4-.688.94-1.232 1.61-1.632a4.179 4.179 0 0 1 2.25-.624h6.51v1.536h-6.31a2.834 2.834 0 0 0-2.55 1.488 3.19 3.19 0 0 0-.38 1.536c0 .512.13.992.41 1.44.27.448.63.808 1.08 1.08.44.256.96.384 1.53.384h5.33v1.536h-5.18c-.69 0-1.28.152-1.78.456-.48.304-.85.696-1.1 1.176-.24.48-.36.992-.36 1.536 0 .528.12 1.024.36 1.488.24.464.59.848 1.05 1.152.47.288 1.03.432 1.68.432h6.22v1.536h-6.48Zm9.47 0v-16.8h7.29c1.03 0 1.96.224 2.81.672a5.19 5.19 0 0 1 2.02 1.872c.51.8.77 1.728.77 2.784 0 1.136-.3 2.128-.89 2.976-.59.848-1.39 1.472-2.38 1.872l1.9 4.104c.16.336.33.584.53.744.19.144.45.216.79.216h1.01v1.56h-1.25c-.61 0-1.13-.152-1.56-.456-.43-.304-.79-.736-1.08-1.296l-2.07-4.464-.6.048a6.79 6.79 0 0 1-.57.024h-4.99v6.144h-1.73Zm1.73-7.68h5.28c.76 0 1.46-.144 2.08-.432a3.641 3.641 0 0 0 1.49-1.296c.39-.576.58-1.264.58-2.064 0-.784-.19-1.464-.58-2.04a3.424 3.424 0 0 0-1.49-1.296 4.413 4.413 0 0 0-2.01-.456h-5.35v7.584Zm14.34 7.68v-1.536h7.32c.66 0 1.22-.152 1.68-.456.48-.304.84-.696 1.08-1.176.24-.496.36-1.008.36-1.536s-.12-1.024-.36-1.488a2.62 2.62 0 0 0-1.03-1.128c-.45-.288-.99-.432-1.63-.432h-3.36c-.96 0-1.79-.192-2.5-.576-.68-.4-1.22-.936-1.6-1.608a4.602 4.602 0 0 1-.56-2.256c0-.832.19-1.592.56-2.28.38-.704.92-1.264 1.6-1.68.71-.432 1.54-.648 2.5-.648h7.03v1.536h-6.91c-.62 0-1.17.144-1.63.432-.45.288-.8.664-1.06 1.128-.24.448-.36.92-.36 1.416 0 .496.11.968.34 1.416.24.448.57.816 1.01 1.104.44.272.99.408 1.63.408h3.38c1.01 0 1.86.2 2.55.6.7.4 1.23.944 1.58 1.632.37.672.55 1.416.55 2.232 0 .912-.19 1.744-.57 2.496a4.29 4.29 0 0 1-1.61 1.752c-.69.432-1.52.648-2.5.648h-7.49Zm14.55 0v-1.536h3.33v-13.728h-3.33v-1.536h8.4v1.536h-3.34v13.728h3.34v1.536h-8.4Zm19.49.312c-1.32 0-2.51-.224-3.58-.672a8.15 8.15 0 0 1-2.76-1.872 8.578 8.578 0 0 1-1.75-2.784 9.473 9.473 0 0 1-.6-3.384c0-1.2.2-2.328.6-3.384.41-1.056 1-1.984 1.75-2.784a8.15 8.15 0 0 1 2.76-1.872c1.07-.448 2.26-.672 3.58-.672 1.32 0 2.52.224 3.57.672 1.07.448 1.99 1.072 2.74 1.872.77.8 1.35 1.728 1.75 2.784.42 1.056.62 2.184.62 3.384 0 1.2-.2 2.328-.62 3.384a8.103 8.103 0 0 1-1.75 2.784c-.75.8-1.67 1.424-2.74 1.872-1.05.448-2.25.672-3.57.672Zm0-1.56c1 0 1.93-.176 2.78-.528a6.608 6.608 0 0 0 2.21-1.488 7.034 7.034 0 0 0 1.44-2.28c.35-.88.53-1.832.53-2.856 0-1.04-.18-1.992-.53-2.856a6.763 6.763 0 0 0-1.44-2.256 6.442 6.442 0 0 0-2.21-1.512c-.85-.368-1.78-.552-2.78-.552-1 0-1.92.184-2.76.552-.85.352-1.6.856-2.24 1.512-.62.64-1.11 1.4-1.46 2.28-.34.864-.5 1.808-.5 2.832 0 1.024.16 1.976.5 2.856a7.26 7.26 0 0 0 1.46 2.28c.64.64 1.39 1.136 2.24 1.488.84.352 1.76.528 2.76.528Zm22.95 1.56c-.83 0-1.58-.192-2.23-.576a4.23 4.23 0 0 1-1.54-1.608c-.37-.688-.55-1.464-.55-2.328v-8.664c0-.512-.12-.968-.36-1.368a2.515 2.515 0 0 0-.96-.96c-.39-.24-.82-.36-1.3-.36-.48 0-.92.12-1.32.36-.4.224-.72.544-.96.96-.24.4-.36.856-.36 1.368v12.864h-1.73v-12.6c0-.88.19-1.656.56-2.328.36-.672.88-1.2 1.53-1.584.66-.4 1.42-.6 2.28-.6.85 0 1.6.2 2.26.6.65.384 1.17.912 1.53 1.584.39.672.58 1.448.58 2.328v8.664c0 .528.12.992.36 1.392.24.4.55.72.94.96.38.224.8.336 1.27.336.46 0 .89-.112 1.27-.336.38-.24.69-.56.91-.96.23-.4.34-.864.34-1.392v-12.864h1.73v12.6c0 .864-.18 1.64-.53 2.328a4.104 4.104 0 0 1-1.49 1.608c-.64.384-1.38.576-2.23.576Z"
                      className="Conversion"
                    />
                  </g>
                </g>
                <g className="Group 2267">
                  <rect
                    width="48.98"
                    height="48.822"
                    x="1272.51"
                    y="174.411"
                    fill="#0E457A"
                    stroke="#04033A"
                    strokeWidth=".822"
                    className="Rectangle 1111"
                    rx="10.411"
                  />
                  <path
                    fill="#04033A"
                    d="M1299.35 207.453v-3.96h-6.15c-.53 0-.99-.12-1.39-.36-.4-.256-.71-.584-.94-.984a2.784 2.784 0 0 1-.33-1.32c0-.272.03-.544.09-.816.07-.272.16-.52.29-.744l4.85-8.616h1.94l-5.2 9.192c-.08.144-.15.288-.2.432-.03.144-.04.304-.04.48 0 .304.09.584.28.84.21.24.5.36.87.36h5.93v-6.288h1.75v6.288h2.37v1.536h-2.37v3.96h-1.75Z"
                    className="4"
                  />
                </g>
              </g>
            </g>
          </g>
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
          <g className="Frame 1171277045">
            <g className="Group 2421">
              <g className="elements">
                <g className="Group 2365">
                  <path
                    stroke="#60E2B7"
                    strokeWidth="1.5"
                    d="M4 86.348v22.667c0 16.312 13.223 29.536 29.535 29.536 16.312 0 29.536-13.224 29.536-29.536V75.552c0-16.375 13.274-29.65 29.65-29.65 16.375 0 29.65 13.275 29.65 29.65v33.094c0 16.478 13.426 29.8 29.904 29.672 16.369-.128 29.543-13.488 29.44-29.858l-.044-7.056v-9.119"
                    className="Vector 240"
                  />
                  <path
                    stroke="#60E2B7"
                    strokeWidth="1.5"
                    d="M181.443 106.57V75.38c0-16.28 13.198-29.478 29.478-29.478S240.399 59.1 240.399 75.38v33.578c0 16.343 13.249 29.593 29.593 29.593 16.343 0 29.592-13.25 29.592-29.593V86.113"
                    className="Vector 241"
                  />
                </g>
                <ellipse
                  cx="3.818"
                  cy="84.802"
                  fill="#60E2B7"
                  className="Ellipse 186"
                  rx="3.818"
                  ry="3.82"
                />
                <ellipse
                  cx="299.818"
                  cy="84.802"
                  fill="#60E2B7"
                  className="Ellipse 187"
                  rx="3.818"
                  ry="3.82"
                />
              </g>
              <g className="step_4 active">
                <path
                  fill="#fff"
                  d="M269.881 179.4H157.999c-6.627 0-11.999-5.372-11.999-11.998 0-6.627 5.372-11.999 11.999-11.999h111.882V179.4Z"
                  className="Rectangle 1188"
                />
                <path
                  fill="#04033A"
                  d="M160.759 172.402a5.349 5.349 0 0 1-2.044-.378 5.013 5.013 0 0 1-1.582-1.064 4.998 4.998 0 0 1-1.022-1.568 5.002 5.002 0 0 1-.364-1.904c0-.672.121-1.302.364-1.89a4.836 4.836 0 0 1 1.022-1.554 4.83 4.83 0 0 1 1.582-1.05 5.187 5.187 0 0 1 2.044-.392h1.134v.896h-1.092a4.13 4.13 0 0 0-1.596.308c-.485.206-.91.49-1.274.854a3.814 3.814 0 0 0-.854 1.26 4.15 4.15 0 0 0-.294 1.568c0 .579.098 1.111.294 1.596.205.486.49.91.854 1.274.364.355.789.635 1.274.84a4.296 4.296 0 0 0 1.596.294h1.092v.91h-1.134Zm7.349.182c-.765 0-1.461-.13-2.086-.392a4.725 4.725 0 0 1-1.61-1.092 5.04 5.04 0 0 1-1.022-1.624 5.533 5.533 0 0 1-.35-1.974c0-.7.117-1.358.35-1.974a5.05 5.05 0 0 1 1.022-1.624c.448-.466.985-.83 1.61-1.092.625-.261 1.321-.392 2.086-.392.775 0 1.47.131 2.086.392a4.61 4.61 0 0 1 1.596 1.092 4.745 4.745 0 0 1 1.022 1.624 5.33 5.33 0 0 1 .364 1.974c0 .7-.121 1.358-.364 1.974a4.736 4.736 0 0 1-1.022 1.624 4.583 4.583 0 0 1-1.596 1.092c-.616.262-1.311.392-2.086.392Zm0-.91c.588 0 1.129-.102 1.624-.308a3.809 3.809 0 0 0 1.288-.868 4.02 4.02 0 0 0 .84-1.33 4.447 4.447 0 0 0 .308-1.666c0-.606-.103-1.162-.308-1.666a3.88 3.88 0 0 0-.84-1.316 3.746 3.746 0 0 0-1.288-.882 4.048 4.048 0 0 0-1.624-.322c-.579 0-1.115.108-1.61.322a3.89 3.89 0 0 0-1.302.882 4.025 4.025 0 0 0-.854 1.33 4.521 4.521 0 0 0-.294 1.652c0 .598.098 1.153.294 1.666.205.504.49.948.854 1.33.373.374.807.663 1.302.868a4.146 4.146 0 0 0 1.61.308Zm13.389.91c-.486 0-.92-.112-1.302-.336a2.46 2.46 0 0 1-.896-.938 2.829 2.829 0 0 1-.322-1.358v-5.054c0-.298-.07-.564-.21-.798a1.476 1.476 0 0 0-.56-.56 1.397 1.397 0 0 0-.756-.21c-.28 0-.537.07-.77.21a1.47 1.47 0 0 0-.56.56c-.14.234-.21.5-.21.798v7.504h-1.008v-7.35c0-.513.107-.966.322-1.358.214-.392.513-.7.896-.924.382-.233.826-.35 1.33-.35.494 0 .933.117 1.316.35.382.224.681.532.896.924.224.392.336.845.336 1.358v5.054c0 .308.07.579.21.812.14.234.322.42.546.56.224.131.471.196.742.196.27 0 .518-.065.742-.196a1.53 1.53 0 0 0 .532-.56 1.64 1.64 0 0 0 .196-.812v-7.504h1.008v7.35c0 .504-.103.957-.308 1.358a2.404 2.404 0 0 1-.868.938c-.374.224-.808.336-1.302.336Zm8.201 0c-.28 0-.527-.079-.742-.238-.214-.158-.392-.424-.532-.798l-3.36-8.946h1.106l3.08 8.54c.075.196.14.327.196.392a.34.34 0 0 0 .252.098.32.32 0 0 0 .238-.098c.066-.065.136-.196.21-.392l3.136-8.54h1.064l-3.374 8.946c-.14.364-.317.63-.532.798a1.212 1.212 0 0 1-.742.238Zm8.078-.182c-.542 0-1.013-.126-1.414-.378a2.654 2.654 0 0 1-.938-.994 2.878 2.878 0 0 1-.322-1.33c0-.466.116-.905.35-1.316a2.31 2.31 0 0 1 1.05-.952c-.458-.233-.798-.541-1.022-.924a2.524 2.524 0 0 1-.322-1.232 2.627 2.627 0 0 1 1.288-2.296c.392-.242.83-.364 1.316-.364h3.794v.896h-3.682c-.327 0-.621.08-.882.238-.252.15-.453.36-.602.63a1.82 1.82 0 0 0-.224.896c0 .299.079.579.238.84.158.262.368.472.63.63.261.15.56.224.896.224h3.108v.896h-3.024c-.402 0-.747.089-1.036.266-.28.178-.495.406-.644.686-.14.28-.21.579-.21.896 0 .308.07.598.21.868.14.271.345.495.616.672.27.168.597.252.98.252h3.626v.896h-3.78Zm5.524 0v-9.8h4.256c.598 0 1.144.131 1.638.392.495.262.887.626 1.176 1.092.299.467.448 1.008.448 1.624 0 .663-.172 1.242-.518 1.736a3.025 3.025 0 0 1-1.386 1.092l1.106 2.394c.094.196.196.341.308.434.112.084.266.126.462.126h.588v.91h-.728c-.354 0-.658-.088-.91-.266a2.036 2.036 0 0 1-.63-.756l-1.204-2.604c-.112.01-.228.019-.35.028-.112.01-.224.014-.336.014h-2.912v3.584H203.3Zm1.008-4.48h3.08c.448 0 .854-.084 1.218-.252.364-.177.654-.429.868-.756.224-.336.336-.737.336-1.204 0-.457-.112-.854-.336-1.19a2.003 2.003 0 0 0-.868-.756 2.593 2.593 0 0 0-1.176-.266h-3.122v4.424Zm8.37 4.48v-.896h4.27c.382 0 .709-.088.98-.266.28-.177.49-.406.63-.686.14-.289.21-.588.21-.896 0-.308-.07-.597-.21-.868a1.579 1.579 0 0 0-.602-.658c-.262-.168-.579-.252-.952-.252h-1.96c-.56 0-1.046-.112-1.456-.336a2.506 2.506 0 0 1-.938-.938 2.689 2.689 0 0 1-.322-1.316c0-.485.107-.928.322-1.33a2.56 2.56 0 0 1 .938-.98c.41-.252.896-.378 1.456-.378h4.102v.896h-4.032c-.364 0-.682.084-.952.252a1.808 1.808 0 0 0-.616.658c-.14.262-.21.537-.21.826 0 .29.065.565.196.826.14.262.336.476.588.644.261.159.578.238.952.238h1.974c.588 0 1.082.117 1.484.35.41.234.718.551.924.952.214.392.322.826.322 1.302 0 .532-.112 1.018-.336 1.456-.215.43-.528.77-.938 1.022-.402.252-.887.378-1.456.378h-4.368Zm8.483 0v-.896h1.946v-8.008h-1.946v-.896h4.9v.896h-1.946v8.008h1.946v.896h-4.9Zm11.369.182c-.765 0-1.461-.13-2.086-.392a4.725 4.725 0 0 1-1.61-1.092 5.04 5.04 0 0 1-1.022-1.624 5.533 5.533 0 0 1-.35-1.974c0-.7.117-1.358.35-1.974a5.05 5.05 0 0 1 1.022-1.624c.448-.466.985-.83 1.61-1.092.625-.261 1.321-.392 2.086-.392.775 0 1.47.131 2.086.392a4.61 4.61 0 0 1 1.596 1.092 4.745 4.745 0 0 1 1.022 1.624 5.33 5.33 0 0 1 .364 1.974c0 .7-.121 1.358-.364 1.974a4.736 4.736 0 0 1-1.022 1.624 4.583 4.583 0 0 1-1.596 1.092c-.616.262-1.311.392-2.086.392Zm0-.91c.588 0 1.129-.102 1.624-.308a3.809 3.809 0 0 0 1.288-.868 4.02 4.02 0 0 0 .84-1.33 4.447 4.447 0 0 0 .308-1.666c0-.606-.103-1.162-.308-1.666a3.88 3.88 0 0 0-.84-1.316 3.746 3.746 0 0 0-1.288-.882 4.048 4.048 0 0 0-1.624-.322c-.579 0-1.115.108-1.61.322a3.89 3.89 0 0 0-1.302.882 4.025 4.025 0 0 0-.854 1.33 4.521 4.521 0 0 0-.294 1.652c0 .598.098 1.153.294 1.666.205.504.49.948.854 1.33.373.374.807.663 1.302.868a4.146 4.146 0 0 0 1.61.308Zm13.388.91a2.53 2.53 0 0 1-1.302-.336 2.476 2.476 0 0 1-.896-.938 2.84 2.84 0 0 1-.322-1.358v-5.054c0-.298-.07-.564-.21-.798a1.47 1.47 0 0 0-.56-.56 1.397 1.397 0 0 0-.756-.21c-.28 0-.536.07-.77.21-.233.131-.42.318-.56.56-.14.234-.21.5-.21.798v7.504h-1.008v-7.35c0-.513.108-.966.322-1.358.215-.392.514-.7.896-.924.383-.233.826-.35 1.33-.35.495 0 .934.117 1.316.35.383.224.682.532.896.924.224.392.336.845.336 1.358v5.054c0 .308.07.579.21.812.14.234.322.42.546.56.224.131.472.196.742.196.271 0 .518-.065.742-.196.224-.14.402-.326.532-.56a1.63 1.63 0 0 0 .196-.812v-7.504h1.008v7.35c0 .504-.102.957-.308 1.358a2.39 2.39 0 0 1-.868.938c-.373.224-.807.336-1.302.336Z"
                  className="Conversion"
                />
                <rect
                  width="21"
                  height="53.401"
                  x="259.053"
                  y="126"
                  fill="#60E2B7"
                  className="Rectangle 2545"
                  rx="10.5"
                />
                <path
                  fill="#04033A"
                  d="M271.249 172.373v-2.31h-3.584c-.308 0-.579-.07-.812-.21a1.595 1.595 0 0 1-.546-.574 1.597 1.597 0 0 1-.196-.77c0-.159.018-.317.056-.476.037-.159.093-.303.168-.434l2.828-5.026h1.134l-3.038 5.362a1.463 1.463 0 0 0-.112.252 1.27 1.27 0 0 0-.028.28c0 .177.056.341.168.49.121.14.289.21.504.21h3.458v-3.668h1.022v3.668h1.386v.896h-1.386v2.31h-1.022Z"
                  className="4"
                />
              </g>
              <g className="step_3 active">
                <path
                  fill="#fff"
                  d="M212.712 23.998H78.999c-6.627 0-12-5.372-12-11.999C67 5.373 72.373.001 79 .001h133.713v23.997Z"
                  className="Rectangle 1188"
                />
                <path
                  fill="#04033A"
                  d="M81.621 17a5.35 5.35 0 0 1-2.043-.378 5.021 5.021 0 0 1-1.582-1.064 5 5 0 0 1-1.022-1.568 5.01 5.01 0 0 1-.365-1.904 4.9 4.9 0 0 1 .365-1.89 4.834 4.834 0 0 1 1.022-1.554 4.833 4.833 0 0 1 1.582-1.05A5.182 5.182 0 0 1 81.62 7.2h1.135v.896h-1.093a4.12 4.12 0 0 0-1.596.308 3.97 3.97 0 0 0-1.273.854 3.812 3.812 0 0 0-.855 1.26 4.148 4.148 0 0 0-.293 1.568c0 .579.097 1.11.293 1.596.206.485.49.91.855 1.274.364.355.788.635 1.273.84a4.293 4.293 0 0 0 1.597.294h1.091V17h-1.133Zm7.35.182c-.766 0-1.461-.13-2.087-.392a4.73 4.73 0 0 1-1.61-1.092 5.045 5.045 0 0 1-1.022-1.624 5.524 5.524 0 0 1-.35-1.974c0-.7.117-1.358.35-1.974a5.045 5.045 0 0 1 1.023-1.624 4.73 4.73 0 0 1 1.61-1.092c.625-.261 1.32-.392 2.085-.392.775 0 1.47.13 2.087.392a4.586 4.586 0 0 1 1.596 1.092 4.748 4.748 0 0 1 1.021 1.624c.243.616.364 1.274.364 1.974s-.12 1.358-.364 1.974a4.748 4.748 0 0 1-1.022 1.624c-.438.467-.97.83-1.596 1.092-.615.261-1.31.392-2.085.392Zm0-.91c.587 0 1.129-.103 1.623-.308a3.827 3.827 0 0 0 1.288-.868 4.03 4.03 0 0 0 .84-1.33 4.445 4.445 0 0 0 .309-1.666c0-.607-.103-1.162-.309-1.666a3.873 3.873 0 0 0-.84-1.316 3.732 3.732 0 0 0-1.288-.882 4.036 4.036 0 0 0-1.623-.322 4 4 0 0 0-1.61.322c-.495.205-.93.5-1.303.882a4.02 4.02 0 0 0-.854 1.33 4.52 4.52 0 0 0-.293 1.652c0 .597.097 1.153.293 1.666.206.504.49.947.855 1.33a3.98 3.98 0 0 0 1.302.868 4.158 4.158 0 0 0 1.61.308Zm13.388.91a2.53 2.53 0 0 1-1.302-.336 2.47 2.47 0 0 1-.896-.938 2.832 2.832 0 0 1-.322-1.358V9.496c0-.299-.07-.565-.21-.798a1.466 1.466 0 0 0-.56-.56 1.397 1.397 0 0 0-.756-.21c-.28 0-.537.07-.77.21-.234.13-.42.317-.56.56-.14.233-.21.5-.21.798V17h-1.008V9.65c0-.513.107-.966.322-1.358.215-.392.513-.7.896-.924.382-.233.826-.35 1.33-.35.495 0 .933.117 1.316.35.383.224.681.532.896.924.224.392.336.845.336 1.358v5.054c0 .308.07.579.21.812.14.233.322.42.546.56.224.13.471.196.742.196s.518-.065.742-.196c.224-.14.401-.327.532-.56a1.63 1.63 0 0 0 .196-.812V7.2h1.008v7.35c0 .504-.103.957-.308 1.358a2.4 2.4 0 0 1-.868.938c-.373.224-.807.336-1.302.336Zm4.562-.182v-.896h4.27c.382 0 .709-.089.98-.266.28-.177.49-.406.63-.686.14-.29.21-.588.21-.896 0-.308-.07-.597-.21-.868a1.574 1.574 0 0 0-.602-.658c-.262-.168-.579-.252-.952-.252h-1.96c-.56 0-1.046-.112-1.456-.336a2.508 2.508 0 0 1-.938-.938 2.69 2.69 0 0 1-.322-1.316c0-.485.107-.929.322-1.33a2.56 2.56 0 0 1 .938-.98c.41-.252.896-.378 1.456-.378h4.102v.896h-4.032c-.364 0-.682.084-.952.252a1.803 1.803 0 0 0-.616.658c-.14.261-.21.537-.21.826 0 .29.065.565.196.826.14.261.336.476.588.644.261.159.578.238.952.238h1.974c.588 0 1.082.117 1.484.35.41.233.718.55.924.952.214.392.322.826.322 1.302 0 .532-.112 1.017-.336 1.456-.215.43-.528.77-.938 1.022-.402.252-.887.378-1.456.378h-4.368Zm8.483 0v-.896h1.946V8.096h-1.946V7.2h4.9v.896h-1.946v8.008h1.946V17h-4.9Zm6.735 0V7.2h3.066c1.027 0 1.923.21 2.688.63a4.48 4.48 0 0 1 1.778 1.736c.42.728.63 1.568.63 2.52s-.21 1.801-.63 2.548a4.479 4.479 0 0 1-1.778 1.736c-.765.42-1.661.63-2.688.63h-3.066Zm1.008-.896h2.072c.775 0 1.47-.159 2.086-.476a3.554 3.554 0 0 0 1.442-1.386c.355-.607.532-1.325.532-2.156 0-.821-.177-1.53-.532-2.128a3.462 3.462 0 0 0-1.442-1.372c-.616-.327-1.311-.49-2.086-.49h-2.072v8.008Zm11.214.896c-.542 0-1.013-.126-1.414-.378a2.657 2.657 0 0 1-.938-.994 2.88 2.88 0 0 1-.322-1.33c0-.467.116-.905.35-1.316a2.31 2.31 0 0 1 1.05-.952c-.458-.233-.798-.541-1.022-.924a2.526 2.526 0 0 1-.322-1.232c0-.495.116-.943.35-1.344.233-.401.546-.719.938-.952.392-.243.83-.364 1.316-.364h3.794v.896h-3.682a1.664 1.664 0 0 0-1.484.868c-.15.27-.224.57-.224.896 0 .299.079.579.238.84.158.261.368.471.63.63.261.15.56.224.896.224h3.108v.896h-3.024c-.402 0-.747.089-1.036.266a1.81 1.81 0 0 0-.644.686c-.14.28-.21.579-.21.896 0 .308.07.597.21.868.14.27.345.495.616.672.27.168.597.252.98.252h3.626V17h-3.78Zm5.524 0V7.2h4.256c.598 0 1.144.13 1.638.392.495.261.887.625 1.176 1.092.299.467.448 1.008.448 1.624 0 .663-.172 1.241-.518 1.736a3.03 3.03 0 0 1-1.386 1.092l1.106 2.394c.094.196.196.34.308.434.112.084.266.126.462.126h.588V17h-.728c-.354 0-.658-.089-.91-.266a2.041 2.041 0 0 1-.63-.756l-1.204-2.604c-.112.01-.228.019-.35.028-.112.01-.224.014-.336.014h-2.912V17h-1.008Zm1.008-4.48h3.08c.448 0 .854-.084 1.218-.252a2.13 2.13 0 0 0 .868-.756c.224-.336.336-.737.336-1.204 0-.457-.112-.854-.336-1.19a2.003 2.003 0 0 0-.868-.756 2.588 2.588 0 0 0-1.176-.266h-3.122v4.424ZM148.2 17l3.416-8.946c.14-.364.318-.625.532-.784.224-.168.486-.252.784-.252.308 0 .574.08.798.238.224.159.402.42.532.784l3.444 8.96H156.6l-.98-2.576h-5.376l-.98 2.576H148.2Zm2.352-3.472h4.76l-1.904-5.138a1.106 1.106 0 0 0-.196-.35.319.319 0 0 0-.266-.126.335.335 0 0 0-.28.126c-.056.084-.116.2-.182.35l-1.932 5.138ZM162.256 17c-.495 0-.924-.103-1.288-.308a2.184 2.184 0 0 1-.84-.882 2.7 2.7 0 0 1-.294-1.274v-6.44h-3.108V7.2h7.224v.896h-3.108v6.58c0 .41.126.751.378 1.022.261.27.611.406 1.05.406h.616V17h-.63Zm2.804 0v-.896h1.946V8.096h-1.946V7.2h4.9v.896h-1.946v8.008h1.946V17h-4.9Zm11.369.182c-.765 0-1.46-.13-2.086-.392a4.734 4.734 0 0 1-1.61-1.092 5.064 5.064 0 0 1-1.022-1.624 5.533 5.533 0 0 1-.35-1.974c0-.7.117-1.358.35-1.974a5.064 5.064 0 0 1 1.022-1.624 4.74 4.74 0 0 1 1.61-1.092c.626-.261 1.321-.392 2.086-.392.775 0 1.47.13 2.086.392a4.573 4.573 0 0 1 1.596 1.092 4.742 4.742 0 0 1 1.022 1.624 5.33 5.33 0 0 1 .364 1.974c0 .7-.121 1.358-.364 1.974a4.742 4.742 0 0 1-1.022 1.624c-.438.467-.97.83-1.596 1.092-.616.261-1.311.392-2.086.392Zm0-.91c.588 0 1.13-.103 1.624-.308a3.823 3.823 0 0 0 1.288-.868 4.03 4.03 0 0 0 .84-1.33 4.431 4.431 0 0 0 .308-1.666c0-.607-.102-1.162-.308-1.666a3.873 3.873 0 0 0-.84-1.316 3.728 3.728 0 0 0-1.288-.882 4.033 4.033 0 0 0-1.624-.322c-.578 0-1.115.107-1.61.322a3.89 3.89 0 0 0-1.302.882 4.03 4.03 0 0 0-.854 1.33 4.52 4.52 0 0 0-.294 1.652c0 .597.098 1.153.294 1.666.206.504.49.947.854 1.33.374.373.808.663 1.302.868a4.162 4.162 0 0 0 1.61.308Zm13.389.91c-.486 0-.92-.112-1.302-.336a2.463 2.463 0 0 1-.896-.938 2.83 2.83 0 0 1-.322-1.358V9.496c0-.299-.07-.565-.21-.798a1.47 1.47 0 0 0-.56-.56 1.397 1.397 0 0 0-.756-.21c-.28 0-.537.07-.77.21-.234.13-.42.317-.56.56-.14.233-.21.5-.21.798V17h-1.008V9.65c0-.513.107-.966.322-1.358.214-.392.513-.7.896-.924.382-.233.826-.35 1.33-.35.494 0 .933.117 1.316.35.382.224.681.532.896.924.224.392.336.845.336 1.358v5.054c0 .308.07.579.21.812.14.233.322.42.546.56.224.13.471.196.742.196.27 0 .518-.065.742-.196.224-.14.401-.327.532-.56a1.64 1.64 0 0 0 .196-.812V7.2h1.008v7.35c0 .504-.103.957-.308 1.358a2.407 2.407 0 0 1-.868.938c-.374.224-.808.336-1.302.336Z"
                  className="Consideration"
                />
                <rect
                  width="21"
                  height="57.901"
                  x="202.212"
                  fill="#60E2B7"
                  className="Rectangle 2544"
                  rx="10.5"
                />
                <path
                  fill="#04033A"
                  d="M209.996 17v-.896h3.248c.383 0 .709-.084.98-.252.271-.177.476-.406.616-.686s.21-.574.21-.882a1.88 1.88 0 0 0-.224-.896 1.783 1.783 0 0 0-.644-.7c-.28-.177-.625-.266-1.036-.266h-2.618v-.896h2.702c.401 0 .733-.08.994-.238.271-.168.476-.383.616-.644a1.644 1.644 0 0 0 0-1.652 1.692 1.692 0 0 0-.616-.644c-.271-.168-.602-.252-.994-.252h-3.234V7.2h3.402c.541 0 1.008.126 1.4.378.401.243.709.56.924.952.224.383.336.803.336 1.26 0 .513-.135.966-.406 1.358-.261.383-.63.667-1.106.854a2.3 2.3 0 0 1 .84.546c.224.233.392.5.504.798.112.299.168.607.168.924 0 .476-.107.924-.322 1.344-.215.41-.523.747-.924 1.008-.401.252-.873.378-1.414.378h-3.402Z"
                  className="3"
                />
              </g>
              <g className="step_2 active">
                <path
                  fill="#fff"
                  d="M151 155.402h96.648c6.627 0 11.999 5.372 11.999 11.999 0 6.627-5.372 11.999-11.999 11.999H151v-23.998Z"
                  className="Rectangle 1188"
                />
                <path
                  fill="#04033A"
                  d="M171.919 172.402v-9.8h3.066c1.027 0 1.923.21 2.688.63a4.48 4.48 0 0 1 1.778 1.736c.42.728.63 1.568.63 2.52s-.21 1.802-.63 2.548a4.474 4.474 0 0 1-1.778 1.736c-.765.42-1.661.63-2.688.63h-3.066Zm1.008-.896h2.072c.775 0 1.47-.158 2.086-.476a3.545 3.545 0 0 0 1.442-1.386c.355-.606.532-1.325.532-2.156 0-.821-.177-1.53-.532-2.128a3.468 3.468 0 0 0-1.442-1.372c-.616-.326-1.311-.49-2.086-.49h-2.072v8.008Zm8.554.896v-.896h1.946v-8.008h-1.946v-.896h4.9v.896h-1.946v8.008h1.946v.896h-4.9Zm6.665 0v-.896h4.27c.383 0 .71-.088.98-.266.28-.177.49-.406.63-.686.14-.289.21-.588.21-.896 0-.308-.07-.597-.21-.868-.13-.27-.331-.49-.602-.658-.261-.168-.578-.252-.952-.252h-1.96c-.56 0-1.045-.112-1.456-.336a2.513 2.513 0 0 1-.938-.938 2.7 2.7 0 0 1-.322-1.316c0-.485.108-.928.322-1.33.224-.41.537-.737.938-.98.411-.252.896-.378 1.456-.378h4.102v.896h-4.032c-.364 0-.681.084-.952.252a1.825 1.825 0 0 0-.616.658c-.14.262-.21.537-.21.826 0 .29.066.565.196.826.14.262.336.476.588.644.262.159.579.238.952.238h1.974c.588 0 1.083.117 1.484.35.411.234.719.551.924.952.215.392.322.826.322 1.302 0 .532-.112 1.018-.336 1.456-.214.43-.527.77-.938 1.022-.401.252-.886.378-1.456.378h-4.368Zm13.187 0a5.352 5.352 0 0 1-2.044-.378 5.024 5.024 0 0 1-1.582-1.064 5.015 5.015 0 0 1-1.022-1.568 5.022 5.022 0 0 1-.364-1.904 4.853 4.853 0 0 1 1.386-3.444 4.84 4.84 0 0 1 1.582-1.05 5.19 5.19 0 0 1 2.044-.392h1.134v.896h-1.092a4.13 4.13 0 0 0-1.596.308c-.485.206-.91.49-1.274.854a3.829 3.829 0 0 0-.854 1.26 4.15 4.15 0 0 0-.294 1.568c0 .579.098 1.111.294 1.596.206.486.49.91.854 1.274.364.355.789.635 1.274.84a4.296 4.296 0 0 0 1.596.294h1.092v.91h-1.134Zm7.349.182c-.765 0-1.46-.13-2.086-.392a4.725 4.725 0 0 1-1.61-1.092 5.056 5.056 0 0 1-1.022-1.624 5.533 5.533 0 0 1-.35-1.974c0-.7.117-1.358.35-1.974a5.067 5.067 0 0 1 1.022-1.624c.448-.466.985-.83 1.61-1.092.626-.261 1.321-.392 2.086-.392.775 0 1.47.131 2.086.392a4.591 4.591 0 0 1 1.596 1.092 4.745 4.745 0 0 1 1.022 1.624 5.33 5.33 0 0 1 .364 1.974c0 .7-.121 1.358-.364 1.974a4.736 4.736 0 0 1-1.022 1.624c-.438.467-.97.831-1.596 1.092-.616.262-1.311.392-2.086.392Zm0-.91a4.18 4.18 0 0 0 1.624-.308 3.809 3.809 0 0 0 1.288-.868 4.02 4.02 0 0 0 .84-1.33 4.428 4.428 0 0 0 .308-1.666c0-.606-.102-1.162-.308-1.666a3.88 3.88 0 0 0-.84-1.316 3.746 3.746 0 0 0-1.288-.882 4.045 4.045 0 0 0-1.624-.322c-.578 0-1.115.108-1.61.322a3.91 3.91 0 0 0-2.156 2.212 4.521 4.521 0 0 0-.294 1.652c0 .598.098 1.153.294 1.666.206.504.49.948.854 1.33.374.374.808.663 1.302.868a4.15 4.15 0 0 0 1.61.308Zm10.421.91c-.28 0-.528-.079-.742-.238-.215-.158-.392-.424-.532-.798l-3.36-8.946h1.106l3.08 8.54c.074.196.14.327.196.392a.338.338 0 0 0 .252.098.323.323 0 0 0 .238-.098c.065-.065.135-.196.21-.392l3.136-8.54h1.064l-3.374 8.946c-.14.364-.318.63-.532.798a1.214 1.214 0 0 1-.742.238Zm8.077-.182c-.541 0-1.013-.126-1.414-.378a2.662 2.662 0 0 1-.938-.994 2.878 2.878 0 0 1-.322-1.33c0-.466.117-.905.35-1.316a2.32 2.32 0 0 1 1.05-.952c-.457-.233-.798-.541-1.022-.924a2.524 2.524 0 0 1-.322-1.232 2.632 2.632 0 0 1 1.288-2.296 2.456 2.456 0 0 1 1.316-.364h3.794v.896h-3.682c-.327 0-.621.08-.882.238-.252.15-.453.36-.602.63a1.83 1.83 0 0 0-.224.896c0 .299.079.579.238.84.159.262.369.472.63.63.261.15.56.224.896.224h3.108v.896h-3.024c-.401 0-.747.089-1.036.266-.28.178-.495.406-.644.686-.14.28-.21.579-.21.896 0 .308.07.598.21.868.14.271.345.495.616.672.271.168.597.252.98.252h3.626v.896h-3.78Zm5.525 0v-9.8h4.256c.597 0 1.143.131 1.638.392.494.262.886.626 1.176 1.092.298.467.448 1.008.448 1.624 0 .663-.173 1.242-.518 1.736a3.036 3.036 0 0 1-1.386 1.092l1.106 2.394c.093.196.196.341.308.434.112.084.266.126.462.126h.588v.91h-.728c-.355 0-.658-.088-.91-.266a2.036 2.036 0 0 1-.63-.756l-1.204-2.604c-.112.01-.229.019-.35.028-.112.01-.224.014-.336.014h-2.912v3.584h-1.008Zm1.008-4.48h3.08c.448 0 .854-.084 1.218-.252.364-.177.653-.429.868-.756.224-.336.336-.737.336-1.204 0-.457-.112-.854-.336-1.19a2.009 2.009 0 0 0-.868-.756 2.599 2.599 0 0 0-1.176-.266h-3.122v4.424Zm11.263 4.48v-2.898c-.709-.074-1.311-.289-1.806-.644a3.475 3.475 0 0 1-1.106-1.4 4.726 4.726 0 0 1-.364-1.876v-2.968h1.008v3.066c0 .523.107 1.008.322 1.456.215.448.532.812.952 1.092.42.271.924.406 1.512.406.597 0 1.101-.135 1.512-.406.411-.28.723-.644.938-1.092a3.21 3.21 0 0 0 .336-1.456v-3.066h1.008v2.968a4.58 4.58 0 0 1-.378 1.876 3.424 3.424 0 0 1-1.12 1.4c-.485.364-1.087.579-1.806.644v2.898h-1.008Z"
                  className="Discovery"
                />
                <rect
                  width="21"
                  height="53.401"
                  x="141"
                  y="126"
                  fill="#60E2B7"
                  className="Rectangle 1111"
                  rx="10.5"
                />
                <path
                  fill="#04033A"
                  d="M150.184 172.373c-.327 0-.611-.065-.854-.196a1.432 1.432 0 0 1-.546-.532 1.51 1.51 0 0 1-.182-.728c0-.252.065-.504.196-.756a1.98 1.98 0 0 1 .574-.644l3.276-2.324c.373-.261.653-.56.84-.896.187-.336.28-.672.28-1.008a1.708 1.708 0 0 0-.994-1.568c-.327-.168-.733-.252-1.218-.252h-2.478v-.896h2.59c.663 0 1.223.126 1.68.378.467.243.817.569 1.05.98.243.411.364.859.364 1.344 0 .504-.121.98-.364 1.428-.243.448-.616.849-1.12 1.204l-3.276 2.282a1.209 1.209 0 0 0-.294.322.69.69 0 0 0-.098.35.57.57 0 0 0 .196.434c.131.121.317.182.56.182h4.606v.896h-4.788Z"
                  className="2"
                />
              </g>
              <g className="step_1 active">
                <path
                  fill="#fff"
                  d="M92 3h114.574c6.627 0 11.999 5.372 11.999 11.999 0 6.626-5.372 11.998-11.999 11.998H92V3Z"
                  className="Rectangle 1188"
                />
                <path
                  fill="#04033A"
                  d="M112.841 20v-.896h1.946v-8.008h-1.946V10.2h4.9v.896h-1.946v8.008h1.946V20h-4.9Zm13.274.182c-.486 0-.92-.112-1.302-.336a2.463 2.463 0 0 1-.896-.938 2.83 2.83 0 0 1-.322-1.358v-5.054c0-.299-.07-.565-.21-.798a1.47 1.47 0 0 0-.56-.56 1.397 1.397 0 0 0-.756-.21c-.28 0-.537.07-.77.21-.234.13-.42.317-.56.56-.14.233-.21.5-.21.798V20h-1.008v-7.35c0-.513.107-.966.322-1.358.214-.392.513-.7.896-.924.382-.233.826-.35 1.33-.35.494 0 .933.117 1.316.35.382.224.681.532.896.924.224.392.336.845.336 1.358v5.054c0 .308.07.579.21.812.14.233.322.42.546.56.224.13.471.196.742.196.27 0 .518-.065.742-.196.224-.14.401-.327.532-.56a1.64 1.64 0 0 0 .196-.812V10.2h1.008v7.35c0 .504-.103.957-.308 1.358a2.407 2.407 0 0 1-.868.938c-.374.224-.808.336-1.302.336Zm4.562-.182v-.896h4.27c.382 0 .709-.089.98-.266.28-.177.49-.406.63-.686.14-.29.21-.588.21-.896 0-.308-.07-.597-.21-.868a1.574 1.574 0 0 0-.602-.658c-.262-.168-.579-.252-.952-.252h-1.96c-.56 0-1.046-.112-1.456-.336a2.508 2.508 0 0 1-.938-.938 2.69 2.69 0 0 1-.322-1.316c0-.485.107-.929.322-1.33a2.56 2.56 0 0 1 .938-.98c.41-.252.896-.378 1.456-.378h4.102v.896h-4.032c-.364 0-.682.084-.952.252a1.802 1.802 0 0 0-.616.658c-.14.261-.21.537-.21.826 0 .29.065.565.196.826.14.261.336.476.588.644.261.159.578.238.952.238h1.974c.588 0 1.082.117 1.484.35.41.233.718.55.924.952.214.392.322.826.322 1.302 0 .532-.112 1.017-.336 1.456-.215.43-.528.77-.938 1.022-.402.252-.887.378-1.456.378h-4.368Zm8.861 0v-9.8h4.144c.597 0 1.143.135 1.638.406.494.27.886.649 1.176 1.134.298.476.448 1.031.448 1.666 0 .616-.145 1.167-.434 1.652-.28.485-.672.863-1.176 1.134-.495.27-1.064.406-1.708.406h-3.08V20h-1.008Zm1.008-4.298h2.968c.448 0 .854-.089 1.218-.266.364-.187.653-.448.868-.784.224-.345.336-.76.336-1.246 0-.485-.112-.896-.336-1.232a2.17 2.17 0 0 0-.868-.798 2.487 2.487 0 0 0-1.176-.28h-3.01v4.606ZM148.32 20v-.896h1.946v-8.008h-1.946V10.2h4.9v.896h-1.946v8.008h1.946V20h-4.9Zm6.735 0v-9.8h4.256c.598 0 1.144.13 1.638.392.495.261.887.625 1.176 1.092.299.467.448 1.008.448 1.624 0 .663-.172 1.241-.518 1.736a3.03 3.03 0 0 1-1.386 1.092l1.106 2.394c.094.196.196.34.308.434.112.084.266.126.462.126h.588V20h-.728c-.354 0-.658-.089-.91-.266a2.041 2.041 0 0 1-.63-.756l-1.204-2.604c-.112.01-.228.019-.35.028-.112.01-.224.014-.336.014h-2.912V20h-1.008Zm1.008-4.48h3.08c.448 0 .854-.084 1.218-.252a2.13 2.13 0 0 0 .868-.756c.224-.336.336-.737.336-1.204 0-.457-.112-.854-.336-1.19a2.003 2.003 0 0 0-.868-.756 2.589 2.589 0 0 0-1.176-.266h-3.122v4.424ZM163.37 20l3.416-8.946c.14-.364.317-.625.532-.784a1.27 1.27 0 0 1 .784-.252c.308 0 .574.08.798.238.224.159.401.42.532.784l3.444 8.96h-1.106l-.98-2.576h-5.376l-.98 2.576h-1.064Zm2.352-3.472h4.76l-1.904-5.138a1.107 1.107 0 0 0-.196-.35.319.319 0 0 0-.266-.126.334.334 0 0 0-.28.126 2.28 2.28 0 0 0-.182.35l-1.932 5.138ZM177.426 20c-.495 0-.924-.103-1.288-.308a2.184 2.184 0 0 1-.84-.882 2.7 2.7 0 0 1-.294-1.274v-6.44h-3.108V10.2h7.224v.896h-3.108v6.58c0 .41.126.751.378 1.022.261.27.611.406 1.05.406h.616V20h-.63Zm2.804 0v-.896h1.946v-8.008h-1.946V10.2h4.9v.896h-1.946v8.008h1.946V20h-4.9Zm11.369.182c-.765 0-1.46-.13-2.086-.392a4.734 4.734 0 0 1-1.61-1.092 5.064 5.064 0 0 1-1.022-1.624 5.533 5.533 0 0 1-.35-1.974c0-.7.117-1.358.35-1.974a5.064 5.064 0 0 1 1.022-1.624 4.74 4.74 0 0 1 1.61-1.092c.626-.261 1.321-.392 2.086-.392.775 0 1.47.13 2.086.392a4.572 4.572 0 0 1 1.596 1.092 4.742 4.742 0 0 1 1.022 1.624 5.33 5.33 0 0 1 .364 1.974c0 .7-.121 1.358-.364 1.974a4.742 4.742 0 0 1-1.022 1.624c-.438.467-.97.83-1.596 1.092-.616.261-1.311.392-2.086.392Zm0-.91c.588 0 1.13-.103 1.624-.308a3.823 3.823 0 0 0 1.288-.868 4.03 4.03 0 0 0 .84-1.33 4.431 4.431 0 0 0 .308-1.666c0-.607-.102-1.162-.308-1.666a3.873 3.873 0 0 0-.84-1.316 3.727 3.727 0 0 0-1.288-.882 4.033 4.033 0 0 0-1.624-.322c-.578 0-1.115.107-1.61.322a3.89 3.89 0 0 0-1.302.882 4.03 4.03 0 0 0-.854 1.33 4.52 4.52 0 0 0-.294 1.652c0 .597.098 1.153.294 1.666.206.504.49.947.854 1.33.374.373.808.663 1.302.868a4.162 4.162 0 0 0 1.61.308Zm13.389.91c-.486 0-.92-.112-1.302-.336a2.463 2.463 0 0 1-.896-.938 2.83 2.83 0 0 1-.322-1.358v-5.054c0-.299-.07-.565-.21-.798a1.47 1.47 0 0 0-.56-.56 1.397 1.397 0 0 0-.756-.21c-.28 0-.537.07-.77.21-.234.13-.42.317-.56.56-.14.233-.21.5-.21.798V20h-1.008v-7.35c0-.513.107-.966.322-1.358.214-.392.513-.7.896-.924.382-.233.826-.35 1.33-.35.494 0 .933.117 1.316.35.382.224.681.532.896.924.224.392.336.845.336 1.358v5.054c0 .308.07.579.21.812.14.233.322.42.546.56.224.13.471.196.742.196.27 0 .518-.065.742-.196.224-.14.401-.327.532-.56a1.64 1.64 0 0 0 .196-.812V10.2h1.008v7.35c0 .504-.103.957-.308 1.358a2.407 2.407 0 0 1-.868.938c-.374.224-.808.336-1.302.336Z"
                  className="INspiration"
                />
                <rect
                  width="21"
                  height="53.401"
                  x="82.45"
                  y="3"
                  fill="#60E2B7"
                  className="Rectangle 1112"
                  rx="10.5"
                />
                <path
                  fill="#04033A"
                  d="M90.945 19.97v-.895h2.03v-8.008h-1.987v-.896h3.01v8.904h1.834v.896h-4.886Z"
                  className="1"
                />
              </g>
              <g className="step_4 inactive">
                <g className="Group 2240">
                  <rect
                    width="21.428"
                    height="21.428"
                    x="258.786"
                    y="127.837"
                    fill="#0E457A"
                    stroke="#04033A"
                    strokeWidth=".429"
                    className="Rectangle 1111"
                    rx="5.425"
                  />
                  <path
                    fill="#04033A"
                    d="M271.142 143.051v-2.38h-3.878c-.289 0-.541-.066-.756-.196a1.484 1.484 0 0 1-.504-.546 1.688 1.688 0 0 1-.112-1.162c.037-.15.089-.285.154-.406l2.94-5.11h.756l-3.052 5.306a1.124 1.124 0 0 0-.182.63c0 .224.07.429.21.616.149.177.359.266.63.266h3.794v-3.794h.686v3.794h1.428v.602h-1.428v2.38h-.686Z"
                    className="4"
                  />
                </g>
              </g>
              <g className="step_3 inactive">
                <g className="Group 2240">
                  <rect
                    width="21.428"
                    height="21.428"
                    x="201.786"
                    y="35.188"
                    fill="#0E457A"
                    stroke="#04033A"
                    strokeWidth=".429"
                    className="Rectangle 1111"
                    rx="5.425"
                  />
                  <path
                    fill="#04033A"
                    d="M209.575 50.402v-.616h3.206c.439 0 .807-.098 1.106-.294.308-.196.537-.448.686-.756.159-.308.238-.634.238-.98 0-.354-.084-.69-.252-1.008a1.869 1.869 0 0 0-.714-.784c-.317-.205-.714-.308-1.19-.308h-2.534v-.602h2.632c.457 0 .835-.093 1.134-.28a1.9 1.9 0 0 0 .7-.714c.159-.298.238-.606.238-.924a1.89 1.89 0 0 0-.938-1.638c-.308-.186-.686-.28-1.134-.28h-3.178v-.616h3.318c.541 0 1.003.122 1.386.364.392.243.691.556.896.938.215.374.322.77.322 1.19 0 .57-.149 1.055-.448 1.456-.299.392-.719.672-1.26.84.383.112.7.29.952.532.252.243.439.523.56.84.131.318.196.644.196.98 0 .458-.103.892-.308 1.302a2.538 2.538 0 0 1-.882.98c-.383.252-.845.378-1.386.378h-3.346Z"
                    className="3"
                  />
                </g>
              </g>
              <g className="step_2 inactive">
                <g className="Group 2240">
                  <rect
                    width="21.428"
                    height="21.428"
                    x="140.786"
                    y="127.837"
                    fill="#0E457A"
                    stroke="#04033A"
                    strokeWidth=".429"
                    className="Rectangle 1111"
                    rx="5.425"
                  />
                  <path
                    fill="#04033A"
                    d="M149.871 143.051c-.318 0-.588-.061-.812-.182a1.222 1.222 0 0 1-.504-.49 1.356 1.356 0 0 1-.168-.658c0-.243.06-.481.182-.714.121-.234.303-.434.546-.602l3.374-2.394c.42-.299.737-.635.952-1.008.214-.383.322-.761.322-1.134 0-.364-.094-.696-.28-.994-.187-.308-.467-.551-.84-.728-.364-.187-.817-.28-1.358-.28h-2.45v-.616h2.506c.681 0 1.25.121 1.708.364.457.242.802.564 1.036.966.233.392.35.816.35 1.274 0 .476-.126.947-.378 1.414-.252.457-.635.863-1.148 1.218l-3.346 2.366a1.153 1.153 0 0 0-.378.392.905.905 0 0 0-.112.434c0 .205.079.382.238.532.168.149.396.224.686.224h4.62v.616h-4.746Z"
                    className="2"
                  />
                </g>
              </g>
              <g className="step_1 inactive">
                <g className="Group 2240">
                  <rect
                    width="21.428"
                    height="21.428"
                    x="82.286"
                    y="34.786"
                    fill="#0E457A"
                    stroke="#04033A"
                    strokeWidth=".429"
                    className="Rectangle 1111"
                    rx="5.425"
                  />
                  <path
                    fill="#04033A"
                    d="M90.82 50v-.616h2.1v-8.568h-2.085V40.2h2.772v9.184h1.89V50H90.82Z"
                    className="1"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}
