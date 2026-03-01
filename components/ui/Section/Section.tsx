'use client';
import {SectionStyled} from './Section.styles'
import  {Text} from '../Text'
import {ReactNode} from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export const Section = ({ id, title, children, ...rest }: SectionProps & React.ComponentProps<'section'>) => {

  return (
    <SectionStyled id={id} {...rest}>
      <Text textAlight={"center"} size='3xl' bold={'semibold'} color='neon-pink' >{title.toUpperCase()}</Text>
      {children}
    </SectionStyled>
  );
};