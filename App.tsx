import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/themes/theme';

import { NavigationContainer } from '@react-navigation/native' 
import { AppRoutes } from './src/routes/app.routes';

import AppLoading from 'expo-app-loading';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  }); // handle if fonts were loaded correctly, if not, splash screen stays

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>
    </ThemeProvider>
  );
}

