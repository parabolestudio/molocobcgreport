"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { basePath } from "@/helpers/general";
import { useCopy } from "@/contexts/CopyContext";
import { fadeIn } from "@/helpers/scroll";

export default function CTASection({ isActive }: { isActive: boolean }) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Set initial visibility
  useEffect(() => {
    if (contentRef.current) {
      gsap.set(contentRef.current, { opacity: 0, visibility: "hidden" });
    }
  }, []);

  // Fade in when section becomes active
  useEffect(() => {
    if (!contentRef.current) return;

    if (isActive) {
      fadeIn(contentRef.current);
    }
  }, [isActive]);

  const tooltipText = useCopy("context_button_method_tooltip");

  return (
    <div
      className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
        isActive
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      data-section="cta"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Outer wrapper for positioning (Tailwind), inner wrapper for animations (GSAP) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1728px] px-8">
          <div
            ref={contentRef}
            className="w-full h-full flex flex-col items-center justify-center gap-15"
            style={{ opacity: 0, visibility: "hidden" }}
          >
            <img
              src={`${basePath}/logos/moloco.svg`}
              alt="Moloco logo"
              width={150}
              height={40}
              className="max-w-[117px]"
            />
            <h3 className="font-extralight text-[40px] md:text-[96px] font-museo-moderno leading-[115%] text-center max-w-[600px] text-balance">
              {useCopy("cta_text")}
            </h3>

            <div>
              <CTAButtons tooltipText={tooltipText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CTAButtons({ tooltipText }: { tooltipText: React.ReactNode }) {
  // Call all hooks at the top level
  const contactButtonText = useCopy("cta_text_button_3");
  const requestDemoButtonText = useCopy("cta_text_button_1");
  const methodButtonText = useCopy("cta_text_button_2");
  const downloadButtonText = useCopy("cta_text_button_4");
  const exploreText = useCopy("closure_explore");

  const [showExploreButtons, setShowExploreButtons] = useState<boolean>(false);
  const [showMethodTooltip, setShowMethodTooltip] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center gap-2 md:gap-4">
      <button
        className="bg-bright-green flex items-center justify-center gap-2 hover:bg-[#A8F7DD] transition text-black-blue"
        onClick={() => {
          window.open(" https://www.moloco.com/contact-us", "_blank");
        }}
      >
        <span>{contactButtonText}</span>
        <img
          src={`${basePath}/icons/paperplane.svg`}
          alt="paperplane"
          width={19}
          height={19}
        />
      </button>

      <div className="border-b border-bright-green h-1 w-full border-dashed"></div>

      <div className="flex gap-4 w-full ">
        <div className="relative">
          <button
            className={`flex-1 ${
              showExploreButtons ? "bg-[#D9D9D9]" : "bg-[#F2F2F2]"
            } flex items-center justify-between gap-2 hover:bg-[#D9D9D9] transition text-black-blue relative z-20`}
            onClick={() => {
              setShowExploreButtons(!showExploreButtons);
              setShowMethodTooltip(false);
            }}
          >
            <span>{exploreText}</span>
            <img
              src={`${basePath}/icons/compass.svg`}
              alt="compass icon"
              width={22}
              height={22}
            />
          </button>
          {showExploreButtons && (
            <div className="absolute top-full left-0 right-0">
              <div className="flex flex-col gap-0 rounded-[20px] -mt-5 relative bg-[#F2F2F2]">
                <div className="h-5 bg-[#F2F2F2] w-full"></div>
                <button
                  className="collapsible bg-[#F2F2F2]  
                   font-semibold leading-[108%] px-2 md:px-5 py-2.5 md:py-[17.5px]
                  text-[12px] md:text-[14px] flex items-center justify-start gap-2 hover:bg-[#C4FFEB] transition text-black-blue rounded-none border-none"
                  style={{
                    borderRadius: "0px",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    window.open("https://www.moloco.com/contact-us", "_blank");
                  }}
                >
                  <img
                    src={`${basePath}/icons/document.svg`}
                    alt="document icon"
                    className="w-3 h-3 md:w-5 md:h-5"
                  />
                  <span>{requestDemoButtonText}</span>
                </button>
                <div className="border-b border-black-blue h-px w-full border-dashed"></div>
                <button
                  className={`collapsible ${
                    showMethodTooltip ? "bg-[#C4FFEB]" : "bg-[#F2F2F2]"
                  } 
                  font-semibold leading-[108%] px-2 md:px-5 py-2.5 md:py-[17.5px]
                  text-[12px] md:text-[14px] flex items-center justify-start gap-2 hover:bg-[#C4FFEB] transition text-black-blue rounded-none border-none`}
                  style={{
                    borderRadius: "0px 0px 20px 20px",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    setShowMethodTooltip(!showMethodTooltip);
                  }}
                >
                  <img
                    src={`${basePath}/icons/eye.svg`}
                    alt="eye icon"
                    className="w-[15px] h-2 md:w-[23px] md:h-3"
                  />
                  <span>{methodButtonText}</span>
                </button>

                {showMethodTooltip && (
                  <div
                    className="copy-text fixed md:absolute -bottom-8 md:bottom-0 left-0 md:left-auto right-0 md:right-full mr-1 text-black-blue bg-grey-text 
                  text-[18px] md:w-[380px] p-4 rounded-[20px] pointer-events-none normal-case text-left leading-[100%] z-50"
                  >
                    {tooltipText}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <button
          className="flex-1 bg-[#F2F2F2] flex items-center justify-between gap-2 hover:bg-[#D9D9D9] transition text-black-blue"
          onClick={() => {
            // TODO: replace with real PDF download link
            window.open(" https://www.moloco.com/contact-us", "_blank");
          }}
        >
          <span>{downloadButtonText}</span>
          <img
            src={`${basePath}/icons/file.svg`}
            alt="file icon"
            width={16}
            height={19}
          />
        </button>
      </div>
    </div>
  );
}
