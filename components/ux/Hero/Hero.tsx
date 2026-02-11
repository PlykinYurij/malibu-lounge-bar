
import { useTranslation } from 'react-i18next';
import { HeroContainer, HeroContent, HeroTitle, HeroSubtitle } from './Hero.styles';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>{t('hero:title')}</HeroTitle>
        <HeroSubtitle>{t('hero:subtitle')}</HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};