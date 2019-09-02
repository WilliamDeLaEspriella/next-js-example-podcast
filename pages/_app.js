import React from 'react'
import { DivLayout, Title } from '../general_styles'
import Context from '../modules/context'
import Router from 'next/router'
import App from 'next/app'

class Layout extends React.Component {
  render () {
    const { children } = this.props
    return (
      <DivLayout>
        <Title>My App Example</Title>
        {children}
      </DivLayout>)
  }
}

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount = () => {
    const token = window.localStorage.getItem('token')
    if (token) {
      Context.activateAuth(token)
    } else {
      Router.push('/login')
    }
  };

  render () {
    const { Component, pageProps } = this.props
    return (
      <Context.Provider>
        <Layout>
          <Component {...pageProps} />
          <style jsx global>
            {
          `body {
            margin: 0;
            padding: 0;
          }`
            }
          </style>
        </Layout>
      </Context.Provider>

    )
  }
}
