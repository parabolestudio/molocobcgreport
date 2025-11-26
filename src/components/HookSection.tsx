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

      const oldText = texts[currentIndex];
      const newText = texts[index];

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
    <div
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "1200px",
          width: "100%",
          padding: "0 2rem",
          textAlign: "center",
        }}
      >
        <div
          ref={text1Ref}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "300px",
            padding: "0 2rem",
          }}
        >
          <p style={{ fontSize: "1.25rem", color: "#e0e7ff" }}>
            Consumers are turning to AI for nearly everything—from research to
            recipes to shopping. The use cases and time spent will only continue
            to accelerate.
          </p>
        </div>

        <div
          ref={text2Ref}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "300px",
            padding: "0 2rem",
          }}
        >
          <p style={{ fontSize: "1.25rem", color: "#e0e7ff" }}>
            How can brands find and connect with customers? How do they adapt
            and grow? 
            <br /> New research on LLM disruption, done in partnership with BCG,
            dives deep into the current state of play for marketers – and where
            we go from here.
          </p>
        </div>

        <div
          ref={text3Ref}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "300px",
            padding: "0 2rem",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            The AI Disruption Index
          </h2>
        </div>
      </div>
    </div>
  );
}
