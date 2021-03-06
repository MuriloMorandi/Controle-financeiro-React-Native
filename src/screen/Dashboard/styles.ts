import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'

import { Feather } from  '@expo/vector-icons'


export const Container = styled.View`
    flex: 1;
    background-color: ${ ({ theme }) => theme.colors.background };  
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(40)}px;
    
    background-color: ${ ({ theme }) => theme.colors.primary}; 
    flex-direction: row;
    align-items: flex-start;

`;

export const UserWrapper = styled.View`
    width: 100%;
    
    padding: 0px 24px;
    margin-top: 40px;

    flex-direction: row;
    justify-content: space-between ;
    align-items: center;

`;


//#region User infos

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;

    border-radius: 15px;
`;

export const User = styled.View`
    flex-direction: column;

    margin-left: 17px;
    
`;

export const UserGreating = styled.Text`
    color: ${ ({theme} ) => theme.colors.shape };

    font-size: ${RFValue(18)}px;
    font-family: ${ ({theme} ) => theme.fonts.regular };
`;

export const UserName = styled.Text`
    color: ${ ({theme} )=> theme.colors.shape };

    font-size: ${RFValue(18)}px;
    font-family: ${ ({theme} )=> theme.fonts.bold };
`;
//#endregion

//#region Icon Power
export const Icon = styled(Feather)`
    color: ${ ({ theme }) => theme.colors.secondary };
    
    font-size: ${RFValue(24)}px;

`;
//#endregion

export const Cards = styled.ScrollView.attrs({
        horizontal: true,
        showsHorizontalScrollIndicator:false,
        contentContainerStyle:{ paddingHorizontal: 24 },
    })`

    width: 100%;
    position: absolute;

    margin-top: ${RFPercentage(20)}px;
`;


export const Transaction = styled.View`
    flex: 1;
    padding: 0 24px;

    margin-top: ${RFPercentage(12)}px;
`; 

export const TitleList = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${ ({theme} ) => theme.fonts.regular};

    margin-top: 17px;
`;

export const ListTransaction  = styled.FlatList.attrs({
        showsVerticalScrollIndicator: false,

    })`

    width: 100%;
    padding-bottom: 15px;
  
`;