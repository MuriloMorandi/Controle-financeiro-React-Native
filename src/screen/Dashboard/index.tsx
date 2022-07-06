import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { 
  Container, Header,
  UserWrapper, UserInfo,
  Photo, User,
  UserGreating, UserName,
  Icon, Cards,
  Transaction, TitleList,
  ListTransaction
} from './styles';

import { Card }  from '../../Components/Card';
import { TransactionCard } from '../../Components/TransactionCard';

export function Dashboard() {
  const DataTransactionCard =[{
    type: 'positive',
    amount:"R$ 12.0000,00",
    category:{
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: "27/10/2021",
    title:"Desenvolvimento de site"
  },
{
    type:'negative',
    amount:"R$ 37.70",
    category:{
      name: 'Alimentação',
      icon: 'coffee',
    },
    date: "28/10/2021",
    title:"Burger King"
  },
{
    type: 'negative',
    amount:"R$ 2.000,00",
    category:{
      name: 'Educação',
      icon: 'book',
    },
    date: "29/10/2021",
    title:"Faculdade"
  }]
  
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

      <Transaction>
        <TitleList>Trasações</TitleList>
        <ListTransaction
          data={DataTransactionCard}
          renderItem={ ({ item })=> <TransactionCard data={item} /> }

          />
          
      </Transaction>
    </Container>


  ); 
}
