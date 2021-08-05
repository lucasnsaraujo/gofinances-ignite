import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { 
  Container,
  Category,
  Icon,
} from './styles'

interface Props extends TouchableOpacityProps { 
  title: string;
  onPress: ()=> void;
}

export function CategorySelectButton({ title, onPress }: Props) {

  return (
    <Container onPress={onPress} activeOpacity={0.7}>
      <Category>{title}</Category>
      <Icon name='chevron-down'/>
    </Container>
  )
}