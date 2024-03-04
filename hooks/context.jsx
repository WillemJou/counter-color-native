import React from 'react'
import { useState } from 'react'

export const StateContext = React.createContext()

export const ContextProvider = ({ children }) => {
  const [palette, setPalette] = useState([])

  return (
    <StateContext.Provider value={{ palette, setPalette }}>
      {children}
    </StateContext.Provider>
  )
}
