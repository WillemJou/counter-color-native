import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import { randomRgb, getColor, getColors } from './utils'

export const useChangeColor = () => {
  const [color, setColor] = useState(getColor)
  console.log(typeof color)
  const changeColor = () => {
    setColor(randomRgb)
  }

  useEffect(() => {
    const setColorStorage = async () => {
      JSON.parse(await AsyncStorage.setItem('color', JSON.stringify(color)))
    }
    return setColorStorage
  }, [changeColor])

  return { color, changeColor }
}

export const useAddColor = () => {
  const [colors, setColors] = useState(getColors)

  const handleAddColor = () => {
    setColors([...colors])
  }
  useEffect(() => {
    const setColorsStorage = async () => {
      JSON.parse(
        await AsyncStorage.setItem('colors', JSON.stringify(await getColor()))
      )
    }
    return setColorsStorage
  }, [handleAddColor])
  return { colors, handleAddColor }
}
