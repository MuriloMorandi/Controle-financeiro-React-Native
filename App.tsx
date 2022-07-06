import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts, Poppins_400Regular,
  Poppins_500Medium, Poppins_700Bold
} from '@expo-google-fonts/poppins'

import { Dashboard } from './src/Screen/Dashboard';
import { Register } from './src/Screen/Register';

import theme  from './src/Global/Styles/theme'
import { AppRoutes } from './src/Routes/app.routes';

export default function App() {
  const [ fontsLoaded ] = useFonts(
    {
      Poppins_400Regular, Poppins_500Medium,
      Poppins_700Bold
    });
    
    if(!fontsLoaded){
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
