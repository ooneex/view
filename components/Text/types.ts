import {
  FontTypeType,
  JSX,
  SizeType,
  VariantOpacityType,
  VariantType,
} from "../types.ts";

export type TextPropsType = {
  variant?: VariantType;
  opacity?: VariantOpacityType;
  size?: SizeType;
  font?: "primary" | "secondary";
  type?: FontTypeType;
  className?: string;
  element?:
    | "blockquote"
    | "q"
    | "abbr"
    | "address"
    | "cite"
    | "bdo"
    | "p"
    | "span";
  children: JSX.Element;
};
