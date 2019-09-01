import { connect } from 'react-redux'
import { Formik } from 'formik'
import { emailValidation, passwordValidation } from '../util/yupValidations'
import * as Yup from 'yup'
import * as userActions from '../../redux_components/actions/userActions'
import { FormLoginContent } from '../Forms'

const validationSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation
})

export const FormLogin = ({ LoginUser, error }) => {
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={fields => {
          LoginUser(fields.email, fields.password)
        }}
        render={FormLoginContent}
      />
      {error ? <div>{error}</div> : null}
    </>
  )
}
const mapStateToProps = reducers => reducers.userReducers
export default connect(
  mapStateToProps,
  userActions
)(FormLogin)
