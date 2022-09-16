import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadcumbs() {
  return (
    <Breadcrumb className='p-0 m-0'>
      <Breadcrumb.Item href="#">Master Data Management</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Fee Type</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Breadcumbs;