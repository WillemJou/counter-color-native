import { Pressable, Text } from 'react-native'
import { styles } from '../style'

export const ResetButton = (props) => {
  const resetCounter = () => {
    props.setCount(0)
    props.setColors([])
  }
  return (
    <Pressable style={styles.counterButton} onPress={() => resetCounter()}>
      <Text>Reset</Text>
    </Pressable>
  )
}
