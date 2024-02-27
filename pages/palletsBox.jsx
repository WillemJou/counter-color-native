import { View } from 'react-native'
import { styles } from '../style'

export const PalletsBox = (props) => {
  return (
    <View style={[styles.columnCenterContainer, { flex: 4 }]}>
      {props.colors.map((children, index) => (
        <View
          key={index}
          style={{ width: 300, height: 40, backgroundColor: children }}></View>
      ))}
    </View>
  )
}
