'use client';

import { Text } from '../Text';
import { StyledTag } from './Tag.styles';
import type { TagProps } from './types';

export const Tag = ({
  children,
  variant = 'primary',
  size = 'md',
  borderRadius = 'md',
  isActive = false,
  onClick,
  className,
  textColor = 'white',
  ...rest
}: TagProps) => {
  return (
    <StyledTag
      $variant={variant}
      $size={size}
      $borderRadius={borderRadius}
      $active={isActive}
      onClick={onClick}
      className={className}
      {...rest}
    >
      <Text size={size} color={textColor}>
        {children}
      </Text>
    </StyledTag>
  );
};
