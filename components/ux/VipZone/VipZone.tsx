import React from 'react';
import {useTranslation} from "react-i18next";
import {Flex, MenuItem, PhotoCard, PhotoGrid, PhotoImage, Section, SectionContainerContent, Text} from "@ui";
import {VIP_ZONE} from "@data/menu";

const photos = Array.from({length: 3}, (_, i) => `/vip-${i + 1}.jpg`);


export const VipZone = () => {
    const {t} = useTranslation()

    return (
        <Section id="vipZone" title={t('sections:vipZone.title')}>
            <SectionContainerContent>
                <PhotoGrid>
                    {photos.map((photo, index) => (
                        <PhotoCard key={index} className={index === 1 ? "horizontal" : undefined}>
                            <PhotoImage
                                src={photo}
                                alt={`Malibu Lounge Bar photo ${index + 1}`}
                                loading={index < 3 ? "eager" : "lazy"}
                            />
                        </PhotoCard>
                    ))}
                </PhotoGrid>
                <Flex direction={"column"} gap={'xl'}>
                    <Text size={'lg'} bold={'semibold'} color={'secondary'} italic>{t('sections:vipZone.description')}</Text>
                    <Flex direction={"column"} gap={'m'}>
                        {VIP_ZONE.map((item) => <MenuItem key={item.id} {...item}/>)}
                    </Flex>
                </Flex>
            </SectionContainerContent>
        </Section>
    );
};
