import { useState } from "react";
import { basePath } from "@/helpers/general";
import { useCopy } from "@/contexts/CopyContext";

export default function CTASection() {
  const [showMethodTooltip, setShowMethodTooltip] = useState<boolean>(false);
  const tooltipText = useCopy("context_button_method_tooltip");

  return (
    <div className="relative w-full h-screen" data-section="cta">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1728px] px-8">
          <div className="w-full h-full  flex flex-col items-center justify-center gap-8">
            <h3 className="text-[40px] font-museo-moderno leading-[100%] text-center max-w-[350px]">
              {useCopy("cta_text")}
            </h3>
            <div className="flex gap-5">
              <button
                className="bg-bright-green flex items-center justify-center gap-2 hover:bg-bright-green/80 transition text-black-blue"
                onClick={() => {
                  // link to external URL, TODO: replace with actual URL
                  window.open(" https://www.moloco.com/", "_blank");
                }}
              >
                <span>{useCopy("cta_text_button_1")}</span>
                <img
                  src={`${basePath}/icons/document.svg`}
                  alt="document"
                  width={19}
                  height={19}
                />
              </button>
              <button
                className="bg-grey-text flex items-center justify-center gap-2 hover:bg-grey-text/80 transition text-black-blue relative"
                onMouseEnter={() => setShowMethodTooltip(true)}
                onMouseLeave={() => setShowMethodTooltip(false)}
              >
                <span>{useCopy("cta_text_button_2")}</span>
                <img
                  src={`${basePath}/icons/eye.svg`}
                  alt="eye"
                  width={19}
                  height={19}
                />
                <div>
                  {showMethodTooltip && (
                    <div className="absolute top-[54px] mt-2 left-1/2  -translate-x-1/2 text-black-blue bg-grey-text text-[18px] w-[600px] p-4 rounded-[20px] pointer-events-none normal-case text-left leading-[100%]">
                      {tooltipText}
                    </div>
                  )}
                </div>
              </button>
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
    </div>
  );
}
