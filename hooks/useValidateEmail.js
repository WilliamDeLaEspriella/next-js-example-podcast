import { useState } from 'react'
import * as Yup from 'yup'
import { emailValidation } from './util/yupValidations'
export const useValidateEmail = initialValue => {
  const [email, setEmail] = useState('')
  const validationSchema = Yup.object().shape({
    email: emailValidation
  })

  return { value, onChange }
}
