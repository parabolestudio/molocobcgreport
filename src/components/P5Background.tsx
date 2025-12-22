"use client";

import {
  type SectionName,
  SECTION_STEPS,
  SECTION_NAMES,
} from "@/helpers/scroll";
import { useEffect, useRef, useMemo, useState } from "react";
import type P5 from "p5";
import { isMobile } from "@/helpers/general";

export default function P5Background({
  activeSection,
  currentStep,
  sectionName,
}: {
  activeSection: number;
  currentStep: number;
  sectionName: SectionName;
}) {
  // Calculate derived values from props
  const sectionSteps = SECTION_STEPS[sectionName];
  const sectionProgress = currentStep / sectionSteps;

  // Detect mobile screen size
  const [mobile, setMobile] = useState(false);

  // Detect mobile after hydration to avoid SSR mismatch
  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => setMobile(isMobile());
    // run once after hydration
    update();
    // update on resize/orientation changes
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  // Calculate global step
  const globalStep = useMemo(() => {
    let step = 0;
    for (let i = 0; i < activeSection; i++) {
      step += SECTION_STEPS[SECTION_NAMES[i]];
    }
    return step + currentStep;
  }, [activeSection, currentStep]);

  // Calculate total progress
  const totalSteps = Object.values(SECTION_STEPS).reduce((a, b) => a + b, 0);
  const totalProgress = globalStep / totalSteps;

  // Helper function to get chart circle position and radius from DOM
  const getChartCircleData = useMemo(() => {
    return (p5: P5) => {
      const chartCircle = document.querySelector(
        "#chart-container .structure circle"
      ) as SVGCircleElement;
      if (chartCircle) {
        const svgElement = chartCircle.ownerSVGElement;
        if (svgElement) {
          const circleRect = chartCircle.getBoundingClientRect();
          const svgRect = svgElement.getBoundingClientRect();

          // Get center position relative to viewport
          const centerX = circleRect.left + circleRect.width / 2;
          const centerY = circleRect.top + circleRect.height / 2;

          // Get radius from the circle element
          const radius = parseFloat(chartCircle.getAttribute("r") || "0");
          let innerRadius: number | undefined;

          if (radius > 0) {
            // Convert SVG radius to screen pixels
            const viewBoxWidth = parseFloat(
              svgElement.getAttribute("viewBox")?.split(" ")[2] ||
                svgRect.width.toString()
            );
            const scale = svgRect.width / viewBoxWidth;
            innerRadius = radius * scale;
          }

          return { centerX, centerY, innerRadius };
        }
      }

      // Fallback to center of screen
      return {
        centerX: p5.width * 0.5,
        centerY: p5.height * 0.5,
        innerRadius: undefined,
      };
    };
  }, []);

  const canvasRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<P5 | null>(null);
  const sketchDataRef = useRef<{
    circleManager: any;
    gridFormation: any;
    ringsFormation: any;
    distributedRingsFormation: any;
    currentSection: SectionName;
    lastSection: SectionName;
    currentFormation: string;
    lastFormation: string;
    transitionProgress: number;
    sectionProgress: number;
    lerpColor: any;
    getActiveFormation: any;
    getActiveSubsectionIndex: any;
    subsectionConfigs: any;
    resolveResponsive: any;
    resolveDistributedRingsConfig: any;
    mobile: boolean;
    fadeState: "normal" | "fadeOut" | "fadeIn";
    fadeProgress: number;
    pendingFormation: string | null;
  } | null>(null);

  // Update mobile in sketch data
  useEffect(() => {
    if (sketchDataRef.current) {
      sketchDataRef.current.mobile = mobile;
    }
  }, [mobile]);

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

    // Update section progress
    data.sectionProgress = sectionProgress;

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
      data.transitionProgress = 0;

      console.log(
        "✅ Section changed - initiating fade transition to:",
        newFormation
      );
      // Start fade out transition
      data.fadeState = "fadeOut";
      data.fadeProgress = 0;
      data.pendingFormation = newFormation;
    }
    // Check if formation changed within same section
    else if (data.currentFormation !== newFormation) {
      data.lastFormation = data.currentFormation;
      data.transitionProgress = 0;

      console.log(
        "✅ Formation changed within section - initiating fade transition to:",
        newFormation
      );
      // Start fade out transition
      data.fadeState = "fadeOut";
      data.fadeProgress = 0;
      data.pendingFormation = newFormation;
    }
  }, [sectionName, sectionProgress]);

  function applyFormation(formation: string) {
    if (!sketchDataRef.current) return;

    const data = sketchDataRef.current;
    const p5 = p5InstanceRef.current;
    if (
      !p5 ||
      !data.circleManager ||
      !data.gridFormation ||
      !data.ringsFormation ||
      !data.distributedRingsFormation
    )
      return;

    switch (formation) {
      case "grid":
        data.gridFormation.initialize(data.circleManager.circles, p5);
        break;
      case "rings":
        // Get ring center from active subsection configuration (values are 0-1, relative to canvas size)
        const subsectionIndex = data.getActiveSubsectionIndex(
          data.currentSection,
          data.sectionProgress
        );
        const activeSubsection =
          data.subsectionConfigs[data.currentSection][subsectionIndex];
        const ringCenterConfig = data.resolveResponsive(
          activeSubsection.ringCenter,
          data.mobile
        ) || { x: 0.5, y: 0.5 };

        let ringCenterX: number;
        let ringCenterY: number;

        if (ringCenterConfig === "chartCenter") {
          const chartData = getChartCircleData(p5);
          ringCenterX = chartData.centerX;
          ringCenterY = chartData.centerY;
        } else {
          ringCenterX = p5.width * ringCenterConfig.x;
          ringCenterY = p5.height * ringCenterConfig.y;
        }

        // Resolve innerRadius if provided
        const innerRadius = data.resolveResponsive(
          activeSubsection.innerRadius,
          data.mobile
        );

        // Apply rings formation with initial config
        data.ringsFormation.apply(data.circleManager.circles, p5, p5.millis(), {
          centerX: ringCenterX,
          centerY: ringCenterY,
          pulseIntensity: 0, // No pulse during initial setup
          ...(innerRadius !== undefined && { innerRadius }),
        });
        break;
      case "distributedRings":
        // Get ring center from active subsection configuration
        const subsectionIndexDR = data.getActiveSubsectionIndex(
          data.currentSection,
          data.sectionProgress
        );
        const activeSubsectionDR =
          data.subsectionConfigs[data.currentSection][subsectionIndexDR];
        const ringCenterConfigDR = data.resolveResponsive(
          activeSubsectionDR.ringCenter,
          data.mobile
        ) || { x: 0.5, y: 0.5 };

        let chartDataInit: {
          centerX: number;
          centerY: number;
          innerRadius?: number;
        };

        if (ringCenterConfigDR === "chartCenter") {
          // Get exact position from the chart circle element
          chartDataInit = getChartCircleData(p5);
        } else {
          // Use configured coordinates
          chartDataInit = {
            centerX: p5.width * ringCenterConfigDR.x,
            centerY: p5.height * ringCenterConfigDR.y,
          };
        }

        // Resolve all distributedRingsConfig properties
        const resolvedConfig = data.resolveDistributedRingsConfig(
          activeSubsectionDR.distributedRingsConfig,
          data.mobile
        );

        // Resolve innerRadius based on configuration
        let resolvedInnerRadius: number | undefined;
        const configuredInnerRadius = resolvedConfig.innerRadius;

        if (configuredInnerRadius === "chartRadius") {
          resolvedInnerRadius = chartDataInit.innerRadius;
        } else if (configuredInnerRadius === "screenHeight") {
          resolvedInnerRadius = p5.height / 2;
        } else if (typeof configuredInnerRadius === "number") {
          resolvedInnerRadius = configuredInnerRadius;
        }

        // Apply distributed rings formation
        data.distributedRingsFormation.apply(
          data.circleManager.circles,
          p5,
          p5.millis(),
          {
            ...resolvedConfig,
            centerX: chartDataInit.centerX,
            centerY: chartDataInit.centerY,
            ...(resolvedInnerRadius !== undefined && {
              innerRadius: resolvedInnerRadius,
            }),
          }
        );
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
      const [
        managerModule,
        gridFormationModule,
        ringsFormationModule,
        distributedRingsFormationModule,
        helpersModule,
        subsectionModule,
      ] = await Promise.all([
        import("@/utils/p5/CircleManager"),
        import("@/utils/p5/formations/GridFormation"),
        import("@/utils/p5/formations/RingsFormation"),
        import("@/utils/p5/formations/DistributedRingsFormation"),
        import("@/utils/p5/helpers"),
        import("@/utils/p5/subsections"),
      ]);

      const sketch = (p5: P5) => {
        let circleManager: any;
        let gridFormation: any;
        let ringsFormation: any;
        let distributedRingsFormation: any;

        p5.setup = () => {
          const canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
          canvas.parent(canvasRef.current!);
          p5.frameRate(60);

          circleManager = new managerModule.CircleManager(p5);
          gridFormation = new gridFormationModule.GridFormation();
          ringsFormation = new ringsFormationModule.RingsFormation();
          distributedRingsFormation =
            new distributedRingsFormationModule.DistributedRingsFormation();

          // Initialize the grid formation to create circles
          gridFormation.initialize(circleManager.circles, p5);

          // Store in ref
          sketchDataRef.current = {
            circleManager,
            gridFormation,
            ringsFormation,
            distributedRingsFormation,
            currentSection: "hook",
            lastSection: "hook",
            currentFormation: "grid",
            lastFormation: "grid",
            transitionProgress: 1,
            sectionProgress: 0,
            lerpColor: helpersModule.lerpColor,
            getActiveFormation: subsectionModule.getActiveFormation,
            getActiveSubsectionIndex: subsectionModule.getActiveSubsectionIndex,
            subsectionConfigs: subsectionModule.subsectionConfigs,
            resolveResponsive: subsectionModule.resolveResponsive,
            resolveDistributedRingsConfig:
              subsectionModule.resolveDistributedRingsConfig,
            mobile: window.innerWidth < 768,
            fadeState: "normal",
            fadeProgress: 0,
            pendingFormation: null,
          };
        };

        p5.draw = () => {
          p5.clear();

          const data = sketchDataRef.current;
          if (!data || !data.circleManager || !data.subsectionConfigs) return;

          // Handle fade transitions
          if (data.fadeState === "fadeOut") {
            data.fadeProgress += 0.2; // Fade out speed
            if (data.fadeProgress >= 1) {
              // Fade out complete, apply new formation
              data.currentFormation = data.pendingFormation!;
              applyFormation(data.currentFormation);
              // Instantly snap to new positions (no smooth transition)
              data.circleManager.snapToTargets();
              data.fadeState = "fadeIn";
              data.fadeProgress = 0;
            }
          } else if (data.fadeState === "fadeIn") {
            data.fadeProgress += 0.2; // Fade in speed (faster)
            if (data.fadeProgress >= 1) {
              data.fadeState = "normal";
              data.fadeProgress = 0;
              data.pendingFormation = null;
            }
          }

          // Smooth transition between sections
          if (data.transitionProgress < 1) {
            data.transitionProgress += 0.02;
          }

          // Get active subsection configs (calculate once per frame)
          const currentSubsectionIndex = data.getActiveSubsectionIndex(
            data.currentSection,
            data.sectionProgress
          );
          const lastSubsectionIndex = data.getActiveSubsectionIndex(
            data.lastSection,
            0 // Use start of last section
          );

          const currentConfig =
            data.subsectionConfigs[data.currentSection][currentSubsectionIndex];
          const lastConfig =
            data.subsectionConfigs[data.lastSection][lastSubsectionIndex];

          // Interpolate colors
          const color = data.lerpColor(
            p5,
            lastConfig.color,
            currentConfig.color,
            data.transitionProgress
          );

          // Update circles (smooth movement)
          data.circleManager.update();

          // Apply current formation
          if (data.currentFormation === "grid") {
            data.gridFormation.apply(
              data.circleManager.circles,
              p5,
              p5.millis()
            );
          } else if (data.currentFormation === "rings") {
            const ringCenterConfig = data.resolveResponsive(
              currentConfig.ringCenter,
              data.mobile
            ) || { x: 0.5, y: 0.5 };

            let ringCenterX: number;
            let ringCenterY: number;

            if (ringCenterConfig === "chartCenter") {
              const chartData = getChartCircleData(p5);
              ringCenterX = chartData.centerX;
              ringCenterY = chartData.centerY;
            } else {
              ringCenterX = p5.width * ringCenterConfig.x;
              ringCenterY = p5.height * ringCenterConfig.y;
            }

            const ringPulseIntensity = currentConfig.pulseIntensity ?? 0;

            // Resolve innerRadius if provided
            const innerRadius = data.resolveResponsive(
              currentConfig.innerRadius,
              data.mobile
            );

            // Apply rings formation with pulse intensity
            data.ringsFormation.apply(
              data.circleManager.circles,
              p5,
              p5.millis(),
              {
                centerX: ringCenterX,
                centerY: ringCenterY,
                pulseIntensity: ringPulseIntensity,
                ...(innerRadius !== undefined && { innerRadius }),
              }
            );
          } else if (data.currentFormation === "distributedRings") {
            const ringCenterConfig = data.resolveResponsive(
              currentConfig.ringCenter,
              data.mobile
            ) || { x: 0.5, y: 0.5 };

            let chartData: {
              centerX: number;
              centerY: number;
              innerRadius?: number;
            };

            if (ringCenterConfig === "chartCenter") {
              // Get exact position from the chart circle element
              chartData = getChartCircleData(p5);
            } else {
              // Use configured coordinates
              chartData = {
                centerX: p5.width * ringCenterConfig.x,
                centerY: p5.height * ringCenterConfig.y,
              };
            }

            // Resolve all distributedRingsConfig properties
            const resolvedConfig = data.resolveDistributedRingsConfig(
              currentConfig.distributedRingsConfig,
              data.mobile
            );

            // Resolve innerRadius based on configuration
            let resolvedInnerRadius: number | undefined;
            const configuredInnerRadius = resolvedConfig.innerRadius;

            if (configuredInnerRadius === "chartRadius") {
              resolvedInnerRadius = chartData.innerRadius;
            } else if (configuredInnerRadius === "screenHeight") {
              resolvedInnerRadius = p5.height / 2;
            } else if (typeof configuredInnerRadius === "number") {
              resolvedInnerRadius = configuredInnerRadius;
            }

            // Apply distributed rings formation
            data.distributedRingsFormation.apply(
              data.circleManager.circles,
              p5,
              p5.millis(),
              {
                ...resolvedConfig,
                centerX: chartData.centerX,
                centerY: chartData.centerY,
                ...(resolvedInnerRadius !== undefined && {
                  innerRadius: resolvedInnerRadius,
                }),
              }
            );
          }

          // Apply fade alpha to all circles based on fade state
          let fadeAlpha = 1;
          if (data.fadeState === "fadeOut") {
            fadeAlpha = 1 - data.fadeProgress;
          } else if (data.fadeState === "fadeIn") {
            fadeAlpha = data.fadeProgress;
          }

          // Get base alpha from current subsection config
          const baseAlpha = currentConfig.alpha ?? 0.6;

          // Apply fade alpha to all circles
          if (fadeAlpha < 1) {
            data.circleManager.circles.forEach((circle: any) => {
              circle.alpha = baseAlpha * fadeAlpha;
            });
          } else if (data.fadeState === "normal") {
            // Restore alpha based on config
            data.circleManager.circles.forEach((circle: any) => {
              circle.alpha = baseAlpha;
            });
          }

          // Don't draw if current formation is invisible
          if (data.currentFormation !== "invisible") {
            data.circleManager.draw(color);
          }
        };

        p5.windowResized = () => {
          p5.resizeCanvas(window.innerWidth, window.innerHeight);
          if (sketchDataRef.current) {
            const data = sketchDataRef.current;
            // Re-initialize grid formation on resize if currently in grid mode
            if (data.currentFormation === "grid") {
              data.gridFormation.resize(data.circleManager.circles, p5);
            }
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

  const showDebugPanel = false;

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
      {showDebugPanel && (
        <div
          className="fixed top-2 right-2 bg-black/60  text-white p-3 rounded-lg text-[10px] font-mono pointer-events-none"
          style={{ zIndex: 9999 }}
        >
          <div className="font-bold mb-2 text-sm">Scroll Debug</div>
          <div className="space-y-1">
            <div>
              <span className="text-gray-400">Active Section:</span>{" "}
              {/* <span className="text-green-400">{activeSection}</span>{" "} */}
              <span className="text-blue-400">
                {sectionName} ({activeSection})
              </span>
            </div>
            <div>
              <span className="text-gray-400">Current Step:</span>{" "}
              <span className="text-red-400">{currentStep + 1}</span>
              <span className="text-gray-500">
                {" "}
                / {sectionSteps} (index {currentStep})
              </span>
            </div>
            <div>
              <span className="text-gray-400">Section Progress:</span>{" "}
              <span className="text-yellow-400">
                {(sectionProgress * 100).toFixed(1)}%
              </span>
            </div>
            <div>
              <span className="text-gray-400">Global Step:</span>{" "}
              <span className="text-red-400">{globalStep + 1}</span>
              <span className="text-gray-500"> / {totalSteps}</span>
            </div>
            <div>
              <span className="text-gray-400">Total Progress:</span>{" "}
              <span className="text-purple-400">
                {(totalProgress * 100).toFixed(1)}%
              </span>
            </div>
            {sketchDataRef.current && (
              <>
                <div className="border-t border-gray-700 my-2 pt-2 font-bold mb-2 text-sm">
                  Background Debug
                </div>
                <div className="">
                  <span className="text-gray-400">Formation:</span>{" "}
                  <span className="text-cyan-400">
                    {sketchDataRef.current.currentFormation}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Subsection:</span>{" "}
                  <span className="text-pink-400">
                    {sketchDataRef.current.getActiveSubsectionIndex(
                      sectionName,
                      sectionProgress
                    )}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Transition:</span>{" "}
                  <span className="text-orange-400">
                    {(sketchDataRef.current.transitionProgress * 100).toFixed(
                      0
                    )}
                    %
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
