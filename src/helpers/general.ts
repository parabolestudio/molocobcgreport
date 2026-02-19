import React from "react";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const isMobile = (): boolean => {
  if (typeof window === "undefined") return false;

  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const smallViewport =
    (typeof window.innerWidth === "number" && window.innerWidth <= 1000) ||
    (window.screen &&
      typeof window.screen.width === "number" &&
      window.screen.width <= 1000);

  const hasCoarsePointer =
    typeof window.matchMedia === "function"
      ? window.matchMedia("(pointer: coarse)").matches
      : "ontouchstart" in window;

  const mobileUa =
    /Mobi|Android|iPhone|iPad|iPod|Mobile|BlackBerry|IEMobile|Opera Mini/i.test(
      ua,
    );

  return smallViewport || !!hasCoarsePointer || mobileUa;
};

export const replaceCertainGlyphs = (
  text: string,
  language = "English",
): React.ReactElement => {
  const parts: (string | React.ReactElement)[] = [];

  // First, split on <customBreak /> to handle custom line breaks
  const customBreakTag = "<customBreak />";
  const segments = text.split(customBreakTag);

  for (let segIdx = 0; segIdx < segments.length; segIdx++) {
    // Insert a <br> between segments (i.e. where <customBreak /> was)
    if (segIdx > 0) {
      parts.push(React.createElement("br", { key: `cb-${segIdx}` }));
    }

    const segment = segments[segIdx];
    for (let i = 0; i < segment.length; i++) {
      const char = segment[i];
      // Use a composite key to ensure uniqueness across segments
      const key = `${segIdx}-${i}`;

      if ((char === "&" || char === "＆") && language === "Japanese") {
        // For Japanese, replace '&'/'＆' with '＆' and apply the font style and add a line break after it
        parts.push(
          React.createElement(
            "span",
            { key, style: { fontFamily: "Montserrat" } },
            "＆",
          ),
        );
        parts.push(React.createElement("br", { key: `${key}-br` }));
      } else if (char === "G" || char === "&" || char === "＆") {
        parts.push(
          React.createElement(
            "span",
            { key, style: { fontFamily: "Montserrat" } },
            char,
          ),
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
  }

  return React.createElement(React.Fragment, null, ...parts);
};

export const runSiteGate = (): void => {
  // Function to check for the presence of query parameters
  function hasQueryParam(param: string) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has(param);
  }

  // Function to check for the presence of local storage items
  function hasLocalStorageItem(item: string) {
    return localStorage.getItem(item) !== null;
  }

  // Check for required query params and local storage items
  const requiredParamsAndStorage = [
    "submissionGuid",
    "submission",
    "formsubmission",
    "hs_form_submitted",
  ];
  const hasRequiredParamsOrStorage = requiredParamsAndStorage.some(
    (param) => hasQueryParam(param) || hasLocalStorageItem(param),
  );

  // Check for the utm_medium=email parameter
  const isEmailMedium =
    hasQueryParam("utm_medium") &&
    new URLSearchParams(window.location.search).get("utm_medium") === "email";

  // Redirect only if required params/storage are absent and utm_medium=email is not present
  if (!hasRequiredParamsOrStorage && !isEmailMedium) {
    window.location.href = "https://www.moloco.com/reports/ai-disruption-index";
  }
};
