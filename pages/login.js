
import { Component } from 'react'
import FormLogin from '../components/FormLogin'
import { DivLayout, Title } from '../general_styles'
class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <DivLayout>
        <Title>My App Example</Title>
        {children}
      </DivLayout>)
  }
}
const Login = () => (

  <Layout>
    <FormLogin />
  </Layout>

)
export default Login
