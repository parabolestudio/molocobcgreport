"use client";

import HookSection from "@/components/HookSection";
import JourneySection from "@/components/JourneySection";
import QuadrantSection from "@/components/QuadrantSection";
import ClosureSection from "@/components/ClosureSection";
import CTASection from "@/components/CTASection";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  return (
    <main>
      <HookSection />
      <JourneySection />
      <QuadrantSection />
      <ClosureSection />
      <CTASection />
    </main>
  );
}
