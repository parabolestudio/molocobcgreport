export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const isMobile = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= 768;
};
