import React from 'react'
import { DivLayout, Title } from '../general_styles'
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
  render () {
    const { Component, pageProps } = this.props
    return (
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

    )
  }
}
