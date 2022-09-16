import * as React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import logo from '../images.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar'

function OffcanvasExample() {
  let mystyle={backgroundColor : '#FFFFFF',
                padding : '0px',
                margin : '0px'}
  return (
    <>
      {['small'].map((expand) => ( 
        <Navbar bg="light" key={expand} expand='large' className="m-0 p-0 w-90 shadow">
          <Container style={mystyle} fluid className="p-3 pb-0 pt-0">
            <Navbar.Toggle className='bg-light ml-3' aria-controls={`offcanvasNavbar-expand-small`} />
            <Navbar.Offcanvas
              aria-labelledby={`offcanvasNavbarLabel-expand-small`}
              placement="start" className="sidenavbar"
            >
              <Offcanvas.Header className="m-0 p-0">
              <Offcanvas.Body className='pt-5 m-0 p-1'>
                <Nav className="justify-content-start">
                  <Nav.Link href="#action1">Dashboard</Nav.Link>
                  <NavDropdown 
                      title="Master Data Management"
                      className='p-0 m-0 outlined'
                    > 
                      <NavDropdown.Item><Link to='standart'>
                        Standart Mark Up</Link></NavDropdown.Item>
                      <NavDropdown.Item>
                      <Link to='fee-type'>
                        Fee Type</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
              </Offcanvas.Body>
              </Offcanvas.Header>
            </Navbar.Offcanvas>
            <img src={logo} alt="logo" height={'80px'}/>
            <i style={{ fontSize: 30 }}className="ms-auto bi bi-bell m-0 p-0" ></i>
            <i style={{ fontSize: 30 }}className="bi bi-question-circle-fill m-1 mr-5 p-0"></i>
            <div className="m-3 border border-grey rounded rounded-circle" >
            <img src='https://via.placeholder.com/150' alt="logo" className="rounded rounded-circle border border-dark mr-3" width={'60px'}/>
            </div>
         
          </Container>
        </Navbar>
      ))}
      
    </>
  );
}

export default OffcanvasExample;