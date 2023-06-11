export type HexCharType =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "0"
  | "9"
  | "8"
  | "7"
  | "6"
  | "5"
  | "4"
  | "3"
  | "2"
  | "1";
export type ColorKeyType =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "DEFAULT";

export type ColorValueType = `#${HexCharType}`;

export type ColorType = Record<ColorKeyType, `#${string}`>;

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
      "none": "none";
      "2": `${number}px`;
      "3": `${number}px`;
      "4": `${number}px`;
      "6": `${number}px`;
    };
    borderRadius: {
      "none": "0";
      DEFAULT: `${number}px`;
      "md": `${number}px`;
      "lg": `${number}px`;
      "full": "50%";
    };
  };
};
