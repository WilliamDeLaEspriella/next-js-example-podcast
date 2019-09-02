import { useState } from 'react'
export const useLocalStorage = () => {
  const [token, setToken] = useState(window.localStorage.getItem('token'))

  const changeToken = (value) => {
    window.localStorage.setItem('token', value)
    setToken(token)
  }

  const removeToken = (value) => {
    window.localStorage.removeItem('token')
    setToken(null)
  }

  return { token, changeToken, removeToken }
}
