import { JSX, SpacingType } from "../types.ts";

export type GridPropsType = {
  size?: "xs" | "s" | "m" | "l" | "xl";
  // xs?: boolean;
  // s?: boolean;
  // m?: boolean;
  // l?: boolean;
  // xl?: boolean;
  gap?: SpacingType | Partial<Record<"column" | "row", SpacingType>>;
  className?: string;
  children: JSX.Element;
};
