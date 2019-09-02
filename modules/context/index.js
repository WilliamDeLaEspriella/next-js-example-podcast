import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useState(null)

  const value = {
    token,
    setToken,
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      setToken(token)
    },
    removeAuth: () => {
      setIsAuth(false)
      setToken(null)
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
