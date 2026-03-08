import { styled } from '@linaria/react';

export const RuleContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    width: fit-content;
    gap: var(--spacing-m);
    align-items: center;
    
    @media (max-width: 768px) {
        grid-template-columns: auto auto;
    }
`;
