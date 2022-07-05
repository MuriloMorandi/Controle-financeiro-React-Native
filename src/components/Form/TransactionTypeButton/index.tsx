import React from "react";
import { TouchableOpacityProps } from "react-native";
import { TransactionTypeInteface } from "../../../Interfaces/TransactionType.inteface";

import { Container, Icon, Title } from "./styles";

const icons = {
    up: 'arrow-up-circle',
    donw: 'arrow-down-circle'
}


interface Props extends TouchableOpacityProps, TransactionTypeInteface {
    title: string;
    isActive: boolean;
}

export function TransactionTypeButton({ title, type, isActive, ...rest }:Props) {
    return (
        <Container
            isActive={isActive}
            type={type}
            {...rest}
            >
            <Icon
                name={icons[type]}
                type={type}
            />
            <Title>
                {title}
            </Title>
        </Container>
    )
}