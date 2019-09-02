import { CardFieldset, CardInput, ErrorInput } from './styles'

export const FiledTextRequired = ({ labelName, name, type }) => {
  return (
    <CardFieldset className='form-group'>
      {/* <label htmlFor={name}>{labelName}</label> */}
      <CardInput
        placeholder={labelName}
        name={name}
        type={type}
      />
      <ErrorInput
        name={name}
        component='div'
      />
    </CardFieldset>
  )
}
