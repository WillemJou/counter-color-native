import { View, Text, Button } from 'react-native'
import { Counter } from '../layouts/counter'
import { ColorView } from '../layouts/colorView'
import { PalletsBox } from '../layouts/palletsBox'
import { styles } from '../style'
import { useState, useEffect } from 'react'
import { randomRgb } from '../utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ResetButton } from '../components/resetBtn'

export const MainPage = ({ navigation }) => {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('')
  const [colors, setColors] = useState([])

  const changeColor = () => {
    setColor(randomRgb)
  }

  const addOne = () => {
    setCount(count + 1)
  }

  const subOne = () => {
    setCount(count - 1)
  }

  const handleAddColor = () => {
    setColors([...colors, color])
  }

  useEffect(() => {
    const setColorStorage = async () => {
      await AsyncStorage.setItem('color', JSON.stringify(color))
    }
    return setColorStorage
  }, [changeColor])

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
        <ColorView
          color={color}
          colors={colors}
          handleAddColor={handleAddColor}
        />
        <PalletsBox colors={colors} setColors={setColors} />
        <Counter
          count={count}
          color={color}
          addOne={addOne}
          subOne={subOne}
          setCount={setCount}
          changeColor={changeColor}
        />
        <ResetButton setCount={setCount} setColors={setColors} />
      </View>
    </>
  )
}
