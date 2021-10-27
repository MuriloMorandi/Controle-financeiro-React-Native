import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'

import { Feather } from  '@expo/vector-icons'


export const Container = styled.View`
    flex: 1;
    align-items: center;

    background-color: ${ ({ theme }) => theme.colors.background };  
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(40)}px;
    
    background-color: ${ ({ theme }) => theme.colors.primary}; 
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;
    
    padding: 0px 24px;

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

    font-size: ${RFValue(18)};
    font-family: ${ ({theme} ) => theme.fonts.regular };
`;

export const UserName = styled.Text`
    color: ${ ({theme} )=> theme.colors.shape };

    font-size: ${RFValue(18)};
    font-family: ${ ({theme} )=> theme.fonts.bold };
`;
//#endregion

//#region Icon Power
export const Icon = styled(Feather)`
    color: ${ ({ theme }) => theme.colors.secondary };
    
    font-size: ${RFValue(24)}px;

`;
//#endregion