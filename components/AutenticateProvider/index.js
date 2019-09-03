import React from 'react'
import Context from '../../modules/context'
import dynamic from 'next/dynamic'
import Router from 'next/router'
const Login = dynamic(() => import('../../pages/login'))

export const AutenticateProvider = ({ children, urlOrigin }) => {
  const [token, setToken] = React.useState('')
  React.useEffect(() => {
    setToken(window.localStorage.getItem('token'))
    if (token) return // do nothing if the user is logged in
    Router.replace(urlOrigin, '/login', { shallow: true })
  }, [token])

  return (
    <Context.Consumer>
      {({ isAuth }) => {
        if (isAuth) {
          return children
        } else {
          return <Login />
        }
      }}
    </Context.Consumer>
  )
}
