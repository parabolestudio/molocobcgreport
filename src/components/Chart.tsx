"use client";

import { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import type { ChartMode } from "@/helpers/chart";
import { verticalsMap } from "@/helpers/chart";
import { basePath } from "@/helpers/general";
import { useCopy } from "@/contexts/CopyContext";
import { parseCopy } from "@/helpers/parseCopy";
import { copyData } from "@/data/copyData";

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
  mobile = false,
  verticalsData,
  svgCache,
}: {
  mode: ChartMode;
  selectedVertical: string | null;
  selectVertical: (vertical: string) => void;
  mobile?: boolean;
  verticalsData: {
    vertical: string;
    consumerStrength: number;
    aiDisruption: number;
  }[];
  svgCache: { [key: string]: string };
}) {
  const [hoveredQuadrant, setHoveredQuadrant] = useState<{
    quadrant: string;
  } | null>(null);
  const [showSelectionPrompt, setShowSelectionPrompt] = useState(true);

  // Call all quadrant headline hooks at top level to avoid conditional hook calls
  const quadrantHeadlines = {
    "top-left": useCopy("qu_top_left_headline"),
    "top-right": useCopy("qu_top_right_headline"),
    "bottom-left": useCopy("qu_bottom_left_headline"),
    "bottom-right": useCopy("qu_bottom_right_headline"),
  };

  const [containerWidth, setContainerWidth] = useState(860);
  const [containerHeight, setContainerHeight] = useState(860);

  useEffect(() => {
    const visContainer = document.querySelector(
      `#chart-container`
    ) as HTMLElement;

    if (!visContainer) return;

    const updateDimensions = () => {
      const rect = visContainer.getBoundingClientRect();
      setContainerWidth(rect.width || 860);
      setContainerHeight(rect.height || 860);
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

  // hide selection prompt if vertical is selected
  useEffect(() => {
    if (selectedVertical) {
      setShowSelectionPrompt(false);
    }
  }, [selectedVertical]);

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

  const xScale = scaleLinear().domain([4.5, 10.5]).range([0, innerWidth]);
  const yScale = scaleLinear().domain([10, 1.5]).range([0, innerHeight]);

  return (
    <div
      id="chart-container"
      className="w-full h-full overflow-hidden relative mb-2 md:mb-0"
      onClick={() => {
        if (showSelectionPrompt) {
          setShowSelectionPrompt(false);
        }
        if (mode === "data-filled" && hoveredQuadrant) {
          setHoveredQuadrant(null);
        }
      }}
    >
      <svg
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        style={{
          width: "100%",
          height: "100%",
          overflow: "visible",
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
              {parseCopy(copyData.qu_axis_x_title, true)}
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
              {parseCopy(copyData.qu_axis_low, true)}
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
              {parseCopy(copyData.qu_axis_high, true)}
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
              {parseCopy(copyData.qu_axis_y_title, true)}
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
              {parseCopy(copyData.qu_axis_low, true)}
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
              {parseCopy(copyData.qu_axis_high, true)}
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

              let isQuadrantActiveFromVertical = false;
              if (selectedVertical) {
                isQuadrantActiveFromVertical =
                  (verticalsMap[selectedVertical] as any)?.quadrant ===
                    quadrant.position && !mobile;
              }

              const isQuadrantHovered =
                hoveredQuadrant?.quadrant === quadrant.position;

              const offsetX = mobile
                ? mode === "data-filled"
                  ? 26
                  : 8
                : mode === "data-filled"
                ? 32
                : 12;
              const offsetY = mobile
                ? mode === "data-filled"
                  ? 13
                  : 14
                : mode === "data-filled"
                ? 18
                : 20;
              // mobile only
              const infoIconSize = mobile ? 12 : 18;
              const offsetXInfoIcon = mobile ? 14 : 16;
              const offsetYInfoIcon = mobile ? 14 : 18;

              return (
                <g key={index}>
                  <path
                    d={slicePath}
                    fill={quadrant.colorQuadrant}
                    opacity={
                      isQuadrantHovered || isQuadrantActive
                        ? 1
                        : isQuadrantActiveFromVertical
                        ? 0.75
                        : 0
                    }
                    className="transition"
                  />
                  <text
                    className={`chart-text-base  transition ${
                      mode === "data-filled" ? "cursor-pointer" : ""
                    } ${
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
                        isQuadrantActive ||
                        isQuadrantHovered ||
                        isQuadrantActiveFromVertical
                          ? quadrant.colorQuadrantActiveText
                          : "var(--grey-blue)",
                    }}
                    onMouseEnter={() => {
                      if (mode === "data-filled") {
                        setHoveredQuadrant({ quadrant: quadrant.position });
                      }
                    }}
                    onMouseLeave={() => setHoveredQuadrant(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (mode === "data-filled") {
                        setHoveredQuadrant({ quadrant: quadrant.position });
                      }
                    }}
                  >
                    {quadrant.title}
                  </text>
                  {mode === "data-filled" && (
                    <image
                      className={`transition ${
                        mode === "data-filled" ? "cursor-pointer" : ""
                      }`}
                      href={`${basePath}/icons/info_tiny_filled${
                        isQuadrantHovered || isQuadrantActiveFromVertical
                          ? "_blue"
                          : "_grey"
                      }.svg`}
                      x={
                        innerWidth / 2 +
                        (quadrant.position === "bottom-left" ||
                        quadrant.position === "top-left"
                          ? -offsetXInfoIcon - infoIconSize / 2
                          : offsetXInfoIcon - infoIconSize / 2)
                      }
                      y={
                        innerHeight / 2 +
                        (quadrant.position === "bottom-left" ||
                        quadrant.position === "bottom-right"
                          ? offsetYInfoIcon - infoIconSize / 2
                          : -offsetYInfoIcon - infoIconSize / 2)
                      }
                      width={infoIconSize}
                      height={infoIconSize}
                      onMouseEnter={() => {
                        if (mode === "data-filled") {
                          setHoveredQuadrant({ quadrant: quadrant.position });
                        }
                      }}
                      onMouseLeave={() => setHoveredQuadrant(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (mode === "data-filled") {
                          setHoveredQuadrant({ quadrant: quadrant.position });
                        }
                      }}
                    />
                  )}
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

              let isQuadrantHovered = false;
              if (hoveredQuadrant) {
                isQuadrantHovered =
                  hoveredQuadrant.quadrant === verticalInfo.quadrant;
              }
              let isQuadrantActiveFromVertical = false;
              if (selectedVertical) {
                isQuadrantActiveFromVertical =
                  (verticalsMap[selectedVertical] as any)?.quadrant ===
                  verticalInfo.quadrant;
              }

              return (
                <g
                  key={i}
                  transform={`translate(${x},${y})`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSelectionPrompt(false);
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
                  className={`verticalGroup  ${
                    isQuadrantHovered || isQuadrantActiveFromVertical
                      ? "quadrantHovered"
                      : ""
                  } ${selectedVertical === d.vertical ? "selected" : ""}`}
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
          marginTop: mobile ? 0 : -10,
          marginBottom: mobile ? 0 : -10,
          marginLeft: mobile ? 0 : 10,
          marginRight: mobile ? 0 : 10,
          padding: 10,
          opacity: hoveredQuadrant && mode === "data-filled" ? 1 : 0,
          width: "fit-content",
          maxWidth: mobile ? innerWidth : innerWidth / 2 - 40,
          pointerEvents: "none",
        }}
      >
        {
          quadrantHeadlines[
            hoveredQuadrant?.quadrant as keyof typeof quadrantHeadlines
          ]
        }
      </div>
      {/* Prompt to select a vertical on initial load */}
      {showSelectionPrompt && mode === "data-filled" && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-bright-green text-black-blue rounded-[10px]">
          <div className="w-full h-full relative">
            <div className="w-full h-full p-6 md:p-12 flex items-center gap-3 md:gap-8">
              <img
                src={`${basePath}/icons/cursor.svg`}
                alt="Cursor Icon"
                width={46}
                height={51}
                className="h-6 md:h-[51px] w-auto"
              />
              <span className="font-bold text-[14px] md:text-[18px] w-[200px] md:max-w-[180px]">
                Select a vertical to explore details.
              </span>
            </div>

            <img
              src={`${basePath}/icons/cross_blue.svg`}
              alt="Cross blue icon to close"
              width={25}
              height={28}
              className="absolute right-2.5 top-2.5 cursor-pointer"
              onClick={() => {
                setShowSelectionPrompt(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
