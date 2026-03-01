'use client';

import React, {FC, useMemo, useState} from 'react';
import {Flex, MenuItem, Tag, Text} from '@ui';
import { styled } from '@linaria/react';
import {MENU as menuData} from '@data/menu'
import {FoodItem} from "@data/types";
import {useTranslation} from "react-i18next";

const setRepeat = (count: number) => {
  if (count === 2) {
    return 2
  }

  if (count >= 3) {
    return 3
  }

  return 1
}

const StyledMenuGrid = styled.div<{count: number}>`
  display: grid;
  grid-template-columns: repeat(${({count}) => setRepeat(count)}, minmax(200px, 1fr));
  gap: var(--spacing-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-m);
  }
`;





const categories = new Set(menuData.map(({category}) => category))

const preparedMenu = menuData.reduce((acc: Record<string, FoodItem[]>, item) => {
  if (!acc[item.category]) {
    acc[item.category] = []
  }

  acc[item.category].push(item)

  return acc
}, {})


export const Menu: FC = () => {
  const {t} = useTranslation()
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null)

  //const filteredMenu = activeCategoryId ? menuData.filter(({category}) => activeCategoryId === category) : menuData

  return (
    <Flex direction='column' gap='xl'>
      {/*<Flex wrap='wrap' gap='xs'>*/}
      {/*  {menuData.map(({id, category}) => <Tag */}
      {/*  key={`tag-${id}`} */}
      {/*  onClick={() => setActiveCategoryId((prev) =>prev === id ? null : id)} */}
      {/*  isActive={id === activeCategoryId} */}
      {/*  variant='card'*/}
      {/*  size='xs'*/}
      {/*  >*/}
      {/*    {category}*/}

      {/*  </Tag>)}*/}
      {/*</Flex>*/}

      {Object.entries(preparedMenu).map(([category, menuItems]) => (
        <div key={category}>
          <Flex justifyContent='center'>
            <Text size="xl" color="muted">{t(`categories:${category}`)}</Text>
          </Flex>

          <StyledMenuGrid count={menuItems.length}>
            {menuItems.map((item) => (
              <MenuItem key={`${item.name}-${item.id}`} {...item} />
            ))}
          </StyledMenuGrid>
        </div>
      ))}
    </Flex>
  );
};