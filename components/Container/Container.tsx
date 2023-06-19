import { definition } from "./definition.ts";
import { ContainerPropsType } from "./types.ts";

export const Container = (
  {
    border,
    radius = "none",
    shadow = "none",
    bgc = "none",
    className,
    spacing = "none",
    element = "div",
    children,
  }: ContainerPropsType,
) => {
  className = className ?? "";

  const { type = "normal", size = "xs", variant } = border ?? {};

  if (variant) {
    className += " " + definition.border.variant[variant][type];
    className += " " + definition.border.size[size as string];
  } else {
    className += " " + definition.border.none;
  }

  if (typeof radius === "string") {
    className += " " + definition.radius[radius as string];
  } else {
    const { all, top, right, bottom, left } = radius;
    if (all) className += " " + definition.radius.all[all];

    if (top) className += " " + definition.radius.top[top];

    if (right) className += " " + definition.radius.right[right];

    if (bottom) className += " " + definition.radius.bottom[bottom];

    if (left) className += " " + definition.radius.left[left];
  }

  className += " " + definition.shadow[shadow as string];

  if (bgc === "none") {
    className += " " + definition.bgc.none;
  } else {
    const { primary, secondary, error, warning, info, success, dark, light } =
      bgc;
    if (primary) className += " " + definition.bgc.primary[primary];
    if (secondary) className += " " + definition.bgc.secondary[secondary];
    if (error) className += " " + definition.bgc.error[error];
    if (warning) className += " " + definition.bgc.warning[warning];
    if (info) className += " " + definition.bgc.info[info];
    if (success) className += " " + definition.bgc.success[success];
    if (dark) className += " " + definition.bgc.dark[dark];
    if (light) className += " " + definition.bgc.light[light];
  }

  if (typeof spacing === "string") {
    className += " " + definition.spacing[spacing];
  } else {
    const { y, x, top, right, bottom, left } = spacing;
    if (y) className += " " + definition.spacing.y[y];
    if (x) className += " " + definition.spacing.x[x];
    if (top) className += " " + definition.spacing.top[top];
    if (right) className += " " + definition.spacing.right[right];
    if (bottom) className += " " + definition.spacing.bottom[bottom];
    if (left) className += " " + definition.spacing.left[left];
  }

  switch (element) {
    case "header":
      return <header className={className.trim()}>{children}</header>;
    case "main":
      return <main className={className.trim()}>{children}</main>;
    case "nav":
      return <nav className={className.trim()}>{children}</nav>;
    case "section":
      return <section className={className.trim()}>{children}</section>;
    case "article":
      return <article className={className.trim()}>{children}</article>;
    case "aside":
      return <aside className={className.trim()}>{children}</aside>;
    case "footer":
      return <footer className={className.trim()}>{children}</footer>;
    case "details":
      return <details className={className.trim()}>{children}</details>;
    case "summary":
      return <summary className={className.trim()}>{children}</summary>;
    case "h1":
      return <h1 className={className.trim()}>{children}</h1>;
    case "h2":
      return <h2 className={className.trim()}>{children}</h2>;
    case "h3":
      return <h3 className={className.trim()}>{children}</h3>;
    case "h4":
      return <h4 className={className.trim()}>{children}</h4>;
    case "h5":
      return <h5 className={className.trim()}>{children}</h5>;
    case "h6":
      return <h6 className={className.trim()}>{children}</h6>;
    case "p":
      return <p className={className.trim()}>{children}</p>;
  }

  return <div className={className.trim()}>{children}</div>;
};
