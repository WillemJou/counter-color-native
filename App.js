import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainPage } from './pages/mainPage'
import { PalletsPage } from './pages/palletsPage'

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Counter Color'>
        <Stack.Screen
          options={{
            headerTitleAlign: 'center',
          }}
          name='Counter Color'
          component={MainPage}
        />
        <Stack.Screen
          name='Pallets Page'
          component={PalletsPage}
          options={{
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
