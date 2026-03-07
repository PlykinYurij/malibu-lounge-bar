import { useTranslations } from 'next-intl';
import {
  HeroContainer,
  HeroContent,
  HeroSubtitle,
  HeroTitle,
} from './Hero.styles';

export const Hero = () => {
  const t = useTranslations();

  return (
    <HeroContainer id={'hero'}>
      <HeroContent>
        <HeroTitle>{t('hero.title')}</HeroTitle>
        <HeroSubtitle>{t('hero.subtitle')}</HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};
