import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from '../style'

export const Counter = (props) => {
  return (
    <View style={[styles.rowCenterContainer, { flex: 1, gap: 9 }]}>
      <Pressable
        style={styles.counterButton}
        onPress={() => {
          props.setCount(props.count + 1), props.changeColor()
        }}>
        <Text style={styles.textCounter}>-</Text>
      </Pressable>
      <Pressable
        style={styles.counterButton}
        onPress={() => {
          props.setCount(props.count - 1), props.changeColor()
        }}>
        <Text style={styles.textCounter}>+</Text>
      </Pressable>
      <Text style={{ fontSize: 50, color: props.color }}>{props.count}</Text>
    </View>
  )
}
