import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Textarea (props) {
  const { label, name, ...rest } = props
  return (
    <div className='m-0 mb-2 mt-2 p-0 form-control d-flex align-items-center bg-transparent border-0' >
      <label className='col-3' htmlFor={name}>{label}</label>
      <Field  className='col-4 rounded border border-grey w-50' as='textarea' id={name} name={name} {...rest} />
      <ErrorMessage className='text-danger' component={TextError} name={name} />
    </div>
  )
}

export default Textarea
