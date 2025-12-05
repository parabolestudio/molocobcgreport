"use client";

import { createContext, useContext, ReactNode } from "react";

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
 * Hook to access copy data by key
 * @param key - The key from the mainCopy.csv file (e.g., "Consumer journey, step 1 title")
 * @returns The English copy text for that key, or the key itself if not found
 */
export function useCopy(key: string): string {
  const data = useContext(CopyContext);
  return data[key] || key;
}

/**
 * Hook to access all copy data
 * @returns The complete copy data object
 */
export function useAllCopy(): CopyData {
  return useContext(CopyContext);
}
