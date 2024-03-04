import { View, Text, Button } from 'react-native'
import { Counter } from '../layouts/counter'
import { ColorView } from '../layouts/colorView'
import { PaletteBox } from '../layouts/paletteBox'
import { styles } from '../style'
import { useState, useEffect, useContext } from 'react'
import { randomRgb } from '../utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ResetButton } from '../components/resetBtn'
import { ChoosePaletteButton } from '../components/choosePaletteBtn'
import { StateContext } from '../hooks/context'

export const MainPage = ({ navigation }) => {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('')
  const [colors, setColors] = useState([])
  const { palette, setPalette } = useContext(StateContext)
  console.log(palette)

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

  const handleAddPalette = () => {
    setPalette([...palette, ...colors])
    setCount(0)
    setColors([])
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
            Choose your random palettes by counting and colorize the world 😁
          </Text>
          <Button
            title='See your palettes -->'
            onPress={() => navigation.navigate('Palettes Page')}
          />
        </View>
        {colors.length > 2 ? (
          <ChoosePaletteButton handleAddPalette={handleAddPalette} />
        ) : null}
        <PaletteBox colors={colors} setColors={setColors} />
        <ColorView
          color={color}
          colors={colors}
          handleAddColor={handleAddColor}
        />
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
