import React, { Component } from 'react'
import { AutenticateProvider } from '../components/AutenticateProvider'
export default class extends Component {
  render () {
    return (
      <AutenticateProvider urlOrigin='/profile'>
        <pre>Check the console ^^</pre>
      </AutenticateProvider>)
  }
}
