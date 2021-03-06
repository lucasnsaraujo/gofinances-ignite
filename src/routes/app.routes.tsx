import React from 'react'
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons';
import { Dashboard } from '../screens/Dashboard'; 
import { Register } from '../screens/Register';
import theme from '../global/themes/theme';


const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      
    >
      <Screen
       name='Listagem'
       component={Dashboard}
       options={{
         tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88,
         },
         tabBarLabelPosition: 'beside-icon',
         headerShown: false, 
         tabBarActiveTintColor: theme.colors.secondary,
         tabBarInactiveTintColor: theme.colors.text,
         tabBarIcon: ({ size, color }) => (
           <MaterialIcons
            name='format-list-bulleted'
            size={size}
            color={color}
           />

         )
        }}

      />
      <Screen
       name='Cadastrar'
       component={Register}
       options={{
         tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88,
         },
        tabBarLabelPosition: 'beside-icon',
        headerShown: false, 
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons
           name='attach-money'
           size={size}
           color={color}
          />

        )
       }}
      />
      <Screen
       name='Resumo'
       component={Register}
       options={{
         tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88,
         },
        tabBarLabelPosition: 'beside-icon',
        headerShown: false, 
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons
           name='pie-chart'
           size={size}
           color={color}
          />

        )
       }}
      />
    </Navigator>
  )
}