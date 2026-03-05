import React, {Fragment} from 'react';
import {Card, Flex, Link, Section, Text} from "@ui";
import {useTranslation} from "react-i18next";
import {ContactSectionStyled, OpeningHours} from "./Contacts.styles";
import {IconVK} from '@icons'
import {OPENING_HOURS} from "@data/menu";

export const Contacts = () => {
    const {t} = useTranslation();
    return (
        <Section id="contacts" className={ContactSectionStyled}>
            <Card title={t('sections:contacts.title')}>
                <Flex direction={"column"} gap={'m'}>
                    <Link href={'tel:+79277516618'} target={"_blank"}>
                        <Text textAlight={"center"}>
                            {t('sections:contacts.phone')}
                        </Text>
                    </Link>
                    <Link href={'https://vk.com/malibu_tlt'} target={"_blank"}>
                        <Flex gap={'s'}>
                            <IconVK/>
                            <Text textAlight={"center"}>
                                {t('sections:contacts.vk')}
                            </Text>
                        </Flex>

                    </Link>
                </Flex>
            </Card>

            <Card title={t('sections:contacts.place')}>
                <Flex direction={"column"} gap={'m'}>
                    <Link href={'https://go.2gis.com/vBynG'} target={"_blank"}>
                        <Text textAlight={"center"}>
                            {t('sections:contacts.address')}
                        </Text>
                    </Link>
                </Flex>
            </Card>

            <Card title={t('sections:contacts.openingHours')}>
                <OpeningHours>
                    {OPENING_HOURS.map(({day, time}) =>
                        <Fragment key={day}>
                            <Text>
                                {day}
                            </Text>
                            <Text textAlight={'end'}>
                                {time}
                            </Text>
                        </Fragment>)}
                </OpeningHours>
            </Card>
        </Section>
    );
};

export default Contacts;