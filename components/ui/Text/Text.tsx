import { StyledText } from './Text.styles';
import type { TextProps } from './types';

export const Text = ({
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
