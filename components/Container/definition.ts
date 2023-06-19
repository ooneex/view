// deno-lint-ignore no-explicit-any
export const definition: Record<string, any> = {
  border: {
    none: "border-none",
    variant: {
      primary: { normal: "border-primary", light: "border-primary-400" },
      secondary: {
        normal: "border-secondary",
        light: "border-secondary-400",
      },
      error: { normal: "border-error", light: "border-error-400" },
      warning: { normal: "border-warning", light: "border-warning-400" },
      info: { normal: "border-info", light: "border-info-400" },
      success: { normal: "border-success", light: "border-success-400" },
      dark: { normal: "border-dark", light: "border-dark-400" },
      light: { normal: "border-light", light: "border-light-400" },
    },
    size: {
      none: "border-none",
      xs: "border-xs",
      s: "border-s",
      m: "border-m",
      l: "border-l",
      xl: "border-xl",
    },
  },
  radius: {
    full: "rounded-full",
    none: "rounded-none",
    all: {
      l: "rounded-l",
      m: "rounded-m",
      s: "rounded-s",
      xs: "rounded-xs",
    },
    top: {
      l: "rounded-t-l",
      m: "rounded-t-m",
      s: "rounded-t-s",
      xs: "rounded-t-xs",
    },
    right: {
      l: "rounded-r-l",
      m: "rounded-r-m",
      s: "rounded-r-s",
      xs: "rounded-r-xs",
    },
    bottom: {
      l: "rounded-b-l",
      m: "rounded-b-m",
      s: "rounded-b-s",
      xs: "rounded-b-xs",
    },
    left: {
      l: "rounded-l-l",
      m: "rounded-l-m",
      s: "rounded-l-s",
      xs: "rounded-l-xs",
    },
  },
  shadow: {
    none: "drop-shadow-none",
    xs: "drop-shadow-xs",
    s: "drop-shadow-s",
    m: "drop-shadow-m",
    l: "drop-shadow-l",
    xl: "drop-shadow-xl",
  },
  bgc: {
    none: "bg-none",
    primary: {
      "100": "bg-primary-100",
      "200": "bg-primary-200",
      "300": "bg-primary-300",
      "400": "bg-primary-400",
      "500": "bg-primary-500",
      "600": "bg-primary-600",
      "700": "bg-primary-700",
      "800": "bg-primary-800",
      "900": "bg-primary-900",
    },
    secondary: {
      "100": "bg-secondary-100",
      "200": "bg-secondary-200",
      "300": "bg-secondary-300",
      "400": "bg-secondary-400",
      "500": "bg-secondary-500",
      "600": "bg-secondary-600",
      "700": "bg-secondary-700",
      "800": "bg-secondary-800",
      "900": "bg-secondary-900",
    },
    error: {
      "100": "bg-error-100",
      "200": "bg-error-200",
      "300": "bg-error-300",
      "400": "bg-error-400",
      "500": "bg-error-500",
      "600": "bg-error-600",
      "700": "bg-error-700",
      "800": "bg-error-800",
      "900": "bg-error-900",
    },
    warning: {
      "100": "bg-warning-100",
      "200": "bg-warning-200",
      "300": "bg-warning-300",
      "400": "bg-warning-400",
      "500": "bg-warning-500",
      "600": "bg-warning-600",
      "700": "bg-warning-700",
      "800": "bg-warning-800",
      "900": "bg-warning-900",
    },
    info: {
      "100": "bg-info-100",
      "200": "bg-info-200",
      "300": "bg-info-300",
      "400": "bg-info-400",
      "500": "bg-info-500",
      "600": "bg-info-600",
      "700": "bg-info-700",
      "800": "bg-info-800",
      "900": "bg-info-900",
    },
    success: {
      "100": "bg-success-100",
      "200": "bg-success-200",
      "300": "bg-success-300",
      "400": "bg-success-400",
      "500": "bg-success-500",
      "600": "bg-success-600",
      "700": "bg-success-700",
      "800": "bg-success-800",
      "900": "bg-success-900",
    },
    dark: {
      "100": "bg-dark-100",
      "200": "bg-dark-200",
      "300": "bg-dark-300",
      "400": "bg-dark-400",
      "500": "bg-dark-500",
      "600": "bg-dark-600",
      "700": "bg-dark-700",
      "800": "bg-dark-800",
      "900": "bg-dark-900",
    },
    light: {
      "100": "bg-light-100",
      "200": "bg-light-200",
      "300": "bg-light-300",
      "400": "bg-light-400",
      "500": "bg-light-500",
      "600": "bg-light-600",
      "700": "bg-light-700",
      "800": "bg-light-800",
      "900": "bg-light-900",
    },
  },
  spacing: {
    none: "p-none",
    xs: "p-xs",
    s: "p-s",
    m: "p-m",
    l: "p-l",
    xl: "p-xl",
    "2xl": "p-2xl",
    "3xl": "p-3xl",
    "4xl": "p-4xl",
    y: {
      none: "py-none",
      xs: "py-xs",
      s: "py-s",
      m: "py-m",
      l: "py-l",
      xl: "py-xl",
      "2xl": "py-2xl",
      "3xl": "py-3xl",
      "4xl": "py-4xl",
    },
    x: {
      none: "px-none",
      xs: "px-xs",
      s: "px-s",
      m: "px-m",
      l: "px-l",
      xl: "px-xl",
      "2xl": "px-2xl",
      "3xl": "px-3xl",
      "4xl": "px-4xl",
    },
    top: {
      none: "pt-none",
      xs: "pt-xs",
      s: "pt-s",
      m: "pt-m",
      l: "pt-l",
      xl: "pt-xl",
      "2xl": "pt-2xl",
      "3xl": "pt-3xl",
      "4xl": "pt-4xl",
    },
    right: {
      none: "pr-none",
      xs: "pr-xs",
      s: "pr-s",
      m: "pr-m",
      l: "pr-l",
      xl: "pr-xl",
      "2xl": "pr-2xl",
      "3xl": "pr-3xl",
      "4xl": "pr-4xl",
    },
    bottom: {
      none: "pb-none",
      xs: "pb-xs",
      s: "pb-s",
      m: "pb-m",
      l: "pb-l",
      xl: "pb-xl",
      "2xl": "pb-2xl",
      "3xl": "pb-3xl",
      "4xl": "pb-4xl",
    },
    left: {
      none: "pl-none",
      xs: "pl-xs",
      s: "pl-s",
      m: "pl-m",
      l: "pl-l",
      xl: "pl-xl",
      "2xl": "pl-2xl",
      "3xl": "pl-3xl",
      "4xl": "pl-4xl",
    },
  },
};
