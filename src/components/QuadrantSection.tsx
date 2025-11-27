"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Chart from "./Chart";

gsap.registerPlugin(ScrollTrigger);

export default function QuadrantSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;

    if (!section || !text1 || !text2) return;

    // Initial state - all text hidden except first
    gsap.set(text2, { autoAlpha: 0, y: 30 });
    gsap.set(text1, { autoAlpha: 1, y: 0 });

    let currentIndex = 0;
    const texts = [text1, text2];

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
      end: "+=200%",
      pin: true,
      snap: {
        snapTo: [0, 0.5, 1],
        duration: 0.3,
        ease: "power1.inOut",
      },
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress < 0.4) {
          if (currentIndex !== 0) showText(0);
        } else {
          if (currentIndex !== 1) showText(1);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          ref={text1Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-8 text-center opacity-0 invisible"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Quadrant Section - Part 1
          </h2>
          <p className="text-xl text-emerald-100">
            This is the first text part of the Quadrant Section. Scroll down to
            see the final part.
          </p>
        </div>

        <div
          ref={text2Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-8 text-center opacity-0 invisible"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Quadrant Section - Part 2
          </h2>
          <Chart />
        </div>
      </div>
    </div>
  );
}
