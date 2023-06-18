import {
  BorderSizeType,
  JSX,
  RadiusType,
  ShadowType,
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
  className?: string;
  children: JSX.Element;
  element?:
    | "header"
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
