import "./base.css";
import "./icons.css";
import { FontIconPropsType } from "./types.ts";

export const FontIcon = ({ name, size = "m" }: FontIconPropsType) => {
  return (
    <i
      className={`ooneex-icon ooneex-icon-size-${size} ooneex-icon-${name}`}
    />
  );
};
