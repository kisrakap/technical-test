import React, { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row'
import Tabledata from '../components/tabledata'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Stack from 'react-bootstrap/Stack';
import './FeeType.css'
import { Link } from 'react-router-dom';

function FeeType() {
  const [open, setOpen] = useState(false);
  const dataSet = [
    ["1", "Service Fee", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", "Active", "1"],
    ["2", "Service Fee", "Lorem Ipsum has been the industry's standard dummy ", "Active","2" ],
    ["3", "Service Fee", "Lorem Ipsum has been the industry's  1500s", "Active", "3"],
    ["4", "Service Fee", "Lorem Ipsum is simply dummy text of the printing ", "Active", "4"],
    ["5", "Service Fee", "Lorem Ipsum has been the industry's standard dummy text the 1500s", "Active", "5"],
    ["6", "Service Fee", "Lorem Ipsum is simply dummy text Lorem Ipsum has been the industry's standard dummy text ever since", "Active", "6"],
  ]
  return (
    <div className='bg-light pt-3 FeeType'>

        <Breadcrumb>
          <Breadcrumb.Item active >Master Data Management</Breadcrumb.Item>
          <Breadcrumb.Item href='' >Fee Type</Breadcrumb.Item>
          
        </Breadcrumb>
        <h1>Fee Type</h1> 
        <Row className="p-2 mb-3 d-flex align-items-center" style={{alignItems: "center"}}>
          <Stack direction="horizontal" className='d-flex' style={{height: '50px'}}>
          <input className="col-2 p-2 m-2 h-75 rounded border border-grey"></input>
          
          <p className='col-2 m-2 h-100 text-bold'
          onClick={() => setOpen(!open)}
          >
          Advanced Options 
          </p>
          <div className='flex ms-auto rounded rounded-circle align-center'>
          <i className="bi bi-download m-2 p-2 h-100 rounded rounded-circle align-center" style={{ fontSize: 30 }}></i>
          </div>
          {/* <Col className='m-0 p-0 w-5 flex justify-content-end'> */}
          <div className='flex rounded rounded-circle align-center'>
          <i className="bi bi-printer-fill m-2 p-1 h-100 "style={{ fontSize: 25 }}></i>

          </div>
          {/* </Col> */}
          <Button className='m-3 bg-warning border-0'>
            <Link className='text-dark text-decoration-none' to='create-fee-type'> Create New</Link>
          </Button>
     
          </Stack>
        </Row>
        <Row>
        <Collapse in={open} >
        <div id="example-collapse-text">
          <Card body className='m-2 p-2'>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </Card>
        </div>
        </Collapse>
        </Row>
        <Tabledata data={dataSet}></Tabledata>
    </div>

  );
  }
export default FeeType

