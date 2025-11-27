"use client";

export default function Chart() {
  const length = 860;

  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  const innerWidth = length - margin.left - margin.right;
  const innerHeight = length - margin.top - margin.bottom;

  return (
    <div>
      <svg viewBox={`0 0 ${length} ${length}`}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <circle
            cx={innerWidth / 2}
            cy={innerHeight / 2}
            r={length / 2 - margin.top}
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
        </g>
      </svg>
    </div>
  );
}
