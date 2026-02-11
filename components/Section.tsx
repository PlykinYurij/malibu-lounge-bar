'use client';

import { useSearch } from '../contexts/SearchContext';


interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  showSearch?: boolean;
}

const Section = ({ id, title, children, showSearch = false, ...rest }: SectionProps & React.ComponentProps<'section'>) => {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <section id={id} {...rest}>
      <h2>{title}</h2>
      {/* {showSearch && (
        <input
          type="text"
          className="search-input"
          placeholder="Поиск по меню..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )} */}
      {children}
    </section>
  );
};

export default Section;