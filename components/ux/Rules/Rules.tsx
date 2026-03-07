import {
  PhotoCard,
  PhotoGrid,
  PhotoImage,
  Section,
  SectionContainerContent,
  Text,
} from '@ui';
import { useTranslations } from 'next-intl';

const photos = Array.from({ length: 3 }, (_, i) => `/rule-${i + 1}.jpg`);

export const Rules = () => {
  const t = useTranslations();
  return (
    <Section id={'rules'} title={t('sections.rules.title')}>
      <SectionContainerContent>
        <Text>{t('sections.rules.description')}</Text>
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
