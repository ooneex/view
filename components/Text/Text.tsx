import { definition } from "./definition.ts";
import "./fonts/fonts.css";
import { TextPropsType } from "./types.ts";

export const Text = (
  {
    variant = "dark",
    opacity = "900",
    size = "m",
    element = "span",
    font = "primary",
    type = "regular",
    className,
    children,
  }: TextPropsType,
) => {
  className = className ?? "";
  className += " " + definition.variant[variant][opacity];
  className += " " + definition.size[size];
  className += " " + definition.font[font][type];

  const Element = element;

  return <Element className={className.trim()}>{children}</Element>;
};
