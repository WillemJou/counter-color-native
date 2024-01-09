import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainPage } from './pages/mainPage'
import { PalletsPage } from './pages/palletsPage'

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Counter Color'>
        <Stack.Screen name='Counter Color' component={MainPage} />
        <Stack.Screen name='Pallets Page' component={PalletsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
