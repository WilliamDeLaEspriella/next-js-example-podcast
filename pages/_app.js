import React from 'react'
import Context from '../modules/context'
import { Store } from '../modules/store'
import App from 'next/app'

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  // componentDidMount = () => {
  //   const token = window.localStorage.getItem('token')
  //   if (token) {
  //     Context.activateAuth(token)
  //   }
  //   // else {
  //   //   Router.push('/login')
  //   // }
  // };

  render () {
    const { Component, pageProps } = this.props
    return (
      <Context.Provider>
        <Store>
          <Component {...pageProps} />
          <style jsx global>
            {
          `body {
            margin: 0;
            padding: 0;
          }`
            }
          </style>
        </Store>
      </Context.Provider>

    )
  }
}
