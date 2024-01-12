import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 9,
      }}>
      <Pressable
        style={styles.counterButton}
        onPress={() => {
          setCount(count + 1)
        }}>
        <Text style={styles.textButton}>-</Text>
      </Pressable>
      <Pressable
        style={styles.counterButton}
        onPress={() => {
          setCount(count - 1)
        }}>
        <Text style={styles.textButton}>+</Text>
      </Pressable>
      <Text style={{ fontSize: 50, fontWeight: 'bold' }}>{count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  counterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 45,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'rgb(33, 150, 243)',
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
export default Counter
