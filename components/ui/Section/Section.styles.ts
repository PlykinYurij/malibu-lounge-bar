import { styled } from '@linaria/react';

export const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-l);
    padding: var(--spacing-xxxl) var(--spacing-xl);
    max-width: 1200px;
    margin: 0 auto;
`;

export const SectionContainerContent = styled.aside`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: var(--spacing-xl);

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;
