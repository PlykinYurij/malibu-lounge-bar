import React from 'react';
import { StyledFlex } from './Flex.styles';

interface FlexOwnProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  gap?: string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

export type FlexProps = FlexOwnProps & React.ComponentProps<'div'>;

export const Flex = ({ children, direction, justifyContent, alignItems, gap, wrap, ...rest }: FlexProps) => {
  return (
    <StyledFlex
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      wrap={wrap}
      {...rest}
    >
      {children}
    </StyledFlex>
  );
};
