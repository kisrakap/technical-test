import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
// import './formikControl.css'
function Input (props) {
  const { label, name, ...rest } = props
  return (
    <div className='form-control border-0'>
      <label className='mr-5 col-3' htmlFor={name}>{label}</label>
      <Field className="col-4 border border-grey rounded" id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Input
