'use client';
import {SectionStyled} from './Section.styles'
import {Text} from '../Text'
import {ComponentProps, ReactNode} from "react";
import {Title} from "@ui/Title";
import {Flex} from "@ui/Flex";

interface SectionProps {
    id: string;
    title?: string;
    children: ReactNode;
}

export const Section = ({id, title, children, ...rest}: SectionProps & ComponentProps<'section'>) => {

    return (
        <SectionStyled id={id} {...rest}>
            {title && <Flex justifyContent={"center"}><Title
                textAlight={"center"}
                size='sm'
                bold={'normal'}
                color='lux-red'
            >{title.toUpperCase()}</Title></Flex>}

            {children}
        </SectionStyled>
    );
};