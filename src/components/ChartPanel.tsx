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

  return (
    <div
      className={`${backgroundColor} transition rounded-[20px] flex flex-col h-full justify-between relative`}
    >
      <div className="p-6 flex flex-col h-full justify-between">
        <div className="panel-content h-full">{contentMap[mode]}</div>
        {isExplanation && (
          <div className="flex gap-4">
            <button
              className="bg-grey-blue flex items-center justify-center gap-2"
              onClick={() => scrollBack()}
            >
              <img
                src={`${basePath}/icons/arrow.svg`}
                alt="arrow"
                width={8}
                height={83}
              />
              <span>Back</span>
            </button>
            <button
              className="bg-medium-blue"
              onClick={() => scrollToDataMode()}
            >
              Skip to index
            </button>
            <button
              className="bg-grey-blue flex items-center justify-center gap-2"
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
