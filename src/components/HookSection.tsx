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

    // Create a timeline for the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
        markers: false, // Set to true for debugging
      },
    });

    // Initial state - text1 visible, others hidden
    gsap.set([text2, text3], { opacity: 0, y: 50 });
    gsap.set(text1, { opacity: 1, y: 0 });

    // Animation sequence
    tl.to(text1, { opacity: 0, y: -50, duration: 1 }, 0)
      .to(text2, { opacity: 1, y: 0, duration: 1 }, 1)
      .to(text2, { opacity: 0, y: -50, duration: 1 }, 2)
      .to(text3, { opacity: 1, y: 0, duration: 1 }, 3);

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
        backgroundColor: "#1e3a8a", // Blue background
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
