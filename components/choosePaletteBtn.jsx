import { Pressable, Text } from 'react-native'
import { styles } from '../style'

export const ChoosePaletteButton = (props) => {
  return (
    <Pressable style={styles.button} onPress={() => props.handleAddPalette()}>
      <Text style={styles.text}>Wanna add this Pallette ? </Text>
    </Pressable>
  )
}
