"use client";

import type { ChartMode } from "@/helpers/chart";
import { isChartModeExplanation } from "@/helpers/chart";
import { JSX, useEffect, useState } from "react";
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
}

export default function ChartPanel({
  mode,
  selectedVertical,
  selectVertical,
  scrollNext,
  scrollBack,
  scrollToDataMode,
}: {
  mode: ChartMode;
  selectedVertical: string | null;
  selectVertical: (vertical: string | null) => void;
  scrollNext: Function;
  scrollBack: Function;
  scrollToDataMode: Function;
}) {
  const [shownSide, setShownSide] = useState<"summary" | "details">("summary");
  const [isFlipping, setIsFlipping] = useState(false);
  const isExplanation = isChartModeExplanation(mode);

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
    ? "bg-panel-background-grey"
    : shownSide === "details"
    ? "bg-panel-background-green"
    : "bg-panel-background-blue";

  const [verticalsCopy, setVerticalsCopy] = useState<Array<Copy>>([]);

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
      setVerticalsCopy(processedData);
    });
  }, []);

  const copy = verticalsCopy.find((v) => v.vertical === selectedVertical);

  const contentMap = getContentMap(
    selectedVertical,
    selectVertical,
    shownSide,
    setShownSide,
    copy,
    mode,
    handleSideChange
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

  const isBackButtonDisabled = mode === "expl-y-axis";

  return (
    <div
      className={`${backgroundColor} transition rounded-[20px] flex flex-col h-full relative`}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.3s",
        transform: isFlipping ? "rotateY(90deg)" : "rotateY(0deg)",
      }}
    >
      <div className="p-6 flex-1 min-h-0 flex flex-col">
        <div
          className="panel-content flex-1 min-h-0 flex flex-col overflow-y-auto pr-2"
          style={{ scrollbarGutter: "stable" }}
        >
          {contentMap[mode]}
        </div>
        {isExplanation && (
          <div className="flex gap-4 mt-4 shrink-0">
            <button
              className={`bg-grey-blue flex items-center justify-center gap-2 disabled:text-[#9494AA] ${
                isBackButtonDisabled ? "" : "hover:bg-[#9494AA]"
              } transition`}
              onClick={() => scrollBack()}
              disabled={isBackButtonDisabled}
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
              <span>Back</span>
            </button>
            <button
              className="bg-medium-blue"
              onClick={() => scrollToDataMode()}
            >
              Skip to index
            </button>
            <button
              className="bg-grey-blue flex items-center justify-center gap-2 hover:bg-[#9494AA] transition"
              onClick={() => scrollNext()}
            >
              <span>Next</span>
              <img
                src={`${basePath}/icons/arrow.svg`}
                alt="arrow"
                width={16}
                height={13}
                style={{ transform: "rotate(180deg)" }}
              />
            </button>
          </div>
        )}
      </div>
      <div className="p-6 pt-7 border-t-[1.5px] border-t-[#9494AA] border-dashed rounded-[20px] flex gap-3 shrink-0 items-start">
        <img
          src={`${basePath}/icons/moloco_small.svg`}
          alt="Information"
          width={25}
          height={28}
        />
        <p className="text-[14px] leading-[108%] text-grey-text m-0">
          {useCopy("qu_info")}
        </p>
      </div>
    </div>
  );
}

const getContentMap = (
  selectedVertical: string | null,
  selectVertical: (vertical: string | null) => void,
  shownSide: "summary" | "details",
  onShownSideChange: (side: "summary" | "details") => void,
  copy: Copy | undefined,
  mode: ChartMode,
  handleSideChange: (side: "summary" | "details") => void
): Record<ChartMode, JSX.Element> => ({
  "expl-y-axis": (
    <div className="flex flex-col gap-4">
      <h3 className="panel-heading">{useCopy("qu_expl_title")}</h3>
      <p>{useCopy("qu_expl_subline")}</p>
      <div className="text-[18px]">{useCopy("qu_expl_y_description")}</div>
    </div>
  ),
  "expl-x-axis": (
    <div className="flex flex-col gap-4">
      <h3 className="panel-heading">{useCopy("qu_expl_title")}</h3>
      <p>{useCopy("qu_expl_subline")}</p>
      <div className="text-[18px]">{useCopy("qu_expl_y_description")}</div>
      <div className="text-[18px]">{useCopy("qu_expl_x_description")}</div>
    </div>
  ),
  "expl-quadrant-bottom-left": (
    <div>
      <h3 className="panel-heading">{useCopy("qu_bottom_left_title")}</h3>
      <div className="text-[18px]">{useCopy("qu_bottom_left_description")}</div>
    </div>
  ),
  "expl-quadrant-top-left": (
    <div>
      <h3 className="panel-heading">{useCopy("qu_top_left_title")}</h3>
      <div className="text-[18px]">{useCopy("qu_top_left_description")}</div>
    </div>
  ),
  "expl-quadrant-top-right": (
    <div>
      <h3 className="panel-heading">{useCopy("qu_top_right_title")}</h3>
      <div className="text-[18px]">{useCopy("qu_top_right_description")}</div>
    </div>
  ),
  "expl-quadrant-bottom-right": (
    <div>
      <h3 className="panel-heading">{useCopy("qu_bottom_right_title")}</h3>
      <div className="text-[18px]">
        {useCopy("qu_bottom_right_description")}
      </div>
    </div>
  ),
  "data-filled": (
    <ChartPanelContentSelectedVertical
      selectedVertical={selectedVertical}
      selectVertical={selectVertical}
      shownSide={shownSide}
      onShownSideChange={handleSideChange}
      copy={copy}
    />
  ),
});
