import { Styles } from './styles'
import { Field, ErrorMessage } from 'formik'
export const FiledTextRequired = ({ labelName, name, type }) => {
  return (
    <fieldset className='form-group'>
      {/* <label htmlFor={name}>{labelName}</label> */}
      <Field
        className='field_form'
        placeholder={labelName}
        name={name}
        type={type}
      />
      <ErrorMessage
        className='error_message'
        name={name}
        component='div'
      />
      <Styles />
    </fieldset>
  )
}
