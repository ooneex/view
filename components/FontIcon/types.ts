import { SizeType } from "../types.ts";
import { ICONS } from "./icons.ts";

export type IconType = keyof typeof ICONS;

export type FontIconPropsType = {
  name: IconType;
  size?: Omit<SizeType, "4xl">;
};
