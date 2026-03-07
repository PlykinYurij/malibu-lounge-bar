'use client';

import { MENU as menuData } from '@data/menu';
import type { FoodItem } from '@data/types';
import { styled } from '@linaria/react';
import { Flex, MenuItem, Section, Text } from '@ui';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

const setRepeat = (count: number) => {
  if (count === 2) {
    return 2;
  }

  if (count >= 3) {
    return 3;
  }

  return 1;
};

const StyledMenuGrid = styled.div<{ count: number }>`
  display: grid;
  grid-template-columns: repeat(${({ count }) => setRepeat(count)}, minmax(200px, 1fr));
  gap: var(--spacing-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-m);
  }
`;

const preparedMenu = menuData.reduce(
  (acc: Record<string, FoodItem[]>, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }

    acc[item.category].push(item);

    return acc;
  },
  {},
);

export const Menu: FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="menu" title={t('sections:menu.title')}>
      <Flex direction="column" gap="xl">
        {Object.entries(preparedMenu).map(([category, menuItems]) => (
          <div key={category}>
            <Flex
              justifyContent="center"
              style={{ marginBottom: 'var(--spacing-m)' }}
            >
              <Text size="xl" color="muted">
                {t(`categories:${category}`)}
              </Text>
            </Flex>

            <StyledMenuGrid count={menuItems.length}>
              {menuItems.map((item) => (
                <MenuItem key={`${item.name}-${item.id}`} {...item} />
              ))}
            </StyledMenuGrid>
          </div>
        ))}
      </Flex>
    </Section>
  );
};
