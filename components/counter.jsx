import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from '../style'

export const Counter = (props) => {
  const [count, setCount] = useState(0)

  return (
    <View style={[styles.rowCenterContainer, { gap: 9 }]}>
      <Pressable
        style={styles.counterButton}
        onPress={() => {
          setCount(count + 1), props.changeColor()
        }}>
        <Text style={styles.textCounter}>-</Text>
      </Pressable>
      <Pressable
        style={styles.counterButton}
        onPress={() => {
          setCount(count - 1), props.changeColor()
        }}>
        <Text style={styles.textCounter}>+</Text>
      </Pressable>
      <Text style={{ fontSize: 50, color: props.color }}>{count}</Text>
    </View>
  )
}
