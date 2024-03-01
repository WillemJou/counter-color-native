import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainPage } from './pages/mainPage'
import { PalettesPage } from './pages/palettesPage'

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Counter Color'>
        <Stack.Screen
          options={{
            headerTitleAlign: 'center',
          }}
          name='Counter'
          component={MainPage}
        />
        <Stack.Screen
          name='Palettes Page'
          component={PalettesPage}
          options={{
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
