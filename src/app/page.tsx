"use client";

import HookSection from "@/components/HookSection";
import JourneySection from "@/components/JourneySection";
import QuadrantSection from "@/components/QuadrantSection";
import ClosureSection from "@/components/ClosureSection";
import CTASection from "@/components/CTASection";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { basePath } from "@/helpers/general";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  return (
    <main className="relative">
      <div
        className="fixed top-0 bottom-0 left-0 right-0 "
        style={{
          backgroundImage: `url(${basePath}/background/texture.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          mixBlendMode: "luminosity",
        }}
      ></div>
      <HookSection />
      <JourneySection />
      <QuadrantSection />
      <ClosureSection />
      <CTASection />
    </main>
  );
}
