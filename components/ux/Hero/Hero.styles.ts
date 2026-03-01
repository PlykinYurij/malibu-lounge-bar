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
  font-size: clamp(3rem, 6vw, 4rem);
  color: var(--neon-pink);
  text-shadow: 0 0 25px rgba(255,78,205,.8);
  margin-bottom: var(--spacing-l);

  @keyframes glow {
    from {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px var(--neon-pink), 0 0 20px var(--neon-pink);
    }
    to {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px var(--neon-pink), 0 0 40px var(--neon-pink);
    }
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: var(--text-muted);
`;