import {
  BorderSizeType,
  RadiusType,
  ShadowType,
  VariantKeyType,
  VariantType,
} from "../types.ts";

export type ContainerBorderType = {
  variant?: VariantType;
  type?: "normal" | "light";
  size?: BorderSizeType;
};

export type ContainerPropsType = {
  border?: ContainerBorderType;
  radius?: RadiusType;
  shadow?: ShadowType;
  bgc?: "none" | Partial<Record<VariantType, VariantKeyType>>;
  className?: string;
};
