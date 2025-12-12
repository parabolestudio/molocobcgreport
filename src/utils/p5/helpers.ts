import type P5 from "p5";

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
