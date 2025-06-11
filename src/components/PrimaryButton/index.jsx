import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.bg || '#024959'};
  color: ${(props) => props.color || '#FCFCFC'};
  border: ${(props) => props.border || 'none'};
  padding: ${(props) => props.padding || '0px'};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || '600'};
  border-radius: ${(props) => props.borderRadius || '6px'};
  cursor: pointer;
  width: ${(props) => `${props.width}px` || 'auto'};
  transition: all 0.2s ease;
  height: 40px;
  &:hover {
    background-color: ${(props) => props.hoverBg || props.bg || '#006064'};
    color: ${(props) => props.hoverColor || props.color || '#fff'};
  }
`;

export default function PrimaryButton({
  children,
  bg,
  color,
  border,
  padding,
  fontSize,
  fontWeight,
  borderRadius,
  width,
  hoverBg,
  hoverColor,
  ...rest
}) {
  return (
    <Button
      bg={bg}
      color={color}
      border={border}
      padding={padding}
      fontSize={fontSize}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      width={width}
      hoverBg={hoverBg}
      hoverColor={hoverColor}
      {...rest}
    >
      {children}
    </Button>
  );
}
