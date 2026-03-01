import React from 'react';
import {useTranslation} from "react-i18next";
import {Flex, MenuItem, Section, Text} from "@ui";
import {VIP_ZONE} from "@data/menu";

export const VipZone = () => {
    const {t} = useTranslation()

    return (
        <Section id="vipZone" title={t('sections:vipZone.title')}>
            <Text>{t('sections:vipZone.description')}</Text>
            <Flex direction={"column"} gap={'m'}>
                {VIP_ZONE.map((item) => <MenuItem key={item.id} {...item}/>)}
            </Flex>
        </Section>
    );
};
