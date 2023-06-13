import { assertEquals, describe, it } from "@hypervit/testing";
import { renderView } from "@hypervit/view";
import "@tests/setup.ts";
import { DOMParser } from "dom";
import { Container, ContainerPropsType } from "./mod.ts";

describe("Container component", () => {
  describe("border", () => {
    it("no border", () => {
      const content = renderView<ContainerPropsType>(Container);

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.length, 0);
    });
    describe("variant", () => {
      describe("primary", () => {
        it("normal", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "primary" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-primary"), true);
        });
        it("light", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "primary", type: "light" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-primary-400"), true);
        });
      });
      describe("secondary", () => {
        it("normal", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "secondary" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-secondary"), true);
        });
        it("light", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "secondary", type: "light" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-secondary-400"), true);
        });
      });
      describe("error", () => {
        it("normal", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "error" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-error"), true);
        });
        it("light", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "error", type: "light" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-error-400"), true);
        });
      });
      describe("warning", () => {
        it("normal", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "warning" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-warning"), true);
        });
        it("light", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "warning", type: "light" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-warning-400"), true);
        });
      });
      describe("info", () => {
        it("normal", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "info" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-info"), true);
        });
        it("light", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "info", type: "light" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-info-400"), true);
        });
      });
      describe("success", () => {
        it("normal", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "success" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-success"), true);
        });
        it("light", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "success", type: "light" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-success-400"), true);
        });
      });
      describe("dark", () => {
        it("normal", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "dark" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-dark"), true);
        });
        it("light", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "dark", type: "light" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-dark-400"), true);
        });
      });
      describe("light", () => {
        it("normal", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "light" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-light"), true);
        });
        it("light", () => {
          const content = renderView<ContainerPropsType>(Container, {
            border: { variant: "light", type: "light" },
          });
          const dom = new DOMParser().parseFromString(content, "text/html")!;
          const p = dom.querySelector("div")!;
          assertEquals(p.classList.contains("border-light-400"), true);
        });
      });
    });
    describe("size", () => {
      it("0", () => {
        const content = renderView<ContainerPropsType>(Container, {
          border: { variant: "primary", size: "0" },
        });
        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("border-0"), true);
      });
      it("1", () => {
        const content = renderView<ContainerPropsType>(Container, {
          border: { variant: "primary", size: "1" },
        });
        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("border-1"), true);
      });
      it("2", () => {
        const content = renderView<ContainerPropsType>(Container, {
          border: { variant: "primary", size: "2" },
        });
        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("border-2"), true);
      });
      it("3", () => {
        const content = renderView<ContainerPropsType>(Container, {
          border: { variant: "primary", size: "3" },
        });
        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("border-3"), true);
      });
      it("4", () => {
        const content = renderView<ContainerPropsType>(Container, {
          border: { variant: "primary", size: "4" },
        });
        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("border-4"), true);
      });
      it("6", () => {
        const content = renderView<ContainerPropsType>(Container, {
          border: { variant: "primary", size: "6" },
        });
        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("border-6"), true);
      });
      it("DEFAULT", () => {
        const content = renderView<ContainerPropsType>(Container, {
          border: { variant: "primary" },
        });
        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("border-1"), true);
      });
    });
  });

  describe("radius", () => {
    it("full", () => {
      const content = renderView<ContainerPropsType>(Container, {
        radius: "full",
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("rounded-full"), true);
    });
    it("none", () => {
      const content = renderView<ContainerPropsType>(Container, {
        radius: "none",
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("rounded-none"), true);
    });
    describe("all", () => {
      it("DEFAULT", () => {
        const content = renderView<ContainerPropsType>(Container, {
          radius: { all: "DEFAULT" },
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("rounded"), true);
      });
      it("lg", () => {
        const content = renderView<ContainerPropsType>(Container, {
          radius: { all: "lg" },
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("rounded-lg"), true);
      });
      it("md", () => {
        const content = renderView<ContainerPropsType>(Container, {
          radius: { all: "md" },
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("rounded-md"), true);
      });
    });
    describe("top", () => {
      it("DEFAULT", () => {
        const content = renderView<ContainerPropsType>(Container, {
          radius: { top: "DEFAULT" },
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("rounded-t"), true);
      });
      it("lg", () => {
        const content = renderView<ContainerPropsType>(Container, {
          radius: { top: "lg" },
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("rounded-t-lg"), true);
      });
      it("md", () => {
        const content = renderView<ContainerPropsType>(Container, {
          radius: { top: "md" },
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("rounded-t-md"), true);
      });
    });
    describe("right", () => {
      it("DEFAULT", () => {
        const content = renderView<ContainerPropsType>(Container, {
          radius: { right: "DEFAULT" },
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("rounded-r"), true);
      });
      it("lg", () => {
        const content = renderView<ContainerPropsType>(Container, {
          radius: { right: "lg" },
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("rounded-r-lg"), true);
      });
      it("md", () => {
        const content = renderView<ContainerPropsType>(Container, {
          radius: { right: "md" },
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("rounded-r-md"), true);
      });
    });
    describe("bottom", () => {
      it("DEFAULT", () => {
        const content = renderView<ContainerPropsType>(Container, {
          radius: { bottom: "DEFAULT" },
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("rounded-b"), true);
      });
      it("lg", () => {
        const content = renderView<ContainerPropsType>(Container, {
          radius: { bottom: "lg" },
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("rounded-b-lg"), true);
      });
      it("md", () => {
        const content = renderView<ContainerPropsType>(Container, {
          radius: { bottom: "md" },
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("rounded-b-md"), true);
      });
    });
    describe("left", () => {
      it("DEFAULT", () => {
        const content = renderView<ContainerPropsType>(Container, {
          radius: { left: "DEFAULT" },
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("rounded-l"), true);
      });
      it("lg", () => {
        const content = renderView<ContainerPropsType>(Container, {
          radius: { left: "lg" },
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("rounded-l-lg"), true);
      });
      it("md", () => {
        const content = renderView<ContainerPropsType>(Container, {
          radius: { left: "md" },
        });

        const dom = new DOMParser().parseFromString(content, "text/html")!;
        const p = dom.querySelector("div")!;
        assertEquals(p.classList.contains("rounded-l-md"), true);
      });
    });
  });

  describe("shadow", () => {
    it("none", () => {
      const content = renderView<ContainerPropsType>(Container, {
        shadow: "none",
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("drop-shadow-none"), true);
    });
    it("sm", () => {
      const content = renderView<ContainerPropsType>(Container, {
        shadow: "sm",
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("drop-shadow-sm"), true);
    });
    it("md", () => {
      const content = renderView<ContainerPropsType>(Container, {
        shadow: "md",
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("drop-shadow-md"), true);
    });
    it("DEFAULT", () => {
      const content = renderView<ContainerPropsType>(Container, {
        shadow: "DEFAULT",
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("drop-shadow"), true);
    });
    it("lg", () => {
      const content = renderView<ContainerPropsType>(Container, {
        shadow: "lg",
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("drop-shadow-lg"), true);
    });
    it("xl", () => {
      const content = renderView<ContainerPropsType>(Container, {
        shadow: "xl",
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("drop-shadow-xl"), true);
    });
  });

  describe("bgc", () => {
    it("none", () => {
      const content = renderView<ContainerPropsType>(Container, {
        bgc: "none",
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("bg-none"), true);
    });
    it("primary", () => {
      const content = renderView<ContainerPropsType>(Container, {
        bgc: { primary: "100" },
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("bg-primary-100"), true);
    });
    it("secondary", () => {
      const content = renderView<ContainerPropsType>(Container, {
        bgc: { secondary: "100" },
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("bg-secondary-100"), true);
    });
    it("error", () => {
      const content = renderView<ContainerPropsType>(Container, {
        bgc: { error: "100" },
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("bg-error-100"), true);
    });
    it("warning", () => {
      const content = renderView<ContainerPropsType>(Container, {
        bgc: { warning: "100" },
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("bg-warning-100"), true);
    });
    it("info", () => {
      const content = renderView<ContainerPropsType>(Container, {
        bgc: { info: "100" },
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("bg-info-100"), true);
    });
    it("success", () => {
      const content = renderView<ContainerPropsType>(Container, {
        bgc: { success: "100" },
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("bg-success-100"), true);
    });
    it("dark", () => {
      const content = renderView<ContainerPropsType>(Container, {
        bgc: { dark: "100" },
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("bg-dark-100"), true);
    });
    it("light", () => {
      const content = renderView<ContainerPropsType>(Container, {
        bgc: { light: "100" },
      });

      const dom = new DOMParser().parseFromString(content, "text/html")!;
      const p = dom.querySelector("div")!;
      assertEquals(p.classList.contains("bg-light-100"), true);
    });
  });

  it("className", () => {
    const content = renderView<ContainerPropsType>(Container, {
      className: "hover:bg-none",
    });

    const dom = new DOMParser().parseFromString(content, "text/html")!;
    const p = dom.querySelector("div")!;
    assertEquals(p.classList.contains("hover:bg-none"), true);
  });
});
