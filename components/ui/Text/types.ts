import type { ComponentProps } from 'react';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type TextWeight =
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold';
export type TextColor =
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'accent'
  | 'neon-pink'
  | 'neon-blue'
  | 'white'
  | 'black'
  | 'lux-red';
export type TextAlight =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify';
export type TextFontFamily = 'main' | 'description';

export interface TextOwnProps {
  size?: TextSize;
  bold?: TextWeight;
  italic?: boolean;
  color?: TextColor;
  textAlight?: TextAlight;
  fontFamily?: TextFontFamily;
}

export type TextProps = TextOwnProps & ComponentProps<'p'>;
