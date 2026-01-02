"use client";

import { useEffect, useRef } from "react";
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

            <button
              className="bg-grey-text flex items-center justify-center gap-2 hover:bg-grey-text/80 transition text-black-blue"
              onClick={() => {
                window.open(" https://www.moloco.com/contact-us", "_blank");
              }}
            >
              <span>{useCopy("cta_text_button_3")}</span>
              <img
                src={`${basePath}/icons/paperplane.svg`}
                alt="paperplane"
                width={19}
                height={19}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
