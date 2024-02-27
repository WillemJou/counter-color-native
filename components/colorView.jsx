import { Pressable, View, Text } from 'react-native'
import { styles } from '../style'

export const ColorView = (props) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', padding: '2rem' }}>
      <Pressable
        onPress={() => props.handleAddColor(props.colors)}
        style={[styles.counterButton, { flex: 1 }]}>
        <Text style={styles.textChooseBtn}>Choose this color</Text>
      </Pressable>
      <View
        style={{
          flex: 2,
          backgroundColor: props.color,
        }}
      />
    </View>
  )
}
