"use client";

import { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import type { ChartMode } from "@/helpers/chart";
import { verticalsMap } from "@/helpers/chart";
import { basePath } from "@/helpers/general";

interface VerticalData {
  vertical: string;
  consumerStrength: number;
  aiDisruption: number;
}

interface SVGCache {
  [key: string]: string;
}

const quadrantData = [
  {
    position: "bottom-left",
    title: "Breached",
    titleAnchor: "end" as const,
    colorQuadrant: "#3D5F53",
    colorQuadrantActiveText: "var(--grey-text)",
    tooltipText:
      "AI disruption and weak user relationships leave these verticals highly vulnerable to LLM substitution and interface loss.",
  },
  {
    position: "top-left",
    title: "Undefended",
    titleAnchor: "end" as const,
    colorQuadrant: "#308267",
    colorQuadrantActiveText: "var(--grey-text)",
    tooltipText:
      "Low disruption today, but weak relationships mean these verticals lack long-term defensibility.",
  },
  {
    position: "bottom-right",
    title: "Contested",
    titleAnchor: "start" as const,
    colorQuadrant: "#60E2B7",
    colorQuadrantActiveText: "var(--black-blue)",
    tooltipText:
      "Strong user relationships and low AI disruption combine to create high resilience.",
  },
  {
    position: "top-right",
    title: "Secured",
    titleAnchor: "start" as const,
    colorQuadrant: "#A0EED4",
    colorQuadrantActiveText: "var(--black-blue)",
    tooltipText:
      "AI disruption is already reshaping journeys here, but strong loyalty and user intent keep these verticals durable—for now.",
  },
];

export default function Chart({
  mode,
  selectedVertical,
  selectVertical,
}: {
  mode: ChartMode;
  selectedVertical: string | null;
  selectVertical: (vertical: string) => void;
}) {
  const [verticalsData, setVerticalsData] = useState<VerticalData[]>([]);
  const [svgCache, setSvgCache] = useState<SVGCache>({});
  const [hoveredQuadrant, setHoveredQuadrant] = useState<{
    quadrant: string;
  } | null>(null);

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

  // console.log("Rendering Chart", mode, verticalsData);
  const [length, setLength] = useState(860);

  useEffect(() => {
    const visContainer = document.querySelector(
      `#chart-container`
    ) as HTMLElement;
    const w = visContainer?.offsetWidth || 860;
    const h = visContainer?.offsetHeight || 860;
    const minDim = Math.min(w, h);
    if (minDim < 860) {
      setLength(minDim);
    } else {
      setLength(860);
    }
  }, []);

  // margin needs to be equal horizontally and vertically
  const margin = { top: 5, right: 50, bottom: 50, left: 5 };
  const innerWidth = length - margin.left - margin.right;
  const innerHeight = length - margin.top - margin.bottom;

  const xScale = scaleLinear().domain([4.5, 10.5]).range([0, innerWidth]);
  const yScale = scaleLinear().domain([10, 1.5]).range([0, innerHeight]);

  return (
    <div
      id="chart-container"
      className="w-full h-full overflow-hidden relative"
    >
      <svg
        viewBox={`0 0 ${length} ${length}`}
        style={{ width: "100%", height: "100%", overflow: "visible" }}
      >
        <g transform={`translate(${margin.left},${margin.top})`}>
          <g className="structure">
            <circle
              cx={innerWidth / 2}
              cy={innerHeight / 2}
              r={innerWidth / 2}
              stroke="var(--grey-blue)"
              strokeWidth={1.5}
              fill="none"
            />
            <line
              x1={innerWidth / 2}
              y1={0}
              x2={innerWidth / 2}
              y2={innerHeight}
              stroke="var(--grey-blue)"
              strokeWidth={1.5}
              strokeDasharray="5,5"
            />
            <line
              x1={0}
              y1={innerHeight / 2}
              x2={innerWidth}
              y2={innerHeight / 2}
              stroke="var(--grey-blue)"
              strokeWidth={1.5}
              strokeDasharray="5,5"
            />
          </g>

          <g className="x-axis">
            <line
              className="transition"
              x1={0}
              y1={innerHeight}
              x2={innerWidth}
              y2={innerHeight}
              strokeWidth={1.5}
              strokeDasharray="10,10"
              stroke={
                mode === "expl-x-axis"
                  ? "var(--bright-green)"
                  : "var(--grey-blue)"
              }
            />
            <text
              className="chart-text transition"
              x={innerWidth / 2}
              y={innerHeight + margin.bottom / 2}
              dominantBaseline="middle"
              textAnchor="middle"
              style={{
                fill:
                  mode === "expl-x-axis"
                    ? "var(--bright-green)"
                    : "var(--grey-blue)",
              }}
            >
              Strength of customer relationship
            </text>
            <text
              className="chart-text-bold uppercase transition"
              y={innerHeight + margin.bottom / 2}
              dominantBaseline="middle"
              style={{
                fill:
                  mode === "expl-x-axis"
                    ? "var(--bright-green)"
                    : "var(--grey-blue)",
              }}
            >
              low
            </text>
            <text
              className="chart-text-bold uppercase transition"
              x={innerWidth}
              y={innerHeight + margin.bottom / 2}
              dominantBaseline="middle"
              textAnchor="end"
              style={{
                fill:
                  mode === "expl-x-axis"
                    ? "var(--bright-green)"
                    : "var(--grey-blue)",
              }}
            >
              high
            </text>
          </g>
          <g className="y-axis">
            <line
              x1={innerWidth}
              y1={0}
              x2={innerWidth}
              y2={innerHeight}
              stroke={
                mode === "expl-y-axis"
                  ? "var(--bright-green)"
                  : "var(--grey-blue)"
              }
              strokeWidth={1.5}
              strokeDasharray="10,10"
            />
            <text
              className="chart-text transition"
              x={innerWidth}
              y={innerHeight / 2 + margin.right / 2}
              dominantBaseline="middle"
              textAnchor="middle"
              style={{
                transform: `rotate(-90deg)`,
                transformOrigin: `${innerWidth}px ${innerHeight / 2}px`,
                fill:
                  mode === "expl-y-axis"
                    ? "var(--bright-green)"
                    : "var(--grey-blue)",
              }}
            >
              Risk of AI disruption
            </text>
            <text
              className="chart-text-bold uppercase transition"
              x={innerWidth + 10}
              y={6}
              dominantBaseline="middle"
              style={{
                fill:
                  mode === "expl-y-axis"
                    ? "var(--bright-green)"
                    : "var(--grey-blue)",
              }}
            >
              low
            </text>
            <text
              className="chart-text-bold uppercase transition"
              x={innerWidth + 10}
              y={innerHeight - 6}
              dominantBaseline="middle"
              style={{
                fill:
                  mode === "expl-y-axis"
                    ? "var(--bright-green)"
                    : "var(--grey-blue)",
              }}
            >
              high
            </text>
          </g>
          <g className="quadrants">
            {quadrantData.map((quadrant, index) => {
              const radius = innerWidth / 2;
              const centerX = innerWidth / 2;
              const centerY = innerHeight / 2;

              // Calculate start and end angles for each quadrant
              const angleMap = {
                "bottom-left": { start: Math.PI / 2, end: Math.PI }, // Quadrant 1: bottom-left (90° to 180°)
                "top-left": { start: Math.PI, end: (3 * Math.PI) / 2 }, // Quadrant 2: top-left (180° to 270°)
                "top-right": { start: (3 * Math.PI) / 2, end: 2 * Math.PI }, // Quadrant 3: top-right (270° to 360°/0°)
                "bottom-right": { start: 0, end: Math.PI / 2 }, // Quadrant 4: bottom-right (0° to 90°)
              };

              const angles =
                angleMap[quadrant.position as keyof typeof angleMap];
              const startX = centerX + radius * Math.cos(angles.start);
              const startY = centerY + radius * Math.sin(angles.start);
              const endX = centerX + radius * Math.cos(angles.end);
              const endY = centerY + radius * Math.sin(angles.end);

              const slicePath = `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY} Z`;
              const isQuadrantActive =
                mode === `expl-quadrant-${quadrant.position}`;

              const isQuadrantHovered =
                hoveredQuadrant?.quadrant === quadrant.position;

              return (
                <g key={index}>
                  <path
                    d={slicePath}
                    fill={quadrant.colorQuadrant}
                    opacity={isQuadrantActive || isQuadrantHovered ? 1 : 0}
                    className="transition"
                  />
                  <text
                    className={`chart-text-base font-medium transition cursor-pointer ${
                      isQuadrantActive ? "text-[18px]" : "text-[14px]"
                    }`}
                    x={innerWidth / 2}
                    dx={
                      quadrant.position === "bottom-left" ||
                      quadrant.position === "top-left"
                        ? -12
                        : 12
                    }
                    y={innerHeight / 2}
                    dy={
                      quadrant.position === "bottom-left" ||
                      quadrant.position === "bottom-right"
                        ? 20
                        : -20
                    }
                    dominantBaseline="middle"
                    textAnchor={quadrant.titleAnchor}
                    style={{
                      fill:
                        isQuadrantActive || isQuadrantHovered
                          ? quadrant.colorQuadrantActiveText
                          : "var(--grey-blue)",
                    }}
                    onMouseEnter={() =>
                      setHoveredQuadrant({ quadrant: quadrant.position })
                    }
                    onMouseLeave={() => setHoveredQuadrant(null)}
                  >
                    {quadrant.title}
                  </text>
                </g>
              );
            })}
          </g>

          <g className="verticals" opacity={mode === "data-filled" ? 1 : 0}>
            {verticalsData.map((d, i) => {
              const x = xScale(d.consumerStrength || 0);
              const y = yScale(d.aiDisruption || 0);

              const verticalInfo = verticalsMap[d.vertical] as any;
              if (!verticalInfo) {
                return (
                  <g key={i} transform={`translate(${x},${y})`}>
                    <circle key={i} r={6} fill="var(--bright-green)" />
                    <text
                      className="chart-text"
                      fill="#9494AA"
                      y={32}
                      textAnchor="middle"
                    >
                      {d.vertical}
                    </text>
                  </g>
                );
              }

              const iconName = verticalInfo.icon;
              const svgContent = svgCache[iconName];

              return (
                <g
                  key={i}
                  transform={`translate(${x},${y})`}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectVertical(d.vertical);
                  }}
                  style={{ cursor: "pointer" }}
                  className={`verticalGroup ${
                    selectedVertical === d.vertical ? "selected" : ""
                  } ${
                    hoveredQuadrant?.quadrant === verticalInfo.quadrant
                      ? "quadrantHovered"
                      : ""
                  }`}
                >
                  {svgContent ? (
                    <g
                      transform="translate(-16, -16)"
                      dangerouslySetInnerHTML={{
                        __html: svgContent
                          .replace(/<svg[^>]*>/, "<g>")
                          .replace(/<\/svg>/, "</g>")
                          .replace(/width="[^"]*"/, 'width="32"')
                          .replace(/height="[^"]*"/, 'height="32"'),
                      }}
                    />
                  ) : (
                    <circle r={16} fill="#9494AA" />
                  )}

                  {verticalInfo.labelFormatted ? (
                    <text
                      className="text-[14px]"
                      fill="#9494AA"
                      y={
                        verticalInfo.labelFormatted.position === "top"
                          ? verticalInfo.labelFormatted.secondLine
                            ? -40
                            : -24
                          : 32
                      }
                      textAnchor="middle"
                    >
                      <tspan x="0" dy="0">
                        {verticalInfo.labelFormatted.firstLine}
                      </tspan>
                      <tspan x="0" dy="1.2em">
                        {verticalInfo.labelFormatted.secondLine}
                      </tspan>
                    </text>
                  ) : (
                    <text
                      className="text-[14px]"
                      fill="#9494AA"
                      y={32}
                      textAnchor="middle"
                    >
                      {(verticalInfo as any).label}
                    </text>
                  )}
                </g>
              );
            })}
          </g>

          <text className="fill-red-900 font-light" y="20">
            {mode}
          </text>
        </g>
      </svg>
      <div
        className="absolute bg-grey-text text-black-blue text-[14px] transition-inset "
        style={{
          top:
            hoveredQuadrant?.quadrant === "top-left" ||
            hoveredQuadrant?.quadrant === "top-right"
              ? innerHeight / 2
              : innerHeight / 2 + 90,
          left:
            hoveredQuadrant?.quadrant === "top-left" ||
            hoveredQuadrant?.quadrant === "bottom-left"
              ? 80
              : "unset",

          right:
            hoveredQuadrant?.quadrant === "top-right" ||
            hoveredQuadrant?.quadrant === "bottom-right"
              ? 100
              : "unset",

          opacity: hoveredQuadrant ? 1 : 0,
          padding: 10,
          maxWidth: 320,
        }}
      >
        {
          quadrantData[
            hoveredQuadrant
              ? quadrantData.findIndex(
                  (q) => q.position === hoveredQuadrant.quadrant
                )
              : 0
          ]?.tooltipText
        }
      </div>
    </div>
  );
}
