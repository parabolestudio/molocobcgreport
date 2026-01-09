import React from "react";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const isMobile = (): boolean => {
  if (typeof window === "undefined") return false;

  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const smallViewport =
    (typeof window.innerWidth === "number" && window.innerWidth <= 768) ||
    (window.screen &&
      typeof window.screen.width === "number" &&
      window.screen.width <= 768);

  const hasCoarsePointer =
    typeof window.matchMedia === "function"
      ? window.matchMedia("(pointer: coarse)").matches
      : "ontouchstart" in window;

  const mobileUa =
    /Mobi|Android|iPhone|iPad|iPod|Mobile|BlackBerry|IEMobile|Opera Mini/i.test(
      ua
    );

  return smallViewport || !!hasCoarsePointer || mobileUa;
};

export const replaceCertainGlyphs = (text: string): React.ReactElement => {
  const parts: (string | React.ReactElement)[] = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === "G" || char === "&") {
      parts.push(
        React.createElement(
          "span",
          { key: i, style: { fontFamily: "Montserrat" } },
          char
        )
      );
    } else {
      // Append to the last part if it's a string, otherwise create a new string part
      if (parts.length > 0 && typeof parts[parts.length - 1] === "string") {
        parts[parts.length - 1] = (parts[parts.length - 1] as string) + char;
      } else {
        parts.push(char);
      }
    }
  }

  return React.createElement(React.Fragment, null, ...parts);
};
