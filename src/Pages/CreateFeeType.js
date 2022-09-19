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
                    <div className='rounded bg-secondary align-items-start p-3'>
                      <h3>For Internal Porpuse</h3>
                      <FormikControl
                      control='input'
                      type='text'
                      label='Fee Type Code'
                      name='feetypecode'
                    />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <h3>Translation </h3>
                    <hr className="solid p-5 m-0"></hr>
                  </Row>
                  <Row>
                    <Col className='col-3 m-0 p-0'> 
                      <Row className='mb-1 pb-1 ml-1 pl-1'>
                      <Button className='bg-tranparent text-dark border-right-0 border bg-transparent'>Indonesia</Button>
                      </Row>
                      <Row className='ml-1  pl-1 '>
                      <Button className='bg-transparent text-dark border border-right-0'>Chinesse Simplified</Button>
                      </Row>
                    </Col>
                    <Col className='col-9 m-0 p-0 d-block' >
                    <div class="card w-100 h-100 m-0 p-0">
                      <div class="card-body w-100 h-100">
                        <Form>
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
                        </Form>
                        
                      </div>
                    </div></Col>

                  </Row>
                </div>
                <button type='submit' className="border-0 rounded m-2 mr-1 mt-0" disabled={!formik.isValid}>Submit</button>
                <button className="border-dark bg-transparent rounded m-2 mt-0"> Cancel </button>
                <div> {formik.isValid}</div>
              </Form>
            )
          }}
        </Formik>
    </div>
  )
}

export default CreateFeeType
