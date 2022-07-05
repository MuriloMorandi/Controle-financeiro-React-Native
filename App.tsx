import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';

import {
  useFonts, Poppins_400Regular,
  Poppins_500Medium, Poppins_700Bold
} from '@expo-google-fonts/poppins'

import { Dashboard } from './src/screen/Dashboard';
import { Register } from './src/screen/Register';

import theme  from './src/Global/Styles/theme'

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
      <Dashboard/>
    </ThemeProvider>
  );
}
