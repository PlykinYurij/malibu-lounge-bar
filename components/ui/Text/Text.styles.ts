import { styled } from '@linaria/react';
import { TextProps } from './types';

// Маппинг размеров текста
const sizeStyles = {
  xs: 'clamp(0.75rem, 0.8vw, 0.8rem)',
  sm: 'clamp(0.875rem, 1vw, 0.9rem)',
  md: 'clamp(1rem, 1.2vw, 1rem)',
  lg: 'clamp(1.125rem, 1.4vw, 1.1rem)',
  xl: 'clamp(1.25rem, 1.6vw, 1.2rem)',
  '2xl': 'clamp(1.5rem, 2vw, 1.5rem)',
  '3xl': 'clamp(1.875rem, 2.5vw, 1.8rem)',
  '4xl': 'clamp(2.25rem, 3vw, 2.2rem)',
};

// Маппинг жирности текста
const weightStyles = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

// Маппинг цветов текста
const colorStyles = {
  primary: 'var(--text-main)',
  secondary: '#c7cbda',
  muted: 'rgba(199, 203, 218, 0.6)',
  accent: 'var(--section-title)',
  'neon-pink': 'var(--neon-pink)',
  'neon-blue': 'var(--neon-blue)',
  white: '#ffffff',
  black: '#000000',
};

export const StyledText = styled.p<TextProps>`
  font-size: ${({ size = 'md' }) => sizeStyles[size!]};
  font-weight: ${({ bold = 'normal' }) => weightStyles[bold!]};
  font-style: ${({ italic = false }) => italic ? 'italic' : 'normal'};
  color: ${({ color = 'primary' }) => colorStyles[color!]};
  text-align: ${({ textAlight = 'start' }) => textAlight};
  white-space: pre-line;
  margin: 0;
  padding: 0;
`;