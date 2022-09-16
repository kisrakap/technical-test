import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../components/FormikControl'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './FeeType.css'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';


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
    <div className='bg-light p-3 FeeType'>
        <Breadcrumb>
          <Breadcrumb.Item active>Master Data Management</Breadcrumb.Item>
          <Breadcrumb.Item active >Fee Type</Breadcrumb.Item>
          <Breadcrumb.Item href="#" >Fee Type</Breadcrumb.Item>
        </Breadcrumb>
        <h2>Create Fee Type</h2> 
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {formik => {
            return (
              <Form > 
                <div className='bg-white rounded p-5 m-3 border border-grey'>
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
                    type='text'
                    label='Descriptiom'
                    name='description'
                  />
                    </Col>
                    <Col >
                    <div className='rounded bg-light align-items-start p-5'>
                      <h3>For Internal Porpuse</h3>
                      <FormikControl
                      control='textarea'
                      type='text'
                      label='Descriptiom'
                      name='feetypecode'
                    />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <h3>Translation </h3>
                    <hr className="solid p-5 m-0"></hr>
                  </Row>
                  {/* <Row>
                    <Col>
                      <Button>Indonesia</Button>
                      <Button>Chinesse Simplified</Button>
                    </Col>
                    <Col>
                    <div class="card w-75">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        
                      </div>
                    </div></Col>

                  </Row> */}
                </div>
                <button type='submit' className="border-0 rounded m-3 mt-0" disabled={!formik.isValid}>Submit</button>
                <div> {formik.isValid}</div>
              </Form>
            )
          }}
        </Formik>
    </div>
  )
}

export default CreateFeeType
