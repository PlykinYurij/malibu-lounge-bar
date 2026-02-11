# Internationalization (i18n) Documentation

## Overview
This project implements internationalization using a localStorage-based approach instead of locale-specific routes. The selected language is persisted in the browser's localStorage.

## Implementation Details

### Language Context
- Located in: `contexts/LanguageContext.tsx`
- Manages the current language state
- Persists the selected language in localStorage
- Provides a translation function `t(key, namespace?)`

### Translation Files
- Russian translations are located in `locales/ru/`
- Common translations: `locales/ru/common.json`
- Menu translations: `locales/ru/menu.json`

### Components Using Translations
- Navigation (`components/ux/Navbar/Navigation.tsx`)
- Main page (`app/page.tsx`)
- Language switcher (`components/ux/LanguageSwitcher/LanguageSwitcher.tsx`)

## How to Add New Languages

1. Create a new directory in `locales/` with the language code (e.g., `locales/en/`)
2. Copy the structure from the Russian files (`common.json`, `menu.json`, etc.)
3. Translate the content in the new files
4. Update the `translations` object in `contexts/LanguageContext.tsx` to include the new language

## Usage

To use translations in your components:
```tsx
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('sections.about.title')}</h1>
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('ru')}>Русский</button>
    </div>
  );
};
```

## Language Switcher
The language switcher component is available as `@ux/LanguageSwitcher` and can be imported and used in any component.