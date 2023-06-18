export type VariantKeyType =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "DEFAULT";

export type ColorValueType = `#${string}`;

export type ColorType = Record<VariantKeyType, ColorValueType>;

export type FontTypeType = {
  light: {
    DEFAULT: string[];
    italic: string[];
  };
  DEFAULT: string[];
  italic: string[];
  medium: {
    DEFAULT: string[];
    italic: string[];
  };
  "semi-bold": {
    DEFAULT: string[];
    italic: string[];
  };
  bold: {
    DEFAULT: string[];
    italic: string[];
  };
};

export type ConfigType = {
  content: string[];
  theme: {
    colors: {
      none: "none";
      primary: ColorType;
      secondary: ColorType;
      error: ColorType;
      warning: ColorType;
      info: ColorType;
      success: ColorType;
      dark: ColorType;
      light: ColorType;
    };
    fontSize: {
      xs: `${number}rem`;
      s: `${number}rem`;
      m: `${number}rem`;
      l: `${number}rem`;
      xl: `${number}rem`;
      "2xl": `${number}rem`;
      "3xl": `${number}rem`;
      "4xl": `${number}rem`;
      DEFAULT: `${number}rem`;
    };
    fontFamily: {
      primary: FontTypeType;
      secondary: FontTypeType;
    };
    borderWidth: {
      "0": "0";
      "1": `${number}px`;
      "2": `${number}px`;
      "3": `${number}px`;
      "4": `${number}px`;
      "6": `${number}px`;
      DEFAULT: `${number}px`;
    };
    borderRadius: {
      none: "0";
      xs: `${number}px`;
      s: `${number}px`;
      m: `${number}px`;
      l: `${number}px`;
      full: "50%";
      DEFAULT: `${number}px`;
    };
    dropShadow: {
      none: "none";
      xs: `0 ${number}px ${number}px 0 #B9ACBF`;
      s: `0 ${number}px ${number}px 0 #B9ACBF`;
      m: `0 ${number}px ${number}px 0 #B9ACBF`;
      l: `0 ${number}px ${number}px 0 #B9ACBF`;
      xl: `0 ${number}px ${number}px 0 #B9ACBF`;
      DEFAULT: `0 ${number}px ${number}px 0 #B9ACBF`;
    };
  };
};
