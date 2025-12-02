"use client";

import type { ChartMode } from "@/helpers/chart";
import { isChartModeExplanation } from "@/helpers/chart";
import { JSX, useEffect, useState } from "react";
import ChartPanelContentSelectedVertical from "./ChartPanelContentSelectedVertical";
import { basePath } from "@/helpers/general";

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
  const isExplanation = isChartModeExplanation(mode);
  const backgroundColor = isExplanation
    ? "bg-panel-background-grey"
    : shownSide === "details"
    ? "bg-panel-background-green"
    : "bg-panel-background-blue";
  const contentMap = getContentMap(
    selectedVertical,
    selectVertical,
    shownSide,
    setShownSide
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
      className={`${backgroundColor} transition rounded-[20px] flex flex-col h-full justify-between relative`}
    >
      <div className="p-6 flex flex-col h-full justify-between">
        <div className="panel-content h-full">{contentMap[mode]}</div>
        {isExplanation && (
          <div className="flex gap-4">
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
      <div className="p-6 pt-7 border-t-[1.5px] border-t-[#9494AA] border-dashed rounded-[20px] flex  gap-3">
        <img
          src={`${basePath}/icons/info.svg`}
          alt="Information"
          width={16}
          height={13}
        />
        <p className="text-[14px] leading-[108%] text-grey-text m-0">
          {noteTexts[mode]}
        </p>
      </div>
    </div>
  );
}

const ContentYAxis = () => {
  return (
    <div>
      <h3 className="panel-heading">
        <span>
          The <span className="font-bold">AI Disruption Index</span>
        </span>
      </h3>
      <div>
        <p>
          <b>Chatbot Disruption</b> (y-axis) scores verticals along a range of:
        </p>
        <ul>
          <li>
            Service disruption: The ability for customers to use AI without
            having to go directly to the company
          </li>
          <li>
            Discovery disruption: Consumers going more to chatbots for discovery
            than traditional channels
          </li>
        </ul>
      </div>
    </div>
  );
};

const ContentXAxis = () => {
  return (
    <div>
      <div>
        <p>
          <b>Customer Relationship Strength</b> (x-axis) scores strength from
          high to low based on:
        </p>
        <ul>
          <li>Reliance on paid user acquisition</li>
          <li>Ability to drive loyalty</li>
          <li>
            How much customers engage on platforms like apps (higher engagement)
            vs. the web (lower)
          </li>
        </ul>
      </div>
    </div>
  );
};

const ContentQuadrant1 = () => {
  return (
    <div>
      <h3 className="panel-heading">
        <span className="font-bold">Battle for the Interface</span>
      </h3>
      <div className="flex flex-col gap-4">
        <p className="text-bright-green font-bold">
          AI disruption and weak user relationships leave these verticals highly
          vulnerable to LLM substitution and interface loss. 
        </p>
        <p>
          They need to fundamentally rebuild the relationship layer, including:
        </p>
        <ul>
          <li>
            Bringing more of the journey into their owned ecosystems and mobile
            app through things like loyalty programs, deeper engagement, and
            personalized experiences 
          </li>
          <li>
            Building LLM-like offerings into their mobile app and other owned
            experiences to offer greater value,  including  product comparisons,
            discovery, and customer assistance
          </li>
          <li>
            Making the most of 1P data, closed-loop systems, and trust signals
          </li>
        </ul>
      </div>
    </div>
  );
};

const ContentQuadrant2 = () => {
  return (
    <div>
      <h3 className="panel-heading">
        {" "}
        <span className="font-bold">Loyalty Challenged</span>
      </h3>
      <div className="flex flex-col gap-4">
        <p className="text-bright-green font-bold">
          Low disruption today, but weak relationships mean these verticals lack
          long-term defensibility.
        </p>
        <p>They need to build future-proof foundations, including: </p>
        <ul>
          <li>
            Building deeper relationships through AI-driven personalization and
            loyalty ecosystems like mobile apps 
          </li>
          <li>
            Embedding into chatbot ecosystems via partnerships and integrations
            to ensure visibility in LLM discovery
          </li>
        </ul>
      </div>
    </div>
  );
};

const ContentQuadrant3 = () => {
  return (
    <div>
      <h3 className="panel-heading">
        {" "}
        <span className="font-bold">Secured Anchors</span>
      </h3>
      <div className="flex flex-col gap-4">
        <p className="text-bright-green font-bold">
          AI disruption is already reshaping journeys here, but strong loyalty
          and user intent keep these verticals durable—for now.
        </p>
        <p>These verticals need to defend and differentiate, including:</p>
        <ul>
          <li>
            Shifting from generic loyalty to personalized proactive
            relationships 
          </li>
          <li>
            Using AI/LLM to amplify data, trust, and regulatory barriers into
            even stronger differentiators
          </li>
        </ul>
      </div>
    </div>
  );
};

const ContentQuadrant4 = () => {
  return (
    <div>
      <h3 className="panel-heading">
        <span className="font-bold">Embedded Ecosystems</span>
      </h3>
      <div className="flex flex-col gap-4">
        <p className="text-bright-green font-bold">
          Strong user relationships and low AI disruption combine to create high
          resilience. 
        </p>
        <p>These verticals can accelerate their advantage by</p>
        <ul>
          <li>
            Making AI-enhanced services indispensable within their ecosystem
          </li>
          <li>
            Using scale and trust to define how chatbots should operate in their
            vertical, shaping standards that others follow
          </li>
        </ul>
      </div>
    </div>
  );
};

const getContentMap = (
  selectedVertical: string | null,
  selectVertical: (vertical: string | null) => void,
  shownSide: "summary" | "details",
  onShownSideChange: (side: "summary" | "details") => void
): Record<ChartMode, JSX.Element> => ({
  "expl-y-axis": <ContentYAxis />,
  "expl-x-axis": (
    <div className="flex flex-col gap-4">
      <ContentYAxis />
      <ContentXAxis />
    </div>
  ),
  "expl-quadrant-1": <ContentQuadrant1 />,
  "expl-quadrant-2": <ContentQuadrant2 />,
  "expl-quadrant-3": <ContentQuadrant3 />,
  "expl-quadrant-4": <ContentQuadrant4 />,
  "data-filled": (
    <ChartPanelContentSelectedVertical
      selectedVertical={selectedVertical}
      selectVertical={selectVertical}
      shownSide={shownSide}
      onShownSideChange={onShownSideChange}
    />
  ),
});

const noteTexts: Record<ChartMode, string> = {
  "expl-y-axis":
    "Scroll down or use the buttons to explore how the index is constructed.",
  "expl-x-axis":
    "Scroll down or use the buttons to explore how the index is constructed.",
  "expl-quadrant-1":
    "Scroll down or use the buttons to explore how the index is constructed.",
  "expl-quadrant-2":
    "Scroll down or use the buttons to explore how the index is constructed.",
  "expl-quadrant-3":
    "Scroll down or use the buttons to explore how the index is constructed.",
  "expl-quadrant-4":
    "Scroll down or use the buttons to explore how the index is constructed.",
  "data-filled":
    "Click on a vertical to explore details. Hover over the quadrant name for definitions.",
};
