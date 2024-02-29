import { View, Text, Pressable } from 'react-native'
import { styles } from '../style'
import { CounterButton } from '../components/counterBtn'

export const Counter = (props) => {
  return (
    <View style={[styles.rowCenterContainer, { flex: 1, gap: 20 }]}>
      <CounterButton
        countFunc={props.subOne}
        setCount={props.setCount}
        changeColor={props.changeColor}
        sign={'-'}
      />
      <CounterButton
        countFunc={props.addOne}
        setCount={props.setCount}
        changeColor={props.changeColor}
        sign={'+'}
      />
      <Text style={{ fontSize: 50, color: props.color }}>{props.count}</Text>
    </View>
  )
}
