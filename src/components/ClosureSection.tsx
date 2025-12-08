import { useRef } from "react";
import { useCopy } from "@/contexts/CopyContext";

export default function ClosureSection() {
  return (
    <div className="relative w-full h-screen bg-forest-green">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1728px] px-8 h-full py-8">
          <div
            className="bg-red-300/20 w-full h-full grid"
            style={{
              gridTemplateColumns: "repeat(6, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
            }}
          >
            <h3
              className="text-[96px] font-museo-moderno leading-[100%]"
              style={{ gridArea: " 1 / 1 / 2 / 5", color: "var(--black-blue)" }}
            >
              {useCopy("closure_title")}
            </h3>
            <p
              className="text-[32px] self-end"
              style={{ gridArea: " 2 / 5 / 3 / 7" }}
            >
              {useCopy("closure_paragraph_1")}
            </p>
            <p className="text-[32px]" style={{ gridArea: "1 / 1 / 2 / 5" }}>
              {useCopy("closure_paragraph_2")}
            </p>
            <div
              className="p-4 flex items-center justify-center"
              style={{ gridArea: "2 / 1 / 3 / 3" }}
            >
              <div className="text-black-blue bg-bright-green rounded-[20px] px-8 pt-8 pb-16 relative max-w-[327px]">
                {useCopy("closure_card_1")}
                <div className="h-10 w-10 bg-black-blue rounded-[50%] absolute bottom-0 right-0"></div>
              </div>
            </div>
            <div
              className="p-4 flex items-start justify-center"
              style={{ gridArea: "2 / 3 / 3 / 5" }}
            >
              <div className="text-black-blue bg-bright-green rounded-[20px] px-8 pt-8 pb-16 relative max-w-[327px]">
                {useCopy("closure_card_2")}
                <div className="h-10 w-10 bg-black-blue rounded-[50%] absolute bottom-0 right-0"></div>
              </div>
            </div>
            <div
              className="p-4 flex items-end justify-center"
              style={{ gridArea: "2 / 5 / 3 / 7" }}
            >
              <div className="text-black-blue bg-bright-green rounded-[20px] px-8 pt-8 pb-16 relative max-w-[327px]">
                {useCopy("closure_card_3")}
                <div className="h-10 w-10 bg-black-blue rounded-[50%] absolute bottom-0 right-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
