import type { TextProps } from '../Text';

// Define tag variant types
export type TagVariant = 'primary' | 'secondary' | 'accent' | 'muted' | 'card';
export type TagSize = 'xs' | 'sm' | 'md' | 'lg';
export type TagBorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

// Define the props for the Tag component
export interface TagOwnProps {
  variant?: TagVariant;
  size?: TagSize;
  borderRadius?: TagBorderRadius;
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  textColor?: TextProps['color'];
}

export type TagProps = TagOwnProps & React.ComponentProps<'div'>;

// Define props for the styled component
export type StyledTagProps = {
  $variant: TagVariant;
  $size: TagSize;
  $borderRadius: TagBorderRadius;
  $active: boolean;
};
