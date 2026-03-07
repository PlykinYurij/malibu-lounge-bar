import { styled } from '@linaria/react';

export const MenuItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: var(--spacing-xs) 0;
  border-bottom: 1px dashed rgba(255,255,255,0.1);
`;
