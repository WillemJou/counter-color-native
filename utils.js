const randomHexa = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}

export { randomHexa, randomRgb }
