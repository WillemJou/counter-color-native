import { View } from 'react-native'
import { styles } from '../style'
import { CloseButton } from '../components/closeBtn'

export const PaletteBox = (props) => {
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
          <View style={[styles.rowEndContainer, { flex: 1 }, { padding: 5 }]}>
            <CloseButton
              index={index}
              item={props.colors}
              setToRemove={props.setColors}
            />
          </View>
        </View>
      ))}
    </View>
  )
}
