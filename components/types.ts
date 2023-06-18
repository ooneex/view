export { createSignal, onCleanup } from "solid-js";
//@ts-ignore: trust me
export type { JSX } from "solid-js";

export type VariantType =
  | "dark"
  | "error"
  | "info"
  | "light"
  | "primary"
  | "secondary"
  | "success"
  | "warning";

export type VariantOpacityType =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type RadiusCornerType = "all" | "top" | "right" | "bottom" | "left";

export type RadiusType =
  | "full"
  | "none"
  | Partial<Record<RadiusCornerType, "xs" | "s" | "m" | "l">>;

export type BorderSizeType =
  | "none"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl";

export type SpacingType =
  | "none"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "2xl";

export type FontTypeType =
  | "light"
  | "light-italic"
  | "regular"
  | "italic"
  | "medium"
  | "medium-italic"
  | "semi-bold"
  | "semi-bold-italic"
  | "bold"
  | "bold-italic";

export type SizeType =
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export type ShadowType = "none" | "xs" | "s" | "m" | "l" | "xl";

export type BreakpointType = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
