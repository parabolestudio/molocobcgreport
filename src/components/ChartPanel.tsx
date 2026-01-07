"use client";

import type { ChartMode } from "@/helpers/chart";
import { isChartModeExplanation } from "@/helpers/chart";
import { JSX, useEffect, useRef, useState } from "react";
import ChartPanelContentSelectedVertical from "./ChartPanelContentSelectedVertical";
import { basePath } from "@/helpers/general";
import { csv } from "d3-fetch";
import { useCopy } from "@/contexts/CopyContext";

export interface Copy {
  vertical: string;
  intro: string;
  exampleApps: string[];
  quotes: Array<{ text: string; credit: string } | null>;

  // details side - AI disruption risk
  ai_risk_intro: string;
  ai_discovery_risk_intro: string;
  ai_discovery_risk_level: string;
  ai_service_risk_intro: string;
  ai_service_risk_level: string;
  ai_data_risk_intro: string;
  ai_data_risk_level: string;

  // details side - customer relationship strength
  customer_intro: string;
  customer_acquisition_intro: string;
  customer_acquisition_score: number;
  customer_loyalty_intro: string;
  customer_loyalty_score: number;
  customer_engagement_intro: string;
  customer_engagement_score: number;

  avgAcquisitionScore?: number;
  avgLoyaltyScore?: number;
  avgEngagementScore?: number;
}

export default function ChartPanel({
  mode,
  selectedVertical,
  selectVertical,
  scrollNext,
  scrollBack,
  scrollToDataMode,
  mobile,
  mobileExplanationExpanded,
  setMobileExplanationExpanded,
}: {
  mode: ChartMode;
  selectedVertical: string | null;
  selectVertical: (vertical: string | null) => void;
  scrollNext: Function;
  scrollBack: Function;
  scrollToDataMode: Function;
  mobile: boolean;
  mobileExplanationExpanded: boolean;
  setMobileExplanationExpanded: (expanded: boolean) => void;
}) {
  const [shownSide, setShownSide] = useState<"summary" | "details">("summary");
  const [isFlipping, setIsFlipping] = useState(false);
  const isExplanation = isChartModeExplanation(mode);
  const mobileContentBoxRef = useRef<HTMLDivElement>(null);

  const handleSideChange = (newSide: "summary" | "details") => {
    if (newSide !== shownSide) {
      setIsFlipping(true);
      setTimeout(() => {
        setShownSide(newSide);
        setTimeout(() => setIsFlipping(false), 150);
      }, 150);
    }
  };
  const backgroundColor = isExplanation
    ? mobile
      ? "bg-transparent"
      : "bg-panel-background-grey"
    : shownSide === "details"
    ? "bg-panel-background-green"
    : "bg-panel-background-blue";

  const backgroundColorInner = mobile
    ? isExplanation
      ? "bg-grey-text"
      : "bg-transparent"
    : "bg-transparent";

  const [verticalsCopy, setVerticalsCopy] = useState<Array<Copy>>([]);

  // Call all useCopy hooks at top level to avoid conditional hook calls
  const copyTexts = {
    qu_expl_title: useCopy("qu_expl_title"),
    qu_expl_subline: useCopy("qu_expl_subline"),
    qu_expl_y_description: useCopy("qu_expl_y_description"),
    qu_expl_x_description: useCopy("qu_expl_x_description"),
    qu_bottom_left_title: useCopy("qu_bottom_left_title"),
    qu_bottom_left_headline: useCopy("qu_bottom_left_headline"),
    qu_bottom_left_y_level: useCopy("qu_bottom_left_y_level"),
    qu_bottom_left_x_level: useCopy("qu_bottom_left_x_level"),
    qu_bottom_left_description: useCopy("qu_bottom_left_description"),
    qu_top_left_title: useCopy("qu_top_left_title"),
    qu_top_left_headline: useCopy("qu_top_left_headline"),
    qu_top_left_y_level: useCopy("qu_top_left_y_level"),
    qu_top_left_x_level: useCopy("qu_top_left_x_level"),
    qu_top_left_description: useCopy("qu_top_left_description"),
    qu_top_right_title: useCopy("qu_top_right_title"),
    qu_top_right_headline: useCopy("qu_top_right_headline"),
    qu_top_right_y_level: useCopy("qu_top_right_y_level"),
    qu_top_right_x_level: useCopy("qu_top_right_x_level"),
    qu_top_right_description: useCopy("qu_top_right_description"),
    qu_bottom_right_title: useCopy("qu_bottom_right_title"),
    qu_bottom_right_headline: useCopy("qu_bottom_right_headline"),
    qu_bottom_right_y_level: useCopy("qu_bottom_right_y_level"),
    qu_bottom_right_x_level: useCopy("qu_bottom_right_x_level"),
    qu_bottom_right_description: useCopy("qu_bottom_right_description"),
    qu_info: useCopy("qu_info"),
  };

  useEffect(() => {
    csv(`${basePath}/data/verticalsCopy.csv`).then((data) => {
      const processedData = data.map((d) => ({
        vertical: d["Vertical"],
        // summary side
        intro: d["Vertical Intro"] || "",
        exampleApps: d["Example Apps"] ? d["Example Apps"].split(",") : [],
        quotes: [
          d["Quote 1 (text)"] && d["Quote 1 (credit)"]
            ? {
                text: d["Quote 1 (text)"] || "",
                credit: d["Quote 1 (credit)"] || "",
              }
            : null,
          d["Quote 2 (text)"] && d["Quote 2 (credit)"]
            ? {
                text: d["Quote 2 (text)"] || "",
                credit: d["Quote 2 (credit)"] || "",
              }
            : null,
          d["Quote 3 (text)"] && d["Quote 3 (credit)"]
            ? {
                text: d["Quote 3 (text)"] || "",
                credit: d["Quote 3 (credit)"] || "",
              }
            : null,
        ].filter((q) => q !== null) as Array<{ text: string; credit: string }>,

        // details side - AI disruption risk
        ai_risk_intro: d["AI Disruption Risk Intro"] || "",
        ai_discovery_risk_intro: d["Discovery Risk (description)"] || "",
        ai_discovery_risk_level: d["Discovery Risk (score)"] || "",
        ai_service_risk_intro: d["Service Disruption Risk (description)"] || "",
        ai_service_risk_level: d["Service Disruption Risk (score)"] || "",
        ai_data_risk_intro: d["Data Access & Regulatory (description)"] || "",
        ai_data_risk_level: d["Data Access & Regulatory (score)"] || "",

        // details side - customer relationship strength
        customer_intro: d["Customer Relationship Intro"] || "",
        customer_acquisition_intro:
          d["Acquisition Strength (description)"] || "",
        customer_acquisition_score: d["Acquisition Strength (score)"]
          ? +d["Acquisition Strength (score)"]
          : 0,
        customer_loyalty_intro: d["Loyalty Strength (description)"] || "",
        customer_loyalty_score: d["Loyalty Strength (score)"]
          ? +d["Loyalty Strength (score)"]
          : 0,
        customer_engagement_intro:
          d["Platform Engagement Depth (description)"] || "",
        customer_engagement_score: d["Platform Engagement Depth (score)"]
          ? +d["Platform Engagement Depth (score)"]
          : 0,
      }));
      // calculate average scores for customer acquisition, loyalty, and engagement across all verticals
      processedData.forEach((d) => {
        (d as any).avgAcquisitionScore =
          processedData.reduce(
            (sum, d) => sum + d.customer_acquisition_score,
            0
          ) / processedData.length;
        (d as any).avgLoyaltyScore =
          processedData.reduce((sum, d) => sum + d.customer_loyalty_score, 0) /
          processedData.length;
        (d as any).avgEngagementScore =
          processedData.reduce(
            (sum, d) => sum + d.customer_engagement_score,
            0
          ) / processedData.length;
      });

      setVerticalsCopy(processedData);
    });
  }, []);

  const copy = verticalsCopy.find((v) => v.vertical === selectedVertical);

  const contentMap = getContentMap(
    selectedVertical,
    selectVertical,
    shownSide,
    copy,
    handleSideChange,
    mobile,
    copyTexts
  );

  // Reset to summary side when mode changes
  useEffect(() => {
    setShownSide("summary");
  }, [mode]);

  // Reset to summary side when selected vertical changes to null
  useEffect(() => {
    if (!selectedVertical) {
      setShownSide("summary");
    }
  }, [selectedVertical]);

  // Reset scroll position of mobile content box when mode changes
  useEffect(() => {
    if (mobileContentBoxRef.current) {
      mobileContentBoxRef.current.scrollTop = 0;
    }
  }, [mode]);

  if (mobile && selectedVertical === null) {
    return (
      <div className="panel-content-expl-mobile h-full flex flex-col justify-end overflow-hidden">
        {mode !== "data-filled" && (
          <div
            className="bg-[#9494AA] uppercase rounded-tl-[5px] rounded-tr-[5px] text-grey-text text-[12px] font-semibold py-1 px-2 inline-block w-fit self-end"
            onClick={() =>
              setMobileExplanationExpanded(!mobileExplanationExpanded)
            }
          >
            <span>{mobileExplanationExpanded ? "Reduce" : "Expand"}</span>
            <img
              src={`${basePath}/icons/arrow.svg`}
              alt="arrow"
              width={12}
              height={10}
              className={`inline-block ml-1 rotate-90 ${
                mobileExplanationExpanded ? "rotate-270" : "rotate-90"
              }`}
            />
          </div>
        )}
        <div
          ref={mobileContentBoxRef}
          className={`mobile-content-box ${
            isExplanation
              ? "bg-grey-text rounded-[3px]"
              : "bg-panel-background-blue rounded-[10px]"
          } px-4 py-2 text-black-blue overflow-y-auto overflow-x-hidden`}
          style={{ overscrollBehavior: "contain" }}
        >
          {contentMap[mode]}
        </div>
        {isExplanation && (
          <NavigationButtons
            scrollBack={scrollBack}
            scrollToDataMode={scrollToDataMode}
            scrollNext={scrollNext}
            isBackButtonDisabled={mode === "expl-y-axis"}
            mobile={mobile}
          />
        )}
      </div>
    );
  }
  if (mobile && selectedVertical !== null) {
    return (
      <div
        className={`h-full p-4 rounded-[20px] flex flex-col overflow-y-auto ${backgroundColor}`}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.3s",
          transform: isFlipping ? "rotateY(90deg)" : "rotateY(0deg)",
        }}
      >
        {contentMap[mode]}
      </div>
    );
  }

  return (
    <div
      className={`${backgroundColor} transition rounded-[20px] flex flex-col h-full relative`}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.3s",
        transform: isFlipping ? "rotateY(90deg)" : "rotateY(0deg)",
      }}
    >
      <div className="md:p-6 flex-1 min-h-0 flex flex-col">
        <div
          className={`panel-content ${
            isExplanation ? "panel-content-explanation" : ""
          } flex-1 overflow-y-auto overflow-x-hidden ${backgroundColorInner} rounded-[3px] p-4 md:p-0`}
          style={{
            scrollbarGutter: "stable",
            overscrollBehavior: "contain",
          }}
        >
          {contentMap[mode]}
        </div>
        {isExplanation && (
          <NavigationButtons
            scrollBack={scrollBack}
            scrollToDataMode={scrollToDataMode}
            scrollNext={scrollNext}
            isBackButtonDisabled={mode === "expl-y-axis"}
            mobile={mobile}
          />
        )}
      </div>
      <div className="relative p-6 pt-7 rounded-[20px] flex gap-3 shrink-0 items-start">
        <DashedBorderTop />
        <img
          src={`${basePath}/logos/moloco_small_without_border.svg`}
          alt="Moloco logo"
          width={27}
          height={25}
          className="opacity-50"
        />
        <p className="text-[14px] leading-[108%] text-grey-text m-0 opacity-50">
          {copyTexts.qu_info}
        </p>
      </div>
    </div>
  );
}

const getContentMap = (
  selectedVertical: string | null,
  selectVertical: (vertical: string | null) => void,
  shownSide: "summary" | "details",
  copy: Copy | undefined,
  handleSideChange: (side: "summary" | "details") => void,
  mobile: boolean = false,
  copyTexts: {
    qu_expl_title: React.ReactNode;
    qu_expl_subline: React.ReactNode;
    qu_expl_y_description: React.ReactNode;
    qu_expl_x_description: React.ReactNode;
    qu_bottom_left_title: React.ReactNode;
    qu_bottom_left_headline: React.ReactNode;
    qu_bottom_left_y_level: React.ReactNode;
    qu_bottom_left_x_level: React.ReactNode;
    qu_bottom_left_description: React.ReactNode;
    qu_top_left_title: React.ReactNode;
    qu_top_left_headline: React.ReactNode;
    qu_top_left_y_level: React.ReactNode;
    qu_top_left_x_level: React.ReactNode;
    qu_top_left_description: React.ReactNode;
    qu_top_right_title: React.ReactNode;
    qu_top_right_headline: React.ReactNode;
    qu_top_right_y_level: React.ReactNode;
    qu_top_right_x_level: React.ReactNode;
    qu_top_right_description: React.ReactNode;
    qu_bottom_right_title: React.ReactNode;
    qu_bottom_right_headline: React.ReactNode;
    qu_bottom_right_y_level: React.ReactNode;
    qu_bottom_right_x_level: React.ReactNode;
    qu_bottom_right_description: React.ReactNode;
    qu_info: React.ReactNode;
  }
): Record<ChartMode, JSX.Element> => ({
  "expl-y-axis": (
    <div className="flex flex-col gap-4 text-grey-text">
      {mobile ? null : (
        <h3 className="panel-heading">{copyTexts.qu_expl_title}</h3>
      )}
      <p className="panel-text">{copyTexts.qu_expl_subline}</p>
      <div className="panel-text highlighted-axis">
        {copyTexts.qu_expl_y_description}
      </div>
    </div>
  ),
  "expl-x-axis": (
    <div className="flex flex-col gap-4">
      {mobile ? null : (
        <h3 className="panel-heading mb-0">{copyTexts.qu_expl_title}</h3>
      )}
      <p className="panel-text">{copyTexts.qu_expl_subline}</p>
      <div className="panel-text highlighted-axis">
        {copyTexts.qu_expl_x_description}
      </div>
    </div>
  ),
  "expl-quadrant-bottom-left": (
    <QuadrantExplanationContent
      copyTexts={copyTexts}
      mobile={mobile}
      quadrant="bottom_left"
    />
  ),
  "expl-quadrant-top-left": (
    <QuadrantExplanationContent
      copyTexts={copyTexts}
      mobile={mobile}
      quadrant="top_left"
    />
  ),
  "expl-quadrant-top-right": (
    <QuadrantExplanationContent
      copyTexts={copyTexts}
      mobile={mobile}
      quadrant="top_right"
    />
  ),
  "expl-quadrant-bottom-right": (
    <QuadrantExplanationContent
      copyTexts={copyTexts}
      mobile={mobile}
      quadrant="bottom_right"
    />
  ),
  "data-filled": (
    <ChartPanelContentSelectedVertical
      selectedVertical={selectedVertical}
      selectVertical={selectVertical}
      shownSide={shownSide}
      onShownSideChange={handleSideChange}
      copy={copy}
      mobile={mobile}
    />
  ),
});

function QuadrantExplanationContent({
  copyTexts,
  mobile,
  quadrant,
}: {
  copyTexts: any;
  mobile: boolean;
  quadrant: string;
}) {
  return (
    <div>
      <h3 className="panel-heading">
        {copyTexts["qu_" + quadrant + "_title"]}
      </h3>
      {mobile && (
        <>
          <br />
          <b>
            <div className="panel-text">
              {copyTexts["qu_" + quadrant + "_headline"]}
            </div>
          </b>
          <br />
        </>
      )}
      <div className="panel-text">
        {copyTexts["qu_" + quadrant + "_y_level"]}
      </div>
      <br />
      <div className="panel-text">
        {copyTexts["qu_" + quadrant + "_x_level"]}
      </div>
      <br />
      <svg viewBox="0 0 750 2" style={{ height: "2px" }}>
        <line
          x1="0"
          y1="0"
          x2="750"
          y2="0"
          stroke="#9494AA"
          strokeWidth="1.5"
          strokeDasharray="5,5"
        />
      </svg>
      <br />
      <div className="panel-text">
        {copyTexts["qu_" + quadrant + "_description"]}
      </div>
    </div>
  );
}

function NavigationButtons({
  scrollBack,
  scrollToDataMode,
  scrollNext,
  isBackButtonDisabled,
  mobile,
}: {
  scrollBack: Function;
  scrollToDataMode: Function;
  scrollNext: Function;
  isBackButtonDisabled: boolean;
  mobile: boolean;
}) {
  return (
    <div className="flex gap-4 mt-2 md:mt-4 shrink-0">
      <button
        className={`bg-grey-blue flex items-center justify-center gap-2 disabled:text-[#9494AA] ${
          isBackButtonDisabled ? "" : "hover:bg-[#9494AA]"
        } transition grow`}
        onClick={() => scrollBack()}
        disabled={isBackButtonDisabled}
        style={{ fontSize: mobile ? "12px" : "14px" }}
      >
        <svg
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.100586 6.7002C0.100586 6.60875 0.118874 6.51782 0.155274 6.43359C0.19161 6.34965 0.244961 6.27379 0.311524 6.20996L6.46484 0.301758C6.59935 0.172612 6.7812 0.100671 6.96973 0.100586C7.15837 0.100586 7.34003 0.172536 7.47461 0.301758C7.60932 0.431112 7.68652 0.607239 7.68652 0.791992C7.68647 0.976678 7.60928 1.15292 7.47461 1.28223L2.5498 6.00977L15.585 6.00977C15.7732 6.00979 15.9545 6.08111 16.0889 6.20996C16.2234 6.33918 16.2998 6.51563 16.2998 6.7002C16.2998 6.88476 16.2234 7.06121 16.0889 7.19043C15.9545 7.31928 15.7732 7.3906 15.585 7.39063L2.5498 7.39063L7.47461 12.1182C7.60928 12.2475 7.68647 12.4237 7.68652 12.6084C7.68652 12.7932 7.60932 12.9693 7.47461 13.0986C7.34003 13.2279 7.15837 13.2998 6.96973 13.2998C6.7812 13.2997 6.59935 13.2278 6.46484 13.0986L0.311524 7.19043C0.244961 7.1266 0.19161 7.05074 0.155274 6.9668C0.118874 6.88257 0.100586 6.79164 0.100586 6.7002Z"
            strokeWidth="0.2"
            className={`
                    transition
                    ${
                      isBackButtonDisabled
                        ? "stroke-[#9494AA] fill-[#9494AA]"
                        : "stroke-[#F2F2F2] fill-[#F2F2F2]"
                    }  `}
          />
        </svg>
        <span>{useCopy("qu_button_back")}</span>
      </button>
      <button
        className="bg-medium-blue grow hover:bg-[#65ACF1] hover:text-black-blue transition"
        onClick={() => scrollToDataMode()}
        style={{ fontSize: mobile ? "12px" : "14px" }}
      >
        {useCopy("qu_button_index")}
      </button>
      <button
        className="bg-grey-blue flex items-center justify-center gap-2 hover:bg-[#9494AA] transition grow"
        onClick={() => scrollNext()}
        style={{ fontSize: mobile ? "12px" : "14px" }}
      >
        <span>{useCopy("qu_button_next")}</span>
        <img
          src={`${basePath}/icons/arrow.svg`}
          alt="arrow"
          width={16}
          height={13}
          style={{ transform: "rotate(180deg)" }}
        />
      </button>
    </div>
  );
}

function DashedBorderTop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth - 0.5);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const borderRadius = 20;
  const svgHeight = borderRadius + 2; // Need extra height to show the curves
  const pathData =
    width > 0
      ? `M 0 ${borderRadius} Q 0 0 ${borderRadius} 0 L ${
          width - borderRadius
        } 0 Q ${width} 0 ${width} ${borderRadius}`
      : "";

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full pointer-events-none"
      style={{ height: svgHeight }}
    >
      <svg width={width} height={svgHeight} className="absolute top-0 left-0">
        <path
          d={pathData}
          stroke="#9494AA"
          strokeWidth="1.5"
          strokeDasharray="5,5"
          fill="none"
        />
      </svg>
    </div>
  );
}
