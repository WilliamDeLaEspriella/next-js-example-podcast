import { Field, ErrorMessage } from 'formik'

export const FiledTextRequired = ({ actions, labelName, name, type }) => {
  const { errors, touched } = actions
  return (
    <div className='form-group'>
      <label htmlFor={name}>{labelName}</label>
      <Field
        name={name}
        type={type}
        className={
          'form-control' +
            (errors[name] && touched[name]
              ? ' is-invalid'
              : '')
        }
      />
      <ErrorMessage
        name={name}
        component='div'
        className='invalid-feedback'
      />
    </div>
  )
}
