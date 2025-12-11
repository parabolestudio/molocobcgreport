import { basePath } from "@/helpers/general";
import { useCopy } from "@/contexts/CopyContext";

export default function CTASection({ isActive }: { isActive: boolean }) {
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1728px] px-8">
          <div className="w-full h-full flex flex-col items-center justify-center gap-15">
            <h3 className="font-extralight text-[96px] font-museo-moderno leading-[100%] text-center max-w-[1200px] text-balance">
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
