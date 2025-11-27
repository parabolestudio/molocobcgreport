"use client";

import type { ChartMode } from "@/types/chart";

export default function Chart({ mode }: { mode: ChartMode }) {
  console.log("Rendering Chart with mode:", mode);

  const length = 860;
  const margin = { top: 20, right: 60, bottom: 60, left: 20 };
  const innerWidth = length - margin.left - margin.right;
  const innerHeight = length - margin.top - margin.bottom;

  const quadrantData = [
    {
      number: 1,
      title: "Battle for the interface",
      titleAnchor: "end" as const,
      colorQuadrant: "#308267",
      colorQuadrantActiveText: "var(--grey-text)",
    },
    {
      number: 2,
      title: "Loyalty challenged",
      titleAnchor: "end" as const,
      colorQuadrant: "#60E2B7",
      colorQuadrantActiveText: "var(--black-blue)",
    },
    {
      number: 3,
      title: "Secured anchors",
      titleAnchor: "start" as const,
      colorQuadrant: "#A0EED4",
      colorQuadrantActiveText: "var(--black-blue)",
    },
    {
      number: 4,
      title: "Embedded Ecosystems",
      titleAnchor: "start" as const,
      colorQuadrant: "#3D5F53",
      colorQuadrantActiveText: "var(--grey-text)",
    },
  ];

  return (
    <div className="w-full h-full">
      <svg viewBox={`0 0 ${length} ${length}`}>
        <g transform={`translate(${margin.left},${margin.top})`}>
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
          </g>
          {quadrantData.map((quadrant, index) => {
            const radius = innerWidth / 2;
            const centerX = innerWidth / 2;
            const centerY = innerHeight / 2;

            // Calculate start and end angles for each quadrant
            // Quadrant 1: bottom-left (90° to 180°)
            // Quadrant 2: top-left (180° to 270°)
            // Quadrant 3: top-right (270° to 360°/0°)
            // Quadrant 4: bottom-right (0° to 90°)
            const angleMap = {
              1: { start: Math.PI / 2, end: Math.PI },
              2: { start: Math.PI, end: (3 * Math.PI) / 2 },
              3: { start: (3 * Math.PI) / 2, end: 2 * Math.PI },
              4: { start: 0, end: Math.PI / 2 },
            };

            const angles = angleMap[quadrant.number as keyof typeof angleMap];
            const startX = centerX + radius * Math.cos(angles.start);
            const startY = centerY + radius * Math.sin(angles.start);
            const endX = centerX + radius * Math.cos(angles.end);
            const endY = centerY + radius * Math.sin(angles.end);

            const slicePath = `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY} Z`;
            const isQuadrantActive =
              mode === `expl-quadrant-${quadrant.number}`;

            return (
              <g key={index}>
                <path
                  d={slicePath}
                  fill={quadrant.colorQuadrant}
                  opacity={isQuadrantActive ? 1 : 0}
                  className="transition duration-300"
                />
                <text
                  className="chart-text-base font-medium transition duration-300"
                  x={innerWidth / 2}
                  dx={quadrant.number === 1 || quadrant.number === 2 ? -36 : 36}
                  y={innerHeight / 2}
                  dy={quadrant.number === 1 || quadrant.number === 4 ? 30 : -30}
                  dominantBaseline="middle"
                  textAnchor={quadrant.titleAnchor}
                  style={{
                    fill: isQuadrantActive
                      ? quadrant.colorQuadrantActiveText
                      : "var(--grey-blue)",
                  }}
                >
                  {quadrant.title}
                </text>
                <text
                  className="chart-text-base font-extrabold text-[24px] uppercase transition duration-300"
                  x={innerWidth / 2}
                  dx={quadrant.number === 1 || quadrant.number === 2 ? -18 : 18}
                  y={innerHeight / 2}
                  dy={quadrant.number === 1 || quadrant.number === 4 ? 30 : -30}
                  dominantBaseline="middle"
                  textAnchor="middle"
                  style={{
                    fill: isQuadrantActive
                      ? quadrant.colorQuadrantActiveText
                      : "var(--grey-blue)",
                  }}
                >
                  {quadrant.number}
                </text>
              </g>
            );
          })}

          <text className="fill-red-900 font-extrabold">{mode}</text>
        </g>
      </svg>
    </div>
  );
}
