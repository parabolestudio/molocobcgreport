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
      color: "#308267",
    },
    {
      number: 2,
      title: "Loyalty challenged",
      titleAnchor: "end" as const,
      color: "#60E2B7",
    },
    {
      number: 3,
      title: "Secured anchors",
      titleAnchor: "start" as const,
      color: "#A0EED4",
    },
    {
      number: 4,
      title: "Embedded Ecosystems",
      titleAnchor: "start" as const,
      color: "#3D5F53",
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
              x1={0}
              y1={innerHeight}
              x2={innerWidth}
              y2={innerHeight}
              stroke="var(--grey-blue)"
              strokeWidth={1.5}
              strokeDasharray="10,10"
            />
            <text
              className="chart-text-bold uppercase"
              y={innerHeight + margin.bottom / 2}
              dominantBaseline="middle"
            >
              low
            </text>
            <text
              className="chart-text-bold uppercase"
              x={innerWidth}
              y={innerHeight + margin.bottom / 2}
              dominantBaseline="middle"
              textAnchor="end"
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
              stroke="var(--grey-blue)"
              strokeWidth={1.5}
              strokeDasharray="10,10"
            />
          </g>
          {quadrantData.map((quadrant, index) => {
            return (
              <g key={index}>
                <text
                  className="chart-text-base font-medium"
                  x={innerWidth / 2}
                  dx={quadrant.number === 1 || quadrant.number === 2 ? -36 : 36}
                  y={innerHeight / 2}
                  dy={quadrant.number === 1 || quadrant.number === 4 ? 30 : -30}
                  dominantBaseline="middle"
                  textAnchor={quadrant.titleAnchor}
                >
                  {quadrant.title}
                </text>
                <text
                  className="chart-text-base font-extrabold text-[24px] uppercase "
                  x={innerWidth / 2}
                  dx={quadrant.number === 1 || quadrant.number === 2 ? -18 : 18}
                  y={innerHeight / 2}
                  dy={quadrant.number === 1 || quadrant.number === 4 ? 30 : -30}
                  dominantBaseline="middle"
                  textAnchor="middle"
                >
                  {quadrant.number}
                </text>
              </g>
            );
          })}

          <text
            x={innerWidth / 2}
            y={innerHeight / 2 + 80}
            className="fill-red-900 font-extrabold"
          >
            {mode}
          </text>
        </g>
      </svg>
    </div>
  );
}
