"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    // Create a timeline for the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
        markers: false, // Set to true for debugging
      },
    });

    // Initial state - text1 visible, text2 hidden
    gsap.set(text2, { opacity: 0, y: 50 });
    gsap.set(text1, { opacity: 1, y: 0 });

    // Animation sequence
    tl.to(text1, { opacity: 0, y: -50, duration: 1 }, 0).to(
      text2,
      { opacity: 1, y: 0, duration: 1 },
      1
    );

    return () => {
      tl.kill();
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
        backgroundColor: "#047857", // Green background
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
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Quadrant Section - Part 1
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#d1fae5" }}>
            This is the first text part of the Quadrant Section. Scroll down to
            see the final part.
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
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Quadrant Section - Part 2
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#d1fae5" }}>
            This is the final text part of the Quadrant Section. You've reached
            the end!
          </p>
        </div>
      </div>
    </div>
  );
}
