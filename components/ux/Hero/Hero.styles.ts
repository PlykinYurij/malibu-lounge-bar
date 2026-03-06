import { styled } from '@linaria/react';

export const HeroContainer = styled.header`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background:
          linear-gradient(to bottom, rgba(0,0,0,.45), rgba(0,0,0,.45)),
          url("/photo-4.jpg") center/cover no-repeat;
`;

export const HeroContent = styled.main`
  max-width: 800px;
  padding: 0 var(--spacing-m);
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: #D71C4B;
  text-shadow: 0 0 25px rgba(215,28,75,0.8);
  margin-bottom: var(--spacing-l);
`;

export const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: var(--text-muted);
`;