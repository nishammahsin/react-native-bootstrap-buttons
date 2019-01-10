import React from "react";
import styled from "styled-components/native";
import theme from "../themes/setTheme";

const ButtonWrapper = styled.TouchableOpacity`
  border-radius: ${props => {
    const {
      rounded,
      full
    } = props;
    return (
      (rounded && theme.scales.button.borderRadiusRounded) ||
      (full && theme.scales.button.borderRadiusFull) ||
      (theme.scales.button.borderRadius)
    )
  }};
  min-width: ${(props) => {
    const {
      small,
      large,
      block,
      full
    } = props;
    return (
      (small && theme.scales.button.minWidthSm ) ||
      (large && theme.scales.button.minWidthDefault ) ||
      (block && theme.scales.button.minWidthFull ) ||
      (full && theme.scales.button.minWidthFull) ||
      (theme.scales.button.minWidthDefault)
    );
  }
  };
  background-color: ${props => {
    const {
      primary,
      secondary,
      success,
      warning,
      danger,
      dark,
      info,
      transparent,
      outline
    } = props;
    return (
      (outline && theme.colors.transparent) ||
      (transparent && theme.colors.transparent) ||
      (primary && theme.colors.primary) ||
      (secondary && theme.colors.secondary) ||
      (success && theme.colors.success) ||
      (warning && theme.colors.warning) ||
      (danger && theme.colors.danger) ||
      (dark && theme.colors.dark) ||
      (info && theme.colors.info) ||
      theme.colors.transparent
    );
  }};
  opacity: ${props => {
    const {
      disabled
    } = props;
    return (disabled && theme.scales.button.disabledOpacity) || 1;
  }};
  border-width: ${props => {
    const { outline } = props;
    return (outline && theme.scales.button.borderWidth) || 0;
  }};
  border-color: ${props => {
    const {
      primary,
      secondary,
      success,
      warning,
      danger,
      dark,
      info,
      transparent,
      outline
    } = props;
    return (
      (outline && primary && theme.colors.primary) ||
      (outline && secondary && theme.colors.secondary) ||
      (outline && success && theme.colors.success) ||
      (outline && warning && theme.colors.warning) ||
      (outline && danger && theme.colors.danger) ||
      (outline && dark && theme.colors.dark) ||
      (outline && info && theme.colors.info) ||
      (outline && theme.colors.primary) ||
      theme.colors.transparent
    );
  }};
  justify-content: space-between;
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
`;

const ButtonText = styled.Text`
  padding: ${
    props => {
      const {
        large,
        small,
        block,
        full
      } = props;
    return (
      (small && theme.scales.button.paddingSm) ||
      (large && theme.scales.button.paddingLg) ||
      (block && theme.scales.button.paddingLg) ||
      (full && theme.scales.button.paddingLg) ||
      (theme.scales.button.paddingDefaultOrSm)
    );
  }
    };
  color: ${props => {
    const {
      primary,
      secondary,
      success,
      warning,
      danger,
      dark,
      info,
      transparent,
      outline
    } = props;
    return (
      ((transparent || outline) && primary && theme.colors.primary) ||
      ((transparent || outline) && secondary && theme.colors.secondary) ||
      ((transparent || outline) && success && theme.colors.success) ||
      ((transparent || outline) && warning && theme.colors.warning) ||
      ((transparent || outline) && danger && theme.colors.danger) ||
      ((transparent || outline) && dark && theme.colors.dark) ||
      ((transparent || outline) && info && theme.colors.info) ||
      (secondary && theme.colors.dark) ||
      (primary && theme.colors.white) ||
      (warning && theme.colors.dark) ||
      (success && theme.colors.white) ||
      (danger && theme.colors.white) ||
      (dark && theme.colors.white) ||
      (info && theme.colors.white) ||
      (transparent && theme.colors.dark) ||
      theme.colors.dark
    );
  }};
  font-size: ${theme.typography.buttonLabelFontSize};
  margin-left: 0;
  margin-right: 0;
`;

const Button = props => {
  return (
    <ButtonWrapper {...props}>
      <ButtonText {...props}> {props.title}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
