import React from 'react'
import {useTranslation} from 'react-i18next';
import {AboutSection} from './About.styles';
import {Text, Section, PhotoGrid, PhotoCard, PhotoImage, SectionContainerContent} from '@ui'

const photos = Array.from({length: 3}, (_, i) => `/photo-${i + 1}.jpg`);

export const About = () => {
    const {t} = useTranslation()

    return (
        <Section id="about" title={t('sections:about.title')} className={AboutSection}>
            <SectionContainerContent>
                <Text textAlight={'center'} fontFamily={"description"}>{t('sections:about.description')}</Text>
                <PhotoGrid>
                    {photos.map((photo, index) => (
                        <PhotoCard key={index} className={index === 0 ? "horizontal" : undefined}>
                            <PhotoImage
                                src={photo}
                                alt={`Malibu Lounge Bar photo ${index + 1}`}
                                loading={index < 3 ? "eager" : "lazy"}
                            />
                        </PhotoCard>
                    ))}
                </PhotoGrid>
            </SectionContainerContent>
        </Section>
    );
};