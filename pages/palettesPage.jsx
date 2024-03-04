import { View } from 'react-native'
import { styles } from '../style'
import { useContext } from 'react'
import { StateContext } from '../hooks/context'

export const PalettesPage = ({ navigation }) => {
  const { palette, setPalette } = useContext(StateContext)

  return (
    <View style={[styles.columnCenterContainer, { flex: 4 }]}>
      {palette.map((children, index) => (
        <View
          key={index}
          style={{
            flex: 1,
            width: 300,
            height: 40,
            backgroundColor: children,
          }}></View>
      ))}
    </View>
  )
}
