import React, { useContext, useEffect } from 'react'
// import { AutenticateProvider } from '../components/AutenticateProvider'
import { Context } from '../modules/context'
import dynamic from 'next/dynamic'
import Router from 'next/router'
const Login = dynamic(() => import('./login'))

export default () => {
  const { isAuth } = useContext(Context)
  useEffect(() => {
    if (isAuth) {
      Router.replace('/login', '/profile', { shallow: true })
      return
    } // do nothing if the user is logged in
    Router.replace('/profile', '/login', { shallow: true })
  }, [isAuth])
  if (!isAuth) return <Login />
  return <pre>Check the console ^^</pre>
}
