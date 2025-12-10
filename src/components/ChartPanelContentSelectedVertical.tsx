"use client";

import { basePath } from "@/helpers/general";
import { Copy } from "./ChartPanel";
import { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { useCopy } from "@/contexts/CopyContext";

export default function ChartPanelContentSelectedVertical({
  selectedVertical,
  selectVertical,
  shownSide,
  onShownSideChange,
  copy,
}: {
  selectedVertical: string | null;
  selectVertical: (vertical: string | null) => void;
  shownSide: "summary" | "details";
  onShownSideChange: (side: "summary" | "details") => void;
  copy: Copy | undefined;
}) {
  if (!selectedVertical) {
    return (
      <div>
        <h3 className="panel-heading">{useCopy("qu_expl_title")}</h3>
        <div className="flex gap-3">
          <img
            src={`${basePath}/icons/mouse.svg`}
            alt="Mouse icon"
            width={24}
            height={24}
          />
          <p>{useCopy("qu_data_nudge")}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col h-full">
      <div className="absolute top-8 right-8 cursor-pointer">
        <img
          src={`${basePath}/icons/cross.svg`}
          alt="Close"
          width={25}
          height={28}
          onClick={() => selectVertical(null)}
        />
      </div>
      <h3 className="text-grey-text font-museo-moderno mb-0 text-[40px] mr-10 shrink-0 font-bold">
        {selectedVertical}
      </h3>
      <div
        className="flex-1 overflow-y-auto mt-2 pr-2"
        style={{ scrollbarGutter: "stable" }}
      >
        {!copy ? (
          <p>No details for this vertical.</p>
        ) : shownSide === "summary" ? (
          <SummaryCopy copy={copy} />
        ) : (
          <DetailsCopy copy={copy} />
        )}
      </div>
      <div className="shrink-0 mt-6">
        <button
          className={`${
            shownSide === "summary" ? "bg-bright-green" : "bg-medium-blue"
          } transition flex items-center justify-center gap-2`}
          onClick={() =>
            onShownSideChange(shownSide === "summary" ? "details" : "summary")
          }
        >
          <span className="text-black-blue">
            {shownSide === "summary" ? "Details" : "Summary"}
          </span>
          <img
            src={`${basePath}/icons/switch.svg`}
            alt="switch"
            width={18}
            height={18}
          />
        </button>
      </div>
    </div>
  );
}

function SummaryCopy({ copy }: { copy: Copy }) {
  const [shownQuoteIndex, setShownQuoteIndex] = useState(0);

  return (
    <div className="flex flex-col gap-6 justify-between h-full">
      <div className="flex flex-col gap-6">
        {/* Example apps */}
        <div>
          <p className="text-[14px]">Example apps in category</p>
          <div className="flex flex-row gap-8 overflow-y-scroll max-h-[60px] mt-2 pb-3">
            {copy.exampleApps.map((app) => (
              <img
                key={app}
                src={`${basePath}/appLogos/${copy.vertical}/${app
                  .trim()
                  .replaceAll(" ", "_")
                  .replace("'", "_")}.svg`}
              />
            ))}
          </div>
        </div>

        {/* Intro */}
        <p>
          {copy.intro.split("\n\n").map((paragraph, index) => (
            <span key={index}>
              {paragraph}
              <br />
              <br />
            </span>
          ))}
        </p>
      </div>

      {/* Quotes */}
      <div className="bg-[#05284D] rounded-[20px] p-5 pb-8 text-[18px] relative">
        <p className="font-bold pb-4">{copy.quotes[shownQuoteIndex]?.text}</p>
        <p>{copy.quotes[shownQuoteIndex]?.credit}</p>
        <img
          className="absolute bottom-0 left-0 cursor-pointer"
          src={`${basePath}/icons/arrow_pill.svg`}
          alt="Arrow with background"
          width={34}
          height={22}
          onClick={() => {
            setShownQuoteIndex((shownQuoteIndex + 1) % copy.quotes.length);
          }}
        />
        <img
          className="absolute bottom-0 right-0 cursor-pointer rotate-180"
          src={`${basePath}/icons/arrow_pill.svg`}
          alt="Arrow with background"
          width={34}
          height={22}
          onClick={() => {
            setShownQuoteIndex(
              (shownQuoteIndex - 1 + copy.quotes.length) % copy.quotes.length
            );
          }}
        />
      </div>
    </div>
  );
}

function DetailsCopy({ copy }: { copy: Copy }) {
  return (
    <div>
      <div className="border-b border-b-bright-green pb-5 border-dashed gap-4 flex flex-col">
        <div>
          <p className="font-bold text-[24px]">AI Disruption Risk</p>
          <p>{copy.ai_risk_intro}</p>
        </div>
        <div>
          <p className="font-bold">
            Discovery |{" "}
            <span className="text-bright-green">
              {copy.ai_discovery_risk_level}
            </span>
          </p>
          <p className="text-[14px]">{copy.ai_discovery_risk_intro}</p>
        </div>
        <div>
          <p className="font-bold">
            Service Disruption |{" "}
            <span className="text-bright-green">
              {copy.ai_service_risk_level}
            </span>
          </p>
          <p className="text-[14px]">{copy.ai_service_risk_intro}</p>
        </div>
        <div>
          <p className="font-bold">
            Data Access & Regulatory |{" "}
            <span className="text-bright-green">{copy.ai_data_risk_level}</span>
          </p>
          <p className="text-[14px]">{copy.ai_data_risk_intro}</p>
        </div>
      </div>
      <div className="py-5 border-dashed gap-5 flex flex-col">
        <div>
          <p className="font-bold text-[24px]">
            Strength of Customer Relationship
          </p>
          <p>{copy.customer_intro}</p>
        </div>
        <ScoreDisplay
          title="Acquisition Strength"
          note="% of non-paid traffic share"
          score={copy.customer_acquisition_score}
          description={copy.customer_acquisition_intro}
          avgScore={copy.avgAcquisitionScore || null}
        />
        <ScoreDisplay
          title="Loyalty Strength"
          note="d30/d7 retention ratio"
          score={copy.customer_loyalty_score}
          description={copy.customer_loyalty_intro}
          avgScore={copy.avgLoyaltyScore || null}
        />
        <ScoreDisplay
          title="Platform Engagement"
          note="share of time spent on app vs. web"
          score={copy.customer_engagement_score}
          description={copy.customer_engagement_intro}
          avgScore={copy.avgEngagementScore || null}
        />
      </div>
    </div>
  );
}

function ScoreDisplay({
  title,
  note,
  score,
  description,
  avgScore,
}: {
  title: string;
  note: string;
  score: number;
  description: string;
  avgScore: number | null;
}) {
  const [width, setWidth] = useState(230);
  const height = 90;

  const id = `chart-container-${title.replace(/\s+/g, "")}`;

  useEffect(() => {
    const visContainer = document.querySelector(`#${id}`) as HTMLElement;
    const w = visContainer?.offsetWidth || 230;
    setWidth(w);
  }, []);

  const margin = { top: 5, right: 20, bottom: 5, left: 20 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const midLine = (innerHeight * 3) / 4;

  const xScale = scaleLinear().domain([0, 10]).range([0, innerWidth]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-[35%_65%] w-full">
        <div className="min-w-0">
          <p className="font-bold text-[18px]">{title}</p>
          <p className="text-[14px] italic">{note}</p>
        </div>
        <div className="min-w-0" id={id}>
          <svg width={width} height={height}>
            <g transform={`translate(${margin.left},${margin.top})`}>
              <line
                x1={0}
                y1={midLine}
                x2={innerWidth}
                y2={midLine}
                className="stroke-forest-green"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
              <g>
                {xScale.ticks().map((tickValue) => (
                  <line
                    key={tickValue}
                    x1={xScale(tickValue)}
                    y1={midLine - 10}
                    x2={xScale(tickValue)}
                    y2={midLine}
                    className="stroke-forest-green"
                    strokeWidth={0.5}
                  />
                ))}
              </g>
              <line
                x1={xScale(score)}
                y1={midLine - 20}
                x2={xScale(score)}
                y2={midLine}
                className="stroke-bright-green"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
              <circle
                cx={xScale(score)}
                cy={midLine - 20 - 19}
                r={19}
                className="fill-bright-green"
              />
              <text
                x={xScale(score)}
                y={midLine - 20 - 19}
                dy={2}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-black-blue font-bold text-[18px]"
              >
                {score.toFixed(1)}
              </text>
              {avgScore !== null && (
                <g transform={`translate(${xScale(avgScore)}, 0)`}>
                  <line
                    x1="0"
                    x2="0"
                    y1={midLine + 20}
                    y2={midLine}
                    className="stroke-forest-green"
                    strokeWidth={1.5}
                  />
                  <text
                    dx="-3"
                    y={midLine + 15}
                    className="fill-forest-green text-[14px]"
                    textAnchor="end"
                    dominantBaseline="middle"
                  >
                    avg.
                  </text>
                </g>
              )}
            </g>
          </svg>
        </div>
      </div>
      <p className="text-[14px] pt-3 w-full">{description}</p>
    </div>
  );
}
