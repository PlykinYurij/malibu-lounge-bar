import { styled } from '@linaria/react';
import { TagVariant, TagSize, TagBorderRadius, StyledTagProps } from './types';

// Define CSS variables for tag colors
export const tagColors = {
  // Primary tag colors (more muted version)
  '--tag-background-primary-default': '#cc3e9e',
  '--tag-background-primary-active': '#a3327e',
  '--tag-background-primary-hover': '#e05fb5',
  
  // Secondary tag colors (more muted version)
  '--tag-background-secondary-default': '#32a8c2',
  '--tag-background-secondary-active': '#28869c',
  '--tag-background-secondary-hover': '#54bad6',
  
  // Accent tag colors (more muted version)
  '--tag-background-accent-default': '#cc6699',
  '--tag-background-accent-active': '#a3527a',
  '--tag-background-accent-hover': '#d68cb4',
  
  // Muted tag colors (using existing text-muted with variations)
  '--tag-background-muted-default': 'var(--text-muted)',
  '--tag-background-muted-active': '#8a8fa0',
  '--tag-background-muted-hover': '#d1d4dd',
  
  // Card tag colors (preserving the good card color)
  '--tag-background-card-default': 'var(--card)',
  '--tag-background-card-active': '#20263d',
  '--tag-background-card-hover': '#2a3047',
};


// Define size mappings
const sizeStyles = {
  xs: 'clamp(0.6rem, 0.8vw, 0.7rem)',
  sm: 'clamp(0.7rem, 0.9vw, 0.8rem)',
  md: 'clamp(0.8rem, 1.0vw, 0.9rem)',
  lg: 'clamp(0.9rem, 1.2vw, 1rem)',
};

// Define padding mappings
const paddingStyles = {
  xs: 'var(--spacing-xs) var(--spacing-s)',
  sm: 'var(--spacing-s) var(--spacing-m)',
  md: 'var(--spacing-m) var(--spacing-l)',
  lg: 'var(--spacing-l) var(--spacing-xl)',
};

// Define border radius mappings
const borderRadiusStyles = {
  none: '0',
  sm: 'var(--spacing-xs)',
  md: 'var(--spacing-s)',
  lg: 'var(--spacing-m)',
  full: '9999px',
};

export const StyledTag = styled.div<StyledTagProps>`
  --tag-background-primary-default: #cc3e9e;
  --tag-background-primary-active: #a3327e;
  --tag-background-primary-hover: #e05fb5;
  
  --tag-background-secondary-default: #32a8c2;
  --tag-background-secondary-active: #28869c;
  --tag-background-secondary-hover: #54bad6;
  
  --tag-background-accent-default: #cc6699;
  --tag-background-accent-active: #a3527a;
  --tag-background-accent-hover: #d68cb4;
  
  --tag-background-muted-default: var(--text-muted);
  --tag-background-muted-active: #8a8fa0;
  --tag-background-muted-hover: #d1d4dd;
  
  --tag-background-card-default: var(--card);
  --tag-background-card-active: #20263d;
  --tag-background-card-hover: #2a3047;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ $size = 'md' }) => paddingStyles[$size]};
  font-size: ${({ $size = 'md' }) => sizeStyles[$size]};
  border-radius: ${({ $borderRadius = 'md' }) => borderRadiusStyles[$borderRadius]};
  background-color: ${({ $variant, $active }) =>
    $active
      ? `var(--tag-background-${$variant}-active)`
      : `var(--tag-background-${$variant}-default)`
  };
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background-color: ${({ $variant }) => `var(--tag-background-${$variant}-hover)`};
  }

  &:focus {
    outline: 2px solid var(--neon-blue);
    outline-offset: 2px;
  }
`;