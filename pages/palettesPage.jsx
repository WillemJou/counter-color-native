import { View, Text } from 'react-native'
import { styles } from '../style'
import { useContext } from 'react'
import { StateContext } from '../hooks/context'
import { CloseButton } from '../components/closeBtn'

export const PalettesPage = ({ navigation }) => {
  const { palette, setPalette } = useContext(StateContext)

  return (
    <View style={[styles.mainContainer, { flex: 4, gap: 20 }]}>
      {palette.map((children, index) => (
        <View
          style={{
            flex: 5,
            borderWidth: 1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          key={index}>
          <View
            style={[
              styles.rowCenterContainer,
              { flex: 0.2, justifyContent: 'space-between' },
              { padding: 5 },
            ]}>
            <Text>Palette {index + 1}</Text>
            <CloseButton
              index={index}
              item={palette}
              setToRemove={setPalette}
            />
          </View>
          {children.map((individualColor, index) => (
            <View
              key={index}
              style={{
                flex: 1,
                backgroundColor: individualColor,
              }}></View>
          ))}
        </View>
      ))}
    </View>
  )
}
