"use client";

import { useState } from "react";
import { basePath } from "@/helpers/general";

export default function ChartPanelContentSelectedVertical({
  selectedVertical,
}: {
  selectedVertical: string | null;
}) {
  const [shownSide, setShownSide] = useState<"summary" | "details">("summary");

  if (!selectedVertical) {
    return (
      <div>
        <h3 className="text-grey-text font-museo-moderno mb-8 text-[40px]">
          <span>
            The <span className="font-bold">AI Disruption Index</span>
          </span>
        </h3>
        <div className="flex gap-3">
          <img
            src={`${basePath}/icons/mouse.svg`}
            alt="Mouse icon"
            width={24}
            height={24}
          />
          <p className="italic">Select a vertical to explore details.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-8">
        <h3 className="text-grey-text font-museo-moderno mb-0 text-[40px]">
          {selectedVertical}
        </h3>
        {shownSide === "summary" ? (
          <p>summary vertical info</p>
        ) : (
          <p>detailed vertical info</p>
        )}
      </div>
      <div>
        <button
          className={`${
            shownSide === "summary" ? "bg-bright-green" : "bg-medium-blue"
          } transition flex items-center justify-center gap-2`}
          onClick={() =>
            setShownSide(shownSide === "summary" ? "details" : "summary")
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
