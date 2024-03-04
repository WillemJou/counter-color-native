import { Pressable, Text } from 'react-native'
import { styles } from '../style'
import { clearAsyncStorage } from '../utils'

export const ResetButton = (props) => {
  const resetCounter = () => {
    props.setCount(0)
    props.setColors([])
    clearAsyncStorage()
  }
  return (
    <Pressable
      style={(styles.resetButton, styles.button)}
      onPress={() => resetCounter()}>
      <Text style={styles.text}>Reset</Text>
    </Pressable>
  )
}
