"use client";

import { basePath, replaceCertainGlyphs } from "@/helpers/general";
import { Copy } from "./ChartPanel";
import React, { use, useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { useCopy } from "@/contexts/CopyContext";
import { useCopyRaw } from "@/contexts/CopyContext";
import { parseCopy } from "@/helpers/parseCopy";
import { mapLocaleToLanguage } from "@/contexts/LocaleProvider";
import { useSearchParams } from "next/navigation";

export default function ChartPanelContentSelectedVertical({
  selectedVertical,
  selectVertical,
  shownSide,
  onShownSideChange,
  copy,
  mobile = false,
}: {
  selectedVertical: string | null;
  selectVertical: (vertical: string | null) => void;
  shownSide: "summary" | "details";
  onShownSideChange: (side: "summary" | "details") => void;
  copy: Copy | undefined;
  mobile: boolean;
}) {
  const searchParams = useSearchParams();
  const language = mapLocaleToLanguage(searchParams?.get("locale"));

  if (!selectedVertical && !mobile) {
    return (
      <div>
        <h3 className="panel-heading">{useCopy("qu_expl_title")}</h3>
        <p>{useCopy("qu_data_nudge")}</p>
      </div>
    );
  }
  if (!selectedVertical && mobile) {
    return (
      <div>
        <p className="text-grey-text text-[14px] font-light">
          {useCopy("qu_data_nudge_mobile")}
        </p>
      </div>
    );
  }

  const verticalDisplayName: React.ReactNode = replaceCertainGlyphs(
    copy?.vertical || "",
  );
  return (
    <div className="flex flex-col h-full">
      {mobile && (
        <div className="absolute top-4 right-12">
          <SideSwitchButton
            shownSide={shownSide}
            onShownSideChange={onShownSideChange}
            mobile={mobile}
          />
        </div>
      )}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 cursor-pointer">
        <img
          src={`${basePath}/icons/cross.svg`}
          alt="Close"
          width={mobile ? 20 : 25}
          height={mobile ? 20 : 25}
          onClick={() => selectVertical(null)}
        />
      </div>
      <h3 className="text-grey-text font-museo-moderno mb-0 text-[18px] md:text-[40px] mr-[150px] md:mr-10 shrink-0 font-bold">
        {verticalDisplayName}
      </h3>
      <div
        className="flex-1 overflow-y-auto mt-2 pr-2"
        style={{
          scrollbarGutter: "stable",
          overscrollBehavior: "contain",
        }}
      >
        {!copy ? null : shownSide === "summary" ? (
          <SummaryCopy copy={copy} />
        ) : (
          <DetailsCopy copy={copy} />
        )}
      </div>
      <div
        className="shrink-0 mt-6"
        style={{ display: mobile ? "none" : "block" }}
      >
        <SideSwitchButton
          shownSide={shownSide}
          onShownSideChange={onShownSideChange}
          mobile={mobile}
        />
      </div>
    </div>
  );
}

function SideSwitchButton({
  shownSide,
  onShownSideChange,
  mobile,
}: {
  shownSide: "summary" | "details";
  onShownSideChange: (side: "summary" | "details") => void;
  mobile?: boolean;
}) {
  return (
    <button
      className={`${
        shownSide === "summary"
          ? "bg-bright-green hover:bg-[#A8F7DD]"
          : "bg-medium-blue hover:bg-[#65ACF1]"
      } transition flex items-center justify-center gap-2`}
      style={{
        padding: mobile ? "6px 12px" : undefined,
        borderRadius: mobile ? 5 : 20,
      }}
      onClick={() =>
        onShownSideChange(shownSide === "summary" ? "details" : "summary")
      }
    >
      <span className="text-black-blue text-[12px] md:text-[18px]">
        {shownSide === "summary"
          ? useCopy("qu_panel_button_details")
          : useCopy("qu_panel_button_summary")}
      </span>
      <img
        src={`${basePath}/icons/switch.svg`}
        alt="switch"
        width={mobile ? 12 : 18}
        height={mobile ? 12 : 18}
      />
    </button>
  );
}

function SummaryCopy({ copy }: { copy: Copy }) {
  const [shownQuoteIndex, setShownQuoteIndex] = useState(0);

  return (
    <div className="flex flex-col gap-6 justify-between h-full">
      <div className="flex flex-col gap-6">
        {/* Example apps */}
        <div>
          <p className="text-[12px] md:text-[14px]">
            {useCopy("qu_chart_logo_text")}
          </p>
          <LoopedAppLogos
            apps={copy.exampleApps}
            vertical={copy.verticalEnglish}
          />
        </div>

        {/* Intro */}
        <p>
          {copy.intro.split("\n\n").map((paragraph, index) => (
            <span key={index}>{paragraph}</span>
          ))}
        </p>
      </div>

      {/* Quotes */}
      <div className="bg-[#05284D] rounded-[20px] p-5 pb-8 text-[18px] relative">
        <p className="font-bold font-montserrat pb-4">
          “{copy.quotes[shownQuoteIndex]?.text}”
        </p>
        <p>— {copy.quotes[shownQuoteIndex]?.credit}</p>
        {copy.quotes.length > 1 && (
          <>
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
                  (shownQuoteIndex - 1 + copy.quotes.length) %
                    copy.quotes.length,
                );
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

function LoopedAppLogos({
  apps,
  vertical,
}: {
  apps: string[];
  vertical: string;
}) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [animationDistance, setAnimationDistance] = useState<number | null>(
    null,
  );
  const [animationDuration, setAnimationDuration] = useState<number | null>(
    null,
  );

  // Reset animation state when apps change
  useEffect(() => {
    setIsScrolling(false);
    setAnimationDistance(null);
    setAnimationDuration(null);
  }, [apps]);

  useEffect(() => {
    if (!containerRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Wait for all images to load before measuring
            const contentDiv = containerRef.querySelector(
              ".logos-content",
            ) as HTMLElement;
            if (contentDiv) {
              const images = contentDiv.querySelectorAll("img");
              const imagePromises = Array.from(images).map((img) => {
                if (img.complete) {
                  return Promise.resolve();
                }
                return new Promise((resolve) => {
                  img.addEventListener("load", resolve);
                  img.addEventListener("error", resolve);
                });
              });

              Promise.all(imagePromises).then(() => {
                // Now measure after all images are loaded
                const contentWidth = contentDiv.scrollWidth;
                const containerWidth = containerRef.clientWidth;
                const animationDistance = contentWidth + 32; // Including gap
                if (contentWidth > containerWidth) {
                  setAnimationDistance(animationDistance);
                  // Calculate duration based on distance to maintain consistent speed
                  // Speed: 40 pixels per second
                  const pixelsPerSecond = 40;
                  const duration = animationDistance / pixelsPerSecond;
                  setAnimationDuration(duration);
                  setTimeout(() => {
                    setIsScrolling(true);
                  }, 800);
                }
              });
            }
          } else {
            setIsScrolling(false);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(containerRef);

    return () => {
      observer.unobserve(containerRef);
    };
  }, [containerRef, apps]);

  const verticalFolderName = vertical.toLowerCase().replaceAll(" ", "_");
  const logosContent = apps.map((app) => (
    <img
      key={app}
      src={`${basePath}/appLogosAdjusted/${verticalFolderName}/${app
        .trim()
        .replaceAll(" ", "_")
        .replace("'", "_")}.svg`}
      alt={app}
      className="shrink-0"
    />
  ));

  return (
    <div className="relative overflow-hidden max-h-6 mt-2 pb-3">
      <div ref={setContainerRef} className="flex flex-row items-center">
        <div
          className="logos-content flex flex-row gap-8 h-5"
          style={
            isScrolling && animationDistance && animationDuration
              ? {
                  animation: `logoScroll ${animationDuration}s linear forwards`,
                  width: "fit-content",
                }
              : undefined
          }
        >
          {logosContent}
          {isScrolling && logosContent}
        </div>
      </div>
      <style jsx global>{`
        @keyframes logoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${animationDistance || 0}px);
          }
        }
      `}</style>
    </div>
  );
}

function DetailsCopy({ copy }: { copy: Copy }) {
  return (
    <div>
      <div className="border-b border-b-bright-green pb-5 border-dashed gap-4 flex flex-col">
        <div>
          <p className="font-bold font-montserrat text-[18px] md:text-[24px]">
            {useCopy("qu_panel_ai_risk")}
          </p>
          <p className="text-[14px] md:text-[18px]">{copy.ai_risk_intro}</p>
        </div>
        <div>
          <p className="font-bold font-montserrat">
            {useCopy("qu_panel_ai_risk_discovery")} |{" "}
            <span className="text-bright-green">
              {copy.ai_discovery_risk_level}
            </span>
          </p>
          <p className="text-[12px] md:text-[14px]">
            {copy.ai_discovery_risk_intro}
          </p>
        </div>
        <div>
          <p className="font-bold font-montserrat">
            {useCopy("qu_panel_ai_risk_service_disruption")} |{" "}
            <span className="text-bright-green">
              {copy.ai_service_risk_level}
            </span>
          </p>
          <p className="text-[12px] md:text-[14px]">
            {copy.ai_service_risk_intro}
          </p>
        </div>
        <div>
          <p className="font-bold font-montserrat">
            {useCopy("qu_panel_ai_risk_data")} |{" "}
            <span className="text-bright-green">{copy.ai_data_risk_level}</span>
          </p>
          <p className="text-[12px] md:text-[14px]">
            {copy.ai_data_risk_intro}
          </p>
        </div>
      </div>
      <div className="py-5 border-dashed gap-5 flex flex-col">
        <div>
          <p className="font-bold font-montserrat text-[18px] md:text-[24px]">
            {useCopy("qu_panel_customer")}
          </p>
          <p className="text-[12px] md:text-[14px]">{copy.customer_intro}</p>
        </div>
        <ScoreDisplay
          id="customer_acquisition"
          title={useCopy("qu_panel_customer_acquisition")}
          note={useCopy("qu_panel_customer_acquisition_note")}
          score={copy.customer_acquisition_score}
          description={copy.customer_acquisition_intro}
          avgScore={copy.avgAcquisitionScore || null}
        />
        <ScoreDisplay
          id="loyalty_strength"
          title={useCopy("qu_panel_customer_loyalty")}
          note={useCopy("qu_panel_customer_loyalty_note")}
          score={copy.customer_loyalty_score}
          description={copy.customer_loyalty_intro}
          avgScore={copy.avgLoyaltyScore || null}
        />
        <ScoreDisplay
          id="platform_engagement"
          title={useCopy("qu_panel_customer_engagement")}
          note={useCopy("qu_panel_customer_engagement_note")}
          score={copy.customer_engagement_score}
          description={copy.customer_engagement_intro}
          avgScore={copy.avgEngagementScore || null}
        />
      </div>
    </div>
  );
}

function ScoreDisplay({
  id,
  title,
  note,
  score,
  description,
  avgScore,
}: {
  id: string;
  title: React.ReactNode;
  note: React.ReactNode;
  score: number;
  description: string;
  avgScore: number | null;
}) {
  const [width, setWidth] = useState(230);
  const height = 90;
  const scoreAverage = useCopyRaw("qu_score_display_average");

  const containerId = `chart-container-${id}`;

  useEffect(() => {
    const visContainer = document.querySelector(
      `#${containerId}`,
    ) as HTMLElement;
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
          <p className="font-bold font-montserrat text-[14px] md:text-[18px]">
            {title}
          </p>
          <p className="text-[14px]">{note}</p>
        </div>
        <div className="min-w-0" id={containerId}>
          <svg width={width} height={height}>
            <g transform={`translate(${margin.left},${margin.top})`}>
              <line
                x1={0}
                y1={midLine}
                x2={innerWidth}
                y2={midLine}
                className="stroke-black-blue md:stroke-forest-green"
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
                    className="stroke-black-blue md:stroke-forest-green"
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
                    className="stroke-black-blue md:stroke-forest-green"
                    strokeWidth={1.5}
                  />
                  <text
                    dx="-3"
                    y={midLine + 15}
                    className="fill-black-blue md:fill-forest-green text-[14px]"
                    textAnchor="end"
                    dominantBaseline="middle"
                  >
                    {parseCopy(scoreAverage, true)}
                  </text>
                </g>
              )}
            </g>
          </svg>
        </div>
      </div>
      <p className="text-[12px] md:text-[14px] pt-3 w-full">{description}</p>
    </div>
  );
}
