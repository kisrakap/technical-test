import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
// import './formikControl.css'
function Input (props) {
  const { label, name, ...rest } = props
  return (
    <div className='border-0 d-flex align-items-center m-0 mb-2 mt-2 p-0 bg-transparent p-0 m-0'>
      <label className='col-3 rounded' htmlFor={name}>{label}</label>
      <Field className="col-4 border border-grey rounded w-50" id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Input
