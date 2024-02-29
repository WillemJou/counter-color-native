import { View } from 'react-native'
import { ChoosBtn } from '../components/chooseBtn'

export const ColorView = (props) => {
  return (
    <View style={{ flex: 1, gap: 3, flexDirection: 'row' }}>
      <ChoosBtn colors={props.colors} handleAddColor={props.handleAddColor} />
      <View
        style={{
          flex: 4,
          backgroundColor: props.color,
        }}
      />
    </View>
  )
}
