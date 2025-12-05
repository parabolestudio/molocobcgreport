"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { basePath } from "@/helpers/general";
import { useCopy } from "@/contexts/CopyContext";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function HookSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const text4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;
    const text3 = text3Ref.current;
    const text4 = text4Ref.current;

    if (!section || !text1 || !text2 || !text3 || !text4) return;

    // Initial state - all text hidden except first
    gsap.set([text2, text3, text4], { autoAlpha: 0, y: 30 });
    gsap.set(text1, { autoAlpha: 1, y: 0 });

    let currentIndex = 0;
    const texts = [text1, text2, text3, text4];

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
      end: "+=400%",
      pin: true,
      snap: {
        snapTo: [0, 0.25, 0.5, 0.75, 1],
        duration: 0.3,
        ease: "power1.inOut",
      },
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress < 0.25) {
          if (currentIndex !== 0) showText(0);
        } else if (progress < 0.5) {
          if (currentIndex !== 1) showText(1);
        } else if (progress < 0.75) {
          if (currentIndex !== 2) showText(2);
        } else {
          if (currentIndex !== 3) showText(3);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // function scrollNext() {
  //   const triggers = ScrollTrigger.getAll();
  //   const sectionTrigger = triggers.find(
  //     (t) => t.trigger === sectionRef.current
  //   );

  //   if (sectionTrigger) {
  //     const currentProgress = sectionTrigger.progress;
  //     let targetProgress = 0.33;

  //     if (currentProgress >= 0.66) {
  //       // Already at last section, scroll past the pinned section
  //       targetProgress = 1;
  //     } else if (currentProgress >= 0.33) {
  //       targetProgress = 0.66;
  //     }

  //     const scrollStart = sectionTrigger.start;
  //     const scrollEnd = sectionTrigger.end;
  //     const targetScroll =
  //       scrollStart + (scrollEnd - scrollStart) * targetProgress;

  //     gsap.to(window, {
  //       scrollTo: targetScroll,
  //       duration: 0.5,
  //       ease: "power1.inOut",
  //     });
  //   }
  // }

  return (
    <div ref={sectionRef} className="relative w-full h-screen">
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          ref={text1Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[960px] px-8 text-center flex flex-col items-center justify-center gap-20"
        >
          <p className="hook-p">{useCopy("hooks_1_text")}</p>
          {/* <button
            className="bg-grey-blue flex items-center justify-center gap-2 hover:bg-[#9494AA] transition"
            onClick={() => scrollNext()}
          >
            <span>scroll</span>
            <img
              src={`${basePath}/icons/arrow.svg`}
              alt="arrow"
              width={16}
              height={13}
              style={{ transform: "rotate(-90deg)" }}
            />
          </button> */}
        </div>
        <div
          ref={text2Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[960px] px-8 text-center flex flex-col items-center justify-center gap-20"
        >
          <p className="hook-p">{useCopy("hooks_2_text")}</p>
          {/* <button
            className="bg-grey-blue flex items-center justify-center gap-2 hover:bg-[#9494AA] transition"
            onClick={() => scrollNext()}
          >
            <span>scroll</span>
            <img
              src={`${basePath}/icons/arrow.svg`}
              alt="arrow"
              width={16}
              height={13}
              style={{ transform: "rotate(-90deg)" }}
            />
          </button> */}
        </div>

        <div
          ref={text3Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] px-8 text-center"
          style={{ opacity: 0, visibility: "hidden" }}
        >
          <p className="hook-p">{useCopy("hooks_3_text")}</p>
        </div>

        <div
          ref={text4Ref}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90%] px-8 text-center flex flex-col items-center justify-center gap-[128px]"
          style={{ opacity: 0, visibility: "hidden" }}
        >
          <h1 className="text-[128px] text-bright-green font-museo-moderno uppercase leading-[0.99] font-extralight text-balance">
            {useCopy("hooks_title")}
          </h1>
          <div>
            <p className="hook-p">{useCopy("hooks_subline")}</p>
            <div className="flex gap-12 mt-4">
              <img
                src={`${basePath}/logos/moloco.svg`}
                alt="Moloco logo"
                width={150}
                height={40}
              />
              <img
                src={`${basePath}/logos/bcg.svg`}
                alt="BCG logo"
                width={92}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
