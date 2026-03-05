'use client';

import React, { useState } from 'react';
import {Text, Flex, Link} from '@ui';
import { 
  StyledNav, 
  NavLinks, 
  NavButton, 
  NavToggle, 
  Logo, 
  LogoWrapper 
} from './Navigation.styles';
import { useTranslation } from 'react-i18next';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <StyledNav>
      <Flex alignItems='center' gap='2px'>
        <LogoWrapper>
          <Logo src="/malibu-logo.jpg" alt="Malibu Lounge Bar logo"/>
        </LogoWrapper>

        <Text size="xl" bold="bold" color="secondary">Malibu</Text>
      </Flex>
      <NavToggle isOpen={isMenuOpen} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </NavToggle>
      <NavLinks isActive={isMenuOpen} id="navLinks">
        <Link href={'tel:+79277516618'} target={"_blank"}>
          <Text textAlight={"center"} >
            {t('sections:contacts.phone')}
          </Text>
        </Link>
        <NavButton onClick={() => scrollToSection('about')}>{t('navbar:about')}</NavButton>
        <NavButton onClick={() => scrollToSection('menu')}>{t('navbar:menu')}</NavButton>
        <NavButton onClick={() => scrollToSection('rules')}>{t('navbar:rules')}</NavButton>
        <NavButton onClick={() => scrollToSection('contacts')}>{t('navbar:contacts')}</NavButton>
      </NavLinks>
    </StyledNav>
  );
};
