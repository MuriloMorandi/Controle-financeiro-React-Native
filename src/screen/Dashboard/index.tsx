import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  Container, Header,
  UserWrapper, UserInfo,
  Photo, User,
  UserGreating, UserName,
  Icon, Cards
} from './styles';

import { Card }  from '../../components/Card';

export const Dashboard: React.FC = () => {
  return(
    <Container>
      <StatusBar
        animated={true}
        />
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri:'https://avatars.githubusercontent.com/u/53803076?s=96&v=4' }}
              />
            <User>
              <UserGreating>Olá</UserGreating>
              
              <UserName>Murilo</UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>
      </Header>

      <Cards>
        <Card type='Deposit' amount='R$ 14.000,00' lastTransaction='25/10/2021'/>
        <Card type='Debit' amount='R$ 1.000,00' lastTransaction='26/10/2021'/>
        <Card type='Total' amount='R$ 13.000,00' lastTransaction='27/10/2021'/>
      </Cards>
    </Container>
  ); 
}
