'use client';
import {SectionStyled} from './Section.styles'
import  {Text} from '../Text'

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  showSearch?: boolean;
}

export const Section = ({ id, title, children, showSearch = false, ...rest }: SectionProps & React.ComponentProps<'section'>) => {

  return (
    <SectionStyled id={id} {...rest}>
      <Text size='3xl' color='secondary' >{title}</Text>
      {children}
    </SectionStyled>
  );
};