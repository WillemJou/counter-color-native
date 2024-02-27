import { View } from 'react-native'
import { styles } from '../style'

export const PalletsBox = (props) => {
  return (
    <View style={[styles.columnCenterContainer, { width: 100, height: 20 }]}>
      {props.colors.map((children, index) => (
        <View
          key={index}
          style={{ width: 500, height: 20, backgroundColor: children }}></View>
      ))}
    </View>
  )
}
