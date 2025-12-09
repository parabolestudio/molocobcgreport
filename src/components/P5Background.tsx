"use client";

import { type SectionName, SECTION_STEPS } from "@/hooks/useScrollProgress";
import { useEffect, useRef, useMemo } from "react";
import type P5 from "p5";

interface P5BackgroundProps {
  activeSection: number;
  currentStep: number;
  sectionName: SectionName;
}

export default function P5Background({
  activeSection,
  currentStep,
  sectionName,
}: P5BackgroundProps) {
  // Calculate derived values from props
  const sectionSteps = SECTION_STEPS[sectionName];
  const sectionProgress = currentStep / sectionSteps;

  // Calculate global step
  const globalStep = useMemo(() => {
    let step = 0;
    const names: SectionName[] = [
      "hook",
      "journey",
      "quadrant",
      "closure",
      "cta",
    ];
    for (let i = 0; i < activeSection; i++) {
      step += SECTION_STEPS[names[i]];
    }
    return step + currentStep;
  }, [activeSection, currentStep]);

  // Calculate total progress
  const totalSteps = Object.values(SECTION_STEPS).reduce((a, b) => a + b, 0);
  const totalProgress = globalStep / totalSteps;
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
    getActiveSubsectionIndex: any;
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
        // Re-enable cluster scaling for grid formation
        data.circleGrid.setClusterConfig({ enabled: true });
        break;
      case "wave":
        // Wave is continuous, will be applied in draw loop
        // Re-enable cluster scaling for wave formation
        data.circleGrid.setClusterConfig({ enabled: true });
        break;
      case "rings":
        data.circleFormation.applyRings(
          data.circleGrid.circles,
          centerX,
          centerY
        );
        // Disable cluster scaling for rings formation
        data.circleGrid.setClusterConfig({ enabled: false });
        break;
      case "quadrants":
        data.circleFormation.applyQuadrants(
          data.circleGrid.circles,
          p5.width,
          p5.height
        );
        // Re-enable cluster scaling for quadrants formation
        data.circleGrid.setClusterConfig({ enabled: true });
        break;
      case "converge":
        data.circleFormation.applyConverge(
          data.circleGrid.circles,
          centerX,
          centerY,
          100
        );
        // Re-enable cluster scaling for converge formation
        data.circleGrid.setClusterConfig({ enabled: true });
        break;
      case "spiral":
        data.circleFormation.applySpiral(
          data.circleGrid.circles,
          centerX,
          centerY
        );
        // Re-enable cluster scaling for spiral formation
        data.circleGrid.setClusterConfig({ enabled: true });
        break;
      case "invisible":
        // Don't apply any formation, dots will be hidden in draw
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

          circleGrid = new gridModule.CircleGrid(p5, 20);
          circleFormation = new formationModule.CircleFormation(p5);

          // Store in ref
          sketchDataRef.current = {
            circleGrid,
            circleFormation,
            currentSection: "hook",
            lastSection: "hook",
            currentFormation: "grid",
            lastFormation: "grid",
            transitionProgress: 1,
            sectionAnimations: animModule.sectionAnimations,
            lerpColor: animModule.lerpColor,
            getActiveFormation: subsectionModule.getActiveFormation,
            getActiveSubsectionIndex: subsectionModule.getActiveSubsectionIndex,
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

          // Don't draw if current formation is invisible
          if (data.currentFormation !== "invisible") {
            data.circleGrid.draw(color);
          }
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
    <>
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

      {/* Debug Panel */}
      <div
        className="fixed top-2 right-2 bg-black/80 text-white p-3 rounded-lg text-[10px] font-mono pointer-events-auto"
        style={{ zIndex: 9999 }}
      >
        <div className="font-bold mb-2 text-sm">
          Background Debug (Props from Global ScrollTrigger)
        </div>
        <div className="space-y-1">
          <div>
            <span className="text-gray-400">Active Section:</span>{" "}
            <span className="text-green-400">{activeSection}</span>{" "}
            <span className="text-blue-400">({sectionName})</span>
          </div>
          <div>
            <span className="text-gray-400">Current Step:</span>{" "}
            <span className="text-red-400">{currentStep}</span>
            <span className="text-gray-500"> / {sectionSteps}</span>
          </div>
          <div>
            <span className="text-gray-400">Global Step:</span>{" "}
            <span className="text-red-400">{globalStep}</span>
            <span className="text-gray-500"> / {totalSteps}</span>
          </div>
          <div>
            <span className="text-gray-400">Section Progress:</span>{" "}
            <span className="text-yellow-400">
              {(sectionProgress * 100).toFixed(1)}%
            </span>
          </div>
          <div>
            <span className="text-gray-400">Total Progress:</span>{" "}
            <span className="text-purple-400">
              {(totalProgress * 100).toFixed(1)}%
            </span>
          </div>
          {sketchDataRef.current && (
            <>
              <div className="border-t border-gray-700 my-2 pt-2">
                <span className="text-gray-400">Subsection:</span>{" "}
                <span className="text-pink-400">
                  {sketchDataRef.current.getActiveSubsectionIndex(
                    sectionName,
                    sectionProgress
                  )}
                </span>
              </div>
              <div>
                <span className="text-gray-400">Formation:</span>{" "}
                <span className="text-cyan-400">
                  {sketchDataRef.current.currentFormation}
                </span>
              </div>
              <div>
                <span className="text-gray-400">Transition:</span>{" "}
                <span className="text-orange-400">
                  {(sketchDataRef.current.transitionProgress * 100).toFixed(0)}%
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
