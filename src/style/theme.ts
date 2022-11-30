const fontSizes = {
  sectionTitle: "font-weight:600; font-size:40px; line-height:1.5;",
  title: "font-weight:600; font-size:24px; line-height:1;",
  subTitle: "font-weight:400; font-size:20px; line-height:1.5;",
  body1: "font-weight:400; font-size:16px; line-height:1.5;",
  body2: "font-weight:600; font-size:16px; line-height:1.5;",
  nav1: "font-weight:400; font-size:18px; line-height:1;",
  nav2: "font-weight:600; font-size:18px; line-height:1;",
  small: "font-weight:600; font-size:12px; line-height:1;",
};

const colors = {
  background: {
    light: "#0A042E",
    default: "#070320",
    dark: "#030111",
  },
  main: {
    light: "#E066FF",
    default: "#CC00FF",
    dark: "#F0AD00",
  },
  point: {
    light: "#9DF9FF",
    default: "#1BF1FF",
    dark: "#00CDDA",
  },
  sub: {
    light: "#04062C",
    default: "#010213",
    dark: "#000108",
  },
  system: {
    error: "#D7260D",
    warn: "#FFC84B",
    success: "#65CF55",
    information: "#0091EA",
  },
  grayscale: {
    gray80: "#000000",
    gray60: "#666666",
    gray40: "#BBBBBB",
    gray20: "#EEEEEE",
    gray0: "#FFFFFF",
  },
};

export const theme = {
  fontSizes,
  colors,
};
export type Theme = typeof theme;
