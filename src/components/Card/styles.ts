import styled, { css } from "styled-components/native";

import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps{
    type: 'Deposit' | 'Debit' | 'Total';
}

export const Container = styled.View<TypeProps>`
    background-color: ${ ({ theme, type} ) => type === 'Total' ? theme.colors.secondary: theme.colors.shape };
    
    width: ${RFValue(300)}px;
    border-radius: 5px;
    
    padding: 19px 23px ${RFValue(42)}px;
    margin-right: 16px;

    ${({type})=> type === 'Total' && css`
        color:${ ({ theme}) => theme.colors.shape};
    `};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
    font-family:  ${ ({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;  

    ${({type})=> type === 'Deposit' && css`
        color:${ ({ theme }) => theme.colors.success};
    `};

    ${({type})=> type === 'Debit' && css`
        color:${ ({ theme }) => theme.colors.attention};
    `};
    
    ${({type})=> type === 'Total' && css`
        color:${ ({ theme}) => theme.colors.shape};
    `};
`;

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(42)}px;

    ${({type})=> type === 'Deposit' && css`
        color:${ ({ theme }) => theme.colors.success};
    `};

    ${({type})=> type === 'Debit' && css`
        color:${ ({ theme }) => theme.colors.attention};
    `};
    
    ${({type})=> type === 'Total' && css`
        color:${ ({ theme}) => theme.colors.shape};
    `};

`;

export const Content = styled.View`

`;

export const Amount = styled.Text`
    font-family:  ${ ({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;

    color: ${ ({ theme, type} ) => type === 'Total' ? theme.colors.shape : theme.colors.text };
`;

export const LastTransaction = styled.Text`
    font-family:  ${ ({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;  

    color: ${ ({ theme, type} ) => type === 'Total' ? theme.colors.shape : theme.colors.subText };
`;
