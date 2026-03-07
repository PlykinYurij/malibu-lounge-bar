import { SIZES, type Size } from '@consts';
import { styled } from '@linaria/react';
import type { FlexOwnProps } from './types';

export const StyledFlex = styled.div<FlexOwnProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'stretch'};
  gap: ${({ gap }) => (gap && SIZES.includes(gap as Size) ? `var(--spacing-${gap})` : gap || '0')};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
`;
