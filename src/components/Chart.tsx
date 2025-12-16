"use client";

import { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import type { ChartMode } from "@/helpers/chart";
import { verticalsMap } from "@/helpers/chart";
import { basePath, isMobile } from "@/helpers/general";
import { useCopy } from "@/contexts/CopyContext";

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
  },
  {
    position: "top-left",
    title: "Undefended",
    titleAnchor: "end" as const,
    colorQuadrant: "#308267",
    colorQuadrantActiveText: "var(--grey-text)",
  },
  {
    position: "bottom-right",
    title: "Contested",
    titleAnchor: "start" as const,
    colorQuadrant: "#60E2B7",
    colorQuadrantActiveText: "var(--black-blue)",
  },
  {
    position: "top-right",
    title: "Secured",
    titleAnchor: "start" as const,
    colorQuadrant: "#A0EED4",
    colorQuadrantActiveText: "var(--black-blue)",
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
  const [mobile, setMobile] = useState(false);

  // Detect mobile after hydration to avoid SSR mismatch
  useEffect(() => {
    setMobile(isMobile());
  }, []);

  // Call all quadrant headline hooks at top level to avoid conditional hook calls
  const quadrantHeadlines = {
    "top-left": useCopy("qu_top_left_headline"),
    "top-right": useCopy("qu_top_right_headline"),
    "bottom-left": useCopy("qu_bottom_left_headline"),
    "bottom-right": useCopy("qu_bottom_right_headline"),
  };

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
  const [containerWidth, setContainerWidth] = useState(860);
  const [containerHeight, setContainerHeight] = useState(860);

  useEffect(() => {
    const visContainer = document.querySelector(
      `#chart-container`
    ) as HTMLElement;

    if (!visContainer) return;

    const updateDimensions = () => {
      const rect = visContainer.getBoundingClientRect();
      console.log("visContainer dimensions:", {
        clientWidth: visContainer.clientWidth,
        offsetWidth: visContainer.offsetWidth,
        boundingWidth: rect.width,
        boundingHeight: rect.height,
      });
      const w = rect.width || 860;
      const h = rect.height || 860;
      setContainerWidth(w);
      setContainerHeight(h);
    };

    // Initial measurement with a slight delay to ensure layout is complete
    const timeoutId = setTimeout(updateDimensions, 0);

    // Add resize observer to handle container size changes
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    resizeObserver.observe(visContainer);

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
    };
  }, []);

  const margin = {
    top: mobile ? 30 : 50,
    bottom: mobile ? 30 : 50,
    right: mobile ? 1 : 50,
    left: mobile ? 1 : 50,
  };

  let circleDiameter = 0;
  let chartHeight = 0;
  let chartWidth = 0;
  if (containerHeight > containerWidth) {
    circleDiameter = containerWidth - margin.left - margin.right;
    chartHeight = circleDiameter + margin.top + margin.bottom;
    chartWidth = containerWidth;
  } else {
    circleDiameter = containerHeight - margin.top - margin.bottom;
    chartWidth = circleDiameter + margin.left + margin.right;
    chartHeight = containerHeight;
  }

  const innerWidth = chartWidth - margin.left - margin.right;
  const innerHeight = chartHeight - margin.top - margin.bottom;

  console.log("Chart dimensions:", {
    containerWidth,
    containerHeight,
    chartWidth,
    chartHeight,
    innerWidth,
    innerHeight,
    circleDiameter,
  });

  const xScale = scaleLinear().domain([4.5, 10.5]).range([0, innerWidth]);
  const yScale = scaleLinear().domain([10, 1.5]).range([0, innerHeight]);

  return (
    <div
      id="chart-container"
      className="w-full h-full overflow-hidden relative"
    >
      <svg
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        style={{
          width: "100%",
          height: "100%",
          overflow: "visible",
          // backgroundColor: "pink",
        }}
      >
        {/* <rect
          x="0"
          y="0"
          width={chartWidth}
          height={margin.top}
          fill="orange"
          fillOpacity={0.3}
        />
        <rect
          x="0"
          y={margin.top + innerHeight}
          width={chartWidth}
          height={margin.bottom}
          fill="orange"
          fillOpacity={0.3}
        />
        <rect
          x="0"
          y="0"
          width={margin.left}
          height={chartHeight}
          fill="yellow"
          fillOpacity={0.3}
        />
        <rect
          x={margin.left + innerWidth}
          y="0"
          width={margin.right}
          height={chartHeight}
          fill="yellow"
          fillOpacity={0.3}
        /> */}

        <g transform={`translate(${margin.left},${margin.top})`}>
          <g className="structure">
            <circle
              cx={innerWidth / 2}
              cy={innerHeight / 2}
              r={circleDiameter / 2}
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
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1={0}
              y1={innerHeight / 2}
              x2={innerWidth}
              y2={innerHeight / 2}
              stroke="var(--grey-blue)"
              strokeWidth={1.5}
              strokeDasharray="5,5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={
                mode === "expl-x-axis"
                  ? "var(--bright-green)"
                  : mode.startsWith("expl-quadrant-")
                  ? "var(--grey-text)"
                  : "var(--grey-blue)"
              }
            />
            <text
              className="chart-text-bold transition"
              x={innerWidth / 2}
              y={innerHeight + margin.bottom / 2}
              dominantBaseline="middle"
              textAnchor="middle"
              style={{
                fontSize:
                  mode === "expl-x-axis"
                    ? mobile
                      ? "14px"
                      : "18px"
                    : mobile
                    ? "12px"
                    : "14px",
                fill:
                  mode === "expl-x-axis"
                    ? "var(--bright-green)"
                    : mode.startsWith("expl-quadrant-")
                    ? "var(--grey-text)"
                    : "var(--grey-blue)",
              }}
            >
              Strength of customer relationship
            </text>
            <text
              className="chart-text uppercase transition"
              y={innerHeight + margin.bottom / 2}
              dominantBaseline="middle"
              style={{
                fill:
                  mode === "expl-x-axis"
                    ? "var(--bright-green)"
                    : mode.startsWith("expl-quadrant-")
                    ? "var(--grey-text)"
                    : "var(--grey-blue)",
                fontSize: mobile ? "12px" : "14px",
              }}
            >
              low
            </text>
            <text
              className="chart-text uppercase transition"
              x={mobile ? innerWidth - 5 : innerWidth}
              y={innerHeight + margin.bottom / 2}
              dominantBaseline="middle"
              textAnchor="end"
              style={{
                fill:
                  mode === "expl-x-axis"
                    ? "var(--bright-green)"
                    : mode.startsWith("expl-quadrant-")
                    ? "var(--grey-text)"
                    : "var(--grey-blue)",
                fontSize: mobile ? "12px" : "14px",
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
                  : mode.startsWith("expl-quadrant-")
                  ? "var(--grey-text)"
                  : "var(--grey-blue)"
              }
              strokeWidth={1.5}
              strokeDasharray="10,10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              className="chart-text-bold transition"
              x={innerWidth}
              y={mobile ? -margin.top / 2 : innerHeight / 2 + margin.right / 2}
              dominantBaseline="middle"
              textAnchor={mobile ? "end" : "middle"}
              style={{
                transform: mobile ? "" : `rotate(-90deg)`,
                transformOrigin: `${innerWidth}px ${innerHeight / 2}px`,
                fontSize:
                  mode === "expl-y-axis"
                    ? mobile
                      ? "14px"
                      : "18px"
                    : mobile
                    ? "12px"
                    : "14px",
                fill:
                  mode === "expl-y-axis"
                    ? "var(--bright-green)"
                    : mode.startsWith("expl-quadrant-")
                    ? "var(--grey-text)"
                    : "var(--grey-blue)",
              }}
            >
              Risk of AI disruption
            </text>
            <text
              className="chart-text uppercase transition"
              x={mobile ? innerWidth - 5 : innerWidth + 10}
              y={6}
              textAnchor={mobile ? "end" : "start"}
              dominantBaseline="middle"
              style={{
                fill:
                  mode === "expl-y-axis"
                    ? "var(--bright-green)"
                    : mode.startsWith("expl-quadrant-")
                    ? "var(--grey-text)"
                    : "var(--grey-blue)",
                fontSize: mobile ? "12px" : "14px",
              }}
            >
              low
            </text>
            <text
              className="chart-text uppercase transition"
              x={mobile ? innerWidth - 5 : innerWidth + 10}
              y={mobile ? innerHeight - 12 : innerHeight - 6}
              textAnchor={mobile ? "end" : "start"}
              dominantBaseline="middle"
              style={{
                fill:
                  mode === "expl-y-axis"
                    ? "var(--bright-green)"
                    : mode.startsWith("expl-quadrant-")
                    ? "var(--grey-text)"
                    : "var(--grey-blue)",
                fontSize: mobile ? "12px" : "14px",
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

              const offsetX = mobile ? 8 : 12;
              const offsetY = mobile ? 14 : 20;

              return (
                <g key={index}>
                  <path
                    d={slicePath}
                    fill={quadrant.colorQuadrant}
                    opacity={isQuadrantActive || isQuadrantHovered ? 1 : 0}
                    className="transition"
                  />
                  <text
                    className={`chart-text-base  transition cursor-pointer ${
                      mobile
                        ? isQuadrantActive
                          ? "text-[14px] font-bold"
                          : "text-[12px] font-medium"
                        : isQuadrantActive
                        ? "text-[18px] font-bold"
                        : "text-[14px] font-medium"
                    }`}
                    x={innerWidth / 2}
                    dx={
                      quadrant.position === "bottom-left" ||
                      quadrant.position === "top-left"
                        ? -offsetX
                        : offsetX
                    }
                    y={innerHeight / 2}
                    dy={
                      quadrant.position === "bottom-left" ||
                      quadrant.position === "bottom-right"
                        ? offsetY
                        : -offsetY
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
                  onMouseEnter={(e) => {
                    // Move this group to the end to render on top (on hover)
                    const parent = e.currentTarget.parentNode;
                    if (parent) {
                      parent.appendChild(e.currentTarget);
                    }
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
                  {!mobile && svgContent && (
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
                  )}
                  {mobile && svgContent && (
                    <g
                      transform="translate(-16, -16) scale(0.6)"
                      dangerouslySetInnerHTML={{
                        __html: svgContent
                          .replace(/<svg[^>]*>/, "<g>")
                          .replace(/<\/svg>/, "</g>")
                          .replace(/width="[^"]*"/, 'width="32"')
                          .replace(/height="[^"]*"/, 'height="32"'),
                      }}
                    />
                  )}

                  {!mobile && verticalInfo.labelFormatted && (
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
                  )}
                  {!mobile && !verticalInfo.labelFormatted && (
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
        </g>
      </svg>
      {/* Quadrant text on explanation modes (this placement depends on the horizontal and vertical margins being identical) */}
      {!mobile &&
        quadrantData
          .filter((q) => q.position === mode.replace("expl-quadrant-", ""))
          .map((quadrant, index) => {
            const position = mode.replace("expl-quadrant-", "");
            return (
              <div
                key={index}
                className="absolute text-white text-[18px] transition-inset"
                style={{
                  color: quadrant.colorQuadrantActiveText,
                  top:
                    position === "bottom-right" || position === "bottom-left"
                      ? "calc(50%)"
                      : "unset",
                  bottom:
                    position === "top-right" || position === "top-left"
                      ? "calc(50%)"
                      : "unset",
                  right:
                    position === "top-left" || position === "bottom-left"
                      ? "calc(50%)"
                      : "unset",
                  left:
                    position === "top-right" || position === "bottom-right"
                      ? "calc(50%)"
                      : "unset",
                  textAlign:
                    position === "top-left" || position === "bottom-left"
                      ? "right"
                      : "left",
                  paddingTop: 40,
                  paddingBottom: 40,
                  paddingLeft: 15,
                  paddingRight: 15,
                  opacity: mode.startsWith("expl-quadrant") ? 1 : 0,
                  maxWidth: innerWidth / 2 - 20,
                }}
              >
                {
                  quadrantHeadlines[
                    quadrant.position as keyof typeof quadrantHeadlines
                  ]
                }
              </div>
            );
          })}
      {/* Quadrant tooltip */}
      <div
        className="absolute bg-grey-text text-black-blue text-[14px] transition-inset rounded-[3px]"
        style={{
          bottom:
            hoveredQuadrant?.quadrant === "bottom-right" ||
            hoveredQuadrant?.quadrant === "bottom-left"
              ? "calc(50%)"
              : "unset",
          top:
            hoveredQuadrant?.quadrant === "top-right" ||
            hoveredQuadrant?.quadrant === "top-left"
              ? "calc(50%)"
              : "unset",
          right:
            hoveredQuadrant?.quadrant === "top-left" ||
            hoveredQuadrant?.quadrant === "bottom-left"
              ? "calc(50%)"
              : "unset",
          left:
            hoveredQuadrant?.quadrant === "top-right" ||
            hoveredQuadrant?.quadrant === "bottom-right"
              ? "calc(50%)"
              : "unset",
          textAlign:
            hoveredQuadrant?.quadrant === "top-left" ||
            hoveredQuadrant?.quadrant === "bottom-left"
              ? "right"
              : "left",
          marginTop: -10,
          marginBottom: -10,
          marginLeft: 10,
          marginRight: 10,
          padding: 10,
          opacity: hoveredQuadrant && mode === "data-filled" ? 1 : 0,
          width: "fit-content",
          maxWidth: innerWidth / 2 - 40,
          pointerEvents: "none",
        }}
      >
        {
          quadrantHeadlines[
            hoveredQuadrant?.quadrant as keyof typeof quadrantHeadlines
          ]
        }
      </div>
    </div>
  );
}
