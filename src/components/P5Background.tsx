"use client";

import { useScrollProgress, type SectionName } from "@/hooks/useScrollProgress";
import { useEffect, useRef } from "react";
import type P5 from "p5";

export default function P5Background() {
  const { sectionName, sectionProgress } = useScrollProgress();
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<P5 | null>(null);
  const sketchDataRef = useRef<{
    circleGrid: any;
    circleFormation: any;
    currentSection: SectionName;
    lastSection: SectionName;
    currentFormation: string;
    lastFormation: string;
    transitionProgress: number;
    sectionAnimations: any;
    lerpColor: any;
    getActiveFormation: any;
  } | null>(null);

  // Update section and formation when they change
  useEffect(() => {
    console.log(
      "Section:",
      sectionName,
      "Progress:",
      sectionProgress.toFixed(3)
    );

    if (!sketchDataRef.current) return;

    const data = sketchDataRef.current;
    const newFormation = data.getActiveFormation(sectionName, sectionProgress);

    console.log(
      "Current formation:",
      data.currentFormation,
      "-> New formation:",
      newFormation
    );

    // Check if section changed
    if (data.currentSection !== sectionName) {
      data.lastSection = data.currentSection;
      data.currentSection = sectionName;
      data.lastFormation = data.currentFormation;
      data.currentFormation = newFormation;
      data.transitionProgress = 0;

      console.log("✅ Section changed - applying formation:", newFormation);
      applyFormation(newFormation);
    }
    // Check if formation changed within same section
    else if (data.currentFormation !== newFormation) {
      data.lastFormation = data.currentFormation;
      data.currentFormation = newFormation;
      data.transitionProgress = 0;

      console.log(
        "✅ Formation changed within section - applying:",
        newFormation
      );
      applyFormation(newFormation);
    }
  }, [sectionName, sectionProgress]);

  function applyFormation(formation: string) {
    if (!sketchDataRef.current) return;

    const data = sketchDataRef.current;
    const p5 = p5InstanceRef.current;
    if (!p5 || !data.circleGrid || !data.circleFormation) return;

    const centerX = p5.width / 2;
    const centerY = p5.height / 2;

    switch (formation) {
      case "grid":
        data.circleGrid.initializeGrid();
        break;
      case "wave":
        // Wave is continuous, will be applied in draw loop
        break;
      case "rings":
        data.circleFormation.applyRings(
          data.circleGrid.circles,
          centerX,
          centerY
        );
        break;
      case "quadrants":
        data.circleFormation.applyQuadrants(
          data.circleGrid.circles,
          p5.width,
          p5.height
        );
        break;
      case "converge":
        data.circleFormation.applyConverge(
          data.circleGrid.circles,
          centerX,
          centerY,
          100
        );
        break;
      case "spiral":
        data.circleFormation.applySpiral(
          data.circleGrid.circles,
          centerX,
          centerY
        );
        break;
    }
  }

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined" || !canvasRef.current) return;

    let p5Instance: P5;

    // Dynamically import p5 and setup
    const setupP5 = async () => {
      const p5Module = await import("p5");
      const P5 = p5Module.default;

      // Import utility modules
      const [gridModule, formationModule, animModule, subsectionModule] =
        await Promise.all([
          import("@/utils/p5/CircleGrid"),
          import("@/utils/p5/CircleFormation"),
          import("@/utils/p5/animations"),
          import("@/utils/p5/subsections"),
        ]);

      const sketch = (p5: P5) => {
        let circleGrid: any;
        let circleFormation: any;

        p5.setup = () => {
          const canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
          canvas.parent(canvasRef.current!);
          p5.frameRate(60);

          // Grid with 20 columns and 12 rows - spacing calculated automatically
          circleGrid = new gridModule.CircleGrid(p5, 70, 40);
          circleFormation = new formationModule.CircleFormation(p5);

          // Store in ref
          sketchDataRef.current = {
            circleGrid,
            circleFormation,
            currentSection: sectionName,
            lastSection: sectionName,
            currentFormation: "grid",
            lastFormation: "grid",
            transitionProgress: 1,
            sectionAnimations: animModule.sectionAnimations,
            lerpColor: animModule.lerpColor,
            getActiveFormation: subsectionModule.getActiveFormation,
          };
        };

        p5.draw = () => {
          p5.clear();

          const data = sketchDataRef.current;
          if (!data || !data.circleGrid || !data.sectionAnimations) return;

          // Apply continuous animations for wave formation
          if (data.currentFormation === "wave") {
            data.circleFormation.applyWave(
              data.circleGrid.circles,
              p5.width,
              p5.height,
              p5.millis()
            );
          }

          // Smooth transition between sections
          if (data.transitionProgress < 1) {
            data.transitionProgress += 0.02;
          }

          // Get animation configs
          const currentConfig = data.sectionAnimations[data.currentSection];
          const lastConfig = data.sectionAnimations[data.lastSection];

          // Interpolate colors
          const color = data.lerpColor(
            p5,
            lastConfig.color,
            currentConfig.color,
            data.transitionProgress
          );

          // Interpolate pulse intensity
          const pulseIntensity = p5.lerp(
            lastConfig.pulseIntensity,
            currentConfig.pulseIntensity,
            data.transitionProgress
          );

          // Update and draw circles
          data.circleGrid.update(p5.millis(), pulseIntensity);
          data.circleGrid.draw(color);
        };

        p5.windowResized = () => {
          p5.resizeCanvas(window.innerWidth, window.innerHeight);
          if (sketchDataRef.current?.circleGrid) {
            sketchDataRef.current.circleGrid.resize(p5.width, p5.height);
          }
        };
      };

      p5Instance = new P5(sketch);
      p5InstanceRef.current = p5Instance;
    };

    setupP5();

    // Cleanup
    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    />
  );
}
