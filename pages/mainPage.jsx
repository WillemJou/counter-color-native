import { View, Text, Button } from 'react-native'
import { Counter } from '../components/counter'
import { ColorView } from '../components/colorView'
import { styles } from '../style'
import { useAddColor, useChangeColor } from '../hooks'

export const MainPage = ({ navigation }) => {
  const { color, changeColor } = useChangeColor()
  const { colors, handleAddColor } = useAddColor()

  return (
    <>
      <View style={[styles.rowCenterContainer, { gap: 15 }]}>
        <Text style={{ fontSize: 18, borderBottomWidth: 1 }}>
          Choose your random pallets by counting and colorize the world 😁
        </Text>
        <Button
          title='See your pallets -->'
          onPress={() => navigation.navigate('Pallets Page')}
        />
      </View>
      <Counter color={color} changeColor={changeColor} />

      <ColorView
        color={color}
        colors={colors}
        handleAddColor={handleAddColor}
      />
    </>
  )
}
