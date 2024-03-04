import AsyncStorage from '@react-native-async-storage/async-storage'

const randomHexa = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}

//Storage
const getColor = async () =>
  JSON.parse((await AsyncStorage.getItem('color')) || '')

const getColors = async () =>
  JSON.parse((await AsyncStorage.getItem('colors')) || '[]')

const clearAsyncStorage = async () => {
  await AsyncStorage.clear()
}

export { randomHexa, randomRgb, getColor, getColors, clearAsyncStorage }
