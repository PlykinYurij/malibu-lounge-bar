import React from 'react'
import { useTranslation } from 'react-i18next';
import { PhotoGrid, PhotoCard, PhotoImage, AboutSection } from './About.styles';
import {Text, Section} from '@ui'

const photos = Array.from({ length: 6 }, (_, i) => `/photo-${i + 1}.jpg`);

export const About = () => {
    const {t} = useTranslation()

  return (
    <Section id="about" title={t('sections:about.title')} className={AboutSection}>
      <Text textAlight={'center'} fontFamily={"description"}>{t('sections:about.description')}</Text>
      <PhotoGrid>
        {photos.map((photo, index) => (
          <PhotoCard key={index}>
            <PhotoImage
              src={photo}
              alt={`Malibu Lounge Bar photo ${index + 1}`}
              loading={index < 3 ? "eager" : "lazy"}
            />
          </PhotoCard>
        ))}
      </PhotoGrid>
    </Section>
  );
};