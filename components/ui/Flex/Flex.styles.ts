import { styled } from '@linaria/react';

interface FlexOwnProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  gap?: string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

export const StyledFlex = styled.div<FlexOwnProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
  gap: ${props => props.gap || '0'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
`;