import { View, Text, Button } from 'react-native'
import { Counter } from '../components/counter'
import { ColorView } from '../components/colorView'
import { PalletsBox } from './palletsBox'
import { styles } from '../style'
import { useState, useEffect } from 'react'
import { randomRgb } from '../utils'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const MainPage = ({ navigation }) => {
  const [color, setColor] = useState('')
  const changeColor = () => {
    setColor(randomRgb)
  }
  useEffect(() => {
    const setColorStorage = async () => {
      await AsyncStorage.setItem('color', JSON.stringify(color))
    }
    return setColorStorage
  }, [changeColor])

  const [colors, setColors] = useState([])

  const handleAddColor = () => {
    setColors([...colors, color])
  }
  useEffect(() => {
    const setColorsStorage = async () => {
      await AsyncStorage.setItem('colors', JSON.stringify(colors))
    }
    return setColorsStorage
  }, [handleAddColor])

  return (
    <>
      <View style={[styles.mainContainer, { flex: 1, gap: 50 }]}>
        <View style={[styles.columnCenterContainer, { gap: 15, flex: 1 }]}>
          <Text style={{ fontSize: 18, borderBottomWidth: 1 }}>
            Choose your random pallets by counting and colorize the world 😁
          </Text>
          <Button
            title='See your pallets -->'
            onPress={() => navigation.navigate('Pallets Page')}
          />
        </View>
        <Counter color={color} changeColor={changeColor} />
        <ColorView
          color={color}
          colors={colors}
          handleAddColor={handleAddColor}
        />
        <PalletsBox colors={colors} setColors={setColors} />
      </View>
    </>
  )
}
