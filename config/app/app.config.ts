import { AppConfigType } from "./types.ts";

export const config: AppConfigType = {
  directories: {
    "components": "components",
    "config": "config",
    "controllers": "controllers",
    "islands": "islands",
    "middlewares": "middlewares",
    "public": "public",
    "var": "var",
    "views": "views",
  },
  assets: {
    styles: ["dist/main.css"],
  },
};
