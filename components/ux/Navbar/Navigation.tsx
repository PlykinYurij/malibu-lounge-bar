'use client';
import React, {useState} from 'react';
import {Text, Flex, Link} from '@ui';
import {
    StyledNav,
    NavButton,
    NavToggle,
    Logo,
    LogoContainer, LogoWrapper,
} from './Navigation.styles';
import {useTranslation} from 'react-i18next';
import {CloseIcon, MenuIcon} from "@icons";
import {useLockBodyScroll} from '@hooks'

const NAV_LINKS = [
    {id: 'about'},
    {id: 'menu'},
    {id: 'rules'},
    {id: 'contacts'},
]

export const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useLockBodyScroll(isMenuOpen)
    const {t} = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        setIsMenuOpen(false)
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <StyledNav isOpen={isMenuOpen} data-menu-opened={isMenuOpen ? '' : undefined}>
            <Flex justifyContent={"space-between"}>
                <LogoWrapper alignItems='center' gap='s' onClick={() => scrollToSection('hero')}>
                    <LogoContainer>
                        <Logo src="/malibu-logo.jpg" alt="Malibu Lounge Bar logo"/>
                    </LogoContainer>

                    <Text size="xl" bold="bold" color="secondary">Malibu</Text>
                </LogoWrapper>
                <Flex gap='s' alignItems={'center'}>
                    <Link href={'tel:+79277516618'} target={"_blank"}>
                        <Text textAlight={"center"}>
                            {t('sections:contacts.phone')}
                        </Text>
                    </Link>
                    <NavToggle isOpen={isMenuOpen} onClick={toggleMenu}>
                        {isMenuOpen ? <CloseIcon/> : <MenuIcon/>}
                    </NavToggle>
                </Flex>
            </Flex>
            {isMenuOpen && <Flex alignItems={'center'} direction={'column'} gap={'m'}>
                {NAV_LINKS.map(({id}) => <NavButton key={id} onClick={() => scrollToSection(id)}>
                    <Text size={'xl'}>{t(`navbar:${id}`)}</Text>
                </NavButton>)}
            </Flex>}
        </StyledNav>
    );
};
