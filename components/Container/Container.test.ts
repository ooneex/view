// deno-lint-ignore-file no-explicit-any

import { assert, assertEquals, describe, it } from "@hypervit/testing";
import { renderView } from "@hypervit/view";
import "@tests/setup.ts";
import { DOMParser } from "dom";
import { BorderSizeType, ShadowType, VariantType } from "../types.ts";
import { Container, ContainerPropsType } from "./mod.ts";

const variants = [
  "primary",
  "secondary",
  "error",
  "warning",
  "info",
  "success",
  "dark",
  "light",
];

const opacities = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

describe("Container component", () => {
  describe("border", () => {
    it("no border", () => {
      const content = renderView<ContainerPropsType>(Container);

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const div = dom.querySelector("div")!;
      assertEquals(div.classList.contains("border-none"), true);
    });
    describe("variant", () => {
      for (const variant of variants) {
        describe(variant, () => {
          it("normal", () => {
            const content = renderView<ContainerPropsType>(Container, {
              border: { variant: variant as VariantType },
              children: "",
            });
            const dom = new DOMParser().parseFromString(content, "text/html")!;
            const div = dom.querySelector("div")!;
            assertEquals(div.classList.contains(`border-${variant}`), true);
          });
          it("light", () => {
            const content = renderView<ContainerPropsType>(Container, {
              border: { variant: variant as VariantType, type: "light" },
              children: "",
            });
            const dom = new DOMParser().parseFromString(content, "text/html")!;
            const div = dom.querySelector("div")!;
            assertEquals(div.classList.contains(`border-${variant}-400`), true);
          });
        });
      }
    });
    describe("size", () => {
      for (const size of ["none", "xs", "s", "m", "l", "xl"]) {
        it(`${size}`, () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "primary", size: `${size}` as BorderSizeType },
            children: "",
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const div = dom.querySelector("div")!;
          assertEquals(div.classList.contains(`border-${size}`), true);
        });
      }
      it("default", () => {
        const content = renderView<ContainerPropsType>(Container, {
          border: { variant: "primary" },
          children: "",
        });
        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const div = dom.querySelector("div")!;
        assertEquals(div.classList.contains("border-xs"), true);
      });
    });
  });

  describe("radius", () => {
    it("full", () => {
      const content = renderView<ContainerPropsType>(Container, {
        radius: "full",
        children: "",
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const div = dom.querySelector("div")!;
      assertEquals(div.classList.contains("rounded-full"), true);
    });
    it("none", () => {
      const content = renderView<ContainerPropsType>(Container, {
        radius: "none",
        children: "",
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const div = dom.querySelector("div")!;
      assertEquals(div.classList.contains("rounded-none"), true);
    });

    for (
      const [position, ext] of [["all", ""], ["top", "t-"], ["right", "r-"], [
        "bottom",
        "b-",
      ], ["left", "l-"]]
    ) {
      describe(position, () => {
        for (const radius of ["xs", "s", "m", "l"]) {
          it(radius, () => {
            const content = renderView<ContainerPropsType>(Container, {
              radius: { [position]: radius as any },
              children: "",
            });

            const dom = new DOMParser().parseFromString(content, "text/html")!;
            const div = dom.querySelector("div")!;
            assertEquals(
              div.classList.contains(`rounded-${ext}${radius}`),
              true,
            );
          });
        }
      });
    }
  });

  describe("shadow", () => {
    for (const shadow of ["none", "xs", "s", "m", "l", "xl"]) {
      it(shadow, () => {
        const content = renderView<ContainerPropsType>(Container, {
          shadow: shadow as ShadowType,
          children: "",
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const div = dom.querySelector("div")!;
        assertEquals(div.classList.contains(`drop-shadow-${shadow}`), true);
      });
    }
  });

  describe("bgc", () => {
    it("none", () => {
      const content = renderView<ContainerPropsType>(Container, {
        bgc: "none",
        children: "",
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const div = dom.querySelector("div")!;
      assertEquals(div.classList.contains("bg-none"), true);
    });

    for (const variant of variants) {
      describe(variant, () => {
        for (const opacity of opacities) {
          it(opacity, () => {
            const content = renderView<ContainerPropsType>(Container, {
              bgc: { [variant]: opacity },
              children: "",
            });

            const dom = new DOMParser().parseFromString(content, "text/html")!;
            const div = dom.querySelector("div")!;
            assertEquals(
              div.classList.contains(`bg-${variant}-${opacity}`),
              true,
            );
          });
        }
      });
    }
  });

  describe("spacing", () => {
    const spacings = ["none", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"];

    for (const spacing of spacings) {
      it(spacing, () => {
        const content = renderView<ContainerPropsType>(Container, {
          spacing: spacing as any,
          children: "",
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const div = dom.querySelector("div")!;
        assertEquals(div.classList.contains(`p-${spacing}`), true);
      });
    }

    for (
      const [edge, c] of [
        ["y", "y"],
        ["x", "x"],
        ["top", "t"],
        ["right", "r"],
        ["bottom", "b"],
        ["left", "l"],
      ]
    ) {
      describe(edge, () => {
        for (const spacing of spacings) {
          it(spacing, () => {
            const content = renderView<ContainerPropsType>(Container, {
              spacing: { [edge]: spacing },
              children: "",
            });

            const dom = new DOMParser().parseFromString(content, "text/html")!;
            const div = dom.querySelector("div")!;
            assertEquals(div.classList.contains(`p${c}-${spacing}`), true);
          });
        }
      });
    }
  });

  it("className", () => {
    const content = renderView<ContainerPropsType>(Container, {
      className: "hover:bg-none",
      children: "",
    });

    const dom = new DOMParser().parseFromString(content, "text/html")!;
    const div = dom.querySelector("div")!;
    assertEquals(div.classList.contains("hover:bg-none"), true);
  });

  describe("element", () => {
    for (
      const el of [
        "header",
        "main",
        "nav",
        "section",
        "article",
        "aside",
        "footer",
        "details",
        "summary",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "div",
        "p",
      ]
    ) {
      it(el, () => {
        const content = renderView<ContainerPropsType>(Container, {
          element: el as any,
          children: "",
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector(el)!;
        assert(p);
      });
    }
  });
});
