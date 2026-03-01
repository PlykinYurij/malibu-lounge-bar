import React from 'react';
import {Section, Text} from "@ui";
import {useTranslation} from "react-i18next";

export const Rules = () => {
    const {t} = useTranslation()
    return (
        <Section id={'rules'} title={t('sections:rules.title')}>
            <Text>{t('sections:rules.description')}</Text>
        </Section>
    );
};