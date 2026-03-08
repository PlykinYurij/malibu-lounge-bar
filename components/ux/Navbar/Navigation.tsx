'use client';
import { useLockBodyScroll } from '@hooks';
import { CloseIcon, MenuIcon } from '@icons';
import { Flex, Link, Text } from '@ui';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import {
  Logo,
  LogoContainer,
  LogoWrapper,
  NavButton,
  NavToggle,
  StyledNav,
} from './Navigation.styles';

const NAV_LINKS = [
  { id: 'about' },
  { id: 'menu' },
  { id: 'vipZone' },
  { id: 'rules' },
  { id: 'contacts' },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useLockBodyScroll(isMenuOpen);
  const t = useTranslations();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      /** size navbar*/
      const offset = 50;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  return (
    <StyledNav
      isOpen={isMenuOpen}
      data-menu-opened={isMenuOpen ? '' : undefined}
    >
      <Flex justifyContent={'space-between'}>
        <LogoWrapper
          alignItems="center"
          gap="s"
          onClick={() => scrollToSection('hero')}
        >
          <LogoContainer>
            <Logo src="/malibu-logo.jpg" alt="Malibu Lounge Bar logo" />
          </LogoContainer>

          <Text size="xl" bold="bold" color="secondary">
            Malibu
          </Text>
        </LogoWrapper>
        <Flex gap="s" alignItems={'center'}>
          <Link href={'tel:+79277516618'} target={'_blank'}>
            <Text textAlight={'center'}>{t('sections.contacts.phone')}</Text>
          </Link>
          <NavToggle isOpen={isMenuOpen} onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </NavToggle>
        </Flex>
      </Flex>
      {isMenuOpen && (
        <Flex alignItems={'center'} direction={'column'} gap={'m'}>
          {NAV_LINKS.map(({ id }) => (
            <NavButton key={id} onClick={() => scrollToSection(id)}>
              <Text size={'xl'} fontFamily={'description'}>
                {t(`navbar.${id}`)}
              </Text>
            </NavButton>
          ))}
        </Flex>
      )}
    </StyledNav>
  );
};
