'use client';

import { SearchProvider } from '../contexts/SearchContext';
import {Hero, Navigation, About} from '@ux';
import Section from '../components/Section';
import MenuCategory from '../components/MenuCategory';
import '../styles/globals.css';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  // Menu items using translations
  const hookahItems = [
    {
      name: t('menu.hookah.classicMix.name'),
      description: t('menu.hookah.classicMix.description'),
      price: t('menu.hookah.classicMix.price'),
      imageUrl: "https://avatars.mds.yandex.net/i?id=1575a9cf43468de034a7075b0ef15071_l-5272510-images-thumbs&n=13"
    },
    {
      name: t('menu.hookah.berryBoom.name'),
      description: t('menu.hookah.berryBoom.description'),
      price: t('menu.hookah.berryBoom.price'),
      imageUrl: "https://avatars.mds.yandex.net/i?id=1575a9cf43468de034a7075b0ef15071_l-5272510-images-thumbs&n=13"
    },
    {
      name: t('menu.hookah.citrusEnergy.name'),
      description: t('menu.hookah.citrusEnergy.description'),
      price: t('menu.hookah.citrusEnergy.price'),
      imageUrl: "https://avatars.mds.yandex.net/i?id=1575a9cf43468de034a7075b0ef15071_l-5272510-images-thumbs&n=13"
    }
  ];

  const drinkItems = [
    {
      name: t('menu.drinks.mojito.name'),
      description: t('menu.drinks.mojito.description'),
      price: t('menu.drinks.mojito.price'),
      imageUrl: "https://avatars.mds.yandex.net/i?id=1575a9cf43468de034a7075b0ef15071_l-5272510-images-thumbs&n=13"
    },
    {
      name: t('menu.drinks.lemonade.name'),
      description: t('menu.drinks.lemonade.description'),
      price: t('menu.drinks.lemonade.price'),
      imageUrl: "https://avatars.mds.yandex.net/i?id=1575a9cf43468de034a7075b0ef15071_l-5272510-images-thumbs&n=13"
    },
    {
      name: t('menu.drinks.tea.name'),
      description: t('menu.drinks.tea.description'),
      price: t('menu.drinks.tea.price'),
      imageUrl: "https://avatars.mds.yandex.net/i?id=1575a9cf43468de034a7075b0ef15071_l-5272510-images-thumbs&n=13"
    }
  ];

  const foodItems = [
    {
      name: t('menu.food.fries.name'),
      description: t('menu.food.fries.description'),
      price: t('menu.food.fries.price'),
      imageUrl: "https://avatars.mds.yandex.net/i?id=1575a9cf43468de034a7075b0ef15071_l-5272510-images-thumbs&n=13"
    },
    {
      name: t('menu.food.wings.name'),
      description: t('menu.food.wings.description'),
      price: t('menu.food.wings.price'),
      imageUrl: "https://avatars.mds.yandex.net/i?id=1575a9cf43468de034a7075b0ef15071_l-5272510-images-thumbs&n=13"
    },
    {
      name: t('menu.food.cheese.name'),
      description: t('menu.food.cheese.description'),
      price: t('menu.food.cheese.price'),
      imageUrl: "https://avatars.mds.yandex.net/i?id=1575a9cf43468de034a7075b0ef15071_l-5272510-images-thumbs&n=13"
    }
  ];

  return (
    <SearchProvider>
      <div>
        <Navigation />
        <Hero />
        <main className="container">

          <About />
          <Section id="menu" title={t('sections.menu.title')} showSearch={true}>
            <MenuCategory
              title={t('menuCategories.hookah')}
              items={hookahItems}
              categoryId="hookah"
            />

            <MenuCategory
              title={t('menuCategories.drinks')}
              items={drinkItems}
              categoryId="drinks"
            />

            <MenuCategory
              title={t('menuCategories.food')}
              items={foodItems}
              categoryId="food"
            />
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
