import React, {FC, PropsWithChildren} from 'react';
import {CardWrapper} from "./Card.styles";
import {Text} from '@ui'

type CardProps = PropsWithChildren & {
    title: string
}

export const Card: FC<CardProps> = ({title, children}) => {
    return (
        <CardWrapper direction={'column'} alignItems={"center"} gap={'xl'}>
            <Text textAlight={'center'} color={'neon-pink'} size={'2xl'}>
                {title}
            </Text>
            {children}
        </CardWrapper>
    );
};