import { Form } from 'formik'
import { FiledTextRequired } from '../util/FiledTextRequired'
import { CardFieldset, CardButton } from './styles'

// this for only login include email and password input
export const FormLoginContent = (actions) => {
  return (
    <Form>
      <FiledTextRequired
        actions={actions}
        name='email'
        labelName='Email'
        type='text'
      />

      <FiledTextRequired
        actions={actions}
        name='password'
        labelName='Password'
        type='password'
      />
      <CardFieldset className='form-group'>
        <CardButton type='submit' className='btn btn-primary mr-2'>
            Login
        </CardButton>
      </CardFieldset>
    </Form>
  )
}
