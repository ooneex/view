import { ICollection } from "@hypervit/collection";
import { get, Keys } from "@hypervit/ioc";
import { IRoute, Route } from "@hypervit/routing";
import {
  assertEquals,
  assertInstanceOf,
  describe,
  it,
} from "@hypervit/testing";
import "@tests/setup.ts";
import { HomepageController } from "./HomepageController.ts";

describe("HomepageController", () => {
  new HomepageController();

  const routes = get<ICollection<string, IRoute>>(Keys.Routes);
  const route = routes.get("homepage");

  it("should be registered", () => {
    assertInstanceOf(route, Route);
  });

  it("name", () => {
    assertEquals(route?.getName(), "homepage");
  });

  it("path", () => {
    assertEquals(route?.getPath(), "/");
  });

  it("methods", () => {
    assertEquals(route?.getMethods(), ["GET"]);
  });
});
