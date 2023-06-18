import { definition } from "./definition.ts";
import { ContainerPropsType } from "./types.ts";

export const Container = (
  {
    border,
    radius = "none",
    shadow = "none",
    bgc = "none",
    className,
    element = "div",
    children,
  }: ContainerPropsType,
) => {
  className = className ?? "";
  const Element = element;

  const { type = "normal", size = "1", variant } = border ?? {};

  if (variant) {
    className += " " + definition.border.variant[variant][type];
    className += " " + definition.border.size[size];
  } else {
    className += " " + definition.border.none;
  }

  if (typeof radius === "string") {
    className += " " + definition.radius[radius as string];
  } else {
    const allBorder = (radius as { all: string }).all;
    if (allBorder) {
      className += " " + definition.radius.all[allBorder];
    }

    const topBorder = (radius as { top: string }).top;
    if (topBorder) {
      className += " " + definition.radius.top[topBorder];
    }

    const rightBorder = (radius as { right: string }).right;
    if (rightBorder) {
      className += " " + definition.radius.right[rightBorder];
    }

    const bottomBorder = (radius as { bottom: string }).bottom;
    if (bottomBorder) {
      className += " " + definition.radius.bottom[bottomBorder];
    }

    const leftBorder = (radius as { left: string }).left;
    if (leftBorder) {
      className += " " + definition.radius.left[leftBorder];
    }
  }

  className += " " + definition.shadow[shadow];

  if (bgc === "none") {
    className += " " + definition.bgc.none;
  } else {
    const primary = (bgc as { primary: string }).primary;
    if (primary) {
      className += " " + definition.bgc.primary[primary];
    }

    const secondary = (bgc as { secondary: string }).secondary;
    if (secondary) {
      className += " " + definition.bgc.secondary[secondary];
    }

    const error = (bgc as { error: string }).error;
    if (error) {
      className += " " + definition.bgc.error[error];
    }

    const warning = (bgc as { warning: string }).warning;
    if (warning) {
      className += " " + definition.bgc.warning[warning];
    }

    const info = (bgc as { info: string }).info;
    if (info) {
      className += " " + definition.bgc.info[info];
    }

    const success = (bgc as { success: string }).success;
    if (success) {
      className += " " + definition.bgc.success[success];
    }

    const dark = (bgc as { dark: string }).dark;
    if (dark) {
      className += " " + definition.bgc.dark[dark];
    }

    const light = (bgc as { light: string }).light;
    if (light) {
      className += " " + definition.bgc.light[light];
    }
  }

  return (
    <Element className={className.trim()}>
      {children}
    </Element>
  );
};
