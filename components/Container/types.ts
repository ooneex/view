import {
  BorderSizeType,
  JSX,
  RadiusType,
  ShadowType,
  SpacingType,
  VariantOpacityType,
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
  bgc?: "none" | Partial<Record<VariantType, VariantOpacityType>>;
  spacing?:
    | SpacingType
    | Partial<
      Record<"y" | "x" | "top" | "right" | "bottom" | "left", SpacingType>
    >;
  className?: string;
  children: JSX.Element;
  element?:
    | "header"
    | "main"
    | "nav"
    | "section"
    | "article"
    | "aside"
    | "footer"
    | "details"
    | "summary"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "div"
    | "p";
};
