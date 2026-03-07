import { styled } from '@linaria/react';
import {
  colorStylesText,
  type TextProps,
  textFontFamilyText,
  weightStylesText,
} from '../Text';

const titleSizeStyles = {
  xs: 'clamp(1.5rem, 2vw, 1.6rem)',
  sm: 'clamp(2rem, 2.5vw, 2.1rem)',
  md: 'clamp(2.5rem, 3vw, 2.6rem)',
  lg: 'clamp(3rem, 3.5vw, 3.1rem)',
  xl: 'clamp(3.5rem, 4vw, 3.6rem)',
  '2xl': 'clamp(4.5rem, 5vw, 4.6rem)',
  '3xl': 'clamp(5.5rem, 6vw, 5.6rem)',
  '4xl': 'clamp(6.5rem, 7vw, 6.6rem)',
};

const StyledTitle = styled.h1<TextProps>`
  font-size: ${({ size = 'md' }) => titleSizeStyles[size]};
  font-weight: ${({ bold = 'bold' }) => weightStylesText[bold]};
  font-style: ${({ italic = false }) => (italic ? 'italic' : 'normal')};
  color: ${({ color = 'lux-red' }) => colorStylesText[color]};
  text-align: ${({ textAlight = 'start' }) => textAlight};
  font-family: ${({ fontFamily = 'main' }) => textFontFamilyText[fontFamily]};
  position: relative;
  display: inline-block;
  white-space: pre-line;
    width: fit-content;

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 30%;
    background: linear-gradient(135deg, #ff0055 0%, #ff3366 100%);
    margin: 0.2em auto 0;
    border-radius: 2px;
  }
`;

export const Title = ({
  children,
  size,
  bold,
  italic,
  color,
  textAlight,
  fontFamily,
  ...rest
}: TextProps) => {
  return (
    <StyledTitle
      size={size}
      bold={bold}
      italic={italic}
      color={color}
      textAlight={textAlight}
      fontFamily={fontFamily}
      {...rest}
    >
      {children}
    </StyledTitle>
  );
};
