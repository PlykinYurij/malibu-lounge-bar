import { css } from '@linaria/core';
import { styled } from '@linaria/react';

export const ContactSectionStyled = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        
    }
`;

export const OpeningHours = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: var(--spacing-xs);
`;
