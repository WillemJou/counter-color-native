import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainPage } from './pages/mainPage'
import { PalettesPage } from './pages/palettesPage'
import { ContextProvider } from './hooks/context'

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <ContextProvider>
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
      </ContextProvider>
    </NavigationContainer>
  )
}

export default App
