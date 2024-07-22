import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
  import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function NavBar() {
  return (
    <Container fluid className='g-0'>
      <Container>
        <Row>
          <Col>
            <Navbar expand="lg" className="py-3">
              <Container fluid className='p-0'>
                <Navbar.Brand href="#"> <Link to='/' className='text-dark text-decoration-none'> <h2 className='fw-bold'>  Yummy <span className='Real-color'>.</span> </h2> </Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Link className='text-decoration-none' to='/'> <Nav.Link className='mx-2 fw-medium' href="#action1">Home</Nav.Link> </Link>
                    <Link className='text-decoration-none' to='/About'> <Nav.Link className='mx-2 fw-medium' href="#action2">About</Nav.Link> </Link>
                    <Link className='text-decoration-none' to='/Menu'> <Nav.Link className='mx-2 fw-medium' href="#action3">Menu</Nav.Link> </Link>
                    <Link className='text-decoration-none' to='/Events'> <Nav.Link className='mx-2 fw-medium' href="#action4">Events</Nav.Link> </Link>
                    <Link className='text-decoration-none' to='/Chefs'> <Nav.Link className='mx-2 fw-medium' href="#action5">Chefs</Nav.Link> </Link>
                    <Link className='text-decoration-none' to='/Gallery'> <Nav.Link className='mx-2 fw-medium' href="#action6">Gallery</Nav.Link> </Link>
                    <Link className='text-decoration-none' to='/Contact'> <Nav.Link className='mx-2 fw-medium' href="#action7">Contact</Nav.Link> </Link>
                  </Nav>
                  <Form className="d-flex justify-content-center mt-lg-auto mt-md-3 mt-sm-3">
                    <Link to='/Booktable'> <Button className="Real border-0 rounded-pill px-4"> Book Table </Button> </Link>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default NavBar;
