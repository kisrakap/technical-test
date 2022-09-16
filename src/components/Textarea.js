import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Textarea (props) {
  const { label, name, ...rest } = props
  return (
    <div className='form-control d-flex align-items-center border-0' >
      <label className=' mr-5 col-3' htmlFor={name}>{label}</label>
      <Field  className='col-4 rounded border border-grey' as='textarea' id={name} name={name} {...rest} />
      <ErrorMessage className='text-danger' component={TextError} name={name} />
    </div>
  )
}

export default Textarea
