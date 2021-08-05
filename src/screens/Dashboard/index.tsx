import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'
import { 
  Container, 
  Header,
  UserInfo,
  Photo, 
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
  LogoutButton
} from './styles'

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title : "Projeto de Desenvolvimento de sistema",
      amount : "R$ 12.000,00",
      category : {name: 'Vendas', icon: 'dollar-sign'},
      date : "13/04/2021",
    },
    {
      id: '2',
      type: 'negative',
      title : "Projeto de Desenvolvimento de sistema",
      amount : "R$ 12.000,00",
      category : {name: 'Vendas', icon: 'dollar-sign'},
      date : "13/04/2021",
    },
    {
      id: '3',
      type: 'negative',
      title : "Projeto de Desenvolvimento de sistema",
      amount : "R$ 12.000,00",
      category : {name: 'Vendas', icon: 'dollar-sign'},
      date : "13/04/2021",
    },
  ]
  

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri : 'https://github.com/lucasnsaraujo.png'}}/>
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Lucas</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={( )=>{ }}>
            <Icon name='power'/>
          </LogoutButton>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard 
          type="up"
          title="Entradas" 
          amount="R$ 17.400,00" 
          lastTransaction="Última entrada dia 13 de abril"
          />
        <HighlightCard 
          type="down"
          title="Saídas" 
          amount="R$ 1.400,00" 
          lastTransaction="Última saída dia 03 de abril"
          />
        <HighlightCard
          type="total" 
          title="Total" 
          amount="R$ 16.000,00" 
          lastTransaction="01 à 16 de abril"
          />
        
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          renderItem={({item}) => <TransactionCard data={item}/>}
          keyExtractor={item => item.id}
        />
      </Transactions>
    </Container>
  )
}
