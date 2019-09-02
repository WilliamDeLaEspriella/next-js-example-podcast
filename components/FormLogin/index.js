import { connect } from 'react-redux'
import { Formik } from 'formik'
import { emailValidation, passwordValidation } from '../util/yupValidations'
import * as Yup from 'yup'
import * as userActions from '../../modules/actions/userActions'
import { FormLoginContent } from '../Forms'
import { CardWrapper, FormWraper, CardHeader, CardHeading, CardBody, DivError } from './styles'

const validationSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation
})

export const FormLogin = ({ LoginUser, error }) => {
  return (
    <FormWraper>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Sign in</CardHeading>
        </CardHeader>
        <CardBody>
          {error ? <DivError>{error}</DivError> : null}
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={fields => {
              LoginUser(fields.email, fields.password)
            }}
            render={FormLoginContent}
          />
        </CardBody>
      </CardWrapper>
    </FormWraper>
  )
}
const mapStateToProps = reducers => reducers.userReducers
export default connect(
  mapStateToProps,
  userActions
)(FormLogin)
