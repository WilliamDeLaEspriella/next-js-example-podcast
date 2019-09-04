
import { Component } from 'react'
import FormLogin from '../components/FormLogin'
import { GeneralStyles } from '../GeneralStyles'
class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='div_layout'>
        <h1 className='h1_layout'>My App Example</h1>
        {children}
        {<GeneralStyles />}
      </div>)
  }
}
const Login = () => (

  <Layout>
    <FormLogin />
  </Layout>

)
export default Login
