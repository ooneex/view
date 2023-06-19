// deno-lint-ignore-file no-explicit-any

import { assertEquals, describe, it } from "@hypervit/testing";
import { renderView } from "@hypervit/view";
import "@tests/setup.ts";
import { DOMParser } from "dom";
import { Grid, GridPropsType } from "./mod.ts";

describe("Grid component", () => {
  const sizes = ["xs", "s", "m", "l", "xl"];
  const spacings = ["none", "xs", "s", "m", "l", "xl", "2xl", "3xl"];

  for (const size of sizes) {
    it(size, () => {
      const content = renderView<GridPropsType>(Grid, {
        size: size as any,
        children: "",
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const div = dom.querySelector("div")!;
      assertEquals(div.classList.contains(`grid`), true);
      assertEquals(div.classList.contains(`grid-cols-${size}`), true);
    });
  }

  describe("gap", () => {
    for (const spacing of spacings) {
      it(spacing, () => {
        const content = renderView<GridPropsType>(Grid, {
          gap: spacing as any,
          children: "",
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const div = dom.querySelector("div")!;
        assertEquals(div.classList.contains(`gap-${spacing}`), true);
      });
    }
  });

  for (const [direction, c] of [["column", "x"], ["row", "y"]]) {
    describe(`gap ${direction}`, () => {
      for (const spacing of spacings) {
        it(spacing, () => {
          const content = renderView<GridPropsType>(Grid, {
            gap: { [direction]: spacing },
            children: "",
          });

          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const div = dom.querySelector("div")!;
          assertEquals(div.classList.contains(`gap-${c}-${spacing}`), true);
        });
      }
    });
  }

  it("className", () => {
    const content = renderView<GridPropsType>(Grid, {
      className: "hover:grid-cols-l",
      children: "",
    });

    const dom = new DOMParser().parseFromString(content, "text/html")!;
    const div = dom.querySelector("div")!;
    assertEquals(div.classList.contains("hover:grid-cols-l"), true);
  });
});
