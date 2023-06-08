import { assertEquals, describe, it } from "@hypervit/testing";
import { renderView } from "@hypervit/view";
import "@tests/setup.ts";
import { DOMParser } from "dom";
import { Button, ButtonPropsType } from "./mod.ts";

describe("Button component", () => {
  const content = renderView<ButtonPropsType>(Button, {
    message: "hello",
  });

  const dom = new DOMParser().parseFromString(content, "text/html")!;

  it("props", () => {
    const p = dom.querySelector("p")!;
    assertEquals(p.innerHTML, "hello");
  });
});
