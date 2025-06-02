// src/components/SimpleButton/index.jsx
import React from "react"; // Nova linha
import * as S from "./styles";

export default function SimpleButton({
  text,
  onPress,
  colorButton,
  padding,
  margin,
  borderRadius,
  fontColor,
  borderColor,
  fontSize,
  fontWeight,
  width,
  minWidth,
  height,
  disabled = false,
}) {
  return (
    <S.CustomButton
      variant="contained"
      onClick={!disabled ? onPress : undefined}
      $backgroundColor={colorButton}
      $padding={padding}
      $margin={margin}
      $borderRadius={borderRadius}
      $width={width}
      $minWidth={minWidth}
      $height={height}
      disabled={disabled}
      $fontColor={fontColor}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $borderColor={borderColor}
    >
      <S.ButtonText
        $fontColor={fontColor}
        $fontSize={fontSize}
        $fontWeight={fontWeight}
        $disabled={disabled}
      >
        {text}
      </S.ButtonText>
    </S.CustomButton>
  );
}
