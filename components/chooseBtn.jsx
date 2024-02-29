import { Pressable, Text } from 'react-native'
import { styles } from '../style'

export const ChoosBtn = (props) => {
  return (
    <Pressable
      onPress={() => props.handleAddColor(props.colors)}
      style={[styles.chooseButton, styles.button, { flex: 1 }]}>
      <Text style={styles.text}>Choose this color</Text>
    </Pressable>
  )
}
