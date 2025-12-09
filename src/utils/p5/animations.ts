import type P5 from "p5";
import type { SectionName } from "@/hooks/useScrollProgress";

export interface AnimationConfig {
  pulseIntensity: number;
  color: string;
  speed: number;
}

const defaultColor = "48, 48, 97"; // Default deep blue

export const sectionAnimations: Record<SectionName, AnimationConfig> = {
  hook: {
    pulseIntensity: 0.8,
    color: defaultColor,
    speed: 2.5,
  },
  journey: {
    pulseIntensity: 0.4,
    color: defaultColor,
    speed: 1.5,
  },
  quadrant: {
    pulseIntensity: 0.3,
    color: defaultColor,
    speed: 1,
  },
  closure: {
    pulseIntensity: 0.5,
    color: defaultColor,
    speed: 0.8,
  },
  cta: {
    pulseIntensity: 0.6,
    color: defaultColor,
    speed: 2,
  },
};

export function lerpColor(
  p5: P5,
  color1: string,
  color2: string,
  amount: number
): string {
  const c1 = color1.split(",").map(Number);
  const c2 = color2.split(",").map(Number);

  const r = p5.lerp(c1[0], c2[0], amount);
  const g = p5.lerp(c1[1], c2[1], amount);
  const b = p5.lerp(c1[2], c2[2], amount);

  return `${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}`;
}
