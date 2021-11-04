import React from 'react';

import {
    Container, Header,
    Title, Icon,
    Content, Amount,
    LastTransaction,
} from './styles';

interface Props {
    type: 'Deposit' | 'Debit' | 'Total';
    amount: string;
    lastTransaction: string;
}

const titleOptions = {
    Deposit: "Entrada",
    Debit: "Saída",
    Total: "Total",
}

const iconsOptions = {
    Deposit: "arrow-up-circle",
    Debit: "arrow-down-circle",
    Total: "dollar-sign",
}

export function Card({ type, amount, lastTransaction }: Props) {
    return (
        <Container type={type}>
            <Header>
                <Title type={type}> {titleOptions[type]}</Title>
                <Icon name={iconsOptions[type]} type={type} />
            </Header>
            <Content>
                <Amount type={type}>
                    {amount}
                </Amount>
                <LastTransaction type={type}>
                    Última operção no dia {lastTransaction}
                </LastTransaction>
            </Content>
        </Container>
    );
}