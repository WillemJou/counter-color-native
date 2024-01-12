import { Pressable, View, Text } from 'react-native'
import { styles } from '../style'
import { useChangeColor } from '../hooks'

export const ColorView = (props) => {
  const color = useChangeColor()
  console.log(color)
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Pressable style={[styles.counterButton, { flex: 1 }]}>
        <Text style={styles.textButton}>Choose this color</Text>
      </Pressable>
      <View
        style={{
          flex: 2,
          background: props.color,
        }}
      />
    </View>
  )
}
