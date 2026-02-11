'use client';

import { useSearch } from '../contexts/SearchContext';
import MenuItem from './MenuItem';

interface MenuItemData {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

interface MenuCategoryProps {
  title: string;
  items: MenuItemData[];
  categoryId: string;
}

const MenuCategory = ({ title, items, categoryId }: MenuCategoryProps) => {
  const { searchTerm } = useSearch();

  // Фильтрация элементов на основе поискового запроса
  const filteredItems = items.filter(item => {
    if (!searchTerm) return true;

    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(lowerSearchTerm) ||
      item.description.toLowerCase().includes(lowerSearchTerm) ||
      item.price.toLowerCase().includes(lowerSearchTerm)
    );
  });

  return (
    <div className="menu-category" id={categoryId}>
      <div className="menu-title">{title}</div>
      <div className="menu-grid">
        {filteredItems.map((item, index) => (
          <MenuItem
            key={`${categoryId}-${index}`}
            name={item.name}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;