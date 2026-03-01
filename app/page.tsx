'use client';

import { SearchProvider } from '../contexts/SearchContext';
import {Hero, Navigation, About, Menu} from '@ux';
import { Section } from '@ui';
import menu from '@data/menu.json'
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
              <Menu menuData={menu}/>
          </Section>

          <Section id="rules" title={t('sections.rules.title')}>
            <ul>
              <li>{t('sections.rules.rule1')}</li>
              <li>{t('sections.rules.rule2')}</li>
              <li>{t('sections.rules.rule3')}</li>
            </ul>
          </Section>

          <Section id="contacts" title={t('sections.contacts.title')}>
            <p>{t('sections.contacts.address')}</p>
            <p>{t('sections.contacts.phone')}</p>
            <p>{t('sections.contacts.social')}</p>
          </Section>
        </main>
        <footer className="container">
          <small>{t('footer.copyright')}</small>
        </footer>
      </div>
    </SearchProvider>
  );
}
