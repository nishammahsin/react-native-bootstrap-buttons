import { Platform } from "react-native";

const platform = Platform.OS;

export const defaultColors = {
  // Colors
  primary: "#0052CC",
  secondary: "#EBECF0",
  success: "#36B37E",
  danger: "#FF5630",
  warning: "#FFAB00",
  dark: "#172B4D",
  info: "#6554C0",
  white: "#FFFFFF",
  transparent: "transparent",

  // Container
  containerBgColor: "#FFFFFF"
};

// more color palettes can be created here and pass it to the setThemeColors function
//
//

export const setThemeColors = (currentColors = defaultColors) => {
  return currentColors;
};
