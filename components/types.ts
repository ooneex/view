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

export type VariantKeyType =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "DEFAULT";

export type RadiusCornerType = "all" | "top" | "right" | "bottom" | "left";

export type RadiusType =
  | "full"
  | "none"
  | Partial<Record<RadiusCornerType, "DEFAULT" | "lg" | "md">>;

export type BorderSizeType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "6"
  | "DEFAULT";

export type SizeType =
  | "xs"
  | "s"
  | "m"
  | "DEFAULT"
  | "l"
  | "xl"
  | "2xl";

export type ShadowType = "none" | "sm" | "md" | "DEFAULT" | "lg" | "xl";

export type BreakpointType = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
