import React from 'react';
import { StyledText } from './Text.styles';
import { TextProps } from './types';

export const Text = ({ children, size, bold, italic, color, textAlight, fontFamily, ...rest }: TextProps) => {
  return (
    <StyledText
      size={size}
      bold={bold}
      italic={italic}
      color={color}
      textAlight={textAlight}
      fontFamily={fontFamily}
      {...rest}
    >
      {children}
    </StyledText>
  );
};