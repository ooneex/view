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

  switch (element) {
    case "blockquote":
      return <blockquote className={className.trim()}>{children}</blockquote>;
    case "q":
      return <q className={className.trim()}>{children}</q>;
    case "abbr":
      return <abbr className={className.trim()}>{children}</abbr>;
    case "address":
      return <address className={className.trim()}>{children}</address>;
    case "cite":
      return <cite className={className.trim()}>{children}</cite>;
    case "bdo":
      return <bdo className={className.trim()}>{children}</bdo>;
    case "span":
      return <span className={className.trim()}>{children}</span>;
  }

  return <p className={className.trim()}>{children}</p>;
};
