import { styled } from '@linaria/react';
import { css } from '@linaria/core';

export const AboutSection = css`
  display: grid;
  gap: var(--spacing-xl);
`;

export const SectionTitle = styled.h2`
//   text-align: center;
//   font-size: clamp(2rem, 4vw, 3rem);
//   color: var(--neon-pink);
//   text-shadow: 0 0 15px rgba(255, 78, 205, 0.6);
//   margin-bottom: var(--spacing-xl);
//   position: relative;

//   &::after {
//     content: '';
//     display: block;
//     width: 100px;
//     height: 3px;
//     background: var(--neon-blue);
//     margin: 10px auto;
//     border-radius: 2px;
//   }
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: var(--spacing-m);
  
  padding: var(--spacing-m) 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
    gap: var(--spacing-s);
    padding: 0 var(--spacing-s);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xs);
  }
`;

export const PhotoCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 4/3;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  background: linear-gradient(145deg, #1a1a2e, #16213e);
  
  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px var(--neon-blue);
    
    &::before {
      opacity: 0.8;
    }
    
    img {
      transform: scale(1.1);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      rgba(255, 78, 205, 0.1), 
      rgba(0, 119, 255, 0.1));
    z-index: 1;
    transition: opacity 0.3s ease;
    opacity: 0.3;
  }
`;

export const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  position: relative;
  z-index: 0;
`;