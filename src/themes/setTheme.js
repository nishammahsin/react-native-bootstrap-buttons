import { defaultColors, setThemeColors } from "./variables/colors";
import { defaultTypography, setThemeTypography } from "./variables/typography";
import { defaultScales, setThemeScales } from "./variables/scales";

const colors = setThemeColors(defaultColors);
const typography = setThemeTypography(defaultTypography);
const scales = setThemeScales(defaultScales);

currentTheme = {
  colors,
  typography,
  scales
};

export default currentTheme;
