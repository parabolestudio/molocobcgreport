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

function JourneyPath({ step }: { step: number }) {
  return (
    <div className="h-[300px] border border-red-500/50">
      Journey Path {step}
    </div>
  );
}

function JourneyContent({ step }: { step: number }) {
  return (
    <div className="grid grid-cols-[1fr_1.5fr_1fr] grid-rows-[1fr_1.5fr] gap-15">
      <div
        className=""
        style={{
          gridArea: "1 / 1 / 2 / 4",
        }}
      >
        <JourneyPath step={step} />
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
