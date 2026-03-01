import React from 'react';
import { StyledFlex } from './Flex.styles';
import {FlexOwnProps} from './types'

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
