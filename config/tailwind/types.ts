export type VariantKeyType =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "DEFAULT";

export type ColorValueType = `#${string}`;

export type ColorType = Record<VariantKeyType, ColorValueType>;

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
    borderWidth: {
      DEFAULT: `${number}px`;
      "0": "0";
      "1": `${number}px`;
      "2": `${number}px`;
      "3": `${number}px`;
      "4": `${number}px`;
      "6": `${number}px`;
    };
    borderRadius: {
      none: "0";
      DEFAULT: `${number}px`;
      m: `${number}px`;
      l: `${number}px`;
      full: "50%";
    };
    dropShadow: {
      none: "none";
      s: `0 ${number}px ${number}px 0 #B9ACBF`;
      m: `0 ${number}px ${number}px 0 #B9ACBF`;
      DEFAULT: `0 ${number}px ${number}px 0 #B9ACBF`;
      l: `0 ${number}px ${number}px 0 #B9ACBF`;
      xl: `0 ${number}px ${number}px 0 #B9ACBF`;
    };
  };
};
