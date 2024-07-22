import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { BsClipboard2Data } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { BsInboxes } from "react-icons/bs";

function RedCard() {
  return (
    <Container fluid className='g-0 section-bg py-5'>
      <Container>
        <Row className='align-items-lg-center align-content-start'>
          <Col className='col-lg-4 col-md-6 col-sm-12 my-4 my-sm-2'>
            <div className='Real p-4'>
              <div className='text-white py-2'>
                <h1> Why Choose Yummy? </h1>
              </div>
              <div className='text-white py-2'>
                <p> Yummy Restaurant is known for its high-quality, flavorful dishes made from fresh ingredients. The menu offers a wide variety of options to suit different tastes and dietary preferences.The restaurant often has special deals and promotions, allowing diners to enjoy their favorite meals at discounted prices.</p>
              </div>
              <div className='py-2 text-center'>
                <button className='Red-Card-btn px-4 py-2 border-0 text-white'> Learn More </button>
              </div>
            </div>
          </Col>
          <Col className='col-lg-8 col-md-6 col-sm-12 col-12'>
            <Row>
              <Col className='col-lg-4 col-sm-12 gy-sm-4 col-12 my-sm-2 my-2'>
                <Card className='p-3 h-100 border-0 Card-Zoom'>
                  <Card.Body>
                    <div className='mx-auto rounded-circle text-center Red-Card-circle mb-4'>
                      <BsClipboard2Data className='Real-color fs-2' />
                    </div>
                    <Card.Title className='text-center mb-4'>Corporis voluptates officia eiusmod</Card.Title>
                    <Card.Text className='text-center mb-2 opacity-75'>
                      on sequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi aliquip
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='col-lg-4 col-sm-12 gy-sm-4 col-12 my-sm-2 my-2'>
                <Card className='p-3 h-100 border-0 Card-Zoom'>
                  <Card.Body>
                    <div className='mx-auto rounded-circle text-center Red-Card-circle mb-4'>
                      <IoDiamondOutline className='Real-color fs-2' />
                    </div>
                    <Card.Title className='text-center mb-4'>Ullamco laboris ladore pan</Card.Title>
                    <Card.Text className='text-center mb-2 opacity-75'>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='col-lg-4 col-sm-12 gy-sm-4 col-12 my-sm-2 my-2'>
                <Card className='p-3 h-100 border-0 Card-Zoom'>
                  <Card.Body>
                    <div className='mx-auto rounded-circle text-center Red-Card-circle mb-4'>
                      <BsInboxes className='Real-color fs-2' />
                    </div>
                    <Card.Title className='text-center mb-4'>Labore consequatur incidid dolore</Card.Title>
                    <Card.Text className='text-center mb-2 opacity-75'>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default RedCard;
