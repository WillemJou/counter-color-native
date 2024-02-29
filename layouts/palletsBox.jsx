import { View, Text } from 'react-native'
import { styles } from '../style'

export const PalletsBox = (props) => {
  const removeColor = (index) => {
    const list = [...props.colors]
    list.splice(index, 1)
    props.setColors(list)
  }

  return (
    <View style={[styles.columnCenterContainer, { flex: 4 }]}>
      {props.colors.map((children, index) => (
        <View
          key={index}
          style={{
            flex: 1,
            width: 300,
            height: 40,
            backgroundColor: children,
          }}>
          <Text
            style={[styles.rowEndContainer, { flex: 1 }]}
            onPress={() => removeColor(index)}>
            x
          </Text>
        </View>
      ))}
    </View>
  )
}
