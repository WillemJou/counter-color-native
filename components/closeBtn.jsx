import { View, Text } from 'react-native'
import { styles } from '../style'

export const CloseButton = (props) => {
  const removeColor = (index) => {
    const list = [...props.item]
    list.splice(index, 1)
    props.setToRemove(list)
  }

  return <Text onPress={() => removeColor(props.index)}>x</Text>
}
