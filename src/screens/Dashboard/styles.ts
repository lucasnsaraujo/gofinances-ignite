import styled from 'styled-components/native';
import { FlatList } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import { DataListProps } from '.'
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  background-color: ${({theme}) => theme.colors.primary};

  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const LogoutButton = styled(BorderlessButton)`

`

export const UserWrapper = styled.View`
  width: 100%;

  padding: 0px 24px;

  flex-direction: row;

  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 10px;
  
`;

export const User = styled.View`
  margin-left: 17px ;
`;

export const UserGreeting = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  margin-bottom: ${Platform.OS === 'ios' ? 0 : -8}px;
  margin-top: ${Platform.OS === 'ios' ? 0 : 8}px;
`;

export const UserName = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;

`;

export const Icon = styled(Feather)`
  color: ${({theme})=> theme.colors.secondary};
  font-size: ${RFValue(24)}px;

`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingHorizontal: 24}
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)};
  
`
export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(12)}px;
` 

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-bottom: 16px;
` 

export const TransactionsList = styled(FlatList as new ()=> FlatList<DataListProps>).attrs({
  showsVerticalScrollIndicator:false,
  contentContainerStyle:{paddingBottom: getBottomSpace()}
})` 
`


