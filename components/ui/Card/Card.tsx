import React, {FC, PropsWithChildren} from 'react';
import {CardWrapper} from "./Card.styles";
import {Text, Title} from '@ui'

type CardProps = PropsWithChildren & {
    title: string
}

export const Card: FC<CardProps> = ({title, children}) => {
    return (
        <CardWrapper direction={'column'} alignItems={"center"} gap={'xl'}>
            <Title textAlight={'center'} color={'lux-red'} size={"xs"}>
                {title}
            </Title>
            {children}
        </CardWrapper>
    );
};