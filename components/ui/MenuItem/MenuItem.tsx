import React, {FC} from "react";
import {FoodItem} from "@data/types";
import {Flex} from "../Flex";
import {MenuItemWrapper} from './MenuItem.styles'
import {Text} from "@ui";

export const MenuItem: FC<Omit<FoodItem, 'category'>> = ({name, variants, kind, description, ingredients}) => {
    return <MenuItemWrapper>
        <Flex direction={"column"} gap={'xs'}>
            <Text size="md">{name}</Text>
            {description && <Text italic size={"xs"} color={"secondary"}>{description}</Text>}
            {kind && <Text size={'sm'} color={'lux-red'}>{kind.join(' / ')}</Text>}
            {ingredients && <Text size={'sm'} color={'muted'}>{ingredients}</Text>}
        </Flex>
        <Flex direction={"column"} gap={'xs'} >
            <Text size="sm" bold="bold">
                {variants.map(({
                                   volume,
                                   unit,
                                   price
                               }) => volume && unit ? `${volume} ${unit?.toLowerCase()}/${price}₽` : `${price}₽`)}
            </Text>
        </Flex>

    </MenuItemWrapper>
}