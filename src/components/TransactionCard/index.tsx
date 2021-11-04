import React from 'react';

import { Container, Title,
  Amount, Fotter,	
  Category, Icon, 
  CategoryName, Date
} from './styles';

interface CategoryProps{
  name: string;
  icon: string;
}

interface Props {
  data: {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: CategoryProps;
    date: string;
  }
};

export function TransactionCard( { data } : Props) {
  return(
    <Container>
        <Title>{data.title}</Title>
        <Amount type={data.type}>
          {data.type === 'negative' && '- '}
          {data.amount}
        </Amount>
        <Fotter>
          <Category>
            <Icon name={data.category.icon}/>
            <CategoryName>{data.category.name}</CategoryName>
          </Category>
          <Date>{data.date}</Date>
        </Fotter>        
    </Container>

  );
}
