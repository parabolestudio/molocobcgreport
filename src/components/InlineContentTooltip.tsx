"use client";

import { ReactNode, useState, useRef, useEffect } from "react";

export function Tooltip({
  content,
  children,
}: {
  content: string;
  children?: ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<"top" | "bottom">("top");
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const spaceAbove = triggerRect.top;
      const spaceBelow = window.innerHeight - triggerRect.bottom;

      // Position below if not enough space above
      if (spaceAbove < tooltipRect.height + 10 && spaceBelow > spaceAbove) {
        setPosition("bottom");
      } else {
        setPosition("top");
      }
    }
  }, [isVisible]);

  return (
    <span className="relative inline-block ml-1">
      <span
        ref={triggerRef}
        className="inline-flex items-center cursor-pointer"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        tabIndex={0}
        role="tooltip"
        aria-label={content}
      >
        {children || (
          <svg
            fill="none"
            viewBox="0 0 17 19"
            className="w-3 h-3.5 md:w-[17px] md:h-[19px]"
          >
            <g>
              <rect
                width="15.523"
                height="17.377"
                x=".5"
                y=".5"
                fill="#F2F2F2"
                stroke="#F2F2F2"
                rx="2.5"
              />
              <g>
                <path
                  stroke="#04033A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M7.377 8.203h1.18v4.922m0 0h1.476m-1.476 0H7.082m.885-7.22V5.25h.59v.656h-.59Z"
                />
              </g>
            </g>
          </svg>
        )}
      </span>

      {isVisible && (
        <span
          ref={tooltipRef}
          className={`
            absolute z-50 px-4 py-4 text-[14px] leading-[115%]
            bg-grey-text text-black-blue rounded-lg shadow-lg
            min-w-[200px] max-w-[400px]
            whitespace-normal
            pointer-events-none
            transition-opacity duration-200
            ${
              position === "top"
                ? "bottom-full left-1/2 -translate-x-1/2 mb-1"
                : "top-full left-1/2 -translate-x-1/2 mt-1"
            }
            before:content-['']
            before:absolute
            before:border-8
            before:border-transparent
            ${
              position === "top"
                ? "before:border-t-grey-text before:top-full before:left-1/2 before:-translate-x-1/2"
                : "before:border-b-grey-text before:bottom-full before:left-1/2 before:-translate-x-1/2"
            }
          `}
        >
          {content}
        </span>
      )}
    </span>
  );
}
