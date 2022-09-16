import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../components/FormikControl'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './FeeType.css'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function CreateFeeType () {
  const initialValues = {
    name: '',
    description: '',
    feetypecode: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    feetypecode: Yup.string().required('Required')
  })

  const onSubmit = values => {
    console.log('Form data', values)
  }

  return (
    <div className='bg-light pt-3 FeeType'>
        <Breadcrumb>
          <Breadcrumb.Item active>Master Data Management</Breadcrumb.Item>
          <Breadcrumb.Item active >Fee Type</Breadcrumb.Item>
          <Breadcrumb.Item href="#" >Fee Type</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Create Fee Type</h1> 
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => {
            return (
              <Form > 
                <div className='bg-white rounded p-2 m-3 border border-grey'>
                  <Row className='rounded p-3'>
                    <Col sm="6">
                    <FormikControl
                    control='input'
                    type='text'
                    label='File Type name'
                    name='name'
                  />
                  <FormikControl
                    control='textarea'
                    type='text-area'
                    label='Descriptiom'
                    name='description'
                  />
                    </Col>
                    <Col>
                    <div>
                      <FormikControl
                      control='textarea'
                      type='text-area'
                      label='Fee Type Code'
                      name='feetypcode'
                      />
                    </div>
                    </Col>
                  </Row>

                </div>
                
                <button type='submit' className="border-0 rounded m-3 mt-0" disabled={!formik.isValid}>Submit</button>
              </Form>
            )
          }}
        </Formik>
    </div>
  )
}

export default CreateFeeType
