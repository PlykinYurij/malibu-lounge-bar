import React from 'react';
import {Section} from "@ui";
import {useTranslation} from "react-i18next";

export const Contacts = () => {
    const { t } = useTranslation();
    return (
        <Section id="contacts" title={t('sections:contacts.title')}>
            <p>{t('sections:contacts.address')}</p>
            <p>{t('sections:contacts.phone')}</p>
        </Section>
    );
};

export default Contacts;