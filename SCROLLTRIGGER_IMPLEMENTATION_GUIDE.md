# Single ScrollTrigger Implementation Guide

## Overview

This guide explains how to refactor your scrollytelling page from **multiple independent ScrollTrigger instances** (one per section) to a **single unified ScrollTrigger instance** that manages the entire page.

## Why This Change?

**Current Problem:**

- Each section (HookSection, JourneySection, QuadrantSection, etc.) has its own ScrollTrigger
- Transitions between sections feel disconnected and jarring
- No unified control over the scroll experience

**Solution Benefits:**

- Smoother transitions between sections
- Unified snap behavior across the entire page
- Better control over scroll progression
- Easier to implement features like navigation or progress indicators

---

## Architecture Changes

### Before: Multiple ScrollTriggers

```
┌─────────────────┐
│  HookSection    │ ← ScrollTrigger (3 steps)
├─────────────────┤
│ JourneySection  │ ← ScrollTrigger (5 steps)
├─────────────────┤
│ QuadrantSection │ ← ScrollTrigger (8 steps)
├─────────────────┤
│ ClosureSection  │ ← ScrollTrigger (3 steps)
├─────────────────┤
│  CTASection     │ ← No ScrollTrigger (static)
└─────────────────┘
```

### After: Single ScrollTrigger

```
┌─────────────────────────────────┐
│                                 │
│  GLOBAL SCROLL CONTAINER        │ ← Single ScrollTrigger (19 total steps)
│  ├─ HookSection (steps 0-2)     │
│  ├─ JourneySection (steps 3-7)  │
│  ├─ QuadrantSection (steps 8-15)│
│  ├─ ClosureSection (steps 16-18)│
│  └─ CTASection (step 19)        │
│                                 │
└─────────────────────────────────┘
```

---

## Implementation Steps

### Step 1: Update `page.tsx` (Main Container)

**Current structure:**

```tsx
export default function Home() {
  return (
    <main className="relative">
      <P5Background />
      <div className="relative">
        <HookSection /> {/* Has own ScrollTrigger */}
        <JourneySection /> {/* Has own ScrollTrigger */}
        <QuadrantSection /> {/* Has own ScrollTrigger */}
        <ClosureSection /> {/* Has own ScrollTrigger */}
        <CTASection />
      </div>
    </main>
  );
}
```

**New structure:**

```tsx
"use client";

import { useRef, useState } from "react";
import { useGlobalScrollTrigger } from "@/hooks/useGlobalScrollTrigger";
import HookSection from "@/components/HookSection";
// ... other imports

export default function Home() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  // Define steps for each section
  const SECTION_STEPS = [
    3, // HookSection: 3 steps
    5, // JourneySection: 5 steps (1 intro + 4 stats)
    8, // QuadrantSection: 8 steps (1 intro + 7 chart modes)
    3, // ClosureSection: 3 steps
    1, // CTASection: 1 step (static)
  ];

  const SECTION_NAMES = ["hook", "journey", "quadrant", "closure", "cta"];

  // Single ScrollTrigger for entire page
  const { scrollToSection } = useGlobalScrollTrigger({
    containerRef: mainContainerRef,
    sectionSteps: SECTION_STEPS,
    sectionNames: SECTION_NAMES,
    onSectionChange: (sectionIndex, localStep) => {
      setCurrentSection(sectionIndex);
      setCurrentStep(localStep);
    },
  });

  return (
    <main className="relative">
      <P5Background />
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-texture" />

      {/* Main scroll container - gets pinned */}
      <div
        ref={mainContainerRef}
        className="relative h-screen"
        style={{ zIndex: 10 }}
      >
        {/* Pass section state down to child components */}
        <HookSection
          isActive={currentSection === 0}
          currentStep={currentStep}
        />
        <JourneySection
          isActive={currentSection === 1}
          currentStep={currentStep}
        />
        <QuadrantSection
          isActive={currentSection === 2}
          currentStep={currentStep}
        />
        <ClosureSection
          isActive={currentSection === 3}
          currentStep={currentStep}
        />
        <CTASection isActive={currentSection === 4} />
      </div>
    </main>
  );
}
```

---

### Step 2: Update Individual Section Components

Each section component needs to be refactored to:

1. **Remove** its own `useScrollTrigger` hook
2. **Accept** `isActive` and `currentStep` props from parent
3. **React** to prop changes instead of managing its own scroll state

#### Example: HookSection.tsx

**BEFORE:**

```tsx
export default function HookSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  // Has its own ScrollTrigger
  useScrollTrigger({
    sectionRef,
    steps: STEPS,
    onStepChange: setCurrentStep,
  });

  return (
    <div ref={sectionRef} className="relative w-full h-screen">
      {/* Content */}
    </div>
  );
}
```

**AFTER:**

```tsx
interface HookSectionProps {
  isActive: boolean;
  currentStep: number;
}

export default function HookSection({
  isActive,
  currentStep,
}: HookSectionProps) {
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const previousStepRef = useRef(-1);

  const textRefs = [text1Ref, text2Ref, titleRef];

  // Set initial visibility (only once)
  useEffect(() => {
    setInitialVisibility(textRefs, { visible: [0], hidden: [1, 2] });
  }, []);

  // React to step changes from parent
  useEffect(() => {
    if (!isActive) return; // Only animate when this section is active
    if (currentStep === previousStepRef.current) return;

    const texts = textRefs.map((ref) => ref.current).filter(Boolean);
    if (texts.length === 0) return;

    const previousStep = previousStepRef.current;

    // Animation logic (same as before)
    texts.forEach((text) => gsap.killTweensOf(text));

    if (previousStep >= 0 && previousStep !== currentStep) {
      fadeOut(texts[previousStep]);
    }

    fadeIn(texts[currentStep]);

    previousStepRef.current = currentStep;
  }, [isActive, currentStep]);

  return (
    <div
      className={`absolute inset-0 w-full h-full ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Content - same as before */}
    </div>
  );
}
```

**Key Changes:**

- ✅ No more `sectionRef` for ScrollTrigger
- ✅ Receives `isActive` and `currentStep` as props
- ✅ Only animates when `isActive` is true
- ✅ Uses `absolute` positioning to overlap with other sections
- ✅ Layout structure stays the same

---

### Step 3: Handling Section Visibility

With all sections overlapping, you need to control which one is visible:

**CSS Approach (Recommended):**

```tsx
// In each section component
<div
  className={`absolute inset-0 transition-opacity duration-300 ${
    isActive
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  }`}
>
  {/* Section content */}
</div>
```

**GSAP Approach (More control):**

```tsx
// In parent (page.tsx)
useEffect(() => {
  const sections = [hookRef, journeyRef, quadrantRef, closureRef, ctaRef];

  sections.forEach((ref, index) => {
    if (ref.current) {
      gsap.to(ref.current, {
        autoAlpha: index === currentSection ? 1 : 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  });
}, [currentSection]);
```

---

### Step 4: Update QuadrantSection (Special Case)

QuadrantSection is more complex as it manually manages ScrollTrigger. Here's the refactored approach:

```tsx
interface QuadrantSectionProps {
  isActive: boolean;
  currentStep: number;
}

export default function QuadrantSection({
  isActive,
  currentStep,
}: QuadrantSectionProps) {
  const screen1Ref = useRef<HTMLDivElement>(null);
  const screen2Ref = useRef<HTMLDivElement>(null);
  const [chartMode, setChartMode] = useState<ChartMode>("expl-y-axis");
  const [selectedVertical, setSelectedVertical] = useState<string | null>(null);

  const chartModes: ChartMode[] = [
    "expl-y-axis",
    "expl-x-axis",
    "expl-quadrant-bottom-left",
    "expl-quadrant-top-left",
    "expl-quadrant-bottom-right",
    "expl-quadrant-top-right",
    "data-filled",
  ];

  // Map steps to screens and modes
  useEffect(() => {
    if (!isActive) return;

    const screen1 = screen1Ref.current;
    const screen2 = screen2Ref.current;
    if (!screen1 || !screen2) return;

    // Kill animations
    gsap.killTweensOf([screen1, screen2]);

    if (currentStep === 0) {
      // Show intro screen
      fadeIn(screen1);
      fadeOut(screen2);
    } else {
      // Show chart screen (steps 1-7)
      fadeOut(screen1);
      fadeIn(screen2);

      // Set chart mode based on step
      const modeIndex = currentStep - 1; // Steps 1-7 map to modes 0-6
      if (modeIndex >= 0 && modeIndex < chartModes.length) {
        setChartMode(chartModes[modeIndex]);
      }
    }
  }, [isActive, currentStep]);

  return (
    <div
      className={`absolute inset-0 ${isActive ? "opacity-100" : "opacity-0"}`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div ref={screen1Ref} className="absolute inset-0">
          {/* Intro screen content */}
        </div>
        <div ref={screen2Ref} className="absolute inset-0">
          <Chart mode={chartMode} /* ... */ />
          <ChartPanel mode={chartMode} /* ... */ />
        </div>
      </div>
    </div>
  );
}
```

---

## Benefits of This Approach

### 1. **Smoother Transitions**

- Single scroll progression means no jarring jumps between sections
- Unified snap behavior creates consistent feel

### 2. **Better Performance**

- Only one ScrollTrigger instance to manage
- Reduced overhead from multiple triggers

### 3. **Easier Navigation**

- Simple programmatic scrolling: `scrollToSection(2, 3)` goes to Quadrant section, step 3
- Can add progress indicators, navigation menu, etc.

### 4. **Centralized Control**

- All scroll logic in one place (`page.tsx`)
- Easier to debug and modify scroll behavior

### 5. **Maintains Section Independence**

- Each section still manages its own animations
- Sections don't need to know about each other

---

## Optional Enhancements

### Add Progress Indicator

```tsx
// In page.tsx
<div className="fixed top-4 left-4 z-50">
  <div className="flex gap-2">
    {SECTION_NAMES.map((name, i) => (
      <button
        key={name}
        onClick={() => scrollToSection(i, 0)}
        className={`px-3 py-1 rounded ${
          currentSection === i ? "bg-bright-green" : "bg-gray-500"
        }`}
      >
        {name}
      </button>
    ))}
  </div>
</div>
```

### Add Keyboard Navigation

```tsx
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown" && currentSection < SECTION_NAMES.length - 1) {
      scrollToSection(currentSection + 1, 0);
    } else if (e.key === "ArrowUp" && currentSection > 0) {
      scrollToSection(currentSection - 1, 0);
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [currentSection]);
```

---

## Migration Checklist

- [ ] Add global scroll helpers to `scroll.ts`
- [ ] Create `useGlobalScrollTrigger.ts` hook
- [ ] Update `page.tsx` to use single ScrollTrigger
- [ ] Refactor `HookSection.tsx` to accept props
- [ ] Refactor `JourneySection.tsx` to accept props
- [ ] Refactor `QuadrantSection.tsx` to accept props
- [ ] Refactor `ClosureSection.tsx` to accept props
- [ ] Update `CTASection.tsx` to accept props (if needed)
- [ ] Test scroll behavior and transitions
- [ ] Remove old `useScrollTrigger` if no longer used
- [ ] Test on different screen sizes and browsers

---

## Troubleshooting

### Sections not appearing

- Check that container has `h-screen` class
- Verify sections use `absolute inset-0` positioning
- Ensure `isActive` prop is being passed correctly

### Animations not working

- Verify `isActive` check in useEffect dependencies
- Check that refs are properly initialized
- Use browser DevTools to inspect element visibility

### Snap points feel wrong

- Adjust `SCROLL_CONFIG.SNAP_DURATION` in `scroll.ts`
- Verify step counts in `SECTION_STEPS` array match actual section content

### Performance issues

- Use `will-change: transform` on animated elements
- Consider using `gsap.set()` for immediate state changes
- Debounce rapid state updates if needed

---

## Questions or Issues?

If you encounter any problems during implementation, consider:

1. Testing each section in isolation first
2. Using `console.log` to track `currentSection` and `currentStep` values
3. Checking browser console for GSAP warnings
4. Verifying ScrollTrigger is properly registered with GSAP
