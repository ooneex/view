import { ConfigType } from "./types.ts";

const config: ConfigType = {
  content: [
    "./components/**/*.tsx",
    "./components/**/definition.ts",
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
        "900": "#432371",
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
        "900": "#FAAE7B",
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
        "900": "#CC0000",
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
        "900": "#FF8800",
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
        "900": "#0099CC",
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
        "900": "#007E33",
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
        "900": "#2E0840",
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
        "900": "#FFFFFF",
        "DEFAULT": "#FFFFFF",
      },
    },
    spacing: {
      none: "0",
      // 8px
      xs: "0.5rem",
      // 12px
      s: "0.75rem",
      // 16px
      m: "1rem",
      // 24px
      l: "1.5rem",
      // 32px
      xl: "2rem",
      // 48px
      "2xl": "3rem",
      // 64px
      "3xl": "4rem",
      // 16px
      DEFAULT: "1rem",
    },
    fontSize: {
      xs: "0.6rem",
      s: "0.8rem",
      m: "1rem",
      l: "1.25rem",
      xl: "1.563rem",
      "2xl": "1.953rem",
      "3xl": "2.441rem",
      "4xl": "3.052rem",
      DEFAULT: "1rem",
    },
    fontFamily: {
      primary: {
        light: {
          DEFAULT: ['"Montserrat Light"'],
          italic: ['"Montserrat Light Italic"'],
        },
        DEFAULT: ['"Montserrat Regular"'],
        italic: ['"Montserrat Regular Italic"'],
        medium: {
          DEFAULT: ['"Montserrat Medium"'],
          italic: ['"Montserrat Medium Italic"'],
        },
        "semi-bold": {
          DEFAULT: ['"Montserrat Semi Bold"'],
          italic: ['"Montserrat Semi Bold Italic"'],
        },
        bold: {
          DEFAULT: ['"Montserrat Bold"'],
          italic: ['"Montserrat Bold Italic"'],
        },
      },
      secondary: {
        light: {
          DEFAULT: ['"MontserratAlternates Light"'],
          italic: ['"MontserratAlternates Light Italic"'],
        },
        DEFAULT: ['"MontserratAlternates Regular"'],
        italic: ['"MontserratAlternates Regular Italic"'],
        medium: {
          DEFAULT: ['"MontserratAlternates Medium"'],
          italic: ['"MontserratAlternates Medium Italic"'],
        },
        "semi-bold": {
          DEFAULT: ['"MontserratAlternates Semi Bold"'],
          italic: ['"MontserratAlternates Semi Bold Italic"'],
        },
        bold: {
          DEFAULT: ['"MontserratAlternates Bold"'],
          italic: ['"MontserratAlternates Bold Italic"'],
        },
      },
    },
    borderWidth: {
      none: "0",
      xs: "1px",
      s: "2px",
      m: "3px",
      l: "4px",
      xl: "6px",
      DEFAULT: "1px",
    },
    borderRadius: {
      none: "0",
      xs: "4px",
      s: "8px",
      m: "16px",
      l: "32px",
      full: "50%",
      DEFAULT: "8px",
    },
    dropShadow: {
      none: "none",
      xs: "0 1px 1px 0 #B9ACBF",
      s: "0 3px 3px 0 #B9ACBF",
      m: "0 6px 6px 0 #B9ACBF",
      l: "0 16px 16px 0 #B9ACBF",
      xl: "0 32px 64px 0 #B9ACBF",
      DEFAULT: "0 6px 6px 0 #B9ACBF",
    },
    extend: {
      gridTemplateColumns: {
        // 240px
        xs: `repeat(auto-fit, minmax(15rem, 1fr))`,
        // 256px
        s: `repeat(auto-fit, minmax(16rem, 1fr))`,
        // 288px
        m: `repeat(auto-fit, minmax(18rem, 1fr))`,
        // 320px
        l: `repeat(auto-fit, minmax(20rem, 1fr))`,
        // 384px
        xl: `repeat(auto-fit, minmax(24rem, 1fr))`,
      },
    },
  },
  plugins: [
    // @ts-ignore: trust me
    require("@tailwindcss/container-queries"),
  ],
};

export default config;
