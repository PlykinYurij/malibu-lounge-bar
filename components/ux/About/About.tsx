import {
  PhotoCard,
  PhotoGrid,
  PhotoImage,
  Section,
  SectionContainerContent,
  Text,
} from '@ui';
import { useTranslations } from 'next-intl';
import { AboutSection } from './About.styles';

const photos = Array.from({ length: 3 }, (_, i) => `/photo-${i + 1}.jpg`);

export const About = () => {
  const t = useTranslations();

  return (
    <Section
      id="about"
      title={t('sections.about.title')}
      className={AboutSection}
    >
      <SectionContainerContent>
        <Text textAlight={'center'} fontFamily={'description'}>
          {t('sections.about.description')}
        </Text>
        <PhotoGrid>
          {photos.map((photo, index) => (
            <PhotoCard
              // biome-ignore lint/suspicious/noArrayIndexKey: static list
              key={index}
              className={index === 0 ? 'horizontal' : undefined}
            >
              <PhotoImage
                src={photo}
                alt={`Malibu Lounge Bar photo ${index + 1}`}
                loading={index < 3 ? 'eager' : 'lazy'}
              />
            </PhotoCard>
          ))}
        </PhotoGrid>
      </SectionContainerContent>
    </Section>
  );
};
