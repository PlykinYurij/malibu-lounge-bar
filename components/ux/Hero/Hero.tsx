'use client';
import { useTranslation } from 'react-i18next';
import {
  HeroContainer,
  HeroContent,
  HeroSubtitle,
  HeroTitle,
} from './Hero.styles';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroContainer id={'hero'}>
      <HeroContent>
        <HeroTitle>{t('hero:title')}</HeroTitle>
        <HeroSubtitle>{t('hero:subtitle')}</HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};
