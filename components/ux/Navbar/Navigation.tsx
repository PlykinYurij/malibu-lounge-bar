'use client';

import { useState } from 'react';
import { Text, Flex } from '@ui';
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

  // Функция для плавного скролла к секции
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Закрыть мобильное меню после клика
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
        <Text bold={'medium'}>8-927-751-66-18</Text>
        <NavButton onClick={() => scrollToSection('about')}>{t('navbar:about')}</NavButton>
        <NavButton onClick={() => scrollToSection('menu')}>{t('navbar:menu')}</NavButton>
        <NavButton onClick={() => scrollToSection('rules')}>{t('navbar:rules')}</NavButton>
        <NavButton onClick={() => scrollToSection('contacts')}>{t('navbar:contacts')}</NavButton>
      </NavLinks>
    </StyledNav>
  );
};
