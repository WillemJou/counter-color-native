import { View } from 'react-native'
import { ChooseColorBtn } from '../components/chooseColorBtn'

export const ColorView = (props) => {
  return (
    <View style={{ flex: 1, gap: 3, flexDirection: 'row' }}>
      <View
        style={{
          flex: 4,
          backgroundColor: props.color,
        }}
      />
      <ChooseColorBtn
        colors={props.colors}
        handleAddColor={props.handleAddColor}
      />
    </View>
  )
}
