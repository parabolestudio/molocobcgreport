import { useCopy } from "@/contexts/CopyContext";
import { basePath } from "@/helpers/general";

export default function CTASection() {
  return (
    <div className="relative w-full h-screen">
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
                className="bg-grey-text flex items-center justify-center gap-2 hover:bg-grey-text/80 transition text-black-blue"
                onClick={() => {}}
              >
                <span>{useCopy("cta_text_button_2")}</span>
                <img
                  src={`${basePath}/icons/eye.svg`}
                  alt="eye"
                  width={19}
                  height={19}
                />
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
