import React, { useState } from 'react'
import { Button } from '../../components/Form/Button'
import { InputForm } from '../../components/Form/InputForm'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native'
import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes
} from './styles'
import { CategorySelect } from '../CategorySelect' 
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'



interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string()
           .required('Nome é obrigatório'),
  amount: Yup.number()
             .required('Digite um valor')
             .typeError('Informe um valor numérico')
             .positive('O valor não pode ser negativo')
})

export function Register() { 

  function handleTransactionTypeSelect(type: 'up'|'down'){
    setTransactionType(type)
  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false)
  }
  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true)
  }
  function handleRegister(form: FormData) {
    if(!transactionType) {
      return Alert.alert('Selecione o tipo da transação')
    }
    if(category.key === 'category') {
      return Alert.alert('Selecione uma categoria')
    }
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(data)
  }

  const [transactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const { control, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)})

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              name='name'
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
              />
            <InputForm
              name='amount'
              control={control}
              placeholder="Preço"
              keyboardType='numeric'
              error={errors.amount && errors.amount.message}
              />
            <TransactionsTypes> 

              <TransactionTypeButton 
                type='up' 
                title='Income' 
                onPress={() => {handleTransactionTypeSelect('up')}}
                isActive={transactionType === 'up'}
                />

              <TransactionTypeButton 
                type='down' 
                title='Outcome' 
                onPress={() => {handleTransactionTypeSelect('down')}}
                isActive={transactionType === 'down'}
                />
            </TransactionsTypes>
            <CategorySelectButton title='Categoria' onPress={handleOpenSelectCategoryModal}/>
          </Fields>
            <Button title="Enviar" onPress={handleSubmit(handleRegister)}/>
        </Form>
        <Modal visible={categoryModalOpen}> 
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
            />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )

}