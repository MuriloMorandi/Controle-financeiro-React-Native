import React from 'react';
import { StatusBar } from 'react-native';

import { 
  Container, Header,
  UserWrapper, UserInfo,
  Photo, User,
  UserGreating, UserName,
  Icon
} from './styles';

export const Dashboard: React.FC = () => {
  return(
    <Container>
      
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

    </Container>
  ); 
}
