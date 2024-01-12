import { useState } from 'react'
import { randomHexa, randomRgb } from './utils'

export const useChangeColor = () => {
  const [color, setColor] = useState('')
  console.log(color)
  const changeColor = () => {
    return setColor(randomRgb)
  }

  return { color, changeColor }
}
