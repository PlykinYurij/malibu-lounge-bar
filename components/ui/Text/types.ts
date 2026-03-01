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

// Тип для styled-компонента с долларовыми префиксами
export type StyledTextProps = {
  $size?: TextSize;
  $bold?: TextWeight;
  $italic?: boolean;
  $color?: TextColor;
};