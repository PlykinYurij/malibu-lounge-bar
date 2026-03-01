'use client';

import { SearchProvider } from '../contexts/SearchContext';
import {Hero, Navigation, About, Menu, VipZone, Rules, Contacts} from '@ux';
import { Section } from '@ui';
import '../styles/globals.css';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <SearchProvider>
      <div>
        <Navigation />
        <Hero />
        
        <main className="container">

          <About />
          <Section id="menu" title={t('sections:menu.title')}>
              <Menu />
          </Section>

          <VipZone />
          <Rules />

          <Contacts />
        </main>
        <footer className="container">
          <small>{t('footer.copyright')}</small>
        </footer>
      </div>
    </SearchProvider>
  );
}
