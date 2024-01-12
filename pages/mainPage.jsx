import { View, Text, Button } from 'react-native'
import { Counter } from '../components/counter'

export const MainPage = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          gap: 15,
        }}>
        <Text style={{ fontSize: 18, borderBottomWidth: 1 }}>
          Choose your random pallets by counting and colorize the world 😁
        </Text>
        <Button
          title='See your pallets -->'
          onPress={() => navigation.navigate('Pallets Page')}
        />
      </View>
      <Counter />
    </>
  )
}
