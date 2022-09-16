import React  from 'react';
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

  let divside = {
    position : 'fixed',
    backgroundColor: '#377D71',
    top : 0,
    left : 0,
    width : '70px',
    height : '100%'
  }

  let sidebackground = {
    backgroundColor: '#377D71',
  }

  
  return (
     
    <>
      {['small'].map((expand) => ( 
        <Navbar key={expand} expand='large' className="m-0 p-0 shadow">
          <div style={divside}>
        <Navbar.Toggle className='pt-5 border border-0' aria-controls={`offcanvasNavbar-expand-small`} />
        </div> 
       
          <Container style={mystyle} fluid className="p-3 pb-0 ml-5 pt-0">
            <Navbar.Offcanvas
              aria-labelledby={`offcanvasNavbarLabel-expand-small`}
              placement="start"
              className='border border-0 bg-off opacity-75'
              style={sidebackground}
            >
              <Offcanvas.Header className="m-0 p-0" style={sidebackground}>
              <Offcanvas.Body className='pt-5 m-0 p-1 border border-0' style={sidebackground}>
                <Nav className="justify-content-start">
                  <Nav.Link className="text-opacity-100 ">Dashboard</Nav.Link>
                  <NavDropdown 
                      title="Master Data Management"
                      className='p-0 m-0 border border-0 bg-0'
                      style={sidebackground}
                    > 
                      <NavDropdown.Item style={sidebackground} className="bg-dark text-opacity-100"><Link className='text-opacity-100' to='standart'>
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
            <img className="offset-1" src={logo} alt="logo" height={'80px'}/>
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