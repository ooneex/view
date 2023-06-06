import { AppConfigType } from "./types.ts";

// TODO: assets key added. Check zod schema

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
