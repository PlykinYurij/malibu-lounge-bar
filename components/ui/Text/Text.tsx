'use client';

import React from 'react';
import { StyledText } from './Text.styles';

// Определяем типы для пропсов
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
export type TextColor = 'primary' | 'secondary' | 'muted' | 'accent' | 'neon-pink' | 'neon-blue' | 'white' | 'black';

// Определяем пропсы компонента Text, наследуя HTML-атрибуты тега p
export interface TextOwnProps {
  size?: TextSize;
  bold?: TextWeight;
  italic?: boolean;
  color?: TextColor;
}

export type TextProps = TextOwnProps & React.ComponentProps<'p'>;

export const Text = ({ children, size, bold, italic, color, ...rest }: TextProps) => {
  return (
    <StyledText
      $size={size}
      $bold={bold}
      $italic={italic}
      $color={color}
      {...rest}
    >
      {children}
    </StyledText>
  );
};