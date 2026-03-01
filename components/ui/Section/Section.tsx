'use client';
import {SectionStyled} from './Section.styles'
import  {Text} from '../Text'

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section = ({ id, title, children, ...rest }: SectionProps & React.ComponentProps<'section'>) => {

  return (
    <SectionStyled id={id} {...rest}>
      <Text size='3xl' color='secondary' >{title}</Text>
      {children}
    </SectionStyled>
  );
};