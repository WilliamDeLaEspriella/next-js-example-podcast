import { useContext } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import { emailValidation, passwordValidation } from '../util/yupValidations'
import * as Yup from 'yup'
import * as userActions from '../../modules/actions/userActions'
import { FormLoginContent } from '../Forms'
import { Styles } from './styles'
import { Context } from '../../modules/context'
const validationSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation
})

export const FormLogin = ({ LoginUser, error }) => {
  const { activateAuth } = useContext(Context)
  return (
    <div className='div__form-wraper'>
      <div className='div_card-wraper'>
        <header>
          <h1>Sign in</h1>
        </header>
        <div className='div__card-body'>
          {error ? <div className='div__error'>{error}</div> : null}
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={fields => {
              LoginUser(fields.email, fields.password, activateAuth)
            }}
            render={FormLoginContent}
          />
          <Styles />
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = reducers => reducers.userReducers
export default connect(
  mapStateToProps,
  userActions
)(FormLogin)
