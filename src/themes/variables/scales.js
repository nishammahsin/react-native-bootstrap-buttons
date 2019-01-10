import { Platform, PixelRatio, getPixelSizeForLayoutSize } from "react-native";

const platform = Platform.OS;

export const defaultScales = {
  button: {
    paddingDefaultOrSm:`${3 * PixelRatio.get()}px ${8 * PixelRatio.get()}px ${3 * PixelRatio.get()}px ${8 * PixelRatio.get()}px`,
    paddingLg:`${5 * PixelRatio.get()}px ${16 * PixelRatio.get()}px ${5 * PixelRatio.get()}px ${16 * PixelRatio.get()}px`,
    paddingSm:`${1.5 * PixelRatio.get()}px ${6 * PixelRatio.get()}px ${1.5 * PixelRatio.get()}px ${6 * PixelRatio.get()}px`,
    borderRadius: "4px",
    borderRadiusRounded: '50px',
    borderRadiusFull: '0',
    borderWidth: "1px",
    minWidthDefault: `${PixelRatio.getPixelSizeForLayoutSize(40)}px`,
    minWidthSm: `${30 * PixelRatio.get()}px`,
    minWidthFull: '100%',
    minWidthBlock: '100%',
    disabledOpacity: '.65'
  }
};

// more scales can be created here and pass it to the setThemeColors function


export const setThemeScales = (currentScales = currentScales) => {
  return currentScales;
};
