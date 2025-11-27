"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HookSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;
    const text3 = text3Ref.current;

    if (!section || !text1 || !text2 || !text3) return;

    // Initial state - all text hidden except first
    gsap.set([text2, text3], { autoAlpha: 0, y: 30 });
    gsap.set(text1, { autoAlpha: 1, y: 0 });

    let currentIndex = 0;
    const texts = [text1, text2, text3];

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
      end: "+=300%",
      pin: true,
      snap: {
        snapTo: [0, 0.33, 0.66, 1],
        duration: 0.3,
        ease: "power1.inOut",
      },
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress < 0.25) {
          if (currentIndex !== 0) showText(0);
        } else if (progress < 0.6) {
          if (currentIndex !== 1) showText(1);
        } else {
          if (currentIndex !== 2) showText(2);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-screen">
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          ref={text1Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[960px] px-8 text-center"
        >
          <p className="hook-p">
            <span className="text-[var(--bright-green)] font-bold">
              Consumers are turning to AI
            </span>{" "}
            for nearly everything— from research to recipes to shopping. The use
            cases and time spent will only continue to accelerate.
          </p>
        </div>

        <div
          ref={text2Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] px-8 text-center"
        >
          <p className="hook-p">
            How can brands find and connect with customers? How do they adapt
            and grow? 
          </p>
          <p className="hook-p">
            New research on LLM disruption, done in partnership with BCG, dives
            deep into the{" "}
            <span className="text-[var(--bright-green)] font-bold">
              current state of play for marketers
            </span>{" "}
            – and where we go from here.
          </p>
        </div>

        <div
          ref={text3Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90%] px-8 text-center flex flex-col items-center justify-center gap-[128px]"
        >
          <h1 className="text-[128px] text-[var(--bright-green)] font-(family-name:--font-museo-moderno) uppercase leading-[0.99]">
            <span className="font-extralight">The</span>{" "}
            <span className="font-bold">
              AI
              <br />
              Disruption Index
            </span>
          </h1>
          <div>
            <p className="hook-p">Story by</p>
            <div className="flex gap-5">
              <p>Moloco</p>
              <p>BCG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
