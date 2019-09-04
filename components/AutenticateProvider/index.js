import React from 'react'
import Context from '../../modules/context'
import dynamic from 'next/dynamic'
import Router from 'next/router'
const Login = dynamic(() => import('../../pages/login'))

export const AutenticateProvider = ({ children, urlOrigin }) => {


  return (
    <Context.Consumer>
      {({ isAuth }) => {
        if (isAuth) {
          return children
        } else {
          return (
            <>
              {Router.replace(urlOrigin, '/login', { shallow: true })}
              <Login />
            </>
          )
        }
      }}
    </Context.Consumer>
  )
}
