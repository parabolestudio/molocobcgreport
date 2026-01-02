"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Chart from "./Chart";
import ChartPanel from "./ChartPanel";
import { verticalsMap, type ChartMode } from "@/helpers/chart";
import { basePath, isMobile } from "@/helpers/general";
import { useCopy } from "@/contexts/CopyContext";
import { fadeOut } from "@/helpers/scroll";
import { csv } from "d3-fetch";

interface VerticalData {
  vertical: string;
  consumerStrength: number;
  aiDisruption: number;
}
interface SVGCache {
  [key: string]: string;
}

export default function QuadrantSection({
  isActive,
  currentStep,
  scrollToSection,
}: {
  isActive: boolean;
  currentStep: number;
  scrollToSection: (sectionIndex: number, localStep?: number) => void;
}) {
  const [mobile, setMobile] = useState(false);
  const [verticalsData, setVerticalsData] = useState<VerticalData[]>([]);
  const [svgCache, setSvgCache] = useState<SVGCache>({});

  const introTextRef = useRef<HTMLDivElement>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartPanelRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const mobileHeaderRef = useRef<HTMLDivElement>(null);
  const mobileVerticalSelectRef = useRef<HTMLDivElement>(null);
  const [selectedVertical, setSelectedVertical] = useState<string | null>(null);
  const previousStepRef = useRef(-1);
  const [sourceExpandedMobile, setSourceExpandedMobile] = useState(false);
  const [mobileExplanationExpanded, setMobileExplanationExpanded] =
    useState(false);

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

  const chartModes: ChartMode[] = [
    "expl-y-axis",
    "expl-x-axis",
    "expl-quadrant-bottom-left",
    "expl-quadrant-top-left",
    "expl-quadrant-bottom-right",
    "expl-quadrant-top-right",
    "data-filled",
  ];

  // Determine chart mode based on current step
  // Step 0: intro text visible, charts hidden
  // Steps 1-7: chart modes 0-6
  const chartMode: ChartMode =
    currentStep === 0 ? chartModes[0] : chartModes[currentStep - 1];

  // Handle clicking outside to deselect vertical
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Check if click is on a verticalGroup (including SVG elements)
      let element: HTMLElement | SVGElement | null = target;
      while (element) {
        if (element.classList?.contains("verticalGroup")) {
          return;
        }
        element = element.parentElement;
      }

      // Check if click is on ChartPanel
      if (chartPanelRef.current?.contains(target)) {
        return;
      }

      // Clear selection
      setSelectedVertical(null);
    };

    if (!mobile) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => window.removeEventListener("click", handleClickOutside);
  }, [mobile]);

  // Reset selected vertical when mode changes
  useEffect(() => {
    setSelectedVertical(null);
    setSourceExpandedMobile(false);
  }, [chartMode]);

  useEffect(() => {
    // Load all SVG files
    const loadSVGs = async () => {
      const svgPromises = Object.entries(verticalsMap).map(
        async ([key, value]) => {
          const iconName = (value as any).icon;
          try {
            const response = await fetch(
              `${basePath}/verticals/${iconName}.svg`
            );
            const svgText = await response.text();
            return [iconName, svgText];
          } catch (error) {
            console.error(`Failed to load SVG for ${iconName}:`, error);
            return [iconName, ""];
          }
        }
      );

      const results = await Promise.all(svgPromises);
      const cache: SVGCache = {};
      results.forEach(([iconName, svgText]) => {
        cache[iconName as string] = svgText as string;
      });
      setSvgCache(cache);
    };

    loadSVGs();
  }, []);

  // Set initial visibility
  useEffect(() => {
    const introText = introTextRef.current;
    const chartPanel = chartPanelRef.current;
    const chart = chartRef.current;
    const mobileHeader = mobileHeaderRef.current;
    const mobileVerticalSelect = mobileVerticalSelectRef.current;

    if (!introText || !chartPanel || !chart) return;

    // Initial state - intro text visible, charts hidden on step 0
    if (currentStep === 0) {
      gsap.set(introText, { autoAlpha: 1, y: 0 });
      gsap.set(chartPanel, { autoAlpha: 0, y: 30 });
      gsap.set(chart, { autoAlpha: 0, y: 0 });
      if (mobileHeader) gsap.set(mobileHeader, { autoAlpha: 0, y: 30 });
      if (mobileVerticalSelect)
        gsap.set(mobileVerticalSelect, { autoAlpha: 0, y: 30 });
    } else {
      gsap.set(introText, { autoAlpha: 0, y: -30 });
      gsap.set(chartPanel, { autoAlpha: 1, y: 0 });
      gsap.set(chart, { autoAlpha: 1, y: 0 });
      if (mobileHeader) gsap.set(mobileHeader, { autoAlpha: 1, y: 0 });
      if (mobileVerticalSelect)
        gsap.set(mobileVerticalSelect, { autoAlpha: 1, y: 0 });
    }
  }, []);

  // Handle transitions between intro and chart
  useEffect(() => {
    if (!isActive) return;
    if (currentStep === previousStepRef.current) return;

    const introText = introTextRef.current;
    const chartPanel = chartPanelRef.current;
    const chart = chartRef.current;
    const mobileHeader = mobileHeaderRef.current;
    const mobileVerticalSelect = mobileVerticalSelectRef.current;

    if (!introText || !chartPanel || !chart) return;

    const previousStep = previousStepRef.current;

    if (currentStep === 0) {
      // Step 0: Show intro text, hide charts
      // Fade out chart in place (no vertical movement)
      if (previousStep > 0) {
        gsap.killTweensOf(chart);
        gsap.to(chart, {
          autoAlpha: 0,
          duration: 0.4,
          ease: "power2.in",
          overwrite: true,
        });

        // Fade out chart panel with vertical movement
        gsap.killTweensOf(chartPanel);
        gsap.to(chartPanel, {
          autoAlpha: 0,
          y: -30,
          duration: 0.4,
          ease: "power2.in",
          overwrite: true,
        });

        // Fade out mobile header
        if (mobileHeader) {
          gsap.killTweensOf(mobileHeader);
          gsap.to(mobileHeader, {
            autoAlpha: 0,
            y: -30,
            duration: 0.4,
            ease: "power2.in",
            overwrite: true,
          });
        }
        if (mobileVerticalSelect) {
          gsap.killTweensOf(mobileVerticalSelect);
          gsap.to(mobileVerticalSelect, {
            autoAlpha: 0,
            y: -30,
            duration: 0.4,
            ease: "power2.in",
            overwrite: true,
          });
        }
      } else {
        gsap.set(chart, { autoAlpha: 0 });
        gsap.set(chartPanel, { autoAlpha: 0 });
        if (mobileHeader) gsap.set(mobileHeader, { autoAlpha: 0 });
        if (mobileVerticalSelect)
          gsap.set(mobileVerticalSelect, { autoAlpha: 0 });
      }

      // Fade in intro text with overwrite to cancel any ongoing animations
      gsap.killTweensOf(introText);
      gsap.fromTo(
        introText,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.4,
          overwrite: true,
        }
      );
    } else {
      // Steps 1-7: Hide intro text, show charts (charts stay visible, only mode changes)

      // Only fade in charts when transitioning from step 0 or initial load
      if (previousStep === 0 || previousStep === -1) {
        // Fade out intro text
        gsap.killTweensOf(introText);
        fadeOut(introText);

        gsap.killTweensOf([chartPanel, chart]);

        // Fade in chart first (in place, no vertical movement)
        gsap.fromTo(
          chart,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.4,
            overwrite: true,
          }
        );

        // Fade in chart panel with additional delay
        gsap.fromTo(
          chartPanel,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            delay: 0.8, // 0.2s more delay than chart
            overwrite: true,
          }
        );

        // Fade in mobile header
        if (mobileHeader) {
          gsap.fromTo(
            mobileHeader,
            { autoAlpha: 0, y: 30 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              delay: 0.4, // Same timing as chart
              overwrite: true,
            }
          );
        }
        if (mobileVerticalSelect) {
          gsap.fromTo(
            mobileVerticalSelect,
            { autoAlpha: 0, y: 30 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              delay: 0.4, // Same timing as chart
              overwrite: true,
            }
          );
        }
      } else {
        // Between steps 1-7, ensure intro is hidden and charts stay visible
        gsap.killTweensOf(introText);
        gsap.set(introText, { autoAlpha: 0, y: -30 });
        gsap.set([chartPanel, chart], { autoAlpha: 1, y: 0 });
        if (mobileHeader) gsap.set(mobileHeader, { autoAlpha: 1, y: 0 });
        if (mobileVerticalSelect) {
          gsap.set(mobileVerticalSelect, { autoAlpha: 1, y: 0 });
        }
      }
    }

    previousStepRef.current = currentStep;
  }, [isActive, currentStep]);

  useEffect(() => {
    csv(`${basePath}/data/verticalsData.csv`).then((data) => {
      const processedData = data.map((d) => ({
        vertical: d["Vertical"],
        consumerStrength: d["Strength of customer relationship"]
          ? +d["Strength of customer relationship"]
          : 0,
        aiDisruption: d["Risk of AI disruption"]
          ? +d["Risk of AI disruption"]
          : 0,
      }));
      setVerticalsData(processedData as VerticalData[]);
    });
  }, []);

  const quadrantExplTitle = useCopy("qu_expl_title");
  const sourceShort = useCopy("qu_info_short");
  const sourceFull = useCopy("qu_info");
  const showLess = useCopy("qu_button_show_less");
  const showMore = useCopy("qu_button_show_more");
  const verticalDropdownLabel = useCopy("qu_vertical_dropdown");

  const scrollToDataMode = () => {
    // Jump to data-filled mode (step 7)
    scrollToSection(2, 7);
  };
  const scrollNext = () => {
    // QuadrantSection is section 2, advance to next step
    const nextStep = currentStep + 1;
    // if (nextStep <= 7) {
    scrollToSection(2, nextStep);
    // }
  };
  const scrollBack = () => {
    // Go to previous step
    const prevStep = currentStep - 1;
    if (prevStep >= 0) {
      scrollToSection(2, prevStep);
    }
  };

  return (
    <div
      className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
        isActive
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      data-section="quadrant"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Intro text - only visible on step 0 */}
        <div
          ref={introTextRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:max-w-[900px] px-8 h-full max-h-[1000px] py-8 flex flex-col justify-center items-center gap-12"
        >
          <h2 className="font-museo-moderno text-bright-green text-[40px] md:text-[96px] leading-[125%] md:leading-[114px] font-extralight text-center">
            {useCopy("climax_1_title")}
          </h2>
          <p className="text-[18px] md:text-[32px] max-w-[780px] text-center w-full text-pretty">
            {useCopy("climax_1_paragraph")}
          </p>
        </div>

        {/* Chart components - visible from step 1 onwards */}
        <div
          ref={chartContainerRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1728px] px-5 md:px-10 h-full py-5 md:py-8"
        >
          {mobile ? (
            <div className="h-full flex flex-col justify-between gap-5 relative overflow-hidden">
              <div ref={mobileHeaderRef} className="relative z-70">
                <h3 className="font-museo-moderno text-[24px] leading-[115%] text-grey-text mb-2">
                  {quadrantExplTitle}
                </h3>
                <div className="flex gap-2 items-start">
                  <img
                    src={`${basePath}/logos/moloco_small_without_border.svg`}
                    alt="Moloco logo"
                    width={17}
                    height={15}
                    className=" opacity-50 pt-1"
                  />
                  <p
                    className={`text-[12px] text-grey-text p-1 absolute left-[25px] ${
                      sourceExpandedMobile ? " bg-dark-background" : ""
                    }`}
                    style={{
                      color: "rgba(242, 242, 242, 0.5)",
                    }}
                  >
                    {sourceExpandedMobile ? sourceFull : sourceShort}{" "}
                    <span
                      className="underline cursor-pointer"
                      onClick={() =>
                        setSourceExpandedMobile(!sourceExpandedMobile)
                      }
                    >
                      {sourceExpandedMobile ? showLess : showMore}
                    </span>
                  </p>
                </div>
              </div>
              <div ref={mobileVerticalSelectRef} className="relative z-50">
                <div
                  className={`${
                    chartMode === "data-filled" ? "opacity-100" : "opacity-0"
                  } max-w-[300px]`}
                >
                  <p className="font-bold text-[14px] leading-[125%]">
                    {verticalDropdownLabel}
                  </p>
                  <VerticalSelector
                    selectedVertical={selectedVertical}
                    setSelectedVertical={setSelectedVertical}
                    verticalsData={verticalsData}
                    svgCache={svgCache}
                  />
                </div>
              </div>
              <div ref={chartRef} className="relative z-40">
                <Chart
                  mode={chartMode}
                  selectedVertical={selectedVertical}
                  selectVertical={(vertical) => setSelectedVertical(vertical)}
                  mobile={mobile}
                  verticalsData={verticalsData}
                  svgCache={svgCache}
                />
              </div>
              <div ref={chartPanelRef} className="h-full overflow-hidden">
                <div
                  className={`w-full h-full ${
                    selectedVertical !== null ? "opacity-0" : ""
                  }`}
                >
                  <ChartPanel
                    mode={chartMode}
                    selectedVertical={selectedVertical}
                    selectVertical={(vertical) => setSelectedVertical(vertical)}
                    scrollNext={scrollNext}
                    scrollBack={scrollBack}
                    scrollToDataMode={scrollToDataMode}
                    mobile={mobile}
                    mobileExplanationExpanded={mobileExplanationExpanded}
                    setMobileExplanationExpanded={setMobileExplanationExpanded}
                  />
                </div>
              </div>
              {selectedVertical !== null ||
              (chartMode !== "data-filled" && mobileExplanationExpanded) ? (
                <div className="extraChartPanel absolute top-[170px] bottom-0 right-0 w-full z-45">
                  <ChartPanel
                    mode={chartMode}
                    selectedVertical={selectedVertical}
                    selectVertical={(vertical) => setSelectedVertical(vertical)}
                    scrollNext={scrollNext}
                    scrollBack={scrollBack}
                    scrollToDataMode={scrollToDataMode}
                    mobile={mobile}
                    mobileExplanationExpanded={mobileExplanationExpanded}
                    setMobileExplanationExpanded={setMobileExplanationExpanded}
                  />
                </div>
              ) : null}
            </div>
          ) : (
            <div className="h-full grid grid-cols-[0.3fr_0.7fr] gap-8">
              <div ref={chartPanelRef} className="h-full overflow-hidden">
                <ChartPanel
                  mode={chartMode}
                  selectedVertical={selectedVertical}
                  selectVertical={(vertical) => setSelectedVertical(vertical)}
                  scrollNext={scrollNext}
                  scrollBack={scrollBack}
                  scrollToDataMode={scrollToDataMode}
                  mobile={mobile}
                  mobileExplanationExpanded={mobileExplanationExpanded}
                  setMobileExplanationExpanded={setMobileExplanationExpanded}
                />
              </div>
              <div ref={chartRef} className="h-full overflow-hidden">
                <Chart
                  mode={chartMode}
                  selectedVertical={selectedVertical}
                  selectVertical={(vertical) => setSelectedVertical(vertical)}
                  verticalsData={verticalsData}
                  svgCache={svgCache}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function VerticalSelector({
  selectedVertical,
  setSelectedVertical,
  verticalsData,
  svgCache,
}: {
  selectedVertical: string | null;
  setSelectedVertical: (vertical: string | null) => void;
  verticalsData: VerticalData[];
  svgCache: SVGCache;
}) {
  const [isOpen, setIsOpen] = useState(false);

  let option = "All verticals";
  let iconName = "all_verticals";
  if (selectedVertical) {
    const verticalInfo = verticalsMap[selectedVertical] as any;
    option = verticalInfo.label;
    iconName = verticalInfo.icon;
  }
  const svgContent = svgCache[iconName];

  // close vertical selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const selectorElement = document.querySelector(
        ".vertical-selector-icon"
      )?.parentElement;

      if (selectorElement && !selectorElement.contains(target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative mt-2">
      <div className="flex w-full">
        <svg
          className="z-1 vertical-selector-icon"
          width={33}
          height={33}
          dangerouslySetInnerHTML={{ __html: svgContent || "" }}
        ></svg>
        <div
          className="flex-1 border border-grey-text rounded-[5px] flex justify-between items-center gap-4 px-3 pl-5 -ml-2.5 h-8"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[14px]">{option}</span>
          <img
            src={`${basePath}/icons/triangle.svg`}
            alt=""
            className=""
            width={11}
            height={7}
          />
        </div>
      </div>
      {isOpen && (
        <div className="max-h-[170px] h-[170px] overflow-y-auto bg-grey-text rounded-[5px] absolute left-0 right-0 z-50">
          <div
            className={`px-3 py-2 text-[14px] cursor-pointer text-black-blue border-b border-black-blue`}
            onClick={() => {
              setSelectedVertical(null);
              setIsOpen(false);
            }}
          >
            All verticals
          </div>
          {verticalsData
            .sort((a, b) => a.vertical.localeCompare(b.vertical))
            .map((vd) => (
              <div
                key={vd.vertical}
                className={`px-3 py-2 text-[14px] cursor-pointer text-black-blue border-b border-black-blue`}
                onClick={() => {
                  setSelectedVertical(vd.vertical);
                  setIsOpen(false);
                }}
              >
                {vd.vertical}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
