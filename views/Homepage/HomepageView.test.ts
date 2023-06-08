import { assertEquals, describe, it } from "@hypervit/testing";
import { renderView } from "@hypervit/view";
import "@tests/setup.ts";
import { DOMParser } from "dom";
import { HomepageView, HomepageViewPropsType } from "./mod.ts";

describe("HomepageView", () => {
  const content = renderView<HomepageViewPropsType>(HomepageView, {
    message: "hi",
  });
  const dom = new DOMParser().parseFromString(content, "text/html")!;

  it("title", () => {
    const title = dom.querySelector("title")!;
    assertEquals(title.innerHTML, "Homepage");
  });

  it("h1", () => {
    const h1 = dom.querySelector("body h1")!;
    assertEquals(h1.innerHTML, "HomepageView");
  });

  it("props", () => {
    const p = dom.querySelector("body p")!;
    assertEquals(p.innerHTML, "hi");
  });
});
