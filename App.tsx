import React from 'react';

import { Dashboard } from './src/screens/Dashboard';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/themes/theme'

import AppLoading from 'expo-app-loading'

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  }); // handle if fonts were loaded correctly, if not, splash screen stays

  if (!fontsLoaded) {
    <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard/>
    </ThemeProvider>
  );
}

