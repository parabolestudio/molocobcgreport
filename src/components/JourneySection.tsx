"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { basePath } from "@/helpers/general";
import { useCopy } from "@/contexts/CopyContext";

export default function JourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const text4Ref = useRef<HTMLDivElement>(null);
  const text5Ref = useRef<HTMLDivElement>(null);

  const [journeyStep, setJourneyStep] = useState<number>(1);

  useEffect(() => {
    const section = sectionRef.current;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;
    const text3 = text3Ref.current;
    const text4 = text4Ref.current;
    const text5 = text5Ref.current;

    if (!section || !text1 || !text2 || !text3 || !text4 || !text5) return;

    // Initial state - all text hidden except first
    gsap.set([text2, text3, text4, text5], { autoAlpha: 0, y: 30 });
    gsap.set(text1, { autoAlpha: 1, y: 0 });

    let currentIndex = 0;
    const texts = [text1, text2, text3, text4, text5];

    const showText = (index: number) => {
      if (currentIndex === index) return;

      // Kill all ongoing animations first
      texts.forEach((text) => gsap.killTweensOf(text));

      const oldText = texts[currentIndex];
      const newText = texts[index];

      // Hide all texts immediately except the ones transitioning
      texts.forEach((text, i) => {
        if (i !== currentIndex && i !== index) {
          gsap.set(text, { autoAlpha: 0 });
        }
      });

      // Fade out and move up the old text
      gsap.to(oldText, {
        autoAlpha: 0,
        y: -30,
        duration: 0.4,
        ease: "power2.in",
      });

      // Fade in and move up the new text
      gsap.fromTo(
        newText,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.4,
        }
      );

      currentIndex = index;
    };

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=500%",
      pin: true,
      snap: {
        snapTo: [0, 0.2, 0.4, 0.6, 0.8, 1],
        duration: 0.3,
        ease: "power1.inOut",
      },
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress < 0.2) {
          if (currentIndex !== 0) showText(0);
        } else if (progress < 0.4) {
          if (currentIndex !== 1) showText(1);
        } else if (progress < 0.6) {
          if (currentIndex !== 2) showText(2);
        } else if (progress < 0.8) {
          if (currentIndex !== 3) showText(3);
        } else {
          if (currentIndex !== 4) showText(4);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const screenClasses =
    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1728px] px-10 opacity-0 invisible";

  return (
    <div ref={sectionRef} className="relative w-full h-screen">
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          ref={text1Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[960px] px-8 text-center flex flex-col items-center justify-center gap-20"
        >
          context screen
        </div>
        <div ref={text2Ref} className={screenClasses}>
          <JourneyContent step={1} />
        </div>

        <div
          ref={text3Ref}
          className={screenClasses}
          style={{ opacity: 0, visibility: "hidden" }}
        >
          <JourneyContent step={2} />
        </div>

        <div
          ref={text4Ref}
          className={screenClasses}
          style={{ opacity: 0, visibility: "hidden" }}
        >
          <JourneyContent step={3} />
        </div>

        <div
          ref={text5Ref}
          className={screenClasses}
          style={{ opacity: 0, visibility: "hidden" }}
        >
          <JourneyContent step={4} />
        </div>
      </div>
    </div>
  );
}

function JourneyPath() {
  return (
    <div className="max-h-[300]">
      <svg
        viewBox="0 0 1501 289"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
      >
        <path
          d="M9.75 130.797V148.5V223.75C9.75 259.234 38.5157 288 74 288C109.484 288 138.25 259.234 138.25 223.75V73.5C138.25 37.8776 167.128 9 202.75 9C238.372 9 267.25 37.8776 267.25 73.5V222.695C267.25 258.647 296.601 287.684 332.552 287.296C368.072 286.913 396.62 257.924 396.459 222.402L396.25 176.137V148.677"
          stroke="#60E2B7"
          strokeWidth="1.5"
        />
        <path
          d="M1037.75 106.013V223.75C1037.75 259.234 1066.52 288 1102 288C1137.48 288 1166.25 259.234 1166.25 223.75V73.5C1166.25 37.8776 1195.13 9 1230.75 9C1266.37 9 1295.25 37.8776 1295.25 73.5V222.695C1295.25 258.647 1324.6 287.684 1360.55 287.296C1396.07 286.913 1424.62 257.924 1424.46 222.402L1424.25 176.137V148.677"
          stroke="#60E2B7"
          strokeWidth="1.5"
        />
        <path
          d="M1424.75 185.322V73.3496C1424.75 37.8103 1453.56 9 1489.1 9H1496.5"
          stroke="#60E2B7"
          strokeWidth="1.5"
        />
        <path
          d="M395.75 191.695V73.1248C395.75 37.7097 424.46 9 459.875 9C495.29 9 524 37.7096 524 73.1248V223.625C524 259.178 552.821 288 588.375 288C623.928 288 652.75 259.178 652.75 223.625V130.089"
          stroke="#60E2B7"
          strokeWidth="1.5"
        />
        <path
          d="M652.75 191.695V72.917C652.75 37.6167 681.367 9 716.667 9C751.967 9 780.584 37.6166 780.584 72.917V223.833C780.584 259.272 809.312 288 844.751 288C880.189 288 908.917 259.272 908.917 223.833V73.4164C908.917 37.8402 937.757 9 973.334 9C1008.91 9 1037.75 37.8402 1037.75 73.4164V191.695"
          stroke="#60E2B7"
          strokeWidth="1.5"
        />
        <circle cx="9.5" cy="126.5" r="9.5" fill="#60E2B7" />
        <circle cx="1491.5" cy="9.5" r="9.5" fill="#60E2B7" />
      </svg>
    </div>
  );
}
function JourneyContent({ step }: { step: number }) {
  return (
    <div className="grid grid-cols-[1fr_1.5fr_1fr] grid-rows-[1fr_1.5fr] gap-15">
      <div style={{ gridArea: "1 / 1 / 2 / 4" }}>
        <JourneyPath />
      </div>
      <div
        className="flex flex-col justify-end"
        style={{
          gridArea: "2 / 2 / 3 / 3",
        }}
      >
        <div className="text-grey-text text-[40px] text-center font-bold mb-4">
          {useCopy("journey_" + step + "_stat_headline")}
        </div>
        <div className="text-bright-green text-[260px] text-center font-semibold leading-none">
          {useCopy("journey_" + step + "_stat_number")}
        </div>
        <div className="text-bright-green text-[24px] text-center text-balance">
          {useCopy("journey_" + step + "_stat_text")}
        </div>
      </div>
      <div
        className="flex flex-col justify-end"
        style={{
          gridArea: "2 / 3 / 3 / 4",
        }}
      >
        <div className="text-grey-text text-[14px] text-balance">
          {useCopy("journey_" + step + "_stat_source")}
        </div>
      </div>
    </div>
  );
}
