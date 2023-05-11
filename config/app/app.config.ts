const config = {
  directories: {
    "root": new URL("../..", import.meta.url).pathname.replace(/\/\/$/, "/"),
    "components": "components",
    "config": "config",
    "controllers": "controllers",
    "islands": "islands",
    "middlewares": "middlewares",
    "public": "public",
    "var": "var",
    "views": "views",
  },
};

export default config;
