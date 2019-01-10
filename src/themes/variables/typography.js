import { Platform, Dimensions } from "react-native";

const platform = Platform.OS;

export const defaultTypography = {
  // Font
  fontFamily: platform === "ios" ? "System" : "Roboto",
  //todo: set ios font weight
  titleFontfamily: platform === "ios" ? "System" : "Roboto_medium",
  titleFontSize: 24,
  topBarTitleFontfamily: platform === "ios" ? "System" : "Roboto_regular",
  topBarTitleFontSize: 18,
  cardtitleFontfamily: platform === "ios" ? "System" : "Roboto_medium",
  cardTitleFontSize: 20,
  cardBodyFontfamily: platform === "ios" ? "System" : "Roboto_regular",
  cardBodyFontSize: 14,
  cardActionFontfamily: platform === "ios" ? "System" : "Roboto_medium",
  cardActionFontSize: 13,
  cardCalloutInfoFontfamily: platform === "ios" ? "System" : "Roboto_bold",
  cardCalloutInfoFontSize: 11,
  cardCategoryFontfamily: platform === "ios" ? "System" : "Roboto_regular",
  cardCategoryFontSize: 10,
  cardDetailsFontfamily: platform === "ios" ? "System" : "Roboto_regular",
  cardDetailsFontSize: 10,
  buttonLabelFontfamily: platform === "ios" ? "System" : "Roboto_medium",
  buttonLabelFontSize: 16,
  tabFontfamily: platform === "ios" ? "System" : "Roboto_medium",
  tabFontSize: 16,
  textInputFontfamily: platform === "ios" ? "System" : "Roboto_regular",
  textInputFontSize: 16,
  defaultTextFontfamily: platform === "ios" ? "System" : "Roboto_regular",
  defaultTextFontSize: 15
};

// more typographies can be created here and pass it to the setThemeTypography function to use in the current theme
//
//

export const setThemeTypography = (currentTypography = defaultTypography) => {
  return currentTypography;
};
