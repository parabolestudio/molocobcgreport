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
