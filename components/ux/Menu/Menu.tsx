'use client';

import React, { useMemo, useState } from 'react';
import { Flex, Tag, Text } from '@ui';
import { styled } from '@linaria/react';

// Типы для данных меню
interface MenuItem {
  name: string;
  price: number | string;
}

interface MenuCategory {
  id: string;
  category: string;
  items: MenuItem[];
}

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

const StyledMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-xs) 0;
  border-bottom: 1px dashed rgba(255,255,255,0.1);

`;

const StyledDots = styled.span`
  flex-grow: 1;
  overflow: hidden;
  margin: 0 var(--spacing-s);
  
  &::after {
    display: inline-block;
    width: 100%;
    height: 1em;
}
`;


// Интерфейс пропсов компонента
interface MenuProps {
  menuData: MenuCategory[];
}

export const Menu: React.FC<MenuProps> = ({ menuData: menu }) => {
  const menuData = useMemo(() => {
    return menu.concat([{'id': 'alcohol', category: 'Алкогольные напитки', items: [{name: '', price: 0}]}])
  }, [menu])
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null)

  const filteredMenu = activeCategoryId ? menuData.filter(({id}) => activeCategoryId === id) : menuData

  return (
    <Flex direction='column' gap='xl'>
      <Flex wrap='wrap' gap='xs'>
        {menuData.map(({id, category}) => <Tag 
        key={`tag-${id}`} 
        onClick={() => setActiveCategoryId((prev) =>prev === id ? null : id)} 
        isActive={id === activeCategoryId} 
        variant='card'
        size='xs'
        >
          {category}

        </Tag>)}
      </Flex>

      {filteredMenu.map((category) => (
        <div key={category.id}>
          <Flex justifyContent='center'>
            <Text size="xl" color="muted">{category.category}</Text>
      </Flex>

          <StyledMenuGrid count={category.items.length}>
            {category.items.filter(({price}) => !!price.toString().trim()).map((item) => (
              <StyledMenuItem key={`${item.name}-${item.price}`}>
                {category.id === 'alcohol' ? <Text>Наличие и цены уточняйте у бармена</Text> :
                <>
                <Text size="sm" >{item.name}</Text>
                <StyledDots />
                  <Text size="sm" bold="bold">
                    {typeof item.price === 'number' ? `${item.price}₽` : item.price}
                  </Text>
                  </>
                 }
              </StyledMenuItem>
            ))}
          </StyledMenuGrid>
        </div>
      ))}
    </Flex>
  );
};