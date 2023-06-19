import { definition } from "./definition.ts";
import { GridPropsType } from "./types.ts";

export const Grid = (
  { size = "m", gap = "m", children, className }: GridPropsType,
) => {
  className = className ?? "";

  className += " " + definition.size[size];

  if (typeof gap === "string") {
    className += " " + definition.gap[gap];
  } else {
    const { column, row } = gap;

    if (column) className += " " + definition.gap.column[column];
    if (row) className += " " + definition.gap.row[row];
  }

  return (
    <div className={"grid " + className.trim()}>
      {children}
    </div>
  );
};
