import { styles } from '../style'
import { Pressable, Text } from 'react-native'

export const CounterButton = (props) => {
  return (
    <Pressable
      style={[styles.counterButton, styles.button]}
      onPress={() => {
        props.countFunc(), props.changeColor()
      }}>
      <Text style={styles.text}>{props.sign}</Text>
    </Pressable>
  )
}
