import { ConfigType } from "./types.ts";

const config: ConfigType = {
  content: [
    "./components/**/*.tsx",
    "./islands/**/*.tsx",
    "./views/**/*.tsx",
  ],
  theme: {
    colors: {
      none: "none",
      primary: {
        "100": "#EAE6EF",
        "200": "#D5CEDF",
        "300": "#C0B5CF",
        "400": "#AB9DBF",
        "500": "#9684B0",
        "600": "#816CA0",
        "700": "#6C5390",
        "800": "#573B80",
        "DEFAULT": "#432371",
      },
      secondary: {
        "100": "#FEF6F0",
        "200": "#FDEDE1",
        "300": "#FDE4D3",
        "400": "#FCDBC4",
        "500": "#FCD2B5",
        "600": "#FBC9A7",
        "700": "#FBC098",
        "800": "#FAB789",
        "DEFAULT": "#FAAE7B",
      },
      error: {
        "100": "#F9E2E2",
        "200": "#F3C6C6",
        "300": "#EEAAAA",
        "400": "#E88D8D",
        "500": "#E27171",
        "600": "#DD5555",
        "700": "#D73838",
        "800": "#D11C1C",
        "DEFAULT": "#CC0000",
      },
      warning: {
        "100": "#FFF1E2",
        "200": "#FFE4C6",
        "300": "#FFD7AA",
        "400": "#FFCA8D",
        "500": "#FFBC71",
        "600": "#FFAF55",
        "700": "#FFA238",
        "800": "#FF951C",
        "DEFAULT": "#FF8800",
      },
      info: {
        "100": "#E2F3F9",
        "200": "#C6E8F3",
        "300": "#AADDEE",
        "400": "#8DD1E8",
        "500": "#71C6E2",
        "600": "#55BBDD",
        "700": "#38AFD7",
        "800": "#1CA4D1",
        "DEFAULT": "#0099CC",
      },
      success: {
        "100": "#E2F0E8",
        "200": "#C6E2D1",
        "300": "#AAD4BB",
        "400": "#8DC5A4",
        "500": "#71B78D",
        "600": "#55A977",
        "700": "#389A60",
        "800": "#1C8C49",
        "DEFAULT": "#007E33",
      },
      dark: {
        "100": "#E7E3E9",
        "200": "#D0C8D4",
        "300": "#B9ACBF",
        "400": "#A291AA",
        "500": "#8A7594",
        "600": "#735A7F",
        "700": "#5C3E6A",
        "800": "#452355",
        "DEFAULT": "#2E0840",
      },
      light: {
        "100": "#553664",
        "200": "#6A4F77",
        "300": "#7F688A",
        "400": "#94819E",
        "500": "#AA9AB1",
        "600": "#BFB3C4",
        "700": "#D4CCD8",
        "800": "#E9E5EB",
        "DEFAULT": "#FFFFFF",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      "0": "0",
      "none": "none",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "6": "6px",
    },
    borderRadius: {
      "none": "0",
      DEFAULT: "8px",
      "md": "16px",
      "lg": "32px",
      "full": "50%",
    },
  },
};

export default config;
