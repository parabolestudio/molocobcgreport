"use client";

import { createContext, useContext, ReactNode } from "react";
import { parseCopy } from "@/helpers/parseCopy";

export type CopyData = Record<string, string>;

const CopyContext = createContext<CopyData>({});

export function CopyProvider({
  children,
  data,
}: {
  children: ReactNode;
  data: CopyData;
}) {
  return <CopyContext.Provider value={data}>{children}</CopyContext.Provider>;
}

/**
 * Hook to access copy data by key (returns raw string)
 * @param key - The key from the mainCopy.csv file
 * @returns The raw copy text for that key, or the key itself if not found
 */
export function useCopyRaw(key: string): string {
  const data = useContext(CopyContext);
  return data[key] || key;
}

/**
 * Hook to access copy data by key with markup parsing
 * @param key - The key from the mainCopy.csv file (e.g., "Consumer journey, step 1 title")
 * @returns React elements with parsed markup (<green>, <b>, etc.)
 */
export function useCopy(key: string): ReactNode {
  const data = useContext(CopyContext);
  const text = data[key] || key;
  return parseCopy(text);
}

/**
 * Hook to access all copy data
 * @returns The complete copy data object
 */
export function useAllCopy(): CopyData {
  return useContext(CopyContext);
}
