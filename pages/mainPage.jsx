import { View, Text, Button } from 'react-native'

export const MainPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Choose your random pallets by counting and colorize the world 😁
      </Text>
      <Button
        title='See your pallets -->'
        onPress={() => navigation.navigate('Pallets Page')}
      />
    </View>
  )
}
