import { Flex } from '@ui/Flex';
import { Title } from '@ui/Title';
import type { ComponentProps, ReactNode } from 'react';
import { SectionStyled } from './Section.styles';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
}

export const Section = ({
  id,
  title,
  children,
  ...rest
}: SectionProps & ComponentProps<'section'>) => {
  return (
    <SectionStyled id={id} {...rest}>
      {title && (
        <Flex justifyContent={'center'}>
          <Title
            textAlight={'center'}
            size="sm"
            bold={'normal'}
            color="lux-red"
          >
            {title.toUpperCase()}
          </Title>
        </Flex>
      )}

      {children}
    </SectionStyled>
  );
};
